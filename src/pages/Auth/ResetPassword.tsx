import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import AuthBack from "./AuthBack";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import CustomTextInput from "../../components/CustomInput";


export const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
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
                  Reset Password
                </Typography>
                
              </Box>
              <Box>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
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
                    label={"New Password"}
                    palceholder="Enter Your New Password"
                  />
                   <CustomTextInput
                    labelStyle={{
                      color: "#000000",
                      fontWeight: "600",
                      fontSize: "15px",
                      marginBottom: "2px",
                    }}
                    label={"confirm Password"}
                    palceholder="Re-enter Your New Password"
                  />

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
                    Save
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
