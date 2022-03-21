import { ApolloQueryResult } from "@apollo/client";
import { get } from "lodash";
import { BuildQuery, IntrospectionResult } from 'ra-data-graphql';
import { CREATE, DELETE, GET_LIST, GET_MANY, GET_MANY_REFERENCE, GET_ONE, UPDATE } from 'react-admin';
import overridenQueries from '../queries';
import ISheet from "../types/sheet.types";
import IUser from "../types/user.types";
import { cleanGQLinput } from "../utils/cleanGLinput";

const enhanceBuildQuery = (buildQuery: { (introspectionResults: IntrospectionResult): BuildQuery }) => (introspectionResults: IntrospectionResult) => (
  fetchType: string,
  resourceName: string,
  params: any,
) => {
  const query = get(overridenQueries, `${resourceName}.${fetchType}`);
  const builtQuery = buildQuery(introspectionResults)(
    fetchType,
    resourceName,
    params,
  );

  if (query && fetchType === CREATE) {
    return {
      ...builtQuery,
      query,
      variables: {
        count: params.data.count
      },
      parseResponse: (response: ApolloQueryResult<any>) => {
        const data = response.data.data.response.map((item: ISheet) => ({ ...item, id: item._id }));

        // TODO: data return type must be a single record, but in reality we have multiple records
        // in response of our custom creation resolver. However, a `createMany` request does not exists.
        // Is it possible to develop one in order to shape the return type of data we want?
        return {
          data: { ...data, id: data[0]._id },
        };
      }
    };
  }

  if (query && fetchType === DELETE) {
    return {
      ...builtQuery,
      query,
      variables: {
        id: params.id,
      },
      parseResponse: (response: ApolloQueryResult<any>) => {
        const data =
        response?.data?.deleteUser?.response
          || response?.data?.deleteSheet?.response; //TODO Oskour

        return {
          data: { id: data._id },
        };
      }
    };
  }

  if (query && (fetchType === GET_LIST || fetchType === GET_MANY || fetchType === GET_MANY_REFERENCE))
    return {
      ...builtQuery,
      query,
      variables: {
        options: {
          // TODO: Make our API filter option accepts multiple key/value pairs to perform a filter action
          // on multiple fields in the Document.
          filter: {
            field: Object.keys(params.filter)[0],
            value: params.filter[Object.keys(params.filter)[0]],
          },
          pagination: {
            page: params.pagination.page,
            limit: params.pagination.perPage,
          },
          sort: {
            field: params.sort.field,
            order: params.sort.order,
          }
        }
      },
      parseResponse: (response: ApolloQueryResult<any>) => {
        const data = response.data.data.response.items.map((item: ISheet | IUser) => ({ ...item, id: item._id }));
        const total = response.data.data.response.totalItems;

        return {
          data,
          total,
        };
      }
    };

  if (query && fetchType === GET_ONE)
    return {
      ...builtQuery,
      query,
      variables: {
        id: params.id
      },
      parseResponse: (response: ApolloQueryResult<any>) => {
        const data = response.data.data.response;

        return {
          data: { id: data._id, ...data },
        };
      }
    };

  if (query && fetchType === UPDATE) {
    return {
      ...builtQuery,
      query,
      variables: {
        updateInput: {
          id: params.id,
          changes: cleanGQLinput(params.data, ['__typename', '_id', 'id', 'user', 'createdAt', 'updatedAt', ]),
        }
      },
      parseResponse: (response: ApolloQueryResult<any>) => {
        const data = response.data.data.response;

        return {
          data: { id: data._id, ...data },
        };
      }
    };
  }


  return builtQuery;
};

export { enhanceBuildQuery };
