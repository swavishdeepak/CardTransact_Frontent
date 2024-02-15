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
import dashboardIcon from "../assets/dashboardIcon.svg";
import { SidebarUserItems } from "../utils/SideBarItem";
import { ApplicationItems } from "../utils/SideBarItem";
import { MerchantCommissionItem } from "../utils/SideBarItem";

const drawerWidth = 210;

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
  width: `calc(${theme.spacing(7)} + 22px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 22px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const [isCollapseApplication, setIsCollapseApplication] =
    React.useState(false);
  const location = useLocation();

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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={3}
        position="fixed"
        open={open}
        sx={{ borderBottom: "1px solid #DCDCDC", backgroundColor: "#FFFFFF" }}
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
            edge="start"
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
        <DrawerHeader sx={{ display: "flex" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <MenuIcon />
            ) : (
              <>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <MenuIcon />
                  <Box sx={{ display: "flex" }}>
                    <Typography>
                      <img src={dashboardIcon} alt="icon" />
                    </Typography>
                    <Typography
                      sx={{
                        color: "#2E2C34",
                        fontWeight: "700",
                        fontSize: "1rem",
                      }}
                    >
                      Card Transact
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </IconButton>
        </DrawerHeader>
        {/* <List>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem
              disablePadding
              sx={{
                display: "block",
                fontSize: "15px",
                fontWeight: "700",
                backgroundColor:
                  location.pathname === "/dashboard" ? "#F9F9F9" : "#fff",
                color: location.pathname === "/dashboard" ? "#589E58" : "",
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
                  <DashboardIcon
                    sx={{
                      color:
                        location.pathname === "/dashboard" ? "#589E58" : "",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  sx={{ opacity: open ? 1 : 0}}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <ListItem
          disablePadding
          sx={{ display: "block" }}
          // onClick={handleCollapse("Users")}
          onClick={handleCollapse}
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
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"Users"} sx={{ opacity: open ? 1 : 0 }} />
            {isCollapse ? (
              <ExpandMoreIcon sx={{ opacity: open ? 1 : 0,color: "#898989"  }} />
            ) : (
              <ChevronRightIcon sx={{ opacity: open ? 1 : 0,color: "#898989"  }} />
            )}
          </ListItemButton>
        </ListItem>

        <Collapse in={isCollapse} timeout="auto" unmountOnExit>
          <Link
            to="/addEmployees"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem
              disablePadding
              sx={{
                display: "block",
                backgroundColor:
                  location.pathname === "/addEmployees" ? "#F9F9F9" : "#fff",
                color: location.pathname === "/addEmployees" ? "#589E58" : "",
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
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"AddEmployees"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/addAgents"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem
              disablePadding
              sx={{
                display: "block",
                backgroundColor:
                  location.pathname === "/addAgents" ? "#F9F9F9" : "#fff",
                color: location.pathname === "/addAgents" ? "#589E58" : "",
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
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"AddAgents"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/viewAgents"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem
              disablePadding
              sx={{
                display: "block",
                backgroundColor:
                  location.pathname === "/viewAgents" ? "#F9F9F9" : "#fff",
                color: location.pathname === "/viewAgents" ? "#589E58" : "",
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
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"ViewAgents"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/viewEmployees"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem
              disablePadding
              sx={{
                display: "block",
                backgroundColor:
                  location.pathname === "/viewEmployees" ? "#F9F9F9" : "#fff",
                color: location.pathname === "/viewEmployees" ? "#589E58" : "",
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
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"ViewEmployees"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </Collapse>

        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={handleCollapseApplication}
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
              <PersonIcon />
              
            </ListItemIcon>
            <ListItemText
              primary={"Applications"}
              sx={{ opacity: open ? 1 : 0 }}
            />
             {isCollapseApplication ? (
              <ExpandMoreIcon sx={{ opacity: open ? 1 : 0,color: "#898989" }} />
            ) : (
              <ChevronRightIcon sx={{ opacity: open ? 1 : 0,color: "#898989" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={isCollapseApplication} timeout="auto" unmountOnExit>
          <Link
            to="/addApplication"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding sx={{ display: "block" }}>
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
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Add Application"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            to="/viewApplications"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding sx={{ display: "block" }}>
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
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"View Applications"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </Collapse>
        <List>
          <Link
            to="/merchants"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding sx={{ display: "block" }}>
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
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Merchants"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <List>
          <Link
            to="/commission"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding sx={{ display: "block" }}>
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
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Commission"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List> */}
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem
            disablePadding={true}
            sx={{
              display: "block",
              fontSize: "15px",
              borderRadius: "10px",
              fontWeight: "700",
              backgroundColor:
                location.pathname === "/dashboard"
                  ? Colors?.SideBarItembgcolor
                  : "#fff",
              color:
                location.pathname === "/dashboard"
                  ? Colors?.SibarItemcolor
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
                <DashboardIcon
                  sx={{
                    color:
                      location.pathname === "/dashboard"
                        ? Colors?.SibarItemcolor
                        : "",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Dashboard"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <List sx={{ marginTop: "-1rem" }}>
          {SidebarUserItems.map((item, index) => (
            <React.Fragment key={index}>
              <List
                style={{
                  backgroundColor: isCollapse
                    ? Colors?.SideBarItembgcolor
                    : "#fff",
                }}
              >
                <ListItem
                  disablePadding={true}
                  onClick={handleCollapse}
                  style={{
                    backgroundColor: isCollapse
                      ? Colors?.SideBarItembgcolor
                      : "#fff",
                  }}
                  sx={{
                    display: "block",
                    fontSize: "15px",
                    fontWeight: "700",
                    marginBottom: "0rem",
                    backgroundColor:
                      location.pathname === item.link
                        ? Colors?.SideBarItembgcolor
                        : "#fff",
                    color:
                      location.pathname === item.link
                        ? Colors?.SibarItemcolor
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
                      <item.icon
                        sx={{
                          color:
                            location.pathname === item?.link
                              ? Colors?.SibarItemcolor
                              : "",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    {isCollapse ? (
                      <ExpandMoreIcon
                        sx={{
                          opacity: open ? 1 : 0,
                          color: Colors?.ExpandMoreColor,
                        }}
                      />
                    ) : (
                      <ChevronRightIcon
                        sx={{
                          opacity: open ? 1 : 0,
                          color: Colors?.ExpandMoreColor,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>

                {item?.subItems && (
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
                            backgroundColor:
                              location.pathname === subItem.link
                                ? "#F9F9F9"
                                : "#fff",
                            color:
                              location.pathname === subItem.link
                                ? Colors?.SibarItemcolor
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
                                mr: open ? 3 : "auto",
                              }}
                            >
                              <subItem.icon
                                sx={{
                                  fontSize: "1rem",
                                  color:
                                    location.pathname === subItem?.link
                                      ? "#589E58"
                                      : "",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={subItem.text}
                              sx={{ opacity: open ? 1 : 0 }}
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
        <List sx={{ marginTop: "-1.5rem" }}>
          {ApplicationItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                disablePadding
                onClick={handleCollapseApplication}
                sx={{
                  display: "block",
                  fontSize: "15px",
                  fontWeight: "700",
                  backgroundColor:
                    location.pathname === item.link
                      ? Colors?.SideBarItembgcolor
                      : "#fff",
                  color:
                    location.pathname === item.link
                      ? Colors?.SibarItemcolor
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
                    <item.icon
                      sx={{
                        color:
                          location.pathname === item?.link
                            ? Colors?.SibarItemcolor
                            : "",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {isCollapseApplication ? (
                    <ExpandMoreIcon
                      sx={{
                        opacity: open ? 1 : 0,
                        color: Colors?.ExpandMoreColor,
                      }}
                    />
                  ) : (
                    <ChevronRightIcon
                      sx={{
                        opacity: open ? 1 : 0,
                        color: Colors?.ExpandMoreColor,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>

              {item?.subItems && (
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
                              ? Colors?.SideBarItembgcolor
                              : "#fff",
                          color:
                            location.pathname === subItem.link
                              ? Colors?.SibarItemcolor
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
                              mr: open ? 3 : "auto",
                            }}
                          >
                            <subItem.icon
                              sx={{
                                fontSize: "1rem",
                                color:
                                  location.pathname === subItem?.link
                                    ? Colors?.SibarItemcolor
                                    : "",
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={subItem.text}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
        {MerchantCommissionItem.map((subItem, subIndex) => (
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
                  location.pathname === subItem.link ? "#F9F9F9" : "#fff",
                color:
                  location.pathname === subItem.link
                    ? Colors?.SibarItemcolor
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
                      color:
                        location.pathname === subItem?.link ? "#589E58" : "",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={subItem.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </Box>
  );
}
