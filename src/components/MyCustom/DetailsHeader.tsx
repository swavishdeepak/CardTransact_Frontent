import React from "react";
import { Typography } from "@mui/material";
import { Colors } from "../../utils/Colors";

interface DetailsHeaderProps {
  heading: string;
}

const DetailsHeader: React.FC<DetailsHeaderProps> = ({ heading }) => {
  return (
    <Typography
      sx={{
      // color: `${Colors?.LinkColor}`,
        color: "#78AF81",
        fontSize: "15px",
        fontWeight: "700",
      }}
    >
      {heading}
    </Typography>
  );
};

export default DetailsHeader;
