import { Box, Typography } from "@mui/material";
import React from "react";
import { LinearProgress } from "@mui/material";
import { CustomBox } from "../MyCustom/CustomBox";

// Define the type for the props
interface CardProps {
  value: number;
  iconLeft?: JSX.Element;
  percent: number;
  iconRight: JSX.Element;
  description: string;
  linearProgressColor?: string;
}

const Card: React.FC<CardProps> = ({
  value,
  iconLeft,
  percent,
  iconRight,
  description,
  linearProgressColor = "primary"
}) => {
  const percentage = percent;
  const percentageString = `${percentage}%`;
  return (
    <CustomBox
    >
      <Box >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{color: "#000000"}}>{iconLeft}</Typography>
            <Typography sx={{color: "#202020",fontWeight: "600", fontSize: "1rem"}}>{value}</Typography>
          </Box>
          <Typography>{iconRight}</Typography>
        </Box>
        <Typography
          sx={{ color: "#898989", fontSize: "11px", fontWeight: "400" }}
        >
          {description}
        </Typography>

        <Box style={{ display: "flex", gap: 10}}>
          <LinearProgress
            sx={{ marginTop: "1rem", width: "100%", backgroundColor: linearProgressColor }}
            variant="determinate"
            value={percentage}
          />
          <Typography sx={{alignItems: "end", fontSize: "10px", marginTop: "10px",justifyContent: "center"}}>{percentageString}</Typography>
        </Box>
      </Box>
    </CustomBox>
  );
};

export default Card;
