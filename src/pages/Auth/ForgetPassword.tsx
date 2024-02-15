import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import AuthBack from "./AuthBack";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomInput";
import Divider from "@mui/material/Divider";

export const ForgetPassword = () => {
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

  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <AuthBack />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                height: "500px",
                width: "350px",
                top: 30,
                left: 20,
                zIndex: 1,
                border: "0.5px solid #77D177",
                boxShadow: "5.625px 6.5625px 9.375px 0px #00000052",
                borderRadius: 5,
                backgroundColor: "#fff",
              }}
            >
              <Box sx={{ padding: "36px 31px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: 1,
                  }}
                >
                  <img src={dashboardIcon} alt="" />
                  <Typography
                    sx={{
                      color: "#2E2C34",
                      fontWeight: "700",
                      fontSize: "26px",
                    }}
                  >
                    Card Transact
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    marginTop: "1rem",
                    textAlign: "center",
                    color: "#000000",
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "serif",
                  }}
                >
                  Forget Password
                </Typography>
                <CustomText
                  style={{
                    color: "#000000",
                    fontSize: "0.6rem",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "4rem",
                  }}
                  text=" Kindly Enter your Registered Email Address To recieve An OTP For Varification"
                ></CustomText>
              </Box>
              <Box>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0px 20px",
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
                  />

                  <LoadButton
                    type="submit"
                    loading={loading}
                    onClick={redirectVerifyOtp}
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
                    <Divider
                      sx={{ width: "30%", border: "0.1px solid #589E58" }}
                    />
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
