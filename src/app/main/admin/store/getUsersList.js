/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { format } from 'date-fns'

export const getUsersList = createAsyncThunk(
  "adminOperation/list/getUsersList",
  async () => {
    const response = await axios.get("api/identity/user");
    const data = await response?.data?.data;

    return data;
  }
);

// ALL USABLE DATA STORED AT [entities] FIELD
const listUsersSlice = createSlice({
  name: "adminOperation/list",
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
      .addCase(getUsersList.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getUsersList.fulfilled, (state, action) => {
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
      .addCase(getUsersList.rejected, (state, action) => {
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

export const selectUsersList = ({ adminOperation }) => adminOperation.list;

export default listUsersSlice.reducer;
