"use client";

import { useEffect, useState } from "react";

import { Trash2 } from "lucide-react";

import { supabase } from "@/lib/supabase";

import DisplayOption from "@/components/common/DisplayOption";
import { MCQList } from "@/components/types/mcqTypes";
import { BookmarkCardTypes } from "@/components/types/types";

const BookmarkCard = ({
  questionId,
  handleBookmarkClick,
  level,
  technology,
  topic,
}: BookmarkCardTypes) => {
  const [questionInfo, setQuestionInfo] = useState<MCQList>();
  const fetchAllData = async () => {
    try {
      const { data } = await supabase
        .from("skilldev_mcq")
        .select("*")
        .eq("id", questionId);
      setQuestionInfo(data?.[0]);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllData();
  }, [questionId]);

  return (
    <div className="flex flex-col w-full gap-2 space-y-2 mx-auto flex-wrap">
      <div className="p-2 md:p-5 border border-[#272c34] bg-[#15181e] rounded-xl">
        <div className="text-[#707d8f] text-sm">
          {technology} . {topic}. {level}
        </div>
        <div className="flex justify-between items-center py-1">
          <pre
            className="rounded-xl text-sm md:text-base 
      whitespace-pre-wrap wrap-break-word
      overflow-x-auto text-white text-start"
          >
            {questionInfo?.question}
          </pre>
          <button
            className="p-2 rounded-lg transition-colors cursor-pointer"
            onClick={() => handleBookmarkClick(questionId)}
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
        <DisplayOption
          mode="info"
          text={questionInfo?.[questionInfo?.correct_answer].toString() || ""}
          isInfoColor="bg-[#31C47F0D] border-[#31c47f33] text-white"
        />
      </div>
    </div>
  );
};

export default BookmarkCard;
