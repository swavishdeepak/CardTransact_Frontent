// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,Box} from '@mui/material';
// import { Colors } from '../../utils/Colors';
// import PersonIcon from '@mui/icons-material/Person';
// import { Icons } from 'react-toastify';


// interface SidebarItem {
//   text: string;
//   link: string;
//   icon: React.ElementType;
  
// }


// interface SidebarListItemProps {
//   item: SidebarItem[]
//   // to: string;
//   open?: boolean;
//   // text: string;
//   // icon: React.ElementType
//   location: { pathname: string };
//   pathMatch: string;
//   notificationShpow?: boolean
//   sx?: React.CSSProperties;
  
  
// }

// const SideBarWithOutDropdown: React.FC<SidebarListItemProps> = ({ location, item,  open,notificationShpow=false,sx }) => {
//   return (
//     <Link to={item?.link} style={{ textDecoration: "none", color: "inherit", padding: "0px 6px 0px 6px", ...sx }}>
//       <ListItem
//         disablePadding
//         sx={{
//           paddingTop: "0px",
//           paddingBottom: "0px",
//           display: "block",
//           borderRadius: "10px",
//           backgroundColor: location.pathname === item?.link ? Colors.SideBarItembgcolor : "#fff",
//           color: location.pathname === item?.link ? Colors.SibarItemcolor : "",
//         }}
//       >
//         <ListItemButton
//           sx={{
//             minHeight: 48,
//             justifyContent: "center",
//             px: 2,
//           }}
//         >
//           <ListItemIcon
//             sx={{
//               minWidth: 0,
//               mr: open ? 2 : "auto",
//             }}
//           >
//             <item?.icon sx={{ color: location.pathname === item?.link ? Colors.SibarItemcolor : "" }} />
//           </ListItemIcon>
//           <ListItemText
//             primary={item?.text}
//             sx={{
//               opacity: open ? 1 : 0,
//               "& .MuiTypography-root": {
//                 fontWeight: 600,
//                 fontSize: "15px",
//               },
//             }}
//           />
//          {notificationShpow &&
//           <Box sx={{ opacity: open ? 1 : 0, backgroundColor: "#C10404", p: "1px 0px 0px", width: 15, height: 15, borderRadius: "50%",textAlign: "center",justifyContent: "center", alignItems: "center"}}>
//              <Typography sx={{fontSize: "10px", color: Colors.white, fontWeight: "700"}}>01</Typography>
//           </Box>}
//         </ListItemButton>
//       </ListItem>
//     </Link>
//   );
// };

// export default SideBarWithOutDropdown;


import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import { Colors } from '../../utils/Colors';

interface SidebarItem {
  text: string;
  link: string;
  icon: React.ElementType;
}

interface SidebarListItemProps {
  items: SidebarItem[];
  open?: boolean;
  location: { pathname: string };
  notificationShow?: boolean;
  sx?: React.CSSProperties;
}

const SideBarWithOutDropdown: React.FC<SidebarListItemProps> = ({ location, items, open = false, notificationShow = false, sx }) => {
   
  console.log("notificationShow",notificationShow)

  return (
    <>
      {items.map((item) => {
        const isActive = location.pathname === item.link;
        return (
          <Link to={item.link} style={{ textDecoration: "none", color: "inherit", padding: "0px 6px", ...sx }} key={item.link}>
            <ListItem
              disablePadding
              sx={{
                paddingTop: "0px",
                paddingBottom: "0px",
                display: "block",
                borderRadius: "10px",
                backgroundColor: isActive ? Colors.SideBarItembgcolor : "#fff",
                color: isActive ? Colors.SibarItemcolor : "",
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
                  <item.icon sx={{ color: isActive ? Colors.SibarItemcolor : "" }} />
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
                {notificationShow && (
                  <Box
                    sx={{
                      opacity: open ? 1 : 0,
                      backgroundColor: "#C10404",
                      p: "1px 0px 0px",
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "10px", color: Colors.white, fontWeight: "700" }}>01</Typography>
                  </Box>
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </>
  );
};

export default SideBarWithOutDropdown;

