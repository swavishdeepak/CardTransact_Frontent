import React from "react";
import TextField from "@mui/material/TextField";
import { Typography,Box } from "@mui/material";
import { Colors } from "../utils/Colors";

interface CustomTextInputProps {
  label?: string;
  style?: React.CSSProperties;
  borderRadius?: string | number;
  labelStyle?: React.CSSProperties;
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  value?: string;
  name?: string;
  error?: string | undefined;
  multiline?: boolean;
  rows?: number;
  InputProps?: {
    startAdornment?: React.ReactNode;
    style?: React.CSSProperties;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  };
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  style,
  borderRadius,
  labelStyle,
  placeholder,
  onClick,
  onChange,
  onKeyPress,
  name,
  error,
  value,
  multiline,
  InputProps,
  rows,
  ...props
}) => {
  const isError = !!error;
  return (
    <Box>
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
        name={name}
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
              border: isError?"1px solid red": "1px solid #DCDCDC",
            },
          },
        }}
        InputProps={{
          style: {
            borderRadius: "7.5px",
            fontSize: "12px",
            fontWeight: "400",
            "&::placeholder": {
              color: "#898989",
            },
          } as React.CSSProperties,
        }}
        {...props}
      />
      {error && (
        <Typography
          sx={{
            color: Colors.deletebtnColor,
            marginTop: "0px",
            fontSize: "14px",
          }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CustomTextInput;
