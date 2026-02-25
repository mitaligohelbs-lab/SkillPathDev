import { Stack } from "@mui/material";

import { LayoutType } from "../types/types";

const Layout = ({ children, isCard = true }: LayoutType) => (
  <Stack
    justifyContent="center"
    alignItems="center"
    spacing={{ xs: 6, md: 3 }}
    p={{ xs: 2, md: 0 }}
    className={`min-h-screen ${isCard ? "max-w-2xl mx-auto" : ""}`}
  >
    {children}
  </Stack>
);

export default Layout;
