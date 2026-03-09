"use client";
import { BarChart3 } from "lucide-react";
import { useRouter } from "next/navigation";

const MiniLeaderBoard = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <h3 className="font-mono font-semibold text-sm text-foreground flex items-center gap-2">
        <BarChart3 className="w-4 h-4 text-[#31c47f]" />
        Leaderboard
      </h3>
      <button
        onClick={() => router.push("/leaderboard")}
        className="text-xs text-[#31c47f] font-mono hover:underline"
      >
        View All →
      </button>
    </div>
  );
};

export default MiniLeaderBoard;
