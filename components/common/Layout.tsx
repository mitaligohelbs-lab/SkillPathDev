import { Stack } from "@mui/material";

import { LayoutType } from "../types/types";

const Layout = ({ children, isCard = true, className }: LayoutType) => (
  <Stack
    justifyContent="center"
    alignItems="center"
    spacing={3}
    className={`${className} min-h-screen ${isCard ? "max-w-2xl mx-auto" : ""}`}
  >
    {children}
  </Stack>
);

export default Layout;
