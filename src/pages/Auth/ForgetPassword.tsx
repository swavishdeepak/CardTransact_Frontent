import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import AuthBack from "./AuthBack";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import OtpInput from "react-otp-input";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomInput";
import Divider from "@mui/material/Divider";
import AuthCustomBox from "../../components/AuthCustomBox";

export const ForgetPassword = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailValidated, setEmailValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const pageRedirect = () => {
    navigate("/auth/GoogleAuthentication");
  };
  const redirectLogin = () => {
    navigate("/auth/login");
  };

  const redirectVerifyOtp = () => {
    navigate("/auth/verifyOtp");
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleEmailValidation = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setIsEmailValid(isValid);
    if (isValid) {
      setEmailValidated(true); 
    }
  };

  return (
    <>
      <AuthCustomBox header="Forgot Password">
        <Box sx={{ padding: "0px 20px" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "0.9rem",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Kindly Enter your Registered Email Address To recieve An OTP For
            Varification
          </Typography>
        </Box>
        <Box sx={{ marginTop: "2rem" }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            
            }}
          >
            <CustomTextInput
              labelStyle={{
                color: "#000000",
                fontWeight: "600",
                fontSize: "15px",
                marginBottom: "2px",
              }}
              label={"Register Email Address"}
              palceholder="Enter Your Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            {emailValidated && (
              <>
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
                  renderInput={(props) => <input {...props} />}
                />
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
              </>
            )}

            <LoadButton
              type="submit"
              loading={loading}
              onClick={handleEmailValidation}
              variant="contained"
              style={{
                width: "100%",
                marginTop: 5,
                textTransform: "none",
              }}
            >
              Submit
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
                  width: "30%",
                  cursor: "pointer",
                  fontSize: "12px",
                }}
              />
              <Divider sx={{ width: "30%", border: "0.1px solid #589E58" }} />
            </Box>
          </form>
        </Box>
      </AuthCustomBox>
    </>
  );
};
