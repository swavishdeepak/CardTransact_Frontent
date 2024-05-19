import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import { Header } from "../components/Dashboard/Header";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";


export const MainLayout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const {verifiedUser} = useAppSelector((state) => state.verifiedUser);


  console.log('verified',verifiedUser)
  useEffect(() => {
    if (!verifiedUser) {
      sessionStorage.setItem("requestUrl", pathname);
      navigate("/auth/login");
      return;
    } else if (pathname === "/") {
      navigate("/dashboard");
    }
  }, [verifiedUser, navigate]);

  if (!verifiedUser) {
    navigate("/auth/login");
    return null;
  }

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
