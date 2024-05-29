import React from "react";
import { Box, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";


// const useStyles = makeStyles({
//   header: {
//     fontSize: "15px !important",
//     fontWeight: "600 !important",
//   },
//   content: {
//     color: "rgba(58, 58, 58, 1) important",
//     fontSize: "13px important",
//     fontWeight: "300 important",
    
//   },
// });

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
  // const classes = useStyles();
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "0.56px solid rgba(137, 137, 137, 1)",
        padding: 1,
        width: "100%"
      }}
    >
      <Box  sx={{width: "20%",color: "rgba(58, 58, 58, 1) important",
    fontSize: "13px important",
    fontWeight: "300 important",}}>{sr}</Box>
      <Box  sx={{width: "20%",color: "rgba(58, 58, 58, 1) important",
    fontSize: "13px important",
    fontWeight: "300 important",}}>{date}</Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "15%" }}>
        <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
        <Typography sx={{color: "rgba(58, 58, 58, 1) important",
    fontSize: "13px important",
    fontWeight: "300 important",}}>{rental}</Typography>
      </Box>
      <Box sx={{width: "15%",color: "rgba(58, 58, 58, 1) important",
    fontSize: "13px important",
    fontWeight: "300 important",}}>{model} </Box>
      <Box  sx={{width: "15%",color: "rgba(58, 58, 58, 1) important",
    fontSize: "13px important",
    fontWeight: "300 important",}}>{duration}  </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "15%" }}>
        <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
        <Typography sx={{color: "rgba(58, 58, 58, 1) important",
    fontSize: "13px important",
    fontWeight: "300 important",}}>{commission}</Typography>
      </Box>
    </Box>
  );
};
