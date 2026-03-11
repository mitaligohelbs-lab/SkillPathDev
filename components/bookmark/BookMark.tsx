"use client";

import { useEffect, useState } from "react";

import { FolderX } from "lucide-react";

import { supabase } from "@/lib/supabase";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

import BookmarkCard from "./components/BookmarkCard";
import Layout from "../common/Layout";

import { bookmarkProps } from "../types/mcqTypes";

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
    <>
      {allBookmarkedData?.length ? (
        <div className="pt-20 pb-10 space-y-5">
          {allBookmarkedData.map(({ question_id }) => (
            <BookmarkCard
              questionId={question_id}
              key={question_id}
              handleBookmarkClick={handleClick}
            />
          ))}
        </div>
      ) : (
        <Layout>
          <FolderX className="w-12 h-12 text-[#272c34] mx-auto" />
          <p className="text-[#9aa4b2] font-mono">
            No questions bookmarked yet. Bookmark a question to view it here.
          </p>
        </Layout>
      )}
    </>
  );
};

export default BookMark;
