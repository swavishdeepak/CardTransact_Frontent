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
              width: "450px",
              top: 30,
              left: "8rem",
              zIndex: 1,
              border: "0.5px solid #77D177",
              boxShadow: "5.625px 6.5625px 9.375px 0px #00000052",
              borderRadius: 5,
              backgroundColor: "#fff",
              p:"20px 30px"
            }}
          >
            <Box sx={{ padding: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: 1,
                }}
              >
                <img src={dashboardIcon} alt="" style={{width: "55px", height: "55px"}} />
                <Typography
                  sx={{
                    color: "#2E2C34",
                    fontWeight: "700",
                    fontSize: "2.1rem",
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
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "serif",
                }}
              >
                {header}
              </Typography>
            </Box>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthCustomBox;
