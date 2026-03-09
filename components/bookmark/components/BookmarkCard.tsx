"use client";

import DisplayOption from "@/components/common/DisplayOption";
import { MCQList } from "@/components/types/mcqTypes";
import { supabase } from "@/lib/supabase";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const BookmarkCard = ({
  questionId,
  handleBookmarkClick,
}: {
  questionId: number;
  handleBookmarkClick: (id: number) => {};
}) => {
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
    <div className="flex flex-col gap-2 space-y-2 mx-auto max-w-2xl overflow-y-auto">
      <div className="p-5 border border-[#272c34] bg-[#15181e] rounded-xl">
        <div className="text-[#707d8f] text-sm">
          {questionInfo?.technology} . {questionInfo?.topic}.{" "}
          {questionInfo?.level}
        </div>
        <div className="flex justify-between items-center py-1">
          <pre className="text-sm">{questionInfo?.question}</pre>
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
