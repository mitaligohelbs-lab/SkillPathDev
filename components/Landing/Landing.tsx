import React from "react";
import Header from "./Header";
import { Box, Stack } from "@mui/material";
import StartPracticingButton from "./StartPracticingButton";

const Landing = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="min-h-screen space-y-8"
    >
      <Header />
      <StartPracticingButton />
    </Stack>
  );
};

export default Landing;
