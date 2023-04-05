/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { format } from 'date-fns'

export const getUsersToRegister = createAsyncThunk(
  "adminOperation/listregister/getUsersToRegister",
  async () => {
    const response = await axios.post(
      "http://192.168.90.154:443/api/personal/PersonalData/PersonalEmployees"
    );

    const data = await response?.data;

    return data;
  }
);

// ALL USABLE DATA STORED AT [entities] FIELD
const listRegisterUsersSlice = createSlice({
  name: "adminOperation/listregister",
  initialState: {
    entities: [],
    loading: "idle",
    currentRequestId: undefined,
    ended: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersToRegister.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getUsersToRegister.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.entities = action.payload;
          state.ended = true;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getUsersToRegister.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const selectRegisterUsersList = ({ adminOperation }) =>
  adminOperation.listregister;

export default listRegisterUsersSlice.reducer;
