"use client";

import Card from "@/components/common/Card";
import { LEVELS } from "@/constant";
import { addTechSrack } from "@/lib/features/CurrentSelectedTachSlice";
import { useAppDispatch } from "@/lib/hook";
import { Box, Grid, Stack } from "@mui/material";
import { Lock, Play } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

const LevelList = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const technology = params.technology as string;
  const topic = params.topic as string;

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      className="overflow-auto w-full"
    >
      {LEVELS.map(({ level, name, description }) => {
        const isUnlocked = level === 1;

        return (
          <Link
            key={level}
            href={isUnlocked ? `/mcq/${technology}/${topic}/${level}` : "#"}
            className={
              isUnlocked ? "group w-full" : "pointer-events-none w-full"
            }
            onClick={() => {
              if (isUnlocked) {
                dispatch(
                  addTechSrack({
                    technology,
                    topic,
                    level,
                  }),
                );
              }
            }}
          >
            <Card disabled={!isUnlocked} id={level} borderColor="#272c34">
              <Grid className="flex gap-2 justify-between items-center">
                <Grid className="flex gap-3">
                  <Box className="text-2xl w-12 flex justify-center text-[#d1d9e0] items-center h-12 bg-[#22272f] rounded-xl">
                    {level}
                  </Box>
                  <Box>
                    <Box
                      color={"white"}
                      fontWeight={"semibold"}
                      textAlign={"start"}
                      className="text-lg"
                    >
                      {name}
                    </Box>
                    <Box className="text-[#707D8F] text-sm text-start">
                      {description}
                    </Box>
                  </Box>
                </Grid>

                {isUnlocked ? (
                  <Play className="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#31C47F]" />
                ) : (
                  <Lock className="w-5 h-5 text-locked" />
                )}
              </Grid>
            </Card>
          </Link>
        );
      })}
    </Stack>
  );
};

export default LevelList;
