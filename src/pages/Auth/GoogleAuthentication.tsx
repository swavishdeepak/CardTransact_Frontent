import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate,useSearchParams } from "react-router-dom";
import CustomText from "../../components/CustomText";
import OtpInput from "react-otp-input";
import Divider from "@mui/material/Divider";
import AuthCustomBox from "../../components/AuthCustomBox";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
import { toast } from "react-toastify";
import verifyOtp from "../../redux/store/actions/userVerify";
import { useAppDispatch,useAppSelector } from "../../redux/hooks";




const GoogleAuthentication = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const  {verifiedUser} = useAppSelector((state) => state.verifiedUser); 
  let [searchParams] = useSearchParams();
  let email = searchParams.get("email");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/auth/login");
  };

  // const redirectforgetPassword = () => {
  //   navigate("/dashboard");
  // };

  
  useEffect(() => {
    if (verifiedUser?.data?.token) {
      navigate("/dashboard");
    }

  }, [verifiedUser?.data, navigate]);

  const handleSubmit = async () => {
    try {
      setLoading(true)
      if (!email || typeof email !== "string") {
        throw new Error("Email is not valid.");
      }
      await dispatch(verifyOtp({ email, otp }));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Failed to verify OTP. Please try again.");
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      <AuthCustomBox header="Google">
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
            <Typography
              style={{
                color: "#04609A",
                fontWeight: "700",
                fontFamily: "sans-serif",
                fontSize: "2rem",
              }}
            >
              Authentication
            </Typography>
            <Typography sx={{color: "#04609A",fontSize: "2rem"}}>/</Typography>
            <Typography
              style={{
                color: "#04609A",
                fontWeight: "700",
                fontFamily: "sans-serif",
                fontSize: "2rem",
              }}
            >
              OTP
            </Typography>
          </Box>
          <Box sx={{ padding: "11px 53px 0px" }}>
            <CustomText
              style={{ color: "#000000", fontWeight: "600" }}
              text="OTP"
            ></CustomText>
            <CustomText
              style={{
                color: "#000000",
                fontSize: "0.8rem",
                fontWeight: "500",
                marginTop: "0.5rem",
              }}
              text=" Kindly Enter The Varification code Sent to your Registered
                  Email Id"
            ></CustomText>
            <OtpInput
              containerStyle={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                marginTop: 6,
              }}
              inputStyle={{
                width: "30px",
                height: "30px",
                fontSize: "15px",
                border: "0.9px solid #DCDCDC",
                borderRadius: "7.5px",
              }}
              value={otp}
              onChange={setOtp}
              numInputs={6}
              // onChange={(otp) =>
              //   handleChange({ target: { name: "otp", value: otp } })
              // }
              renderInput={(props) => <input {...props} />}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <CustomText
              text="Resend"
              style={{
                color: "#589E58",
                fontWeight: "500",
                fontSize: "0.7rem",
                marginTop: "0.5rem",
              }}
            ></CustomText>
            <CustomText
              text="in 00:45"
              style={{
                color: "#000000",
                fontWeight: "500",
                fontSize: "0.7rem",
                marginTop: "0.5rem",
              }}
            ></CustomText>
          </Box>
          <LoadButton
            onClick={handleSubmit}
            type="submit"
            loading={loading}
            variant="contained"
            style={{
              width: "100%",
              marginTop: 5,
              textTransform: "none",
            }}
          >
            Authenticate
          </LoadButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",

              marginTop: "1rem",
            }}
          >
            <CustomText
              text="Return To Login"
              onClick={redirectLogin}
              style={{
                color: "#589E58",
                width: "35%",
                fontSize: "12px",
                cursor: "pointer",
              }}
            />
            <Divider sx={{ width: "35%", border: "0.1px solid #589E58" }} />
          </Box>
        </Box>
      </AuthCustomBox>
    </>
  );
};

export default GoogleAuthentication;
