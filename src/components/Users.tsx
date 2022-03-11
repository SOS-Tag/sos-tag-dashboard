import {
  Datagrid, Edit, EditButton, Filter, List, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput
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
        <EditButton/>
        <ShowButton/>
      </Datagrid>
    </List>
  )
};

export const UserEdit = (props: any) => (
  <Edit title="Edit a user" {...props}>
    <SimpleForm>
      <TextInput source="fname" />
      <TextInput source="lname" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

export const UserShow = (props: any) => (
  <Show title="Show a user" {...props}>
    <SimpleShowLayout>
      <TextField source="_id"/>
      <TextField source="fname"/>
      <TextField source="lname"/>
      <TextField source="email"/>
      <TextField source="phone"/>
    </SimpleShowLayout>
  </Show>
);
