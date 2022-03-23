import { BooleanInput, Edit, SelectInput, SimpleForm, TextInput } from "react-admin";
import NATIONALITIES from "../../constants/nationalities";

const UserEdit = (props: any) => (
  <Edit title="Edit a user" {...props}>
    <SimpleForm>
      <TextInput source="fname" />
      <TextInput source="lname" />
      <TextInput source="email" />
      <TextInput source="address" />
      <TextInput source="zipCode" />
      <TextInput source="city" />
      <SelectInput source="nationality" optionText="text" optionValue="value" choices={NATIONALITIES}/>
      <TextInput source="phone" />
      <BooleanInput source="activated" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
