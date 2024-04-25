import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PreviewRowItem } from "./PreviewRowItem";
import { Commission } from '../../utils/SideBarItem';

const useStyles = makeStyles({
  header: {
    fontSize: "15px !important",
    fontWeight: "600 !important",
    "@media(max-width: 600px)":{
      fontSize: "12px !important"
   }
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
    option: "options1",
    model: "Ingenico Desk 500",
    rent: "26.4",
    month: "20/2/2024",
    commission: "500",
    bouns: "00.00",
  },
  {
    option: "options1",
    model: "Ingenico Desk 500",
    rent: "26.4",
    month: "20/2/2024",
    commission: "500",
    bouns: "00.00",
  },
  {
    option: "options1",
    model: "Ingenico Desk 500",
    rent: "26.4",
    month: "20/2/2024",
    commission: "500",
    bouns: "00.00",
  },
  
  
];

interface PreviewProps {}

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
        <Typography className={classes.header}>Options</Typography>
        <Typography className={classes.header}>Model</Typography>
        <Typography className={classes.header}>Rent</Typography>
        <Typography className={classes.header}>Month</Typography>
        <Typography className={classes.header}>Commission</Typography>
        <Typography className={classes.header}>Bouns</Typography>
      </Box>
      {data1.map((data, index) => {
        return (
          <PreviewRowItem
            key={index}
            sr={data.option}
            date={data.model}
            rental={data.rent}
            model={data.month}
            duration={data.commission}
            commission={data.bouns}
          />
        );
      })}
    </Box>
  );
};
