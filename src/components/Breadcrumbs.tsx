import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useLocation, Link as RouterLink } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((segment) => segment);

  const breadcrumbs = pathnames.map((segment, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLastSegment = index === pathnames.length - 1;
    const containsNumber = /\d/.test(segment);
    const nextSegmentContainsNumber = index < pathnames.length - 1 && /\d/.test(pathnames[index + 1]);

    if (isLastSegment && containsNumber) return null;

    const segmentText = segment.charAt(0).toUpperCase() + segment.slice(1);
    const commonProps = {
      key: to,
      style: { color: "#77D177", fontSize: "16px", fontWeight: "600" },
    };

    if (isLastSegment || nextSegmentContainsNumber) {
      return (
        <Typography {...commonProps}>{segmentText}</Typography>
      );
    }

    return (
      <Link
        {...commonProps}
        underline="hover"
        component={RouterLink}
        to={to}
      >
        {segmentText}
      </Link>
    );
  }).filter(Boolean);

  return (
    <Stack spacing={0}>
      <Breadcrumbs
        separator={<span style={{ margin: "0 0.5rem", color: "#77D177", fontSize: "16px", fontWeight: "600" }}>&gt;&gt;</span>}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
