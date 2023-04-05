/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "adminOperation/create/createUser",
  async (params) => {
    const response = await axios.post(
      "api/identity/user/Register",
      {
        firstName: "string",
        lastName: "string",
        userName: "string",
        phoneNumber: "string",
        activateUser: true,
        autoConfirmEmail: true,
        ...params,
      }
    );

    const data = await response?.data;

    return data;
  }
);

// ALL USABLE DATA STORED AT [entities] FIELD
const createUserSlice = createSlice({
  name: "adminOperation/create",
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
      .addCase(createUser.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(createUser.fulfilled, (state, action) => {
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
      .addCase(createUser.rejected, (state, action) => {
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

export const selectCreateState = ({ adminOperation }) => adminOperation.create;

export default createUserSlice.reducer;
