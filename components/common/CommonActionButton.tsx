"use client";
import clsx from "clsx";
import { actionButtonProps } from "../types/types";

const CommonActionButton = ({
  icon,
  text,
  textColor,
  bgColor,
  handleClick,
  ...props
}: actionButtonProps) => (
  <button
    onClick={handleClick}
    className={clsx(
      "flex items-center cursor-pointer justify-center gap-2 px-6 py-3 rounded-xl text-sm transition-colors w-full",
      bgColor ? `bg-[${bgColor}]` : "bg-[#22272f]",
      textColor ? `text-[${textColor}]` : "text-[#E7ebef]",
    )}
    {...props}
  >
    <span className="w-4 h-4 flex justify-center items-center">{icon}</span>
    <span>{text}</span>
  </button>
);

export default CommonActionButton;
