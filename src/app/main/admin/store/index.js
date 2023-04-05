import { combineReducers } from '@reduxjs/toolkit';
import singleUserRolesSlice from './singleUserRolesSlice';

const reducer = combineReducers({
  singleUserRole: singleUserRolesSlice,
});

export default reducer;
