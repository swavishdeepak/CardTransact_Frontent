import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { Chat } from "../../components/Messages/Chat";
import MeessageSideBar from "../../components/Messages/MessageSideBar";
import MessageHeader from "../../components/Messages/MessageHeader";

export const Message = () => {
  const [selectedUserId, setSelectedUserId] = useState({});

  const handleUserClick = (userId: any, userName: string) => {
    setSelectedUserId({ userId, userName });
    console.log("sjfjs", selectedUserId);
  };
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox style={{ padding: 0 }}>
        <Box sx={{ width: "100%", display: "flex", height: "68vh" }}>
          <MeessageSideBar
            onClick={handleUserClick}
            style={{
              overflowY: "auto",
            }}
          />

          <Box
            sx={{
              width: "75%",
            }}
          >
            <Chat >
              <MessageHeader
                name={selectedUserId.userName}
                style={{
                  position: "relative",
                  zIndex: "100",
                }}
              />
            </Chat>
          </Box>
        </Box>
      </CustomBox>
    </Box>
  );
};
