"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { HEADER_LINKS } from "@/constant";

const AuthSection = () => {
  const { userId } = useCurrentUser();
  return userId ? (
    <div className="flex items-center gap-1 md:gap-3">
      {HEADER_LINKS.map(({ icon, to }) => (
        <Link
          href={to}
          className="p-1 md:p-2 rounded-lg hover:bg-[#22272f] transition-colors"
          title="Leaderboard"
          key={to}
        >
          {icon}
        </Link>
      ))}
      <div className="px-4 hidden md:block py-2 rounded-xl border border-[#272c34] bg-[#15181e] text-[#e7ebef] font-mono text-sm hover:bg-secondary transition-colors">
        <SignOutButton>Sign Out</SignOutButton>
      </div>
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
  );
};

export default AuthSection;
