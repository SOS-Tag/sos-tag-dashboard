import {
  Create, NumberInput, SimpleForm
} from 'react-admin';

const SheetCreate = ({ onCancel, ...props }: any) => (
  <Create title="Create new unused sheets" {...props}>
    <SimpleForm redirect={'/Sheet'}>
      <NumberInput source='count' />
    </SimpleForm>
  </Create>
);

export default SheetCreate;