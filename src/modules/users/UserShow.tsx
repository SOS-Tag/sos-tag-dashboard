import { Show, SimpleShowLayout, TextField } from "react-admin";

const UserShow = (props: any) => (
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

export default UserShow;
