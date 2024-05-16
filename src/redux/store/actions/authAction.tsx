import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import Apis from "../../../utils/apis";

interface UserToken {
  token: string;

}

interface LoginParams {
  email: string;
  password: string
  
}

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const userLogin = createAsyncThunk<UserToken, LoginParams, { rejectValue: AxiosError }>(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${Apis.login}?type=${"employee"}`,
        { email, password },
        config
      );
      toast.success(data?.message);
      return data;
    } catch (error: any) {
      toast.error(error?.message)
      if (axios.isAxiosError(error?.message)) {
        return rejectWithValue(error.response?.data);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);
export default userLogin;







