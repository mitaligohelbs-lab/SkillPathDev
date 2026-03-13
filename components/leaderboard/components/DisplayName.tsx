"use client";

import { Trophy } from "lucide-react";

import { JS_TOPICS, TECHNOLOGIES } from "@/constant";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

import MiniLeaderBoard from "@/components/result/components/MiniLeaderBoard";

const DisplayName = ({
  data,
  select,
  selectedLevel,
  currentUserrank,
  isDisplay,
}: any) => {
  const { userId } = useCurrentUser();
  const displatTechnology = TECHNOLOGIES.find(
    ({ id }) => id === select?.technology,
  )?.name;

  const displayTopic = JS_TOPICS.find(({ id }) => id === select?.topic)?.name;
  const getRankIcon = (rank: number) => {
    if (rank === 0) return <span className="text-lg">🥇</span>;
    if (rank === 1) return <span className="text-lg">🥈</span>;
    if (rank === 2) return <span className="text-lg">🥉</span>;
    return (
      <span className="w-5 h-5 flex items-center justify-center font-mono text-sm text-[#31c47f]">
        {rank + 1}
      </span>
    );
  };

  return (
    <div
      className={`${isDisplay ? "mt-2  md:mt-6" : "mt-0"} max-w-2xl w-full ${isDisplay ? "px-1 md:px-5" : "px-0"} ${!isDisplay ? "bg-[#22272f] border border-[#272b35] px-2 md:px-6 py-2 md:py-8 rounded-xl" : ""}`}
    >
      {isDisplay && displatTechnology && displayTopic && selectedLevel && (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h2 className="font-mono font-bold text-lg text-[#e7ebef]">
            {displatTechnology}-{displayTopic} · Level {selectedLevel}
          </h2>

          <span className="text-sm font-mono text-primary">
            {currentUserrank === 0
              ? "Not Attempted"
              : `Your rank: #${currentUserrank}`}
          </span>
        </div>
      )}

      {!isDisplay && <MiniLeaderBoard />}

      {data.length > 0 && (
        <div className="grid grid-cols-[2.5rem_1fr_3rem] gap-3 px-4 text-sm text-[#707d8f] font-mono uppercase tracking-wider mt-5">
          <span>Rank</span>
          <span>Name</span>
          <span className="text-right">Score</span>
        </div>
      )}

      {isDisplay &&
      (data.length === 0 ||
        select?.technology === "" ||
        select?.topic === "") ? (
        <div className="text-center py-12 space-y-2">
          <Trophy className="w-12 h-12 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground font-mono">
            {select?.technology === "" || select?.topic === ""
              ? "Select technology and topic"
              : "No scores yet. Be the first!"}
          </p>
        </div>
      ) : (
        <div className="space-y-4 mt-4">
          {data.map((entry: any, idx: number) => (
            <div
              key={entry.user_id}
              className={`grid grid-cols-[2.5rem_1fr_3rem] gap-3 items-center p-4 rounded-xl border transition-all ${
                entry.user_id === userId
                  ? "border-[#31c47fdd] bg-[#31c47d0d]"
                  : idx === 0
                    ? "border-yellow-500/30 bg-yellow-500/5"
                    : "border-[#3a404b]"
              }`}
            >
              <div className="flex justify-center">{getRankIcon(idx)}</div>
              <div className="min-w-0">
                <p className="font-mono font-semibold text-[#e7ebef] truncate text-sm">
                  {entry.user_name}
                  {entry.user_id === userId && (
                    <span className="ml-2 text-xs text-[#31c47f]">(You)</span>
                  )}
                </p>
              </div>
              <p className="text-lg font-bold font-mono text-[#e7ebef] text-right">
                {entry.score}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayName;
