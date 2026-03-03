"use client";
import { actionButtonProps } from "../types/types";

const CommonActionButton = ({
  icon,
  text,
  textColor,
  bgColor,
  handleClick,
  ...props
}: actionButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center cursor-pointer justify-center gap-2 px-6 py-3 rounded-xl text-sm ${bgColor ? `bg-[${bgColor}] ${textColor ? `text-[${textColor}]` : "text-black"}` : "bg-[#22272f] text-white"}  ${textColor ? `text-[${textColor}]` : "text-[#E7ebef]"} transition-colors`}
      {...props}
    >
      <span className="w-4 h-4 flex justify-center items-center">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default CommonActionButton;
