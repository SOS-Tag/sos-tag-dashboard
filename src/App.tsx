import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple';
import React, { useEffect, useState } from 'react';
import { Admin, DataProvider, LegacyDataProvider, Resource } from "react-admin";
import { enhanceBuildQuery } from './builder';
import authProvider from './providers/auth'
import CircularIndeterminate from './components/CircularIndeterminate';
import sheetActions from './modules/sheets';
import userActions from './modules/users';
import { link } from './apollo';

const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | LegacyDataProvider | null>(null);
    useEffect(() => {

      const onMount = async () => {
        // await sleep(80000);
        const provider = await buildGraphQLProvider({
          clientOptions: {
            uri: process.env.REACT_APP_API_BASE_URL + '/graphql',
            credentials: 'include',
            link: link as any,
          },
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
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="Sheet" {...sheetActions} />
      <Resource name="User" {...userActions} />
    </Admin>
  )
};


export default App;
