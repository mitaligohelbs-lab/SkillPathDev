"use client";

import { useEffect, useState } from "react";
import { bookmarkProps } from "../types/mcqTypes";
import { supabase } from "@/lib/supabase";
import BookmarkCard from "./components/BookmarkCard";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

const BookMark = () => {
  const { userId } = useCurrentUser();
  const [allBookmarkedData, setIsAllBookmarkedData] = useState<bookmarkProps[]>(
    [],
  );

  const fetchAllBookmarkedQuestionId = async () => {
    try {
      const { data } = await supabase
        .from("bookmarked_questions")
        .select("*")
        .eq("user_id", userId);
      setIsAllBookmarkedData(data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (question: number) => {
    await supabase
      .from("bookmarked_questions")
      .delete()
      .eq("user_id", userId)
      .eq("question_id", question);

    fetchAllBookmarkedQuestionId();
  };

  useEffect(() => {
    fetchAllBookmarkedQuestionId();
  }, []);

  return (
    <div className="pt-20 pb-10 space-y-5">
      {allBookmarkedData.map(({ question_id }) => (
        <BookmarkCard
          questionId={question_id}
          key={question_id}
          handleBookmarkClick={handleClick}
        />
      ))}
    </div>
  );
};

export default BookMark;
