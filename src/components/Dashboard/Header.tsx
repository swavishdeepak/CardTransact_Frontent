import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  let path = location.pathname;
  let formattedPath = path.charAt(1).toUpperCase() + path.slice(2);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          sx={{ color: "#202020",
           fontWeight: "600", 
           fontSize: "2rem",
           "@media(max-width: 600px)": {
            fontSize: "1rem",
          },
           }}
        >
          Hi Shyamal Modak
        </Typography>
        <Typography
          sx={{ color: "#202020",
           fontWeight: "400", 
           fontSize: "0.8rem",
           
           }}
        >
          Super Admin
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "#589E58",
          fontSize: "16px",
          fontWeight: "600",
          marginTop: 1,
        }}
      >
        {formattedPath}
      </Typography>
    </Box>
  );
};
