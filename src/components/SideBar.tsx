import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { Colors } from "../utils/Colors";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MainHeader from "./MainHeader";
import { Collapse } from "@mui/material";
import { useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import dashboardIcon from "../assets/dashboardIcon.svg";
import { SidebarUserItems } from "../utils/SideBarItem";
import { ApplicationItems } from "../utils/SideBarItem";
import { Notification } from "../utils/SideBarItem";
import { Commission } from "../utils/SideBarItem";
import { Reports } from "../utils/SideBarItem";
import { Messages } from "../utils/SideBarItem";
import { DeleteData } from "../utils/SideBarItem";
import { makeStyles } from "@mui/styles";
import { TransactionReport } from "../utils/SideBarItem";
import useMediaQuery from "@mui/material/useMediaQuery";

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

const sideBarStyle = makeStyles((theme) => ({
  listStyleMain: {
    color: "#2E2C34",
    fontWeight: "700 !important",
    fontSize: "1rem !important",
  },
}));

export default function SideBar() {
  const classes = sideBarStyle();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const [open, setOpen] = React.useState(!isMobile);

  // const [collapse, setCollapse] = React.useState({
  //   isCollapseUser: false,
  //   isCollapseApplication: false,
  //   isCollapseCommission: false,
  //   isCollapseReport: false,
  //   isCollapseNotification: false,
  // });
  const [isCollapse, setIsCollapse] = React.useState(false);
  const [isCollapseApplication, setIsCollapseApplication] =
    React.useState(false);
  const [isCollapseCommission, setIsCollapseCommission] = React.useState(false);
  const [isCollapseReport, setIsCollapseReport] = React.useState(false);
  const [isCollapseNtf, setIsCollapseNtf] = React.useState(false);
  const [isCollapseTransationReport, setIsCollapseTransactionreport] =
    React.useState(false);
  const location = useLocation();

  // const handleCollapse1 = (
  //   key:
  //     | "isCollapseUser"
  //     | "isCollapseApplication"
  //     | "isCollapseCommission"
  //     | "isCollapseReport"
  //     | 'isCollapseNotification'
  // ) => {
  //   setCollapse((prev)=>{
  //     return {...prev, [key]: !prev[key]}
  //   })
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  const handleCollapseApplication = () => {
    setIsCollapseApplication(!isCollapseApplication);
  };

  const handleCollapseTransationReport = () => {
    setIsCollapseTransactionreport(!isCollapseTransationReport);
  };

  const handleCollapseCommission = () => {
    setIsCollapseCommission(!isCollapseCommission);
  };
  const handleCollapseReport = () => {
    setIsCollapseReport(!isCollapseReport);
  };

  const handleCollapseNotification = () => {
    setIsCollapseNtf(!isCollapseNtf);
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
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{
              marginRight: 5,
              color: "black",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <MainHeader />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === "rtl" ? (
              <MenuIcon onClick={handleDrawerClose} />
            ) : (
              <>
                <List sx={{ display: "flex", alignItems: "left", gap: 1 }}>
                  <MenuIcon onClick={handleDrawerClose} />
                  <Link
                    to="/dashboard"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      textDecoration: "none",
                    }}
                  >
                    <img src={dashboardIcon} alt="icon" />
                    <Typography className={classes.listStyleMain}>
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
          to={"/dashboard"}
          text="Dashboard"
          location={location}
          pathMatch="/dashboard"

        />
        {/* User */}
        <SideBarComponent
           items={SidebarUserItems}
           isCollapsed={isCollapse}
           handleCollapse={handleCollapse}
           location={location}
           open={open}
        />
        {/* Application */}
        <SideBarComponent
           items={ApplicationItems}
           isCollapsed={isCollapseApplication}
           handleCollapse={handleCollapseApplication}
           location={location}
           open={open}
        />
        {/* Merchant */}
         <SideBarWithOutDropdown
          to={"/merchants"}
          text="Merchants"
          location={location}
          pathMatch="/merchants"
        />
        {/* Commission */}
        <SideBarComponent
           items={Commission}
           isCollapsed={isCollapseCommission}
           handleCollapse={handleCollapseCommission}
           location={location}
           open={open}
        />
        {/* Transaction Reports */}
        <SideBarComponent
           items={TransactionReport}
           isCollapsed={isCollapseTransationReport}
           handleCollapse={handleCollapseTransationReport}
           location={location}
           open={open}
        />
        {/* Reports */}
         <SideBarComponent
           items={Reports}
           isCollapsed={isCollapseReport}
           handleCollapse={handleCollapseReport}
           location={location}
           open={open}
        />
        {/* Notification */}
         <SideBarComponent
           items={Notification}
           isCollapsed={isCollapseNtf}
           handleCollapse={handleCollapseNotification}
           location={location}
           open={open}
        />
         <SideBarWithOutDropdown
          to={"/messages"}
          text="Messages"
          location={location}
          pathMatch="/messages"
        />
         <SideBarWithOutDropdown
          to={"/deleteData"}
          text="Delete Data"
          location={location}
          pathMatch="/deleteData"
        />
    
      </Drawer>
    </Box>
  );
}



