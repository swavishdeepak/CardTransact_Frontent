import React from "react";
import AuthImg from "../../assets/authImg.png"
import { Box } from "@mui/material";

const AuthBack = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        component="img"
        src={AuthImg}
        sx={{
          backgroundPosition: "left",
          backgroundSize: "cover",
          objectFit: "cover",
          height: "100%",
          left: 0,
          top: 0,
          width: "78%",
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
        alt="background"
      />
    </Box>
  );
};

export default AuthBack;
