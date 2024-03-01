import React from "react";
import { Box, BoxProps } from "@mui/material";
import { Colors } from "../utils/Colors";

interface CustomBoxProps extends BoxProps {
  style?: React.CSSProperties;
  
}

export const GraphCustomBox: React.FC<CustomBoxProps> = ({ children, style, ...rest }) => {
  return (
    <Box
      sx={{
        p: "20px 40px 0px",
        "@media(max-width: 600px)":{
          p:1
        },
        marginTop: "1rem",
        borderRadius: "18px",
        border: "1.23px solid rgba(236, 236, 236, 1)",
        boxShadow: Colors.graphBoxShadow,
        backgroundColor: "#FFFFFF",
        bgcolor: "#FFFFFF",
        ...style, 
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
