import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  InputAdornment,
  IconButton,
  Badge,
} from "@mui/material";

import messageImg from "../../assets/MessageImg.png";
import SearchIcon from "@mui/icons-material/Search";
import CustomTextInput from "../CustomInput";

interface sideBarProps {
  onClick?: (userId: number, userName: string) => void;
  style?: React.CSSProperties;
}

const Userlist = [
  {
    id: 1,
    userName: "deepak Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 2,
    userName: "Diwansh Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 3,
    userName: "Pawan Singh",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 4,
    userName: "Depesh Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 5,
    userName: "abhishek Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 6,
    userName: "Pawan Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 7,
    userName: "deepak Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 8,
    userName: "deepak Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 9,
    userName: "deepak Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 10,
    userName: "deepak Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 11,
    userName: "deepak Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 12,
    userName: "deepak Kumar",
    messageHeader: "Lorem Ipsum is simply dummy text",
  },
];

const MeessageSideBar: React.FC<sideBarProps> = ({ style, onClick }) => {
  const [searchUser, setSearchUser] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value);
  };

  const handleUserClick = (userId: number, userName: string) => {
    if (onClick) {
      onClick(userId, userName);
    }
  };

  const filteredUsers = Userlist.filter((user) =>
    user.userName.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          width: "25%",
          borderRight: "1px solid #ECECEC",
          "@media(max-width: 900px)": {
            width: "100%",
            "@media(max-width: 600px)": {
              width: "100%",
            },
          },
          ...style,
        }}
      >
        <Stack
          sx={{
            borderBottom: "1px solid #ECECEC",
            padding: "11px 14px 9px",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          <CustomTextInput
            placeholder={"Search..."}
            value={searchUser}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton size="small">
                    <SearchIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                borderRadius: "2rem",
                backgroundColor: "#F9F9F9",
                borderBottom: "none !important",
              },
              inputProps: {
                style: {
                  height: "1.2rem",
                  padding: "4px",
                },
              },
            }}
          />
        </Stack>
        {filteredUsers.map((v) => {
          return (
            <Stack
              onClick={() => handleUserClick(v.id, v.userName)}
              key={v.id}
              direction="row"
              spacing={2}
              style={{
                borderBottom: "1px solid #ECECEC",
                padding: "0.6rem 12px 6px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Avatar
                alt="img"
                src={messageImg}
                sx={{ width: 25, height: 25 }}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  sx={{
                    color: "#202020",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  {v.userName}
                </Typography>
                <Typography
                  sx={{
                    color: "#898989",
                    fontSize: "13px",
                    fontWeight: "400",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    maxWidth: "120px",
                    "@media(max-width: 900px)": {
                      maxWidth: "100%",
                      "@media(max-width: 600px)": {
                        maxWidth: "160px",
                      },
                    },
                  }}
                >
                  {v.messageHeader}
                </Typography>
              </Stack>
              {/* <Box
                sx={{
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  backgroundColor: "#C10404",
                  p: "2px",
                  justifyItems: "self-start",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{ color: "#fff", fontSize: "8px", fontWeight: "600" }}
                >
                  0
                </Typography>
              </Box> */}
              <Badge color="error" badgeContent={1} showZero>
                
              </Badge>
            </Stack>
          );
        })}
      </Box>
    </>
  );
};

export default MeessageSideBar;
