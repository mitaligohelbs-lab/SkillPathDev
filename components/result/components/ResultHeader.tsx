"use client";
import FeatureCard from "@/components/common/FeatureCard";
import { useAppSelector } from "@/lib/hook";
import { CheckCircle2, Trophy, XCircle } from "lucide-react";

const ResultHeader = () => {
  const { topic, level, correct } = useAppSelector((state) => state.quiz);
  const accuracy = Math.round((correct / 10) * 100);
  const passed = correct >= 7;
  return (
    <div className="space-y-3">
      <div
        className={`w-20 h-20 rounded-2xl pb-3  mx-auto flex items-center justify-center ${passed ? "bg-[#31C47F]/10  " : "bg-[#d345451a] "}`}
        style={
          passed ? { boxShadow: "0 0 40px hsl(152 60% 48% / 0.4)" } : undefined
        }
      >
        {passed ? (
          <Trophy className="w-10 h-10 text-[#31c47f] border-[#31c47f]" />
        ) : (
          <XCircle className="w-10 h-10 text-[#d34545] border-[#d34545] " />
        )}
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-center">
          {passed ? "Great Job! 🎉" : "Keep Practicing!"}
        </h1>
        {(topic || level) && (
          <p className="text-[#707D8F] text-center">
            {topic} · Level {level}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mx-auto">
        <FeatureCard
          title="SCORE"
          desc={`${correct}/10`}
          bgColor="bg-[#31c47f0d]"
          textColor="text-[#31C47F]"
          descriptionFont="text-xl font-bold"
        />
        <FeatureCard
          title="Accuracy"
          desc={`${accuracy}%`}
          descriptionFont="text-xl font-bold"
        />
      </div>
      <div
        className={`flex items-center gap-4  p-4 border ${passed ? "border-[#31c47f] bg-[#31C47F]/10" : "border-[#d34545] bg-[#d345451a]"} rounded-xl w-full`}
      >
        {passed ? (
          <CheckCircle2 className="w-5 h-5 shrink-0 text-[#31c47f]" />
        ) : (
          <XCircle className="w-5 h-5 shrink-0 text-[#d34545]" />
        )}

        <div className="flex flex-col ">
          <div className={`${passed ? "text-[#31c47f]" : "text-[#d34545]  "}`}>
            {passed ? "Level 2 Unlocked !" : "Score 7/10 to unlock next level"}
          </div>
          <div className="text-sm text-[#707d8f]">
            {passed
              ? "You’re ready for the next challenge 🚀"
              : "Review answers and try again"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultHeader;
