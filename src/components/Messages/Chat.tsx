import React from "react";
import { Box, Typography } from "@mui/material";
import CustomTextInput from "../CustomInput";

interface chatProps {
    
    children?: React.ReactNode
}

export const Chat: React.FC<chatProps> = ({children}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {children}
        <Box
          sx={{
            marginTop: "1rem",
            textAlign: "center",
            padding: "0.6rem 10px 1px",
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          <Typography>Today</Typography>
       
        </Box>
        <Box
          sx={{padding: 1}}
          
        >
          <CustomTextInput 
          palceholder="Type Your Message Here"
          multiline={true}
          style={{
              position: "relative",
              backgroundColor: "#F9F9F9",
              order: 3,
              zIndex: 100,

          }}/>
        </Box>
      </Box>
    </>
  );
};
