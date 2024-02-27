
import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PreviewRowItem } from "./PreviewRowItem";


const useStyles = makeStyles({
  header: {
    fontSize: "15px !important",
    fontWeight: "600 !important",
  },
  content: {
    color: "rgba(58, 58, 58, 1) !important",
    fontSize: "13px !important",
    fontWeight: "300 !important",
    lineHeight: "15px !important",
  },
});
const data1 = [
  {
    sr: "01",
    date: "20/2/2024",
    rental: "01",
    model: "20/2/2024",
    duration: "01",
    commission: "20/2/2024",
  },
  {
    sr: "02",
    date: "20/2/2024",
    rental: "01",
    model: "20/2/2024",
    duration: "01",
    commission: "20/2/2024",
  },
  {
    sr: "03",
    date: "20/2/2024",
    rental: "01",
    model: "20/2/2024",
    duration: "01",
    commission: "20/2/2024",
  },
];

interface PreviewProps {
  
 
}

export const Preview: React.FC<PreviewProps> = () => {
  const classes = useStyles();
  return (

      <Box
        sx={{
          border: "1.5px solid rgba(236, 236, 236, 1)",
          borderRadius: "10px",
          p: 2,
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(137, 137, 137, 1)",
            padding: 1,
          }}
        >
          <Typography className={classes.header}>Sr.No</Typography>
          <Typography className={classes.header}>Date</Typography>
          <Typography className={classes.header}>Rental</Typography>
          <Typography className={classes.header}>Model</Typography>
          <Typography className={classes.header}>Duration</Typography>
          <Typography className={classes.header}>Commission</Typography>
        </Box>
        {data1.map((data, index) => {
          return (
            <PreviewRowItem
              key={index}
              sr={data.sr}
              date={data.date}
              rental={data.rental}
              model={data.model}
              duration={data.duration}
              commission={data.commission}
            />
          );
        })}
      </Box>
  );
};
