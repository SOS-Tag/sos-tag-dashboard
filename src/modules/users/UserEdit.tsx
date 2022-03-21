import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props: any) => (
  <Edit title="Edit a user" {...props}>
    <SimpleForm>
      <TextInput source="fname" />
      <TextInput source="lname" />
      <TextInput source="email" />
      <TextInput source="address" />
      <TextInput source="zipCode" />
      <TextInput source="city" />
      <TextInput source="nationality" />
      <TextInput source="phone" />
      <BooleanInput source="activated" />
      <BooleanInput source="confirmed" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
