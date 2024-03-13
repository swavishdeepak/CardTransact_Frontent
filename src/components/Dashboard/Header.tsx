import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

interface buttonProps {
  children?: React.ReactNode;
}

export const Header: React.FC<buttonProps> = ({ children }) => {
  const location = useLocation();
  let path = location.pathname;
  let formattedPath = path.charAt(1).toUpperCase() + path.slice(2);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
      <Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                color: "#202020",
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
              sx={{ color: "#202020", fontWeight: "400", fontSize: "0.8rem" }}
            >
              Super Admin
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "#589E58",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: 1,
            "@media(max-width: 600px)":{
               fontSize: "12px"
            }
          }}
        >
          {formattedPath}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
