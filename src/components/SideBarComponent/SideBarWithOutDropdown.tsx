import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { Colors } from '../../utils/Colors';
import PersonIcon from '@mui/icons-material/Person';

interface SidebarListItemProps {
  to: string;
  text: string;
  location: { pathname: string };
  pathMatch: string
  
}

const SideBarWithOutDropdown: React.FC<SidebarListItemProps> = ({ to, text, location, pathMatch }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit", padding: "0px 13px 0px 0px" }}>
      <ListItem
        disablePadding
        sx={{
          paddingTop: "0px",
          paddingBottom: "0px",
          display: "block",
          borderRadius: "10px",
          backgroundColor: location.pathname === pathMatch ? Colors.SideBarItembgcolor : "#fff",
          color: location.pathname === pathMatch ? Colors.SibarItemcolor : "",
        }}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: "center",
            px: 2,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 2,
            }}
          >
            <PersonIcon sx={{ color: location.pathname === pathMatch ? Colors.SibarItemcolor : "" }} />
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={{
              opacity: 1,
              "& .MuiTypography-root": {
                fontWeight: 600,
                fontSize: "15px",
              },
            }}
          />
         
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarWithOutDropdown;
