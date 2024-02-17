import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface BasicDialogProps extends Omit<DialogProps, 'onClose'> {
  title: string;
  open: boolean;
  handleClose: () => void;
  fullScreen?: boolean;
  sx?: object;
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
      sx={sx}
      
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
