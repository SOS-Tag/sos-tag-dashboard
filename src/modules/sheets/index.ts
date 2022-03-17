import BookIcon from '@mui/icons-material/Book';

import SheetList from './SheetList';
import SheetEdit from './SheetEdit';
import SheetShow from './SheetShow';
import SheetCreate from './SheetCreate';

const  sheetActions = {
  create: SheetCreate,
  edit: SheetEdit,
  icon: BookIcon,
  list: SheetList,
  show: SheetShow,
};

export default sheetActions;

