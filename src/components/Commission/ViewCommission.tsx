import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

interface ViewCommiss {}

export const ViewCommission: React.FC<ViewCommiss> = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const aquirerData: { type: string }[] = [
        { type: "Overall" },
        { type: "World Pay" },
        { type: "EVO" },
        { type: "FDMS" },
        { type: "ELAVO" },
      ];

  const handleItemClick = (index: any) => {
    setSelectedItemIndex(index);
  };
  
  return (
    <Grid item xs={12} sm={4}>
            {aquirerData.length > 0 &&
              aquirerData.map((data, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                        backgroundColor:
                        selectedItemIndex === index
                          ? "#898989"
                          : "rgba(224, 224, 224, 1)",
                      borderRadius: "10px",
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      fontSize: "16px",
                      alignItems: "center",
                      padding: 1.4,
                      cursor: "pointer",
                      marginTop: "1.5rem",
                    }}
                    onClick={() => handleItemClick(index)}
                  >
                    {data.type}
                  </Box>
                );
              })}
          </Grid>
  );
};
