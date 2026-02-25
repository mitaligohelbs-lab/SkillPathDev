import { Stack } from "@mui/material";

import Feature from "./components/Feature";
import Header from "./components/Header";
import StartPracticingButton from "./components/StartPracticingButton";
const Landing = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 6, md: 3 }}
      p={{ xs: 2, md: 0 }}
      className="min-h-screen"
    >
      <Header />
      <StartPracticingButton />
      <Feature />
    </Stack>
  );
};

export default Landing;
