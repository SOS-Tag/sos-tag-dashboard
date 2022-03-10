import * as React from "react";
import {
  BooleanField,
  Datagrid, List, TextField
} from "react-admin";

export const SheetList = (props: any) => {
  return (<List {...props}>
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
    </Datagrid>
  </List>)
};
