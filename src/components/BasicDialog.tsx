import React, { ReactNode } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent, { DialogContentProps } from "@mui/material/DialogContent";
import DialogTitle, { DialogTitleProps } from "@mui/material/DialogTitle";

interface BasicDialogProps {
  children: ReactNode;
  title: string;
  open: boolean;
  handleClose: () => void;
  fullScreen?: boolean;
  sx?: DialogProps["sx"];
}

const BasicDialog: React.FC<BasicDialogProps> = ({
  children,
  title,
  open,
  handleClose,
  fullScreen,
  sx,
}) => {
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={sx}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
