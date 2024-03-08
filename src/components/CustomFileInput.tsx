
import React from "react";
import TextField from "@mui/material/TextField";
import { Typography,InputAdornment } from "@mui/material";
import fileIcon from "../assets/fileIcon.svg"

interface CustomFileInputProps {
  label?: string;
  style?: React.CSSProperties;
  borderRadius?: string | number;
  labelStyle?: React.CSSProperties;
  placeholder?: string;
  onFileChange?: React.ChangeEventHandler<HTMLInputElement>;
  accept?: string
 
 
  
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  label,
  style,
  borderRadius,
  labelStyle,
  placeholder,
  onFileChange,
  accept,
 
 
 
  ...props
}) => {
  

  return (
    <>
      <Typography
        style={{
          marginBottom: "4px",
          color: "#000000",
          fontWeight: "500",
          fontSize: "15px",
          ...labelStyle,
        }}
      >
        {label}
      </Typography>
      <TextField
        placeholder={placeholder}
        size="small"
        type="file"
        inputProps={{ accept }} 
        onChange={onFileChange}
        sx={{
           width: "100%",
           "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              border: "0.94px solid rgba(220, 220, 220, 1)"
            },
            "&.Mui-focused fieldset": { 
              border: "0.94px solid rgba(220, 220, 220, 1)"
            },
          }
          }}
        InputProps={{
          style: {
            cursor: "pointer",
            borderRadius: "7.5px",
            fontSize: "12px",
            fontWeight: "400",
            "&::placeholder": {
              color: "#898989",
              
            },
            
          } as React.CSSProperties,
          endAdornment: (
            <InputAdornment position="end">
              <img src={fileIcon} alt="File Icon" width="15" height="15" />
            </InputAdornment>
          ),
         
        }}
        {...props}
        
      />
    </>
  );
};

export default CustomFileInput;
