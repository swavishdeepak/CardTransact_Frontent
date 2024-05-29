import React from "react";
import { Box, Typography } from "@mui/material";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";



interface rowItemProps {
  key?: number;
  GBPTurnOver: string;
  debitCard: string;
  creditCard: string;
  
}

export const CardPreviewRowItem: React.FC<rowItemProps> = ({
  GBPTurnOver,
  debitCard,
  creditCard,
  key,
}) => {
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "0.56px solid rgba(137, 137, 137, 1)",
        padding: 1,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "20%" }}>
        <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
        <Typography
          sx={{
            color: "rgba(58, 58, 58, 1) important",
            fontSize: "13px important",
            fontWeight: "300 important",
          }}
        >
           {GBPTurnOver}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "20%",
          color: "rgba(58, 58, 58, 1) important",
          fontSize: "13px important",
          fontWeight: "300 important",
        }}
      >
        {debitCard}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "15%" }}>
        <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
        <Typography
          sx={{
            color: "rgba(58, 58, 58, 1) important",
            fontSize: "13px important",
            fontWeight: "300 important",
          }}
        >
          {creditCard}
        </Typography>
      </Box>
    
      
    </Box>
  );
};
