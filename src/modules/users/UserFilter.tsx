import { Filter, TextInput } from "react-admin";

const UserFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Search by email" source="email" alwaysOn />
  </Filter>
)

export default  UserFilter;
