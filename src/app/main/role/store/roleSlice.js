/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRoles = createAsyncThunk('roles/getRoles', async () => {
  const res = await axios.get('/api/identity/role');

  const data = await res.data;

  return data;
});

const initialState = {
  roles: [],
  loading: false,
  error: null,
};

const roleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoles.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getRoles.fulfilled, (state, action) => {
      state.roles = action.payload.data;
    });
    builder.addCase(getRoles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(action);
    });
  },
});

export const roleAction = {
  ...roleSlice.actions,
  getRoles,
};

export default roleSlice.reducer;
