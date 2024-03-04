import React from "react";
import AuthImg from "../../assets/AuthBack.svg";
import { Box } from "@mui/material";

const AuthBack = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <img
        src={AuthImg}
        style={{
          //backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          backgroundSize: "cover",
          objectFit: "cover",
          // width: "auto",
          height: "100%",
          left: 0,
          top: 0,
          width: "78%",
        }}
        alt="background"
      />
    </Box>
  );
};

export default AuthBack;
