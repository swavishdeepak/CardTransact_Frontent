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
        textTransform: "none",
        height: "1.6rem",
        fontWeight: "500",
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
