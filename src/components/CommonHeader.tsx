import React, { ReactNode } from "react";
import { Box, Typography, Divider } from "@mui/material";

interface CommonHeaderProps {
  header: string;
  children?: ReactNode;
}

export const CommonHeader: React.FC<CommonHeaderProps> = ({
  header,
  children,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography
          sx={{ color: "#202020", fontWeight: "600", fontSize: "18px" }}
        >
          {header}
        </Typography>
        <Divider sx={{ border: "1px solid #77D177" }} />
      </Box>
      {children}
    </Box>
  );
};
