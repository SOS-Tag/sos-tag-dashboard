import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple';
import * as React from "react";
import { useEffect, useState } from 'react';
import { Admin, DataProvider, LegacyDataProvider, Resource } from "react-admin";
import { enhanceBuildQuery } from './builder';
// import authProvider from './providers/auth'
import CircularIndeterminate from './components/CircularIndeterminate';
import sheetActions from './modules/sheets';
import userActions from './modules/users';

const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | LegacyDataProvider | null>(null);
    useEffect(() => {

      const onMount = async () => {
        // await sleep(80000);
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
        return <CircularIndeterminate />;
    }

  return (
    <Admin
      title={'SOS-Tag administrator panel'}
      // authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="Sheet" {...sheetActions} />
      <Resource name="User" {...userActions} />
    </Admin>
  )
};


export default App;
