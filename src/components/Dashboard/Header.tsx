import React, { useEffect, useState } from "react";
import { Box,  Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { userTypes } from "../../utils/menuItems/MenuItems";
import Breadcrumb from "../Breadcrumbs";
//import Breadcrumbs from "../Breadcrumbs";



interface buttonProps {
  children?: React.ReactNode;
}

export const Header: React.FC<buttonProps> = ({ children }) => {
  const { verifiedUser } = useAppSelector((state) => state.verifiedUser);
  

  const location = useLocation();
  let path = location.pathname;
  let formattedPath = path.charAt(1).toUpperCase() + path.slice(2);
 


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        marginTop: "1rem",
      }}
    >
      <Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                color: "#202020",
                fontWeight: "600",
                fontSize: "2rem",
                "@media(max-width: 600px)": {
                  fontSize: "1rem",
                },
              }}
            >
              {`Hi ${verifiedUser?.data?.name}`}
            </Typography>
            <Typography
              sx={{ color: "#202020", fontWeight: "400", fontSize: "0.8rem" }}
            >
               {userTypes[verifiedUser.data.role as keyof typeof userTypes]}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "#589E58",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: 1,
            "@media(max-width: 600px)": {
              fontSize: "12px",
            },
          }}
        >
           {/* <Breadcrumb/>  */}
          {formattedPath}  
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
