"use client";

import { chckAnswerProps } from "@/components/types/mcqTypes";

const CheckAnswerButton = ({
  disabled,
  submitted,
  setSubmitted,
  setCurrentQuestionNumber,
  resetOption,
}: chckAnswerProps) => {
  const handleNext = () => {
    setCurrentQuestionNumber((prev) => prev + 1);
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
        {submitted ? "Next" : "Check Answer"}
      </button>
    </div>
  );
};

export default CheckAnswerButton;
