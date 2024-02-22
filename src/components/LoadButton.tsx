import { Button, CircularProgress, ButtonProps } from '@mui/material';
import React, { FC } from 'react';

interface LoadButtonProps extends ButtonProps {
  loading?: boolean;
  style?: React.CSSProperties;
  hoverColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const LoadButton: FC<LoadButtonProps> = ({ children, loading,hoverColor, onClick, style, ...props }) => {
  return (
    <Button {...props}
      onClick={onClick}
      sx={{
        color: "#fff",
        boxShadow:" 5.625px 7.5px 9.375px 0px #0000003D",
        background: "linear-gradient(180deg, #069FFF 0%, #589E58 0.01%, #77D177 100%)",
        borderRadius: "11px",
        fontWeight: "700",
        width: "20%",
        textTransform: "none",
        fontSize: "15px",
        "&:hover": {
          backgroundColor: hoverColor ? hoverColor : "#589E58",
        },
        ...style
      }}

      

    >
      {loading ? <CircularProgress sx={{ padding: "8px" }} /> : children}
    </Button>
  );
};
