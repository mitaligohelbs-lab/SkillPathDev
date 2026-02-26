"use client";

import { TECHNOLOGIES } from "@/constant";
import { Box, Grid, Stack } from "@mui/material";
import { Lock, ChevronRight } from "lucide-react";
import Card from "@/components/common/Card";
import { useRouter } from "next/navigation";

const TechStack = () => {
  const router = useRouter();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      className="overflow-auto w-full"
    >
      {TECHNOLOGIES.map(({ name, icon, enabled, id }) => {
        return (
          <Card
            key={id}
            disabled={!enabled}
            id={id}
            handleCardClick={() => router.push(`/topic/${id}`)}
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
                    {enabled ? "Ready to practice" : "Coming soon"}
                  </Box>
                </Box>
              </Grid>

              {enabled ? (
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#31C47F]" />
              ) : (
                <Lock className="w-5 h-5 text-locked" />
              )}
            </Grid>
          </Card>
        );
      })}
    </Stack>
  );
};

export default TechStack;
