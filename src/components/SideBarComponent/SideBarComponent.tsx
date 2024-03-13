import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandMore as ExpandMoreIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Colors } from '../../utils/Colors';

interface SidebarItem {
  text: string;
  link: string;
  icon: React.ElementType;
  subItems?: SidebarItem[];
}

interface SidebarListProps {
  items: SidebarItem[];
  open?: boolean;
  isCollapsed: boolean;
  handleCollapse: (item?: SidebarItem) => void;
  location: { pathname: string };
}

const SideBarComponent: React.FC<SidebarListProps> = ({ items, isCollapsed, handleCollapse, location, open }) => {
  return (
    <List sx={{ padding: "0px 6px 0px 6px" }}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <List
            sx={{
              paddingTop: "0px",
              paddingBottom: "0px",
              borderRadius: "10px",
              backgroundColor: isCollapsed ? Colors.SideBarItembgcolor : "#fff",
            }}
          >
            <ListItem
              disablePadding
              onClick={() => handleCollapse(item)}
              style={{
                backgroundColor: isCollapsed ? Colors.SideBarItembgcolor : "#fff",
              }}
              sx={{
                display: "block",
                fontSize: "15px",
                fontWeight: "700",
                ":hover": { backgroundColor: "lightgray" },
                backgroundColor: location.pathname === item.link ? Colors.SideBarItembgcolor : "#fff",
                color: location.pathname === item.link ? Colors.SibarItemcolor : "",
              }}
            >
              <ListItemButton
                sx={{
                  justifyContent: open ? "initial" : "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    color: isCollapsed ? "#589E58" : "",
                  }}
                >
                  <item.icon
                    sx={{
                      color: location.pathname === item.link ? Colors.SibarItemcolor : "",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: isCollapsed ? "#589E58" : "",
                    opacity: open ? 1 : 0,
                    "& .MuiTypography-root": {
                      fontWeight: 600,
                      fontSize: "15px",
                    },
                  }}
                />
                {isCollapsed ? (
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
                in={isCollapsed}
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
                        color: location.pathname === subItem.link ? Colors.SibarItemcolor : "",
                      }}
                    >
                      <ListItemButton
                        sx={{
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
                              color: location.pathname === subItem.link ? "#589E58" : "",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.text}
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
                ))}
              </Collapse>
            )}
          </List>
        </React.Fragment>
      ))}
    </List>
  );
};

export default SideBarComponent;
