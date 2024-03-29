import React from "react";
import { Box, Typography } from "@mui/material";

interface DetailsSubTitleProps {
  name?: string;
  children?: React.ReactNode;
}

const DetailsSubTitleName: React.FC<DetailsSubTitleProps> = ({
  name,
  children,
}) => {
  return (
    <Box
      sx={{ display: "flex", gap: 2, color: "#000000", alignItems: "center" }}
    >
      <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>:</Typography>
      <Typography
        sx={{
          fontWeight: "300",
          fontSize: "15px",
          lineHeight: "16px",
          "@media(max-width: 600px)":{
            fontSize: "10px"
          }  
        }}
      >
        {name}
      </Typography>
      {children}
    </Box>
  );
};

export default DetailsSubTitleName;
