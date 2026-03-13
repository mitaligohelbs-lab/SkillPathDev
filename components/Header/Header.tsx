"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowLeft, Code2, LogOut } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

import SignInButton from "../auth/components/SignInButton";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

import { MainHeaderTypes } from "../types/types";
import { HEADER_LINKS } from "@/constant";

const Header = ({
  text,
  subText,
  isDisplay = true,
  className,
}: MainHeaderTypes) => {
  const { userId } = useCurrentUser();
  const router = useRouter();

  return (
    <div
      className={`flex w-full justify-between ${isDisplay ? "gap-0" : "gap-5"} items-center ${className}`}
    >
      <div className="flex gap-2 md:gap-3 items-center">
        {isDisplay && (
          <button
            onClick={() => router.back()}
            className="p-1 md:p-2 rounded-lg transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
        )}
        <div
          className="w-6 md:w-8 h-6 md:h-8 rounded-lg flex items-center justify-center cursor-pointer bg-[#31c47f]"
          onClick={() => router.push("/")}
        >
          <Code2 className="w-4 md:w-5 h-4 md:h-5 text-black" />
        </div>
        <span className="font-mono font-bold text-md md:text-lg">
          {text}
          {subText && <span className="text-[#31c47f]">Dev</span>}
        </span>
      </div>

      {userId ? (
        <div className="flex items-center gap-1 md:gap-3">
          {HEADER_LINKS.map(({ icon, to }) => (
            <Link
              href={to}
              className="p-1 md:p-2 rounded-lg hover:bg-[#22272f] transition-colors"
              title="Leaderboard"
            >
              {icon}
            </Link>
          ))}
          <button className="px-4 hidden md:block py-2 rounded-xl border border-[#272c34] bg-[#15181e] text-[#e7ebef] font-mono text-sm hover:bg-secondary transition-colors">
            <SignOutButton>Sign Out</SignOutButton>
          </button>
          <button className="px-1 md:hidden block p-1 rounded-lg hover:bg-[#22272f] transition-colors">
            <SignOutButton>
              <LogOut className="w-5 h-5 text-[#707d8f]" />
            </SignOutButton>
          </button>
        </div>
      ) : (
        <div className="ps-5 md:ps-0">
          <SignInButton />
        </div>
      )}
    </div>
  );
};

export default Header;
