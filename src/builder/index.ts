import { ApolloQueryResult } from "@apollo/client";
import { get } from "lodash";
import { BuildQuery, IntrospectionResult } from 'ra-data-graphql';
import { GET_LIST, GET_MANY, GET_MANY_REFERENCE, GET_ONE, UPDATE } from 'react-admin';
import overridenQueries from '../queries';
import { withoutProperties } from "../utils/object";

const forbiddenUpdateData = ['_id', 'id', '__typename'];

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
        const data =  response.data.data.response.items.map((item: any) => ({ ...item, id: item._id })); 
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
        const data =  response.data.data.response;

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
          changes: withoutProperties(params.data, forbiddenUpdateData),
        }
      },
      parseResponse: (response: ApolloQueryResult<any>) => {
        const data = response.data.data.response;

        return {
          data: {id: data._id, ...data},
        };
      }
    };
  }


  return builtQuery;
};

export { enhanceBuildQuery };
