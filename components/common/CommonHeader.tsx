import { Stack, Typography } from "@mui/material";
import { HeaderTypes } from "../types/types";

const CommonHeader = ({ title, description }: HeaderTypes) => (
  <Stack className="text-center" p={2}>
    <Typography color="#E7EBEF" fontSize={"30px"} fontWeight={"bold"}>
      {title}
    </Typography>
    <Typography color="#707D8F">{description}</Typography>
  </Stack>
);

export default CommonHeader;
