import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import AuthBack from "./AuthBack";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import OtpInput from "react-otp-input";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomInput";
import AuthCustomBox from "../../components/AuthCustomBox";
import Divider from "@mui/material/Divider";

export const VerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  
  const redirectResetPassword = () => {
    navigate("/auth/resetPassword");
  };

  const redirectLogin = ()=>{
      navigate("/auth/login")
  }

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
                left: "13rem",
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
                    
                  }}
                >
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
                    type="submit"
                    onClick={redirectResetPassword}
                    loading={loading}
                    variant="contained"
                    style={{
                      width: "100%",
                      marginTop: 5,
                      textTransform: "none",
                    }}
                  >
                    Verify
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
