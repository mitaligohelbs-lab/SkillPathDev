import { Button } from "@mui/material";

const StartPracticingButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#31C47A",
        color: "#0C0E12",
        px: "32px",
        py: "16px",
        textDecoration: "bold",
      }}
    >
      Start Practicing
    </Button>
  );
};

export default StartPracticingButton;
