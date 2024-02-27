import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";


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

interface rowItemProps {
    key?: number
    sr: string;
    date: string;
    rental: string;
    model: string;
    duration: string;
    commission:string;

}

export const PreviewRowItem:React.FC<rowItemProps> = ({sr,date,rental,model,duration,commission,key}) => {
  const classes = useStyles();
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "0.56px solid rgba(137, 137, 137, 1)",
        padding: 1,
      }}
    >
      <Typography className={classes.content}>{sr}</Typography>
      <Typography className={classes.content}>{date}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
        <Typography className={classes.content}>{rental}</Typography>
      </Box>
      <Typography className={classes.content}>{model}</Typography>
      <Typography className={classes.content}>{duration}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
        <Typography className={classes.content}>{commission}</Typography>
      </Box>
    </Box>
  );
};
