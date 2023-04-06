import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";

import Box from "@mui/material/Box";
function Dashboard() {
  return (
    <Box sx={{ marginX: 10 }}>
      <PageTitle title="Home" sub="View all related content" />
    </Box>
  );
}

export default Dashboard;
