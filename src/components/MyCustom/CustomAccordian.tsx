import * as React from "react";
import Accordion from "@mui/material/Accordion";
import { Box } from "@mui/material";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Colors } from "../../utils/Colors";
import { NoEncryption } from "@mui/icons-material";

interface CustomAccordionProps {
  summary: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  summary,
  children,
  style,
}) => {
  return (
    <Box
      style={{
        ...style,
        marginTop: "2rem",
        boxShadow: "2.8125px 2.8125px 8.4375px 0px #0000002E",
      }}
    >
      <Accordion
        style={{
          border: `0.3px solid ${Colors.LinkColor}`,
          //color: `${Colors?.Textcolor}`,
          borderRadius: "0.3rem",
          //backgroundColor: "none",
          //boxShadow: "0px 0px 3px rgba(0, 0, 0, 0)",
        }}
        defaultExpanded
        elevation={0}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            "@media(max-width: 600px)": {
                fontSize: "12px"
            },
          }}
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CustomAccordion;
