"use client";

import { useParams, useRouter } from "next/navigation";

import { isSubmitted } from "@/lib/features/QuizSlice";
import { useAppDispatch } from "@/lib/hook";

import { chckAnswerProps } from "@/components/types/mcqTypes";

const CheckAnswerButton = ({
  disabled,
  submitted,
  setSubmitted,
  setCurrentQuestionNumber,
  resetOption,
  isCorrect,
  currQuestionNumber,
}: chckAnswerProps) => {
  const router = useRouter();
  const { level, technology, topic } = useParams() as {
    technology: string;
    topic: string;
    level: string;
  };
  const dispatch = useAppDispatch();
  const handleNext = () => {
    dispatch(
      isSubmitted({
        isCorrect,
        level: level.split("-")[1],
        topic,
        technology,
      }),
    );
    if (currQuestionNumber === 10) {
      router.push(`/result`);
    } else {
      setCurrentQuestionNumber((prev) => prev + 1);
    }
    setSubmitted(false);
    resetOption();
  };

  return (
    <div className="flex justify-end pt-5">
      <button
        disabled={disabled}
        className={`px-6 py-3 rounded-xl text-[#0C0E12] transition ${
          disabled ? "bg-[#2d895ecc]" : "bg-[#31c47f] hover:opacity-90"
        }`}
        onClick={() => (submitted ? handleNext() : setSubmitted(true))}
      >
        {currQuestionNumber === 10
          ? "Result"
          : submitted
            ? "Next"
            : "Check Answer"}
      </button>
    </div>
  );
};

export default CheckAnswerButton;
