"use client";

import { useAppSelector } from "@/lib/hook";
import Layout from "../common/Layout";
import ReviewBox from "./components/ReviewBox";

const Review = () => {
  const allQuestion = useAppSelector((state) => state.analysis)?.question;
  return (
    <Layout className="px-5 md:px-0">
      <div className="py-20">
        {allQuestion.map((question, idx) => (
          <div className="py-2 w-full">
            <ReviewBox question={question} questionNumber={idx + 1} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Review;
