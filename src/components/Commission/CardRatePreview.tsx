import React from "react";
import { Box, Typography } from "@mui/material";
import { CardPreviewRowItem } from "./CardPreviewRowItem";



const data1 = [
  {
    GBPTurnOver: "100K",
    debitCard: "0.49%",
    creditCard: "0.90%",
    
  },
  {
    GBPTurnOver: "100K",
    debitCard: "0.58%",
    creditCard: "0.92%",
    
  },
  {
    GBPTurnOver: "100K",
    debitCard: "0.30%",
    creditCard: "0.80%",
    
  },
  {
    GBPTurnOver: "100K",
    debitCard: "0.30%",
    creditCard: "0.80%",
    
  },
  
];

interface PreviewProps {}

export const CardRatePreview: React.FC<PreviewProps> = () => {
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
          width: "100%",
          fontSize: "15px !important",
          fontWeight: "600 !important",
          "@media(max-width: 600px)": {
            fontSize: "12px !important",
          },
        }}
      >
        <Typography  sx={{ width: "20%" }}>
          GBP Turnover
        </Typography>
        <Typography  sx={{ width: "20%" }}>
          Debit Card
        </Typography>
        <Typography  sx={{ width: "15%" }}>
          Credit Card
        </Typography>
       
      </Box>
      {data1.map((data, index) => {
        return (
          <CardPreviewRowItem
            key={index}
            GBPTurnOver={data.GBPTurnOver}
            debitCard={data.debitCard}
            creditCard={data.creditCard}
            
          />
        );
      })}
    </Box>
  );
};
