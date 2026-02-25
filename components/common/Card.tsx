"use client";

import clsx from "clsx";
import { CardTypes } from "../types/types";

const Card = ({
  children,
  disabled = false,
  id,
  borderColor = "#31c47f4d",
  handleCardClick = () => {},
  ...props
}: CardTypes) => (
  <button
    key={id}
    disabled={disabled}
    className={clsx(
      "p-6 border rounded-xl w-full group bg-[#15181e]",
      !disabled
        ? borderColor
          ? `border-[${borderColor}]`
          : `border-[#31c47f4d]`
        : "border-[#272c34]",
      !disabled
        ? "hover:border-[#31C47F] shadow-sm hover:shadow-[0_0_20px_rgba(49,196,122,0.3)]"
        : "hover:cursor-not-allowed opacity-50",
    )}
    onClick={handleCardClick}
    {...props}
  >
    {children}
  </button>
);

export default Card;
