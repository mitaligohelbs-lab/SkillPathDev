import { Stack } from "@mui/material";

import Feature from "./Feature";
import Header from "./Header";
import StartPracticingButton from "./StartPracticingButton";

const Landing = () => {
  return (
    <Stack
      minHeight="92vh"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
      p={{ xs: 2, md: 0 }}
    >
      <Header />
      <StartPracticingButton />
      <Feature />
    </Stack>
  );
};

export default Landing;
