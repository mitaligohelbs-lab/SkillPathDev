"use client";

import { useRouter } from "next/navigation";

import { persistor } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { addCurrentTechStack } from "@/lib/features/CurrentSelectedTachSlice";
import { saveProgress } from "@/lib/features/progressSlice";
import { reset } from "@/lib/features/QuizSlice";

import CommonActionButton from "@/components/common/CommonActionButton";

import { ArrowRight, BarChart3, RotateCcw, Eye } from "lucide-react";

const ActionButton = () => {
  const { userId } = useCurrentUser();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { correct } = useAppSelector((state) => state.quiz);

  const { technology, topic, level } = useAppSelector(
    (state) => state.technology,
  );
  const finalTopic = topic.split("-")[0];

  const nextLevel = (level ?? 1) + 1;

  const handleMoveNextLevel = async () => {
    router.push(`/mcq/${technology}/${topic}/level-${nextLevel}`);
    dispatch(
      saveProgress({
        technology,
        topic,
        level,
        score: correct,
        total: 10,
      }),
    );
    dispatch(
      addCurrentTechStack({
        technology,
        topic,
        level: nextLevel,
      }),
    );
    await persistor.purge();
    dispatch(reset());
  };

  return (
    <div className="flex flex-col space-y-2">
      <CommonActionButton
        icon={<Eye />}
        text="Review Answer"
        textColor="#31c47f"
        bgColor="#31c47f0d"
        handleClick={() => router.push("/review")}
      />
      <CommonActionButton
        icon={<RotateCcw />}
        text="Retry"
        handleClick={async () => {
          await persistor.purge();
          dispatch(reset());
          router.push(`/mcq/${technology}/${finalTopic}/level-${level || 1}`);
        }}
      />
      {correct >= 7 && level !== 3 && (
        <CommonActionButton
          icon={<ArrowRight />}
          text="Next Level"
          bgColor="#31c47f"
          handleClick={handleMoveNextLevel}
        />
      )}
      {userId && (
        <CommonActionButton
          icon={<BarChart3 />}
          text=" View Leaderboard"
          handleClick={() => router.push("/leaderboard")}
        />
      )}
      <CommonActionButton
        icon={"➡️"}
        bgColor={level === 3 ? "#31c47f" : ""}
        text="Next Topic"
        handleClick={() => router.push(`${technology}-mcq`)}
      />
    </div>
  );
};

export default ActionButton;
