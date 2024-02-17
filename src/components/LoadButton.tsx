import { Button, CircularProgress, ButtonProps } from '@mui/material';
import React, { FC } from 'react';

interface LoadButtonProps extends ButtonProps {
  loading?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const LoadButton: FC<LoadButtonProps> = ({ children, loading, onClick, style, ...props }) => {
  return (
    <Button {...props}
      onClick={onClick}
      sx={{
        color: "#fff",
        backgroundColor:"rgba(88, 158, 88, 1)",
        boxShadow:" 5.625px 7.5px 9.375px 0px #0000003D",
        borderRadius: "11px",
        textTransform: "none",
        fontSize: "15px",
        "&:hover": {
          backgroundColor: "#589E58",
        },
        ...style
      }}
    >
      {loading ? <CircularProgress sx={{ padding: "8px" }} /> : children}
    </Button>
  );
};
