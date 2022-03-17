import PersonIcon from '@mui/icons-material/Person';

import UserList from './UserList';
import UserEdit from './UserEdit';
import UserShow from './UserShow';

const userActions = {
  edit: UserEdit,
  icon: PersonIcon,
  list: UserList,
  show: UserShow,
};

export default userActions;
