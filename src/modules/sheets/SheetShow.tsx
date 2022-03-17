import { Show, SimpleShowLayout, TextField } from "react-admin";

const SheetShow = (props: any) => (
  <Show title="Show a sheet" {...props}>
    <SimpleShowLayout>
      <TextField source="_id"/>
      <TextField source="fname"/>
      <TextField source="lname"/>
    </SimpleShowLayout>
  </Show>
);

export default SheetShow;
