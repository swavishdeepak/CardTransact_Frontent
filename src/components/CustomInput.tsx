
import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

interface CustomTextInputProps {
  label?: string;
  style?: React.CSSProperties;
  borderRadius?: string | number;
  labelStyle?: React.CSSProperties;
  palceholder?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  value?: string;
  multiline?: boolean;
  rows?: number
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  style,
  borderRadius,
  labelStyle,
  palceholder,
  onClick,
  onChange,
  onKeyPress,
  value,
  multiline,
  rows,
  ...props
}) => {
  

  return (
    <>
      <Typography
        sx={{
          marginBottom: "4px",
          color: "#000000",
          fontWeight: "500",
          fontSize: "15px",
          "@media(max-width:600px)":{
            fontSize: "13px"
          },
          ...labelStyle,
        }}
      >
        {label}
      </Typography>
      <TextField
        placeholder={palceholder}
        size="small"
        onClick={onClick}
        onChange={onChange}
        onKeyPress={onKeyPress}
        multiline={multiline}
        rows={rows}
        value={value}
        sx={{
           width: "100%",
           "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              border: "1px solid #DCDCDC", 
            },
            "&.Mui-focused fieldset": {
              border: "1px solid #DCDCDC", 
            },
          }
          }}
        InputProps={{
          style: {
            borderRadius: "7.5px",
            fontSize: "12px",
            fontWeight: "400",
            "&::placeholder": {
              color: "#898989",
              
            },
            
          } as React.CSSProperties
         
        }}
        {...props}
        
      />
    </>
  );
};

export default CustomTextInput;
