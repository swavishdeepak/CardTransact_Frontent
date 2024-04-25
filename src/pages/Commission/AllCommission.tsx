import React  from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";

import { AllCommissionComp } from "../../components/Commission/AllCommissionComp";





export const AllCommission: React.FC = () => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
     <AllCommissionComp/>
    </Box>
  );
};


