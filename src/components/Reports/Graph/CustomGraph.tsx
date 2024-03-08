import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer } from "recharts";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Colors } from "../../../utils/Colors";
import { Link } from "react-router-dom";

interface GraphHeaderProps {
  header?: string;
  viewDetails?: React.ReactNode;
  year?: string;
  pound?: string;
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  showPoundIcon?: boolean;
}

export const CustomGraph: React.FC<GraphHeaderProps> = ({
  header,
  viewDetails,
  year,
  pound,
  children,
  showPoundIcon = true,
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: Colors.Textcolor,
              fontWeight: "600",
              fontSize: { xs: "14px", md: "1.3rem" },
            }}
          >
            {" "}
            {header}
          </Typography>

          <Link to="#" style={{ color: Colors.LinkColor }}>
            {viewDetails}
          </Link>
        </Box>
        <MoreVertIcon sx={{ color: Colors.editColor }} />
      </Box>
      <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
        {showPoundIcon && (
          <CurrencyPoundIcon
            sx={{ backgroundClip: Colors.moreColor, fontSize: "1.5rem" }}
          />
        )}
        <Typography
          sx={{ color: "#202020", fontSize: "1.5rem", fontWeight: "700" }}
        >
          {pound}
        </Typography>
      </Box>
      <Typography sx={{ color: Colors.editColor }}>{year}</Typography>
      {children && ( // Render ResponsiveContainer only if children is defined
        <ResponsiveContainer width="100%" height={210}>
          {children}
        </ResponsiveContainer>
      )}
    </Box>
  );
};
