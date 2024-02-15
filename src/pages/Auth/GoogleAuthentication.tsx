import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import AuthBack from "./AuthBack";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import CustomText from "../../components/CustomText";
import OtpInput from "react-otp-input";
import Divider from "@mui/material/Divider";
import dashboardIcon from "../../assets/dashboardIcon.svg";


export const GoogleAuthentication = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/auth/login");
  };

  const redirectforgetPassword = () => {
    navigate("/auth/ForgetPassword");
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
                textAlign: "center",
                width: "350px",
                top: 30,
                left: 20,
                zIndex: 1,
                boxShadow: "5.625px 6.5625px 9.375px 0px #00000052",
                borderRadius: 5,
                border: "0.5px solid #77D177",
                backgroundColor: "#fff",
              }}
            >
              <Box sx={{  padding: "36px 31px" }}>
                <Box sx={{display: "flex", gap: 1, justifyContent: "center"}}>
                  <img src={dashboardIcon} alt="" />
                  <CustomText
                    style={{
                      color: "#2E2C34",
                      fontWeight: "700",
                      fontSize: "26px",
                    }}
                    text="Card Transact"
                  ></CustomText>
                </Box>
                <CustomText
                  style={{
                    color: "#000000",
                    fontSize: "2rem",
                    marginTop: "1rem",
                    fontWeight: "700",
                    fontFamily: "serif",
                  }}
                  text="Google"
                ></CustomText>
                <CustomText
                  style={{
                    color: "#04609A",
                    fontWeight: "700",
                    fontFamily: "sans-serif",
                    fontSize: "2rem",
                  }}
                  text="Authentications"
                ></CustomText>
                <Box >
                  <CustomText
                    style={{ color: "#000000", fontWeight: "600" }}
                    text="OTP"
                  ></CustomText>
                  <CustomText
                    style={{ color: "#000000", fontSize: "0.8rem", fontWeight: "500" }}
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
                    onClick={redirectforgetPassword}
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
                    <Divider
                      sx={{ width: "35%", border: "0.1px solid #589E58" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
