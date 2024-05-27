import React, { useState } from "react";
import { Box} from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { Chat } from "../../components/Messages/Chat";
import MeessageSideBar from "../../components/Messages/MessageSideBar";
import MessageHeader from "../../components/Messages/MessageHeader";

interface SelectedUser {
  userId: any;
  userName: string;
}

 const Message = () => {
  const [selectedUserId, setSelectedUserId] = useState<SelectedUser | null>(null);
  const handleUserClick = (userId: any, userName: string) => {
    setSelectedUserId({userId, userName });
    
  };

  console.log("selectedUserId",selectedUserId)

  let user = selectedUserId ? selectedUserId.userName || "": "";
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox style={{ padding: 0}}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            height: "68vh",
            "@media(max-width: 900px)": {
              flexDirection: "column",
              "@media(max-width: 600px)": {
                flexDirection: "column",

              },
            },
          }}
        >
          <MeessageSideBar
            onClick={handleUserClick}
            style={{
              overflowY: "auto",

            }}
          />

         {selectedUserId && <Box
            sx={{
              width: "75%",
              "@media(max-width: 600px)": {
                width: "100%",
                height: "100vh"
              },
            }}
          >
            <Chat>
              <MessageHeader
                name={user}
                style={{
                  position: "relative",
                  zIndex: "100",
                }}
              />
            </Chat>
          </Box>}
        </Box>
      </CustomBox>
    </Box>
  );
};

export default Message;
