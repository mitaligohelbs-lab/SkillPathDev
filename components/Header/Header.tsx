"use client";

import { ArrowLeft, Code2 } from "lucide-react";
import { MainHeaderTypes } from "../types/types";
import { useRouter } from "next/navigation";

const Header = ({ text, subText, isDisplay = true }: MainHeaderTypes) => {
  const router = useRouter();
  return (
    <div className="flex gap-3 items-center">
      {isDisplay && (
        <button
          onClick={() => router.back()}
          className="p-2 rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
      )}
      <div className="w-8 h-8 rounded-lg flex items-center justify-center  bg-[#31c47f]">
        <Code2 className="w-5 h-5 text-black" />
      </div>
      <span className="font-mono font-bold text-lg">
        {text}
        {subText && <span className="text-[#31c47f]">Dev</span>}
      </span>
    </div>
  );
};

export default Header;
