import { Dialog, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { ReactNode } from "react";

interface SimpleDialogProps {
  open: boolean;
  handleClose: () => void;
  children?: ReactNode;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const SimpleDialog = ({
  open,
  children,
  // title,
  // style,
  // contentStyle,
  handleClose,
}: SimpleDialogProps) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        sx: {
          borderRadius: "15px",
          background: "transparent",
          width: "fit-content",
          minWidth: "370px",
          maxHeight: "80%",
        },
      }}
    >
      <DialogContent sx={{ padding: "0px" }}>{children}</DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
