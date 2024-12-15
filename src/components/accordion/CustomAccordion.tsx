import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface CustomAccordionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const CustomAccordion: React.FC<CustomAccordionProps> = ({ id, title, children, expanded, onChange }) => (
  <Accordion
    expanded={expanded}
    onChange={onChange}
    sx={{
      backgroundColor: "transparent",
      overflow: "hidden",
      borderRadius: 1,
      boxShadow: 0,
      border: 1,
      borderColor: "secondary.main",
      my: 0.5,
    }}
  >
    <AccordionSummary expandIcon={<ExpandMore />} aria-controls={`${id}-content`} id={`${id}-header`} sx={{}}>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{}}>{children}</AccordionDetails>
  </Accordion>
);
