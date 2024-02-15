import React from "react";
import { Typography } from "@mui/material";

interface DetailsSubTitleProps {
  title: string;
}

const DetailsSubTitle: React.FC<DetailsSubTitleProps> = ({ title }) => {
  return (
    <Typography
      sx={{
       color: "#000000",
        fontSize: "15px",
        fontWeight: "400",
      }}
    >
      {title}
    </Typography>
  );
};

export default DetailsSubTitle;
