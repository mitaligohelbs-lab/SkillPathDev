"use client";

import clsx from "clsx";
import { CardTypes } from "../types/types";

const Card = ({
  children,
  disabled = false,
  id,
  borderColor = "#31c47f4d",
  bgColor = "#15181e",
  handleCardClick = () => {},
  ...props
}: CardTypes) => (
  <button
    key={id}
    disabled={disabled}
    style={{
      borderColor: !disabled
        ? borderColor
          ? borderColor
          : "#31c47f4d"
        : "#272c34",
    }}
    className={clsx(
      "p-6 border rounded-xl w-full group",
      `bg-[${bgColor}]`,
      !disabled
        ? "hover:border-[#31C47F] shadow-md hover:shadow-[0_8px_30px_rgba(49,196,127,0.1)] transition-all duration-300"
        : "hover:cursor-not-allowed opacity-50",
    )}
    onClick={handleCardClick}
    {...props}
  >
    {children}
  </button>
);

export default Card;
