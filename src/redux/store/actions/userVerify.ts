import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import Apis from "../../../utils/apis";
import { API_AXIOS } from "../../../http/interceptor";

interface UserToken {
  token: string;

}

interface OtpParams {
  email: string;
  otp: string

}



export const userVerify = createAsyncThunk<UserToken, OtpParams, { rejectValue: AxiosError }>(
  "user/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const { data } = await API_AXIOS.post(
        Apis.veryfyOtp,
        { email, otp },
        {
          params: {
            type: "agent",
          },
        }
      );

      localStorage.setItem("token", data?.data?.token);
      localStorage.setItem("info", JSON.stringify(data));
      toast.success(data?.message);
      return data;

    } catch (error: any) {
      toast.error(error?.message)
      if (axios.isAxiosError(error)) {
        // toast.error(error)
        console.log("errorhsfbasj", error)
        return rejectWithValue(error.response?.data);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);
export default userVerify;







