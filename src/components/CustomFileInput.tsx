
import React from "react";
import TextField from "@mui/material/TextField";
import { Typography, InputAdornment } from "@mui/material";
import fileIcon from "../assets/fileIcon.svg"

interface CustomFileInputProps {
  label?: string;
  style?: React.CSSProperties;
  borderRadius?: string | number;
  labelStyle?: React.CSSProperties;
  placeholder?: string;
  file?: string;
  onChange?: any;
  onFileChange?: React.ChangeEventHandler<HTMLInputElement>;

  accept?: string
  disabled?: boolean


}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  label,
  style,
  borderRadius,
  labelStyle,
  placeholder,
  file,
  onFileChange,
  accept,
  disabled,


  ...props
}) => {


  return (
    <>
      <Typography
        sx={{
          color: "#000000",
          fontWeight: "600",
          fontSize: "15px",
          marginBottom: "2px",
          "@media(max-width:600px)": {
            fontSize: "13px",
          },
          ...labelStyle,
        }}
      >
        {label}
      </Typography>
      <TextField
        placeholder={placeholder}
        size="small"
        type="file"
        inputProps={{ accept, multiple: true }}
        onChange={onFileChange}
        disabled={disabled}
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
