import { BooleanInput, DateInput, Edit, SelectInput, SimpleForm, TextInput } from "react-admin";
import BLOOD_TYPES from "../../constants/blood-types";
import GENDERS from "../../constants/genders";
import NATIONALITIES from "../../constants/nationalities";



const SheetEdit = (props: any) => (
  <Edit title={'Edit a sheet'} {...props}>
    <SimpleForm>
      <BooleanInput source="enabled"/>
      <TextInput source="fname" />
      <TextInput source="lname" />
      <SelectInput source="sex" optionText="text" optionValue="value" choices={GENDERS}/>
      <DateInput source="dateOfBirth"/>
      <SelectInput source="nationality" optionText="text" optionValue="value" choices={NATIONALITIES}/>
      <SelectInput source="bloodType" optionText="value" optionValue="value" choices={BLOOD_TYPES}/>
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
