import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import AuthBack from "./AuthBack";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomInput";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const pageRedirect = () => {
    navigate("/auth/GoogleAuthentication");
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
              <Box sx={{padding: "2rem"}}>
                <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center", gap:1 }}>
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
                    textAlign: "center",
                    color: "#000000",
                    fontSize: "40px",
                    fontWeight: "700",
                    fontFamily: "serif",
                  }}
                >
                  Login
                </Typography>
              </Box>
              <Box>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 20,
                    gap: 10,
                  }}
                >
                  
                  
                  <CustomTextInput
                    labelStyle={{color: "#000000", fontWeight: "600", fontSize: "15px", marginBottom: "2px"}}
                    label={"User Name"}
                    palceholder="Enter Your Email Address"

                  />
                
                   <CustomTextInput
                    labelStyle={{color: "#000000", fontWeight: "600", fontSize: "15px",marginBottom: "2px"}}
                    label={"Password"}
                    palceholder={"Enter your Password"}

                  />

                  <CustomText
                    onClick={pageRedirect}
                    text="Forgot Password?"
                    style={{
                      color: "#589E58",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "40%",
                    }}
                  ></CustomText>

                  <LoadButton
                    type="submit"
                    loading={loading}
                    variant="contained"
                    style={{
                      width: "100%",
                      marginTop: 5,
                      textTransform: "none",
                    }}
                  >
                    Login
                  </LoadButton>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
