import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MasonryImageList({ title, sub }) {
  return (
    <Box sx={{ marginY: 5 }}>
      <Typography gutterBottom variant="h3" component="div">
        <b>{title}</b>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {sub}
      </Typography>
    </Box>
  );
}
