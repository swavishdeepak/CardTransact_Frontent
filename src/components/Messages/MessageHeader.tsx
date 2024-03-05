import React from "react";
import { Box, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import messageIcon from "../../assets/messageIcon.svg"

interface headerProps {
    style?: React.CSSProperties
    name?: string;
}

const MessageHeader: React.FC<headerProps> = ({style, name}) => {
  return (
    <>
      <Box sx={{ borderBottom: "1px solid #ECECEC",padding: "11px 14px 15px", ...style }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar alt="" sx={{ width: 25, height: 25 }} src={messageIcon} />
          <Typography>{name}</Typography>
        </Box>
      </Box>
    </>
  );
};
export default MessageHeader;
