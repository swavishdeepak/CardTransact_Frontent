import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { Colors } from "../utils/Colors";

interface CustomButtonProps extends ButtonProps {
  label: string;
  style?: React.CSSProperties;
  hoverColor?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  hoverColor,
  style,
  ...props
}) => {
  return (
    <Button
      sx={{
        backgroundColor: "#fff",
        color: "#fff",
        textTransform: "none",
        borderRadius: "8px",
        fontWeight: "700",
        fontSize: "12px",
        "@media(max-width: 600px)":{
          fontSize: "10px",
          borderRadius: "10px",
        },
        '&:hover':{
          backgroundColor: hoverColor
        },
        ...style,
      }}
      {...props}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
