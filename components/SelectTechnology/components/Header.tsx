import { Stack, Typography } from "@mui/material";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Header = () => {
  return (
    <Stack className="text-center" p={2}>
      <Typography
        color="#E7EBEF"
        fontSize={"30px"}
        fontFamily={jetBrainsMono.className}
        fontWeight={"bold"}
      >
        Select Technology
      </Typography>
      <Typography color="#707D8F">
        Choose a language to begin your interview prep journey
      </Typography>
    </Stack>
  );
};

export default Header;
