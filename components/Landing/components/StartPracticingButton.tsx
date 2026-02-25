"use client";

import { Button } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const StartPracticingButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#31C47A",
        color: "#0C0E12",
        px: "32px",
        py: "16px",
        boxShadow: "0 0 20px rgba(49, 196, 122, 0.3)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "16px",
        gap: "8px",
        "&:hover": {
          backgroundColor: "#28a764",
        },
      }}
      onClick={() => router.push("/select-tech")}
    >
      Start Practicing <ChevronRight />
    </Button>
  );
};

export default StartPracticingButton;
