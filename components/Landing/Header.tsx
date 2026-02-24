import { Box, Stack } from "@mui/material";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <Stack gap={2}>
      <Box
        border="1px solid rgba(49, 196, 127, 0.3)"
        display={"flex"}
        px={1}
        py={2}
        justifyContent={"center"}
        alignItems={"center"}
        className="rounded-full h-[8.5] bg-[#31C47F]/5 text-[#31C47F] text-sm"
      >
        <Zap className="w-3.5" />
        Level-based Interview Prep
      </Box>
      <Box className="text-5xl font-bold leading-tight text-center">
        <Box color="#E7EBEF" className="block">
          Master
          <span className="text-[#31c47f]">JavaScript</span>
        </Box>

        <Box color="#E7EBEF" className="block mt-2">
          Interview by <br /> Interview
        </Box>
      </Box>
      <Box color={"#707D8F"} className="max-w-xl text-lg mx-auto">
        Structured levels, real MCQs, coding challenges — exactly how tech
        interviews work. No random problems. Pure language mastery.
      </Box>
    </Stack>
  );
};

export default Header;
