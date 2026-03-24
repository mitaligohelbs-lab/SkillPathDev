import Link from "next/link";
import { Code2 } from "lucide-react";

import BackButton from "./components/BackButton";
import AuthSection from "./components/AuthSection";

import { MainHeaderTypes } from "../types/types";

const Header = ({
  text,
  subText,
  isDisplay = true,
  className,
}: MainHeaderTypes) => {
  return (
    <div
      className={`flex w-full justify-between ${isDisplay ? "gap-0" : "gap-5"} items-center ${className}`}
    >
      <div className="flex gap-2 md:gap-3 items-center">
        {isDisplay && <BackButton />}
        <Link
          href={"/"}
          className="w-6 md:w-8 h-6 md:h-8 rounded-lg flex items-center justify-center cursor-pointer bg-[#31c47f]"
        >
          <Code2 className="w-4 md:w-5 h-4 md:h-5 text-black" />
        </Link>
        <span className="font-mono font-bold text-md md:text-lg">
          {text}
          {subText && <span className="text-[#31c47f]">Dev</span>}
        </span>
      </div>
      <AuthSection />
    </div>
  );
};

export default Header;
