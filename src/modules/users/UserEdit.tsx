import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props: any) => (
  <Edit title="Edit a user" {...props}>
    <SimpleForm>
      <TextInput source="fname" />
      <TextInput source="lname" />
      <TextInput source="address" />
      <TextInput source="zipCode" />
      <TextInput source="city" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="nationality" />
      <BooleanInput source="activated" />
      <BooleanInput source="confirmed" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
