import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Colors } from "../utils/Colors";

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
      sx={{
        '& .MuiDialog-paper': {
           border: `1px solid ${Colors.successColor}`,
           borderRadius: "7.5px",
           boxShadow: "2.8125px 2.8125px 8.4375px 0px #0000002E",

        },
        ...sx
      }}
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
