import React from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../Dashboard/Header";
import { CustomBox } from "../MyCustom/CustomBox";

interface detailsProps {
  heading: string;
  children: React.ReactNode;
}

const CustomDetails: React.FC<detailsProps> = ({ heading, children }) => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <Typography
          sx={{
            color: "#20202",
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          {heading}

        </Typography>
        {children}
      </CustomBox>
    </Box>
  );
};

export default CustomDetails;
