import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_AXIOS } from "../../../http/interceptor";
import Apis from "../../../utils/apis";




interface employee {
  employee?: any;
  loading?: boolean;
}

const initialState: employee = {
  employee:  null,
  loading: false,
};


export const getEmployees = createAsyncThunk("employeesList", async (thunkApi) => {
    try {
      const { data } = await API_AXIOS.get(Apis.getEmployee);
      return data
    } catch (err) {
      console.log(err);
      return [];
    }
  });

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEmployees.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.employee = payload;
    });
    builder.addCase(getEmployees.rejected, (state) => {
      state.loading = false;
    });
  },
});


export default employeeSlice.reducer;
