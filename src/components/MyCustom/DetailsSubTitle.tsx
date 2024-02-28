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
        "@media(max-width:600px)":{
          fontSize: "12px",
        }
      }}
    >
      {title}
    </Typography>
  );
};

export default DetailsSubTitle;
