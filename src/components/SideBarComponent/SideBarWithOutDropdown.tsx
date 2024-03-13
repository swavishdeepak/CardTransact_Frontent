import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,Box} from '@mui/material';
import { Colors } from '../../utils/Colors';
import PersonIcon from '@mui/icons-material/Person';

interface SidebarListItemProps {
  to: string;
  open?: boolean;
  text: string;
  location: { pathname: string };
  pathMatch: string;
  notificationShpow?: boolean
  sx?: React.CSSProperties;
  
}

const SideBarWithOutDropdown: React.FC<SidebarListItemProps> = ({ to, text, location, pathMatch, open,notificationShpow=false,sx }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit", padding: "0px 6px 0px 6px", ...sx }}>
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
              mr: open ? 2 : "auto",
            }}
          >
            <PersonIcon sx={{ color: location.pathname === pathMatch ? Colors.SibarItemcolor : "" }} />
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={{
              opacity: open ? 1 : 0,
              "& .MuiTypography-root": {
                fontWeight: 600,
                fontSize: "15px",
              },
            }}
          />
         {notificationShpow &&
          <Box sx={{ opacity: open ? 1 : 0, backgroundColor: "#C10404", p: "1px 0px 0px", width: 15, height: 15, borderRadius: "50%",textAlign: "center",justifyContent: "center", alignItems: "center"}}>
             <Typography sx={{fontSize: "10px", color: Colors.white, fontWeight: "700"}}>01</Typography>
          </Box>}
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarWithOutDropdown;
