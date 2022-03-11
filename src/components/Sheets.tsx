import { BooleanField, Datagrid, Filter, List, Show, ShowButton, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const SheetFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by id" source="_id" alwaysOn />
  </Filter>
)

export const SheetList = (props: any) => {
  return (
    <List filters={<SheetFilter />} {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="fname" />
        <TextField source="lname" />
        <TextField source="sex" />
        <TextField source="dateOfBirth" />
        <TextField source="nationality" />
        <TextField source="bloodType" />
        <BooleanField source="smoker" />
        <BooleanField source="enabled" />
        <ShowButton/>
      </Datagrid>
    </List>
  )
};

export const SheetShow = (props: any) => (
  <Show title="Show a sheet" {...props}>
    <SimpleShowLayout>
      <TextField source="_id"/>
      <TextField source="fname"/>
      <TextField source="lname"/>
    </SimpleShowLayout>
  </Show>
);
