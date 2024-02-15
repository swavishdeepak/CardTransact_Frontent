import React from "react";
import { Box, BoxProps } from "@mui/material";

interface CustomBoxProps extends BoxProps {
  style?: React.CSSProperties;
}

export const CustomBox: React.FC<CustomBoxProps> = ({ children, style, ...rest }) => {
  return (
    <Box
      sx={{
        p: 3,
        boxShadow: "2.8125px 2.8125px 8.4375px 0px #0000002E",
        backgroundColor: "#FFFFFF",
        bgcolor: "#FFFFFF",
        borderRadius: "7.5px",
        ...style, 
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
