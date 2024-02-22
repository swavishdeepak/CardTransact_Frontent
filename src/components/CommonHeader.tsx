import React, { ReactNode } from "react";
import { Box, Typography, Divider } from "@mui/material";

interface CommonHeaderProps {
  header: string;
  children?: ReactNode;
  style?: React.CSSProperties; 
  headerStyle?: React.CSSProperties;
}

export const CommonHeader: React.FC<CommonHeaderProps> = ({
  header,
  children,
  style,
  headerStyle
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{...style}}>
        <Typography
          sx={{ color: "#202020", fontWeight: "600", fontSize: "18px", ...headerStyle}}
        >
          {header}
        </Typography>
        <Divider sx={{ border: "0.5px solid #77D177"}}  />
      </Box>
      {children}
    </Box>
  );
};
