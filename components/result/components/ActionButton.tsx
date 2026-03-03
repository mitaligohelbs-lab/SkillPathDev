"use client";

import CommonActionButton from "@/components/common/CommonActionButton";
import { reset } from "@/lib/features/QuizSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { persistor } from "@/lib/store";

import { ArrowRight, BarChart3, RotateCcw, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

const ActionButton = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { correct } = useAppSelector((state) => state.quiz);

  const { technology, topic, level } = useAppSelector(
    (state) => state.technology,
  );

  const nextLevel = (level ?? 1) + 1;

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
          router.push(`/mcq/${technology}/${topic}/1`);
        }}
      />
      {correct >= 7 && (
        <CommonActionButton
          icon={<ArrowRight />}
          text="Next Level"
          bgColor="#31c47f"
          handleClick={() =>
            router.push(`/mcq/${technology}/${topic}/${nextLevel}`)
          }
        />
      )}

      <CommonActionButton
        icon={<BarChart3 />}
        text=" View Leaderboard"
        handleClick={() => router.push("/leaderboard")}
      />
      <CommonActionButton
        icon={"➡️"}
        text="Next Topic"
        handleClick={() => router.push(`/topic/${technology}`)}
      />
    </div>
  );
};

export default ActionButton;
