"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { MCQList } from "../types/mcqTypes";
import { JS_TOPICS, TECHNOLOGIES } from "@/constant";

import Layout from "../common/Layout";
import MCQDisplay from "./components/MCQDisplay";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addQuestions } from "@/lib/features/CurrentUserLevelWiseAnanlysis";

const MCQ = () => {
  const dispatch = useAppDispatch();
  const { technology, topic, level } = useAppSelector(
    (state) => state.technology,
  );
  const [allQuestionData, setAllQuestionData] = useState<MCQList[]>([]);
  const [currQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);

  const currTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name;

  const currentQuestion = allQuestionData.find(
    (_, idx) => idx + 1 === currQuestionNumber,
  );

  async function fetchMCQs() {
    try {
      const { data } = await supabase
        .from("skilldev_mcq")
        .select("*")
        .eq("technology", currTechnologyName || technology)
        .eq("topic", currTopicName || topic)
        .eq("level", `Level ${level}`);

      const shuffled = data?.sort(() => 0.5 - Math.random());
      const questions = shuffled?.slice(0, 10);

      const formattedQuestion = questions?.map(
        ({ id, question, explanation, correct_answer, A, B, C, D }) => ({
          id,
          question,
          explanation,
          correct_answer,
          options: [
            { text: A, option: "A" },
            { text: B, option: "B" },
            { text: C, option: "C" },
            { text: D, option: "D" },
          ],
          userAnswer: null,
        }),
      );
      dispatch(addQuestions(formattedQuestion ?? []));
      setAllQuestionData(questions ?? []);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMCQs();
  }, [technology, topic, level]);

  return (
    <Layout>
      {currentQuestion && (
        <MCQDisplay
          question={currentQuestion}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
          currQuestionNumber={currQuestionNumber}
        />
      )}
    </Layout>
  );
};

export default MCQ;
