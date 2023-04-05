import { combineReducers } from '@reduxjs/toolkit';
import singleUserRolesSlice from './singleUserRolesSlice';
import listUsersSlice from './getUsersList';
import listRegisterUsersSlice from './getUsersToRegister';
import createUser from './createUser';

const reducer = combineReducers({
  singleUserRole: singleUserRolesSlice,
  userList: listUsersSlice,
  listRegister: listRegisterUsersSlice,
  create: createUser,
});

export default reducer;
