import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRoles = createAsyncThunk('roles/getRoles', async () => {
  const res = await axios.get('/api/identity/roles');

  const data = await res.data;

  return data;
});

const roleSlice = createSlice({
  name: 'roles',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getRoles.fulfilled]: (state, action) => action.payload,
  },
});

export default roleSlice.reducer;
