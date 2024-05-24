import { Button, CircularProgress } from "@mui/material";
import React from "react";

const LoadingButton = ({
  sx,
  size = "small",
  color = "success",
  variant = "contained",
  children,
  loading = false,
  onClick
}) => {
  return (
    <Button onClick={onClick} sx={{ ...sx }} size={size} color={color} variant={variant}>
      {loading ? <CircularProgress size={20} /> : children}
    </Button>
  );
};

export default LoadingButton;
