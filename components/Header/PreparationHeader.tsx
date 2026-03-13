"use client";

import { useParams } from "next/navigation";
import { useAppSelector } from "@/lib/hook";
import Header from "./Header";

const PreparationHeader = () => {
  const quizData = useAppSelector((state) => state.quiz);
  const { technology, topic, level } = useParams();
  return (
    <div className="flex justify-between border-b px-2 md:px-6 py-4 items-center gap-3 border-[#272c3480]">
      <Header
        text={`MCQ Round | ${technology} | ${topic} | Level ${level}`}
        className="hidden md:flex"
      />
      <Header text="MCQ Round" className="block md:hidden" />
      <div className="text-sm text-[#707D8f] whitespace-nowrap">
        {`${quizData.attemp} / ${quizData.totalQuestion}`}
      </div>
    </div>
  );
};

export default PreparationHeader;
