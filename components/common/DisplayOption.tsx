"use client";
import clsx from "clsx";
import { DisplayOptionProps } from "../types/mcqTypes";

const DisplayOption = ({
  text,
  option,
  setSelectOption,
  isSelected = false,
  isCheckAnswerBox = false,
  color = "",
  disabled = false,
}: DisplayOptionProps) => {
  return (
    <button
      disabled={disabled || isCheckAnswerBox}
      onClick={() => option && setSelectOption?.(option)}
      className={clsx(
        "w-full p-4 rounded-xl border text-left text-sm transition",
        isCheckAnswerBox
          ? color
          : isSelected
            ? "bg-[#31C47F]/10 border-[#31c47f]"
            : "bg-[#15181e] border-[#272c34] hover:border-[#2d895ecc]",
        disabled && "cursor-not-allowed opacity-80",
      )}
    >
      {text}
    </button>
  );
};

export default DisplayOption;
