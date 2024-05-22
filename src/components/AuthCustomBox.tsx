import React from "react";
import { Box, Typography } from "@mui/material";
import AuthBack from "../pages/Auth/AuthBack";
import dashboardIcon from "../assets/dashboardIcon.svg";

interface authProps {
  header: string;
  children?: React.ReactNode;
}

const AuthCustomBox: React.FC<authProps> = ({ header, children }) => {
  return (
    <Box sx={{ height: "100vh"}}>
      <AuthBack />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ position: "relative"}}>
          <Box
            sx={{
              position: "absolute",
              //height: "450px",
              width: "400px",
              marginTop: "8vh",
             // width: "100vh",
              //top: 45,
              left: "7rem",
              zIndex: 1,
              border: "0.5px solid #77D177",
              boxShadow: "5.625px 6.5625px 9.375px 0px #00000052",
              borderRadius: 5,
              backgroundColor: "#fff",
              "@media(max-width: 900px)":{
                width: "400px",
                left: "4rem",
                position: "relative",
                "@media(max-width: 600px)":{
                  width: "360px",
                  position: "relative",
                  left: "0px",
                  padding: "2.5rem 10px",
                },
              },
              p:"30px 30px"
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: {xs: 0, md: 1},
                }}
              >
                <img src={dashboardIcon} alt="" style={{width: "55px", height: "55px"}} />
                <Typography
                  sx={{
                    color: "#2E2C34",
                    fontWeight: "700",
                    fontSize: "42px",
                    lineHeight: "46px"
                  }}
                >
                  Card Transact
                </Typography>
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  fontFamily: "Inria Serif",
                }}
              >
                {header}
              </Typography>
              {children}
            </Box>
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthCustomBox;
