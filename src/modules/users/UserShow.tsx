import { BooleanField, Show, SimpleShowLayout, TextField } from "react-admin";

const UserShow = (props: any) => (
  <Show title="Show a user" {...props}>
    <SimpleShowLayout>
      <TextField source="_id" />
      <TextField source="email" />
      <TextField source="fname" />
      <TextField source="lname" />
      <TextField source="address" />
      <TextField source="zipCode" />
      <TextField source="city" />
      <TextField source="phone" />
      <TextField source="nationality" />
      <BooleanField source="activated" />
    </SimpleShowLayout>
  </Show>
);

export default UserShow;
