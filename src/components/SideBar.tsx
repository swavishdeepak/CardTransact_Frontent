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
  [theme.breakpoints.down("xs")]: {
    width: `calc(${theme.spacing(2)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 2.3),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 4,
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
  const [open, setOpen] = React.useState(true);

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
        // elevation={3}
        position="fixed"
        open={open}
        sx={{
          borderBottom: "1px solid #DCDCDC",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 3px 10px #0000001a",
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
                <List sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        <Link
          to="/dashboard"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "0px 8px 0px",
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: "block",
              fontSize: "15px",
              borderRadius: "10px",
              fontWeight: "600",
              backgroundColor:
                location.pathname === "/dashboard"
                  ? Colors.SideBarItembgcolor
                  : "#fff",
              color:
                location.pathname === "/dashboard" ? Colors.SibarItemcolor : "",
            }}
          >
            <ListItemButton
              sx={{
                //minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                }}
              >
                <DashboardIcon
                  sx={{
                    color:
                      location.pathname === "/dashboard"
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Dashboard"}
                sx={{
                  opacity: open ? 1 : 0,
                  "& .MuiTypography-root": {
                    fontWeight: 600,
                    fontSize: "15px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <List sx={{ padding: "0px 10px 0px" }}>
          {SidebarUserItems.map((item, index) => (
            <React.Fragment key={index}>
              <List
                sx={{
                  borderRadius: "10px",
                  backgroundColor: isCollapse
                    ? Colors.SideBarItembgcolor
                    : "#fff",
                }}
              >
                <ListItem
                  disablePadding
                  onClick={handleCollapse}
                  style={{
                    backgroundColor: isCollapse
                      ? Colors.SideBarItembgcolor
                      : "#fff",
                  }}
                  sx={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "700",
                    ":hover": { backgroundColor: "lightgray" },
                    backgroundColor:
                      location.pathname === item.link
                        ? Colors.SideBarItembgcolor
                        : "#fff",
                    color:
                      location.pathname === item.link
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                >
                  <ListItemButton
                    sx={{
                      //minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                        color: isCollapse ? "#589E58" : "",
                      }}
                    >
                      <item.icon
                        sx={{
                          color:
                            location.pathname === item.link
                              ? Colors.SibarItemcolor
                              : "",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        color: isCollapse ? "#589E58" : "",
                        opacity: open ? 1 : 0,
                        "& .MuiTypography-root": {
                          fontWeight: 600,
                          fontSize: "15px",
                        },
                      }}
                    />
                    {isCollapse ? (
                      <ExpandMoreIcon
                        sx={{
                          marginLeft: "-25px",
                          opacity: open ? 1 : 0,
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    ) : (
                      <ChevronRightIcon
                        sx={{
                          marginLeft: "-25px",
                          opacity: open ? 1 : 0,
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>

                {item.subItems && (
                  <Collapse in={isCollapse} timeout="auto" unmountOnExit>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.link}
                        style={{ textDecoration: "none", color: "inherit" }}
                        key={subIndex}
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            display: "block",
                            // backgroundColor:
                            //   location.pathname === subItem.link
                            //     ? "#F9F9F9"
                            //     : "",
                            color:
                              location.pathname === subItem.link
                                ? Colors.SibarItemcolor
                                : "",
                          }}
                        >
                          <ListItemButton
                            sx={{
                              // minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 2 : "auto",
                              }}
                            >
                              <subItem.icon
                                sx={{
                                  fontSize: "1rem",
                                  color:
                                    location.pathname === subItem.link
                                      ? "#589E58"
                                      : "",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.text}
                              sx={{
                                opacity: open ? 1 : 0,
                                "& .MuiTypography-root": {
                                  fontWeight: 600,
                                  fontSize: "14px",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </Collapse>
                )}
              </List>
            </React.Fragment>
          ))}
        </List>
        <List sx={{ padding: "0px 10px 0px" }}>
          {ApplicationItems.map((item, index) => (
            <React.Fragment key={index}>
              <List
                style={{
                  borderRadius: "10px",
                  backgroundColor: isCollapseApplication
                    ? Colors.SideBarItembgcolor
                    : "#fff",
                }}
              >
                <ListItem
                  disablePadding
                  onClick={handleCollapseApplication}
                  sx={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "700",
                    backgroundColor:
                      location.pathname === item.link
                        ? Colors.SideBarItembgcolor
                        : "",
                    color:
                      location.pathname === item.link
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                >
                  <ListItemButton
                    sx={{
                      // minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                      }}
                    >
                      <item.icon
                        sx={{
                          color:
                            location.pathname === item.link
                              ? Colors.SibarItemcolor
                              : "",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        "& .MuiTypography-root": {
                          fontWeight: 600,
                          fontSize: "15px",
                        },
                      }}
                    />
                    {isCollapseApplication ? (
                      <ExpandMoreIcon
                        sx={{
                          marginLeft: "-25px",
                          opacity: open ? 1 : 0,
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    ) : (
                      <ChevronRightIcon
                        sx={{
                          marginLeft: "-25px",
                          opacity: open ? 1 : 0,
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>

                {item.subItems && (
                  <Collapse
                    in={isCollapseApplication}
                    timeout="auto"
                    unmountOnExit
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.link}
                        style={{ textDecoration: "none", color: "inherit" }}
                        key={subIndex}
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            display: "block",
                            backgroundColor:
                              location.pathname === subItem.link
                                ? Colors.SideBarItembgcolor
                                : "",
                            color:
                              location.pathname === subItem.link
                                ? Colors.SibarItemcolor
                                : "",
                          }}
                        >
                          <ListItemButton
                            sx={{
                              //minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 2 : "auto",
                              }}
                            >
                              <subItem.icon
                                sx={{
                                  fontSize: "1rem",
                                  color:
                                    location.pathname === subItem.link
                                      ? Colors.SibarItemcolor
                                      : "",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.text}
                              sx={{
                                opacity: open ? 1 : 0,
                                "& .MuiTypography-root": {
                                  fontWeight: 600,
                                  fontSize: "14px",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </Collapse>
                )}
              </List>
            </React.Fragment>
          ))}
        </List>
        <Link
          to="/merchants"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "0px 10px 0px",
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: "block",
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/merchants"
                  ? Colors.SideBarItembgcolor
                  : "#fff",
              color:
                location.pathname === "/merchants" ? Colors.SibarItemcolor : "",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                }}
              >
                <PersonIcon
                  sx={{
                    color:
                      location.pathname === "/merchants"
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Merchants"}
                sx={{
                  opacity: open ? 1 : 0,
                  "& .MuiTypography-root": {
                    fontWeight: 600,
                    fontSize: "15px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <List sx={{ padding: "0px 10px 0px" }}>
          {Commission.map((item, index) => (
            <React.Fragment key={index}>
              <List
                style={{
                  borderRadius: "10px",
                  backgroundColor: isCollapseCommission
                    ? Colors.SideBarItembgcolor
                    : "#fff",
                }}
              >
                <ListItem
                  disablePadding
                  onClick={handleCollapseCommission}
                  sx={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "700",
                    backgroundColor:
                      location.pathname === item.link
                        ? Colors.SideBarItembgcolor
                        : "",
                    color:
                      location.pathname === item.link
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                >
                  <ListItemButton
                    sx={{
                      // minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                      }}
                    >
                      <item.icon
                        sx={{
                          color:
                            location.pathname === item.link
                              ? Colors.SibarItemcolor
                              : "",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        "& .MuiTypography-root": {
                          fontWeight: 600,
                          fontSize: "15px",
                        },
                      }}
                    />
                    {isCollapseCommission ? (
                      <ExpandMoreIcon
                        sx={{
                          marginLeft: "-25px",
                          opacity: open ? 1 : 0,
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    ) : (
                      <ChevronRightIcon
                        sx={{
                          marginLeft: "-25px",
                          opacity: open ? 1 : 0,
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>

                {item.subItems && (
                  <Collapse
                    in={isCollapseCommission}
                    timeout="auto"
                    unmountOnExit
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.link}
                        style={{ textDecoration: "none", color: "inherit" }}
                        key={subIndex}
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            display: "block",
                            backgroundColor:
                              location.pathname === subItem.link
                                ? Colors.SideBarItembgcolor
                                : "",
                            color:
                              location.pathname === subItem.link
                                ? Colors.SibarItemcolor
                                : "",
                          }}
                        >
                          <ListItemButton
                            sx={{
                              //minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                              }}
                            >
                              <subItem.icon
                                sx={{
                                  fontSize: "1rem",
                                  color:
                                    location.pathname === subItem.link
                                      ? Colors.SibarItemcolor
                                      : "",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.text}
                              sx={{
                                opacity: open ? 1 : 0,
                                "& .MuiTypography-root": {
                                  fontWeight: 600,
                                  fontSize: "14px",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </Collapse>
                )}
              </List>
            </React.Fragment>
          ))}
        </List>
        <List sx={{ padding: "0px 10px 0px" }}>
          {Reports.map((item, index) => (
            <React.Fragment key={index}>
              <List
                style={{
                  borderRadius: "10px",
                  backgroundColor: isCollapseReport
                    ? Colors.SideBarItembgcolor
                    : "#fff",
                }}
              >
                <ListItem
                  disablePadding
                  onClick={handleCollapseReport}
                  sx={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "700",
                    backgroundColor:
                      location.pathname === item.link
                        ? Colors.SideBarItembgcolor
                        : "",
                    color:
                      location.pathname === item.link
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                >
                  <ListItemButton
                    sx={{
                      //minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                      }}
                    >
                      <item.icon
                        sx={{
                          color:
                            location.pathname === item.link
                              ? Colors.SibarItemcolor
                              : "",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        "& .MuiTypography-root": {
                          fontWeight: 600,
                          fontSize: "15px",
                        },
                      }}
                    />
                    {isCollapseReport ? (
                      <ExpandMoreIcon
                        sx={{
                          opacity: open ? 1 : 0,
                          marginLeft: "-25px",
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    ) : (
                      <ChevronRightIcon
                        sx={{
                          marginLeft: "-25px",
                          opacity: open ? 1 : 0,
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>

                {item.subItems && (
                  <Collapse in={isCollapseReport} timeout="auto" unmountOnExit>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.link}
                        style={{ textDecoration: "none", color: "inherit" }}
                        key={subIndex}
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            display: "block",
                            backgroundColor:
                              location.pathname === subItem.link
                                ? Colors.SideBarItembgcolor
                                : "",
                            color:
                              location.pathname === subItem.link
                                ? Colors.SibarItemcolor
                                : "",
                          }}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 2 : "auto",
                              }}
                            >
                              <subItem.icon
                                sx={{
                                  fontSize: "1rem",
                                  color:
                                    location.pathname === subItem.link
                                      ? Colors.SibarItemcolor
                                      : "",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.text}
                              sx={{
                                opacity: open ? 1 : 0,
                                "& .MuiTypography-root": {
                                  fontWeight: 600,
                                  fontSize: "14px",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </Collapse>
                )}
              </List>
            </React.Fragment>
          ))}
        </List>
        <List sx={{ padding: "0px 10px 0px" }}>
          {Notification.map((item, index) => (
            <React.Fragment key={index}>
              <List
                style={{
                  borderRadius: "10px",
                  backgroundColor: isCollapseNtf
                    ? Colors.SideBarItembgcolor
                    : "#fff",
                }}
              >
                <ListItem
                  disablePadding
                  onClick={handleCollapseNotification}
                  sx={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "700",
                    backgroundColor:
                      location.pathname === item.link
                        ? Colors.SideBarItembgcolor
                        : "",
                    color:
                      location.pathname === item.link
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                >
                  <ListItemButton
                    sx={{
                      //minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                      }}
                    >
                      <item.icon
                        sx={{
                          color:
                            location.pathname === item.link
                              ? Colors.SibarItemcolor
                              : "",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        "& .MuiTypography-root": {
                          fontWeight: 600,
                          fontSize: "15px",
                        },
                      }}
                    />
                    {isCollapseNtf ? (
                      <ExpandMoreIcon
                        sx={{
                          opacity: open ? 1 : 0,
                          marginLeft: "-25px",
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    ) : (
                      <ChevronRightIcon
                        sx={{
                          marginLeft: "-25px",
                          opacity: open ? 1 : 0,
                          color: Colors.ExpandMoreColor,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>

                {item.subItems && (
                  <Collapse in={isCollapseNtf} timeout="auto" unmountOnExit>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.link}
                        style={{ textDecoration: "none", color: "inherit" }}
                        key={subIndex}
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            display: "block",
                            backgroundColor:
                              location.pathname === subItem.link
                                ? Colors.SideBarItembgcolor
                                : "",
                            color:
                              location.pathname === subItem.link
                                ? Colors.SibarItemcolor
                                : "",
                          }}
                        >
                          <ListItemButton
                            sx={{
                              //minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 2 : "auto",
                              }}
                            >
                              <subItem.icon
                                sx={{
                                  fontSize: "1rem",
                                  color:
                                    location.pathname === subItem.link
                                      ? Colors.SibarItemcolor
                                      : "",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.text}
                              sx={{
                                opacity: open ? 1 : 0,
                                "& .MuiTypography-root": {
                                  fontWeight: 600,
                                  fontSize: "14px",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </Collapse>
                )}
              </List>
            </React.Fragment>
          ))}
        </List>
        <Link
          to="/messages"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "0px 10px 0px",
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: "block",
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/messages"
                  ? Colors.SideBarItembgcolor
                  : "#fff",
              color:
                location.pathname === "/messages" ? Colors.SibarItemcolor : "",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                }}
              >
                <PersonIcon
                  sx={{
                    color:
                      location.pathname === "/messages"
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Messages"}
                sx={{
                  opacity: open ? 1 : 0,
                  "& .MuiTypography-root": {
                    fontWeight: 600,
                    fontSize: "15px",
                  },
                }}
              />
              <Box sx={{width: 15, height: 15, borderRadius: "50%", backgroundColor: "#C10404", p:"2px", textAlign: "center"}}>
                <Typography sx={{color: "#fff", fontSize: "8px", fontWeight: "700"}}>02</Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to="/deleteData"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "0px 10px 0px",
          }}
        >
          <ListItem
            disablePadding
            sx={{
              display: "block",
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/deleteData"
                  ? Colors.SideBarItembgcolor
                  : "#fff",
              color:
                location.pathname === "/deleteData"
                  ? Colors.SibarItemcolor
                  : "",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                }}
              >
                <PersonIcon
                  sx={{
                    color:
                      location.pathname === "/deleteData"
                        ? Colors.SibarItemcolor
                        : "",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Delete Data"}
                sx={{
                  opacity: open ? 1 : 0,
                  "& .MuiTypography-root": {
                    fontWeight: 600,
                    fontSize: "15px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </Drawer>
    </Box>
  );
}
