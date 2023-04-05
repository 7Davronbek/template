/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleUserRole = createAsyncThunk(
  "adminOperation/singleuserrole/getSingleUserRole",
  async () => {
    const response = await axios.get(
      "api/identity/user/roles/111768a2-77c8-415c-93aa-6f6682881c80"
    );
    const data = await response?.data?.data;
    return data;
  }
);

// ALL USABLE DATA STORED AT [entities] FIELD
const singleUserRolesSlice = createSlice({
  name: "adminOperation/singleuserrole",
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
      .addCase(getSingleUserRole.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getSingleUserRole.fulfilled, (state, action) => {
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
      .addCase(getSingleUserRole.rejected, (state, action) => {
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

export const selectSingleuserUser = ({ adminOperation }) =>
  adminOperation.singleuser;

export default singleUserRolesSlice.reducer;
