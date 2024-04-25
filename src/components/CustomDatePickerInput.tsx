import React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { Box,InputAdornment } from "@mui/material";

interface CustomDatePickerProps {
  style?: React.CSSProperties;
  InputProps?: {
    startAdornment?: React.ReactNode;
    style?: React.CSSProperties;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  };
  placeholder?: string;
}

const CustomDatePickerInput: React.FC<CustomDatePickerProps> = ({
  style,
  InputProps,
  placeholder,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DatePicker
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "35px",
              boxShadow: "0.9375px 0.9375px 2.8125px 0px #00000026",
              backgroundColor: "#FCFAFA",
              color: "#000000",
              border: "none important",
              "&:hover fieldset": {
                 border: "0.1px solid #fff",
              },
              "&.Mui-focused fieldset": {
                 border: "0.1px solid #fff",
                 
              },
            },
          }}
          
          
          
          {...props}
         
          
        />
       
        
      </Box>
    </LocalizationProvider>
  );
};

export default CustomDatePickerInput;
