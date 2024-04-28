import { Typography, Box } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";


const Breadcrumbs = (): JSX.Element => {
  const location = useLocation();
  let breadcrumbs: JSX.Element[] = [];
  const pathSegments = location.pathname.split("/").filter((segment) => segment !== "");
  pathSegments.forEach((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;
    const isCurrent = path === location.pathname;

    const displaySegment =  segment;

    const linkStyle = {
      textDecoration: "none",
      color: "#77D177",
      fontWeight: isLast ? "bold" : "normal",
      borderBottom: isCurrent ? "1.5px solid #77D177" : "none",
    };

    breadcrumbs.push(
      <React.Fragment key={path}>
        <Link to={path} style={linkStyle}>
          {isLast ? displaySegment.charAt(0).toUpperCase() + displaySegment.slice(1) : displaySegment}
        </Link>
        {!isLast && <span style={{ margin: "0 0.5rem", color: "#77D177" }}>&gt;&gt;</span>}
      </React.Fragment>
    );
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography sx={{ whiteSpace: "nowrap", fontSize: "1rem" }}>{breadcrumbs}</Typography>
    </Box>
  );
};

export default Breadcrumbs;
