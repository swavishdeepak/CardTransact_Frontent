import { createSlice } from "@reduxjs/toolkit";
import userVerify from "../actions/userVerify";

const userInfo = localStorage.getItem("info");
const authFromLocalStorage = userInfo ? JSON.parse(userInfo) : null;

interface authState {
  verifiedUser?: any;
  loading?: boolean;
}

const initialState: authState = {
  verifiedUser: authFromLocalStorage || null,
  loading: false,
};

const authSlice = createSlice({
  name: "verifiedUser",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.verifiedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userVerify.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userVerify.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.verifiedUser = payload;
    });
    builder.addCase(userVerify.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
