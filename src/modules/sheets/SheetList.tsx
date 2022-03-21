import { BooleanField, Datagrid, DateField, EditButton, List, Responsive, ShowButton, SimpleList, TextField } from "react-admin";
import SheetFilter from "./SheetFilter";

const SheetList = (props: any) => {
  return (
      <List filters={<SheetFilter />} {...props} >
        <Responsive
          xsmall={
            <SimpleList linkType="show" primaryText={record => record._id} />
          }
          small={
            <Datagrid>
              <TextField label={'ID'} source="_id" />
              <TextField label={'First name'} source="fname" />
              <TextField label={'Last name'} source="lname" />
              <EditButton />
              <ShowButton />
            </Datagrid>
          }
          medium={
            <Datagrid>
              <TextField label={'ID'} source="_id" />
              <BooleanField label={'Enabled'} source="enabled" />
              <TextField label={'Owner'} source="user.email" />
              <TextField label={'First name'} source="fname" />
              <TextField label={'Last name'} source="lname" />
              <TextField label={'Sex'} source="sex" />
              <DateField label={'Date of birth'} source="dateOfBirth" />
              <TextField label={'Nationality'} source="nationality" />
              <DateField label={'Created At'} source="createdAt" />
              <EditButton />
              <ShowButton />
            </Datagrid>
          }
        />
      </List>
  )
};

export default SheetList;
