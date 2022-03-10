import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple';
import * as React from "react";
import { Admin, DataProvider, GET_LIST, GET_MANY, GET_MANY_REFERENCE, LegacyDataProvider, Resource } from "react-admin";
import { SheetList } from './Sheets';
import get from 'lodash/get';
import overridenQueries from './queries';
import { useEffect } from 'react';
import { paginate } from './utils/paginate';

const enhanceBuildQuery = (buildQuery: any) => (introspectionResults: any) => (
  fetchType: string,
  resourceName: string,
  params: any
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
      parseResponse: (response: any) => {
        const items =  response.data.data.response.map((item: any) => ({ ...item, id: item._id }));  
        return paginate(items, params.pagination.page, params.pagination.perPage);
      }
    };

  return builtQuery;
};

const App = () => {
  const [dataProvider, setDataProvider] = React.useState<DataProvider | LegacyDataProvider | null>(null);
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
    </Admin>
  )
};


export default App;
