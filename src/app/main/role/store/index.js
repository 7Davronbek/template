import { combineReducers } from '@reduxjs/toolkit';
import roles from './roleSlice';

const reducer = combineReducers({
  roles,
});

export default reducer;
