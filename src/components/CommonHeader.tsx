import React, { ReactNode } from "react";
import { Box, Typography, Divider } from "@mui/material";

interface CommonHeaderProps {
  header: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  status?: string;
  statusColor?: string;
}

export const CommonHeader: React.FC<CommonHeaderProps> = ({
  header,
  children,
  style,
  headerStyle,
  status,
  statusColor,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "baseline", gap: 2 }}>
        <Box sx={{ ...style }}>
          <Typography
            sx={{
              color: "#202020",
              fontWeight: "600",
              fontSize: "20px",
              "@media(max-width: 900px)": {
                fontSize: "16px",
                "@media(max-width: 600px)": {
                  fontSize: "12px",
                },
              },
              ...headerStyle,
            }}
          >
            {header}
          </Typography>
          <Divider sx={{ border: "0.5px solid #77D177" }} />
        </Box>
        <Typography sx={{ color: statusColor ?? "black", fontWeight: "bold" }}>
          ({status})
        </Typography>
        {/* {status && <Typography>{status}</Typography>} */}
      </Box>
      {children}
    </Box>
  );
};
