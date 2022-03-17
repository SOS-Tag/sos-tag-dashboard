import { Filter, TextInput } from "react-admin";

export const SheetFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by id" source="_id" alwaysOn />
  </Filter>
)

export default SheetFilter;