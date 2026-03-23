"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";
import { CheckCircle2, Lock, Play } from "lucide-react";
import { Box, Grid, Stack } from "@mui/material";

import { supabase } from "@/lib/supabase";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { addCurrentTechStack } from "@/lib/features/CurrentSelectedTachSlice";

import { JS_TOPICS, LEVELS, TECHNOLOGIES } from "@/constant";

import Card from "@/components/common/Card";
import GetCertificateButton from "@/components/certificate/GetCertificateButton";

const LevelList = () => {
  const dispatch = useAppDispatch();
  const { technology, topic } = useParams() as {
    technology: string;
    topic: string;
  };

  const navigationTopic = topic
    .split("-")
    ?.filter((el) => el !== "mcq")
    ?.join("-");

  const { userId } = useCurrentUser();
  const [isDisplayCertificate, setIsDisplayCertificate] = useState(false);

  const [currUserData, setCurrentUserData] = useState<any>(null);

  const currTechnologyName =
    TECHNOLOGIES.find(({ id }) => id === technology)?.name || technology;

  const currTopicName =
    JS_TOPICS.find(({ id }) => id === navigationTopic)?.name || navigationTopic;

  const checkUser = async () => {
    const { data: existingUser, error } = await supabase
      .from("user_scores")
      .select("*")
      .eq("user_id", userId)
      .eq("technology", currTechnologyName)
      .eq("topic", currTopicName);

    setCurrentUserData(existingUser);

    if (error) {
      console.log("Fetch error:", error);
      return;
    }
  };

  const fetchDetails = async () => {
    try {
      const { data } = await supabase
        .from("user_scores")
        .select("*")
        .eq("user_id", userId)
        .eq("technology", currTechnologyName)
        .eq("topic", currTopicName);

      if (data && data.length === 3) {
        setIsDisplayCertificate(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (userId && currTechnologyName && currTopicName) {
      fetchDetails();
    }
  }, [userId, currTechnologyName, technology, currTopicName, topic]);

  useEffect(() => {
    if (userId && currTechnologyName && currTopicName) {
      checkUser();
    }
  }, [userId, currTechnologyName, technology, currTopicName, topic]);

  const allLevel =
    useAppSelector((state) => state.progress)?.guestProgress?.[technology]?.[
      topic
    ] || {};

  const levelWithProgress = LEVELS.map((step) => {
    let unlock = false;

    if (step.level === 1) {
      unlock = true;
    } else {
      if (userId) {
        unlock = currUserData?.[step?.level - 2]?.score >= 7;
      } else {
        unlock = allLevel?.[step?.level - 1]?.score >= 7;
      }
    }

    return {
      ...step,
      unlock,
      levelWiseScore: userId
        ? currUserData?.[step?.level - 1]?.score
        : allLevel?.[step?.level]?.score,
    };
  });

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      paddingX={{ xs: 2, sm: 0 }}
      paddingBottom={{ xs: 5, sm: 0 }}
      className="overflow-auto w-full mt-0"
    >
      {levelWithProgress.map(
        ({ level, name, description, unlock, levelWiseScore }) => {
          return (
            <Link
              key={level}
              href={
                level
                  ? `/mcq/${technology}/${navigationTopic}/level-${level}`
                  : "#"
              }
              className={level ? "group w-full" : "pointer-events-none w-full"}
              onClick={() => {
                if (unlock) {
                  dispatch(
                    addCurrentTechStack({
                      technology,
                      topic: navigationTopic,
                      level,
                    }),
                  );
                }
              }}
            >
              <Card
                disabled={!unlock}
                id={level}
                borderColor={unlock ? "#31c47f66" : "#272c34"}
                bgColor={levelWiseScore ? "#31c47f0d" : ""}
              >
                <Grid className="flex gap-2 justify-between items-center">
                  <Grid className="flex gap-3">
                    <Box className="text-md md:text-2xl w-10 md:w-12 h-8 md:h-12 flex justify-center text-[#d1d9e0] items-center  bg-[#22272f] rounded-xl">
                      {levelWiseScore ? (
                        <CheckCircle2 className="w-6 h-6 text-[#31c47f]" />
                      ) : (
                        level
                      )}
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

                      {levelWiseScore && (
                        <Box className="text-xs mt-1 text-[#31c47f] text-start">
                          Best: {levelWiseScore}/10
                        </Box>
                      )}
                    </Box>
                  </Grid>

                  {unlock ? (
                    <Play className="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#31C47F]" />
                  ) : (
                    <Lock className="w-5 h-5 text-locked" />
                  )}
                </Grid>
              </Card>
            </Link>
          );
        },
      )}
      {isDisplayCertificate && (
        <GetCertificateButton
          topic={currTopicName}
          technology={currTechnologyName}
        />
      )}
    </Stack>
  );
};

export default LevelList;
