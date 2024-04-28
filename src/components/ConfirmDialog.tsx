import React, { ReactNode } from "react";
import BasicDialog from "./BasicDialog";
import { Box,Typography } from "@mui/material";



interface ConfirmDialogProps {
  open: boolean;
  title?: string | ReactNode;
  desc?: string;
  handleConfirm?: () => void;
  handleClose?: () => void;
  customButton?: ReactNode;
  children: ReactNode;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  desc,
  handleConfirm,
  handleClose,
  children,
}) => {
  return (
    <>
    <BasicDialog
      open={open}
      handleClose={handleClose}
      sx={{ padding: "10px 10px"}}
      

    >
      <Box >
        <Typography
          sx={{
            textAlign: "center",
            color: "#000000",
            fontWeight: "600",
            marginBottom: "10px",
            fontSize: "20px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "#000000",
            fontWeight: "700",
            fontSize: "12px",
          }}
        >
          {desc}
        </Typography>
        {children}
      </Box>
    </BasicDialog>
    </>
  );
};

export default ConfirmDialog;
