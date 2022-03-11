import buildGraphQLProvider, { buildQuery } from 'ra-data-graphql-simple';
import { useEffect, useState } from 'react';
import { Admin, DataProvider, LegacyDataProvider, Resource } from "react-admin";
import { enhanceBuildQuery } from './builder';
import { SheetEdit, SheetList, SheetShow } from './components/Sheets';
import { UserEdit, UserList, UserShow } from './components/Users';

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
      <Resource
        name="Sheet"
        edit={SheetEdit}
        list={SheetList}
        show={SheetShow}
      />
      <Resource
        name="User"
        edit={UserEdit}
        list={UserList}
        show={UserShow}
      />
    </Admin>
  )
};


export default App;
