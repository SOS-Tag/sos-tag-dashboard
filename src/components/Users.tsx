import {
  Datagrid, Filter, List, TextField, TextInput
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
      </Datagrid>
    </List>
  )
};
