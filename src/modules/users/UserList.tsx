import { Datagrid, EditButton, List, ShowButton, TextField } from "react-admin";
import UserFilter from "./UserFilter";

const UserList = (props: any) => {
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

export default UserList;
