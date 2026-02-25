import { Stack, Typography } from "@mui/material";
import { JetBrains_Mono } from "next/font/google";
import { HeaderTypes } from "../types/types";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const CommonHeader = ({ title, description }: HeaderTypes) => (
  <Stack className="text-center" p={2}>
    <Typography
      color="#E7EBEF"
      fontSize={"30px"}
      fontFamily={jetBrainsMono.className}
      fontWeight={"bold"}
    >
      {title}
    </Typography>
    <Typography color="#707D8F">{description}</Typography>
  </Stack>
);

export default CommonHeader;
