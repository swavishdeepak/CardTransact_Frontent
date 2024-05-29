import React from "react";
import { Box, Typography } from "@mui/material";
import { PreviewRowItem } from "./PreviewRowItem";



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
    model: "Ingenico Desk 500 ",
    rent: "26.4",
    month: "20/2/2024",
    commission: "500",
    bouns: "00.00",
  },
];

interface PreviewProps {}
export const Preview: React.FC<PreviewProps> = () => {
  
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
          Options
        </Typography>
        <Typography  sx={{ width: "20%" }}>
          Model
        </Typography>
        <Typography  sx={{ width: "15%" }}>
          Rent
        </Typography>
        <Typography  sx={{ width: "15%" }}>
          Month
        </Typography>
        <Typography  sx={{ width: "15%" }}>
          Commission
        </Typography>
        <Typography  sx={{ width: "15%" }}>
          Bouns
        </Typography>
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
