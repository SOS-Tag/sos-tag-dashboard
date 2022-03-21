import { BooleanInput, DateInput, Edit, SimpleForm, TextInput } from "react-admin";

const SheetEdit = (props: any) => (
  <Edit title={'Edit a sheet'} {...props}>
    <SimpleForm>
      <BooleanInput source="enabled"/>
      <TextInput source="fname" />
      <TextInput source="lname" />
      <TextInput source="sex"/>
      <DateInput source="dateOfBirth"/>
      <TextInput source="nationality"/>
      <TextInput source="bloodType"/>
      <BooleanInput source="smoker"/>
      <BooleanInput source="organDonor"/>
      <BooleanInput source="advanceDirectives"/>
      <TextInput source="allergies"/>
      <TextInput source="medicalHistory"/>
      <TextInput source="currentTreatment"/>
      <DateInput source="createdAt"/>
      <DateInput source="updatedAt"/>
    </SimpleForm>
  </Edit>
);

export default SheetEdit;
