import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";

export default function SimpleBackdrop({ transcript, openState }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openState}
      >
        <center>
          <Typography variant="h6" component="div">
            {transcript}
          </Typography>
        </center>
      </Backdrop>
    </div>
  );
}
