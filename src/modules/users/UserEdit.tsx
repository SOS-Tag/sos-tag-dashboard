import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props: any) => (
  <Edit title="Edit a user" {...props}>
    <SimpleForm>
      <TextInput source="fname" />
      <TextInput source="lname" />
      <TextInput source="email" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
