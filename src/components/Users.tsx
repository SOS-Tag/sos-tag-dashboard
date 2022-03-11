import {
  Datagrid, Filter, List, Show, ShowButton, SimpleShowLayout, TextField, TextInput
} from "react-admin";

export const UserFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by email" source="email" alwaysOn />
  </Filter>
)

export const UserList = (props: any) => {
  return (
    <List filters={<UserFilter />} {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="email" />
        <TextField source="phone" />
        <ShowButton/>
      </Datagrid>
    </List>
  )
};

export const UserShow = (props: any) => (
  <Show title="Show a sheet" {...props}>
    <SimpleShowLayout>
      <TextField source="_id"/>
      <TextField source="fname"/>
      <TextField source="lname"/>
      <TextField source="email"/>
      <TextField source="phone"/>
    </SimpleShowLayout>
  </Show>
);
