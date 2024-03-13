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
  linearProgressColor = ""
}) => {
  const percentage = percent;
  const percentageString = `${percentage}%`;
  return (
    <CustomBox style={{
      padding: "18px",
      marginTop: "1.5rem"
    }}
    >
      <Box >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "5px", alignItems: "baseline" }}>
            <Typography sx={{color: "#000000"}}>{iconLeft}</Typography>
            <Typography sx={{color: "#202020",fontWeight: "600", fontSize: "1.1rem"}}>{value}</Typography>
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
            sx={{ marginTop: "1rem", width: "100%", background: "#DCDCDC",  // Remove default color
            '& .MuiLinearProgress-bar': {
                background: linearProgressColor  // Apply custom color
            } }}
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
