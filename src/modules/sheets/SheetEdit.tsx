import { Edit, SimpleForm, TextInput } from "react-admin";

const SheetEdit = (props: any) => (
  <Edit title={'Edit a sheet'} {...props}>
    <SimpleForm>
      <TextInput source="fname" />
      <TextInput source="lname" />
    </SimpleForm>
  </Edit>
);

export default SheetEdit;
