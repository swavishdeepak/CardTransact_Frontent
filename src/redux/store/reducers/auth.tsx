
import { createSlice } from "@reduxjs/toolkit";
import userLogin from "../actions/authAction";

const userInfo = localStorage.getItem("info");
const authFromLocalStorage = userInfo ? JSON.parse(userInfo) : null;

interface authState {
    auth?: any;
    loading?: boolean
}


const initialState: authState = {
  auth: (authFromLocalStorage) || null,
  loading: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.auth = payload;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.loading = false;
    });
  },
 
 
});


export default authSlice.reducer;
