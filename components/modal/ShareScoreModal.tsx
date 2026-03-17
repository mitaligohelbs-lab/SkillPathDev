"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { useAppSelector } from "@/lib/hook";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { supabase } from "@/lib/supabase";

import { Box, Modal } from "@mui/material";
import { Check, Copy } from "lucide-react";

import { JS_TOPICS, TECHNOLOGIES } from "@/constant";
import ModalHeader from "./components/ModalHeader";
import ModalShareIcon from "./components/ModalShareIcon";
import ModalBody from "./components/ModalBody";
import { ShareModalTypes } from "./types/ModalTypes";

const ShareScoreModal = ({
  open,
  handleClose,
  modalHeader,
  icon,
  subTitle,
  isDisplayChallengeModal,
  copyMessage,
}: ShareModalTypes) => {
  const { userId } = useCurrentUser();
  const { technology, topic, level } = useAppSelector((state) => state.quiz);

  const [cuurrentDetails, setCurrentDetails] = useState(null);
  const [copied, setCopied] = useState(false);

  const currTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name;

  const fetchdata = async () => {
    try {
      const { data } = await supabase
        .from("user_scores")
        .select("*")
        .eq("user_id", userId)
        .eq("technology", currTechnologyName)
        .eq("topic", currTopicName)
        .eq("level", level);

      if (data) {
        setCurrentDetails(data?.[0]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (userId && currTechnologyName && currTopicName && level) {
      fetchdata();
    }
  }, [userId, currTechnologyName, currTopicName, level]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  const {
    id = "",
    score = 0,
    topic: supabaseTopic = "",
    technology: supabaseTechnology = "",
  } = cuurrentDetails || {};

  const accuracy = (score * 100) / 10;

  const shareTitle = `🏆 I scored ${score}/${10} (${accuracy}%) on  ${supabaseTopic} Level ${level}! — via SkillPathDev`;
  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/share/${id}`;
  const siteUrl = window.location.origin;
  const challengeTitle = `🎯 Think you can beat my ${score}/${10} on ${supabaseTopic} Level ${level}? Take the challenge on SkillPathDev!`;
  const challengeDescription = `💪 Take the challenge: ${window.location.origin}\n🏆 Leaderboard: ${window.location.origin}/leaderboard`;
  const challengeUrl = `${siteUrl}/mcq/${supabaseTechnology || technology}/${topic || supabaseTopic}/${level}`;
  const leaderboardUrl = `${siteUrl}/leaderboard`;

  const finaltext = useMemo(
    () =>
      isDisplayChallengeModal
        ? `${challengeTitle}\n\n${challengeDescription}`
        : `${shareTitle}\n\nTest your dev skills 👉 ${siteUrl}`,
    [isDisplayChallengeModal, score],
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="space-y-3 p-4 w-100 bg-[#0c0e12] border border-[#272c34] rounded-md"
      >
        <ModalHeader
          icon={icon}
          modalHeader={modalHeader}
          subTitle={subTitle}
          handleClose={handleClose}
        />

        <ModalBody
          topic={supabaseTopic}
          level={level}
          isDisplayChallengeModal={isDisplayChallengeModal}
          challengeUrl={challengeUrl}
          leaderboardUrl={leaderboardUrl}
          score={score}
        />

        <ModalShareIcon
          shareUrl={shareUrl}
          isDisplayChallengeModal={isDisplayChallengeModal}
          title={isDisplayChallengeModal ? challengeTitle : shareTitle}
        />

        <button
          onClick={() => copyToClipboard(finaltext)}
          className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1f2229] border border-[#272c34] text-[#e7ebef] text-sm hover:bg-secondary transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#31c47f]" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? "Copied!" : copyMessage}
        </button>
      </Box>
    </Modal>
  );
};

export default ShareScoreModal;
