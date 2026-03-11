"use client";

import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { LOGIN_PROMPT } from "@/constant";

const LoginPromptCard = () => {
  const { userId } = useCurrentUser();
  const router = useRouter();
  return (
    <div>
      {!userId && (
        <div className="p-6 rounded-xl border border-[#272b35] bg-[#15181e] space-y-3">
          <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
            🔐 Unlock More Features
          </h3>
          <ul className="space-y-1.5 text-sm text-[#e7ebef]">
            {LOGIN_PROMPT.map(({ text, icon }, index) => (
              <li className="flex items-center gap-2" key={index}>
                {icon} <span>{text}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => router.push("/signIn")}
            className="w-full cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#e7ebef] text-[#0c0e12] font-mono font-semibold hover:opacity-90 transition-opacity"
          >
            Sign In / Sign Up →
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPromptCard;
