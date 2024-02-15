import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import InputAdornment from "@mui/material/InputAdornment";
import profileIcon from "../assets/profileIcon.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logoutIcon from "../assets/logout.svg";
import profileIcon1 from "../assets/profileIcon1.svg";
import Notification from "./Notification";
import CustomButton from "./CustomButton";

const MainHeader: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openProfile, setOpenProfile] = React.useState<null | HTMLElement>(
    null
  );
  const [openNotification, setOpenNotification] =
    React.useState<null | HTMLElement>(null);

  const open = Boolean(openProfile);
  const openNot = Boolean(openNotification);

  const handleOpenNotification = (event: any) => {
    setOpenNotification(event.currentTarget);
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };

  const handleClick = (event: any) => {
    setOpenProfile(event.currentTarget);
  };
  const handleClose = () => {
    setOpenProfile(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search submit logic here
    console.log("Search value:", searchValue);
  };

  // const notifications = [
  //   {
  //     id: 1,
  //     title: "Delete Request",
  //     description: "Request to delete a user (employees)",
  //   },
  //   {
  //     id: 2,
  //     title: "Delete Request",
  //     description: "Request to delete a user (employees)",
  //   },
  //   {
  //     id: 3,
  //     title: "Delete Request",
  //     description: "Request to delete a user (employees)",
  //   },
  //   {
  //     id: 4,
  //     title: "Delete Request",
  //     description: "Request to delete a user (employees)",
  //   },
  // ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <TextField
        // onChange={handleSearchChange}
        //variant="filled"
        placeholder="search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton size="small">
                <SearchIcon sx={{ fontSize: "1.2rem" }} />
              </IconButton>
            </InputAdornment>
          ),
          style: {
            borderRadius: "2rem",
            backgroundColor: "#F9F9F9",
            // alignItems: "flex-start",
            borderBottom: "none !important",
          },
          inputProps: {
            style: {
              height: "1.5rem",
              padding: "4px",
            },
          },
        }}
        sx={{
          width: "50%",
        }}
      />
      <Box sx={{ display: "flex", gap: 2 }}>
        <CircleNotificationsIcon
          onClick={handleOpenNotification}
          sx={{ color: "#898989", cursor: "pointer" }}
        />
        <img
          src={profileIcon}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      </Box>
      {/* <Menu
        id="basic-menu"
        anchorEl={openNotification}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        open={openNot}
        onClose={handleCloseNotification}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Notification notifications={notifications}>
              <CustomButton 
              label="Edit"
              style={{
                border: "1px solid #898989",
                color: "#898989",
                fontSize: "10px"
              }}

              />
              <CustomButton 
              label="Approved"
              style={{
                backgroundColor: "#048519",
                color: "#fff",
                fontSize: "10px"
              }}

              />
              <CustomButton 
              label="Reject"
              style={{
                backgroundColor: "#C10404",
                color: "#fff",
                fontSize: "10px"
              }}
              />
           
        </Notification>
      </Menu> */}

      <Menu
        id="basic-menu"
        anchorEl={openProfile}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box>
          <MenuItem sx={{ display: "flex", gap: 1 }} onClick={handleClose}>
            <img src={profileIcon1} alt="" />
            <Typography
              sx={{ color: "#898989", fontWeight: "400", fontSize: "12px" }}
            >
              View Profile
            </Typography>
          </MenuItem>
          <MenuItem sx={{ display: "flex", gap: 1 }} onClick={handleClose}>
            <img src={logoutIcon} alt="" />
            <Typography
              sx={{ color: "#898989", fontWeight: "400", fontSize: "12px" }}
            >
              Logout
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
};

export default MainHeader;
