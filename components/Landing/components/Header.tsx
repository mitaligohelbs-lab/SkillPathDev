import { Box, Stack } from "@mui/material";
import { Zap } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Header = () => {
  return (
    <Stack gap={2}>
      <Box
        border="1px solid rgba(49, 196, 127, 0.3)"
        display={"flex"}
        px={1}
        py={2}
        justifyContent="center"
        alignItems="center"
        className="rounded-full h-[8.5] mx-auto bg-[#31C47F]/5 text-[#31C47F] text-sm w-64"
      >
        <Zap className="w-3.5" />
        Level-based Interview Prep
      </Box>
      <h1
        className={`text-4xl md:text-6xl font-bold leading-tight text-center ${jetBrainsMono.className} pt-2`}
      >
        Level up for
        <span className="text-[#31c47f]"> frontend</span>
        <br />
        Interview
      </h1>

      <Box color={"#707D8F"} className="max-w-xl text-lg mx-auto text-center">
        Structured levels, real MCQs, coding challenges — exactly how tech
        interviews work. No random problems. Pure language mastery.
      </Box>
    </Stack>
  );
};

export default Header;
