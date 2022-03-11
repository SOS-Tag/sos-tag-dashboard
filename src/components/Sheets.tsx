import { BooleanField, Datagrid, Edit, EditButton, Filter, List, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const SheetFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by id" source="_id" alwaysOn />
  </Filter>
)

export const SheetList = (props: any) => {
  return (
    <List filters={<SheetFilter />} {...props}>
      <Datagrid>
        <TextField label={'ID'} source="_id" />
        <TextField label={'Owner'} source="user.email"  />
        <TextField label={'Firstname'} source="fname" />
        <TextField label={'Lastname'} source="lname" />
        <TextField label={'Sex'} source="sex" />
        <TextField label={'Date of birth'} source="dateOfBirth" />
        <TextField label={'Nationality'} source="nationality" />
        <TextField label={'Bloodtype'} source="bloodType" />
        <BooleanField label={'Smoker'} source="smoker" />
        <BooleanField label={'Enabled'} source="enabled" />
        <EditButton/>
        <ShowButton/>
      </Datagrid>
    </List>
  )
};

export const SheetEdit = (props: any) => (
  <Edit title="Edit a sheet" {...props}>
    <SimpleForm>
      <TextInput source="fname" />
      <TextInput source="lname" />
    </SimpleForm>
  </Edit>
);

export const SheetShow = (props: any) => (
  <Show title="Show a sheet" {...props}>
    <SimpleShowLayout>
      <TextField source="_id"/>
      <TextField source="fname"/>
      <TextField source="lname"/>
    </SimpleShowLayout>
  </Show>
);
