"use client";
import clsx from "clsx";
import { DisplayOptionProps } from "../types/mcqTypes";

const DisplayOption = ({
  text,
  option,
  mode,
  correctAnswer,
  userAnswer,
  isInfoColor,
  selectedOption,
  onSelect,
}: DisplayOptionProps) => {
  const isCorrect = option && option === correctAnswer;
  const isUserSelected = option && option === userAnswer;
  const isSelected = option && option === selectedOption;
  const isWrongSelection = isUserSelected && !isCorrect;

  return (
    <button
      disabled={mode !== "attempt"}
      onClick={() => option && onSelect?.(option)}
      className={clsx(
        "w-full p-4 rounded-xl border text-left text-sm transition",

        mode === "attempt" &&
          (isSelected
            ? "bg-[#31C47F]/10 border-[#31c47f]"
            : "bg-[#15181e] border-[#272c34] hover:border-[#2d895ecc]"),

        (mode === "submitted" || mode === "review") && {
          "bg-[#31C47F]/10 border-[#31C47F] text-white": isCorrect,
          "bg-[#d345451a] border-[#d34545]": isWrongSelection,
          "bg-[#15181e] border-[#272c34]": !isCorrect && !isWrongSelection,
        },

        mode === "info" && isInfoColor,
      )}
    >
      {mode === "info" ? text : `${option}. ${text}`}
    </button>
  );
};

export default DisplayOption;
