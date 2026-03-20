import { useState } from "react";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import { ChevronRight } from "lucide-react";

const AnalysisQuestion = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    border: `1px solid`,
    paddingTop: "10px",
    borderColor: "#272c34",
    backgroundColor: "#15181e",
    color: "#e7ebef",
    borderRadius: "6px",
    gap: "2px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<ChevronRight fontSize={"0.9rem"} color="#e7ebef" />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "#15181e",
    color: "#e7ebef",

    flexDirection: "row-reverse",
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
      {
        transform: "rotate(90deg)",
      },
    [`& .${accordionSummaryClasses.content}`]: {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">
            How is my overall performance measured?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your overall performance is based on your accuracy, number of
            correct answers, and consistency across multiple attempts. Higher
            accuracy and steady improvement indicate better understanding and
            readiness.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">
            Why does my score change over time?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your score may vary based on the difficulty of questions, your
            accuracy, and recent attempts. Consistent practice and improving
            weak areas will help stabilize and increase your score over time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">
            What does my average score indicate?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your average score is calculated based on your total score divided
            by the number of attempts. It gives you an overall view of your
            performance consistency. A higher average score indicates better
            accuracy across multiple attempts, while a lower score suggests
            areas where improvement is needed.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AnalysisQuestion;
