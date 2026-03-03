"use client";

import { useAppSelector } from "@/lib/hook";
import Layout from "../common/Layout";
import ReviewBox from "./components/ReviewBox";

const Review = () => {
  const allQuestion = useAppSelector((state) => state.analysis)?.question;
  return (
    <Layout>
      <div className="py-15">
        {allQuestion.map((el, idx) => (
          <div className="py-2 w-full">
            <ReviewBox question={el} questionNumber={idx + 1} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Review;
