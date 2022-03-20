import { Show, SimpleShowLayout, TextField } from "react-admin";

const SheetShow = (props: any) => (
  <Show title="Show a sheet" {...props}>
    <SimpleShowLayout>
      <TextField source="_id"/>
      <TextField source="user.email"/>
      <TextField source="enabled"/>
      <TextField source="fname"/>
      <TextField source="lname"/>
      <TextField source="sex"/>
      <TextField source="dateOfBirth"/>
      <TextField source="nationality"/>
      <TextField source="bloodType"/>
      <TextField source="smoker"/>
      <TextField source="organDonor"/>
      <TextField source="advanceDirectives"/>
      <TextField source="allergies"/>
      <TextField source="medicalHistory"/>
      <TextField source="currentTreatment"/>
      <TextField source="createdAt"/>
      <TextField source="updatedAt"/>
    </SimpleShowLayout>
  </Show>
);

export default SheetShow;
