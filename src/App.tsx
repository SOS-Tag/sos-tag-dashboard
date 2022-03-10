import get from 'lodash/get';
import { BuildQuery, IntrospectionResult } from 'ra-data-graphql';
import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple';
import { useEffect, useState } from 'react';
import { Admin, DataProvider, GET_LIST, GET_MANY, GET_MANY_REFERENCE, LegacyDataProvider, Resource } from "react-admin";
import { SheetList } from './components/Sheets';
import { UserList } from './components/Users';
import overridenQueries from './queries';

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

  console.log(params);

  if (query && (fetchType === GET_LIST || fetchType === GET_MANY || fetchType === GET_MANY_REFERENCE))
    return {
      ...builtQuery,
      query,
      variables: {
        options: {
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
      parseResponse: (response: any) => {
        const data =  response.data.data.response.items.map((item: any) => ({ ...item, id: item._id })); 
        const total = response.data.data.response.totalItems;

        return {
          data,
          total,
      };
      }
    };

  return builtQuery;
};

const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | LegacyDataProvider | null>(null);
    useEffect(() => {
      const onMount = async () => {
        const provider = await buildGraphQLProvider({
          clientOptions: { uri: 'http://localhost:8080/graphql', credentials: 'include' },
          buildQuery: enhanceBuildQuery(buildQuery),
        })
  
        setDataProvider(provider)
      }
  
      onMount()
  
      return () => {}
    }, []);

    if (!dataProvider) {
        return <div>Loading </div>;
    }

  return (
    <Admin title={'SOS-Tag administrator panel'} dataProvider={dataProvider}>
      <Resource name="Sheet" list={SheetList} />
      <Resource name="User" list={UserList} />
    </Admin>
  )
};


export default App;
