import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import { Header } from "../components/Dashboard/Header";

export const MainLayout = () => {
  return (
    <Box
      component="main"
      sx={{
       flexGrow: 1,
        p: "3rem 1.5rem",
        display: "flex",
        "@media(max-width: 600px)": {
          p: "2.5rem  0.8rem",
        },
      }}
    >
      <SideBar />
      <Outlet />
    </Box>
  );
};
