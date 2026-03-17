import { ModalBodyTypes } from "../types/ModalTypes";

const ModalBody = ({
  topic,
  level,
  isDisplayChallengeModal,
  challengeUrl,
  leaderboardUrl,
  score,
}: ModalBodyTypes) => {
  const accuracy = (+score * 100) / 10;
  return (
    <>
      <div className="p-4 rounded-xl bg-linear-to-br from-[#31c47f]/5 to-[#31c47f]/10 border border-[#31c47f]/20 space-y-2">
        <span className="text-sm  text-muted-foreground">
          {topic} · L{level}
        </span>

        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-[#31c47f]">{score}</span>
          <span className="text-lg text-[#707d8f]">/{10}</span>
          <span className="ml-auto text-2xl font-bold text-foreground">
            {accuracy}%
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-[#31c47f] transition-all duration-500"
            style={{ width: `${accuracy}%` }}
          />
        </div>
        <p className="text-[10px] text-[#707d8f] text-right">
          powered by SkillPathDev
        </p>
      </div>
      {isDisplayChallengeModal && (
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-[#1f222980] border border-[#272c34]">
            <p className="text-[10px] text-[#707d8f]  uppercase tracking-wider mb-1">
              🎯 Quiz Link
            </p>
            <p className="text-xs  text-[#e7ebef] truncate">{challengeUrl}</p>
          </div>
          <div className="p-3 rounded-lg bg-[#1f222980] border border-[#272c34]">
            <p className="text-[10px] text-[#707d8f] uppercase tracking-wider mb-1">
              🏆 Leaderboard
            </p>
            <p className="text-xs  text-[#e7ebef] truncate">{leaderboardUrl}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalBody;
