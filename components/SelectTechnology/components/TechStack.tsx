import { TECHNOLOGIES } from "@/constant";
import { Box, Grid, Stack } from "@mui/material";
import { Lock, ChevronRight } from "lucide-react";
import clsx from "clsx";

const TechStack = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      className="overflow-auto"
    >
      {TECHNOLOGIES.map(({ name, icon, enabled, id }) => {
        return (
          <button
            key={id}
            disabled={!enabled}
            className={clsx(
              "p-6 border rounded-xl w-full group",
              enabled ? `border-[#31c47f4d]` : "border-[#272c34]",
              enabled
                ? "hover:border-[#31C47F]"
                : "hover:cursor-not-allowed opacity-50",
            )}
          >
            <Grid className="flex gap-2 justify-between items-center">
              <Grid className="flex gap-3">
                <Box className="text-3xl">{icon}</Box>
                <Box>
                  <Box
                    color={"white"}
                    fontWeight={"semibold"}
                    textAlign={"start"}
                    className="text-lg"
                  >
                    {name}
                  </Box>
                  <Box className="text-[#707D8F] text-sm">
                    {enabled ? "Ready to practice" : "coming soon"}
                  </Box>
                </Box>
              </Grid>

              {enabled ? (
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#31C47F]" />
              ) : (
                <Lock className="w-5 h-5 text-locked" />
              )}
            </Grid>
          </button>
        );
      })}
    </Stack>
  );
};

export default TechStack;
