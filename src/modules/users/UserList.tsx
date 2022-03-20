import { BooleanField, Datagrid, EditButton, List, ShowButton, TextField } from "react-admin";
import UserFilter from "./UserFilter";

const UserList = (props: any) => {
  return (
    <List filters={<UserFilter />} {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="email" />
        <TextField source="fname" />
        <TextField source="lname" />
        <TextField source="phone" />
        <TextField source="nationality" />
        <BooleanField source="activated" />
        <BooleanField source="confirmed" />
        <EditButton/>
        <ShowButton/>
      </Datagrid>
    </List>
  )
};

export default UserList;
