import React from "react";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import { Stack } from "@mui/material";

const SelectTechnology = () => {
  return (
    <Stack
      justifyContent={"center"}
      p={{ xs: 2, md: 0 }}
      className="min-h-screen max-w-2xl mx-auto"
    >
      <Header />
      <TechStack />
    </Stack>
  );
};

export default SelectTechnology;
