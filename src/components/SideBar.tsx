import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MainHeader from "./MainHeader";
import { useLocation } from "react-router-dom";
import dashboardIcon from "../assets/dashboardIcon.svg";
import { Dashboard, DeleteData, MerchantItem, Messages, SidebarUserItems } from "../utils/SideBarItem";
import { ApplicationItems } from "../utils/SideBarItem";
import { Notification } from "../utils/SideBarItem";
import { Commission } from "../utils/SideBarItem";
import { Reports } from "../utils/SideBarItem";
// import { makeStyles } from "@mui/styles";
import { TransactionReport } from "../utils/SideBarItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

import SideBarComponent from "./SideBarComponent/SideBarComponent";
import SideBarWithOutDropdown from "./SideBarComponent/SideBarWithOutDropdown";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 32px)`,
  [theme.breakpoints.only("xs")]: {
    width: `calc(${theme.spacing(0)} + 0px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "left",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1.5),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 4,
  [theme.breakpoints.only("xs")]: {
    zIndex: theme.zIndex.drawer + 0, // Set to 0 width on mobile devices
  },
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  [theme.breakpoints.only("xs")]: {
    width: 0,
  },
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// const sideBarStyle = makeStyles((theme) => ({
//   listStyleMain: {
//     color: "#2E2C34",
//     fontWeight: "700 !important",
//     fontSize: "1rem !important",
//   },
// }));

export default function SideBar() {
  // const classes = sideBarStyle();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const [open, setOpen] = React.useState(!isMobile);

  const location = useLocation();
  const [collapseState, setCollapseState] = React.useState({
    isCollapse: false,
    isCollapseApplication: false,
    isCollapseCommission: false,
    isCollapseReport: false,
    isCollapseNtf: false,
    isCollapseTransactionReport: false,
  });

  const handleCollapse = (key: any) => {
    setCollapseState((prevState: any) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        // elevation={0}
        position="fixed"
        open={open}
        sx={{
          borderBottom: "1px solid #DCDCDC",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 0px 6px #0000001a",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#fff",
            boxShadow: "none",
            padding: "14px 14px !important",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{
              marginRight: 5,
              color: "#898989",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <MainHeader showhide={open && isMobile ? false : true} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <MenuIcon onClick={handleDrawerClose} />
            ) : (
              <>
                <List sx={{ display: "flex", alignItems: "left", gap: 1 }}>
                  <Box onClick={handleDrawerClose}>
                    {!isMobile ? <MenuIcon /> : <CloseIcon />}
                  </Box>
                  <Link
                    to="/dashboard"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      textDecoration: "none",
                    }}
                  >
                    <img src={dashboardIcon} alt="icon" />
                    <Typography
                      sx={{
                        color: "#2E2C34",
                        fontWeight: "700 !important",
                        fontSize: "1rem !important",
                      }}
                    >
                      Card Transact
                    </Typography>
                  </Link>
                </List>
              </>
            )}
          </IconButton>
        </DrawerHeader>
        {/* Dashboard */}
        <SideBarWithOutDropdown
          items={Dashboard}
          sx={{ marginTop: "0.7rem" }}
          // to={"/dashboard"}
          // text="Dashboard"
          location={location}
          open={open}
          // pathMatch="/dashboard"
        />
        {/* User */}
        <SideBarComponent
          items={SidebarUserItems}
          isCollapsed={collapseState.isCollapse}
          handleCollapse={() => handleCollapse("isCollapse")}
          location={location}
          open={open}
        />
        {/* Application */}
        <SideBarComponent
          items={ApplicationItems}
          isCollapsed={collapseState.isCollapseApplication}
          handleCollapse={() => handleCollapse("isCollapseApplication")}
          location={location}
          open={open}
        />
        {/* Merchant */}
        <SideBarWithOutDropdown
          // to={"/merchants"}
          // text="Merchants"
          items={MerchantItem}
          location={location}
          open={open}
          // pathMatch="/merchants"
        />
        {/* Commission */}
        <SideBarComponent
          items={Commission}
          isCollapsed={collapseState.isCollapseCommission}
          handleCollapse={() => handleCollapse("isCollapseCommission")}
          location={location}
          open={open}
        />
        {/* Transaction Reports */}
        {/* <SideBarComponent
          items={TransactionReport}
          isCollapsed={collapseState.isCollapseTransactionReport}
          handleCollapse={() => handleCollapse("isCollapseTransactionReport")}
          location={location}
          open={open}
        />
         */}
          <SideBarWithOutDropdown
          // to={"/deleteData"}
          // text="Delete Data"
          items={TransactionReport}
          location={location}
          open={open}
          // pathMatch="/deleteData"

        />
        {/* Reports */}
        <SideBarComponent
          items={Reports}
          isCollapsed={collapseState.isCollapseReport}
          handleCollapse={() => handleCollapse("isCollapseReport")}
          location={location}
          open={open}
        />
        {/* Notification */}
        <SideBarComponent
          items={Notification}
          isCollapsed={collapseState.isCollapseNtf}
          handleCollapse={() => handleCollapse("isCollapseNtf")}
          location={location}
          open={open}
        />
        {/* Messages */}
        <SideBarWithOutDropdown
          // to={"/messages"}
          // text="Messages"
          items={Messages}
          location={location}
          open={open}
          // pathMatch="/messages"
          notificationShow={true}
        />
        {/* delete data */}
        <SideBarWithOutDropdown
          // to={"/deleteData"}
          // text="Delete Data"
          items={DeleteData}
          location={location}
          open={open}
          // pathMatch="/deleteData"

        />
      </Drawer>
    </Box>
  );
}
