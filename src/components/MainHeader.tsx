import React, { useCallback } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Box, Typography } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import InputAdornment from "@mui/material/InputAdornment";
import profileIcon from "../assets/profileIcon.svg";
import Menu from "@mui/material/Menu";
//import MenuItem from "@mui/material/MenuItem";
//import { Colors } from "../utils/Colors";
import { logout } from "../redux/store/reducers/verifyOtp";
import logoutIcon from "../assets/logout.svg";
import profileIcon1 from "../assets/profileIcon1.svg";
import Notification from "./Notification";
//import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

interface mainHeaderProps {
  style?: React.CSSProperties;
  showhide?: boolean;
}

const MainHeader: React.FC<mainHeaderProps> = ({ style, showhide = true }) => {
  //const [searchValue, setSearchValue] = useState<string>("");
  const [openProfile, setOpenProfile] = React.useState<null | HTMLElement>(
    null
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openNotification, setOpenNotification] =
    React.useState<null | HTMLElement>(null);

  const openprofile = Boolean(openProfile);
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

  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(event.target.value);
  // };

  // const handleSearchSubmit = () => {
  //   console.log("Search value:", searchValue);
  // };

  const handleLogout = useCallback(() => {
    localStorage.clear();
    dispatch(logout());
    navigate("/auth/login");
  }, [dispatch, navigate]);

  

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        ...style,
      }}
    >
      {showhide && (
        <TextField
          // onChange={handleSearchChange}
          //variant="filled"
          placeholder="Search..."
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
            "@media(max-width: 600px)": {
              width: "70%",
            },
          }}
        />
      )}
      <Box sx={{ display: "flex", gap: 3 }}>
        <Badge
          color="error"
          //variant="dot"
          badgeContent={1}
          sx={{ cursor: "pointer" }}
          onClick={handleOpenNotification}
        >
          <CircleNotificationsIcon sx={{ color: "#898989" }} />
        </Badge>

        <img
          src={profileIcon}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      </Box>
      <Menu
        id="basic-menu"
        PaperProps={{
          style: {
            borderRadius: "1rem",
            border: "1px solid rgba(236, 236, 236, 1)",
            boxShadow: " -4px 4px 8px 0.5px rgba(0, 0, 0, 0.3)",
          },
        }}
        anchorEl={openNotification}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        open={openNot}
        onClose={handleCloseNotification}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Notification />
        
      </Menu>

      <Menu
        id="basic-menu"
        anchorEl={openProfile}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        open={openprofile}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ p: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Link
            to="/userProfile"
            style={{ display: "flex", gap: "7px", textDecoration: "none" }}
          >
            <img src={profileIcon1} alt="" />
            <Typography
              sx={{ color: "#898989", fontWeight: "400", fontSize: "14px" }}
            >
              View Profile
            </Typography>
          </Link>
          <Box
            sx={{ display: "flex", gap: "7px", cursor: "pointer" }}
            onClick={handleLogout}
          >
            <img src={logoutIcon} alt="" />
            <Typography
              sx={{ color: "#898989", fontWeight: "400", fontSize: "14px" }}
            >
              Logout
            </Typography>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default MainHeader;
