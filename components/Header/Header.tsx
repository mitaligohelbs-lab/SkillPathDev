"use client";

import { ArrowLeft, BarChart3, Code2, Star, Trophy } from "lucide-react";
import { MainHeaderTypes } from "../types/types";
import { useRouter } from "next/navigation";
import SignInButton from "../auth/components/SignInButton";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = ({ text, subText, isDisplay = true }: MainHeaderTypes) => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <div className="flex w-full justify-between items-center">
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

      {user ? (
        <div className="flex items-center gap-3">
          <Link
            href="/analysis"
            className="p-2 rounded-lg hover:bg-[#22272f] transition-colors"
            title="Analytics"
          >
            <BarChart3 className="w-5 h-5 text-[#707d8f]" />
          </Link>
          <Link
            href="/bookmark"
            className="p-2 rounded-lg hover:bg-[#22272f] transition-colors"
            title="Saved Questions"
          >
            <Star className="w-5 h-5 text-[#707d8f]" />
          </Link>
          <Link
            href="/leaderboard"
            className="p-2 rounded-lg hover:bg-[#22272f] transition-colors"
            title="Leaderboard"
          >
            <Trophy className="w-5 h-5 text-[#707d8f]" />
          </Link>
          <button className="px-4 py-2 rounded-xl border border-[#272c34] bg-[#15181e] text-[#e7ebef] font-mono text-sm hover:bg-secondary transition-colors">
            <SignOutButton>Sign Out</SignOutButton>
          </button>
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Header;
