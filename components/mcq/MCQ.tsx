"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { MCQList } from "../types/mcqTypes";
import { JS_TOPICS, TECHNOLOGIES } from "@/constant";

import MCQDisplay from "./components/MCQDisplay";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addQuestions } from "@/lib/features/CurrentUserLevelWiseAnanlysis";
import { useParams } from "next/navigation";
import { addTechSrack } from "@/lib/features/CurrentSelectedTachSlice";
import { reset } from "@/lib/features/QuizSlice";
import { persistor } from "@/lib/store";

const MCQ = () => {
  const {
    technology: paramTechnology,
    topic: paramTopic,
    level: paramLevel,
  } = useParams();
  const dispatch = useAppDispatch();
  const { technology, topic, level } = useAppSelector(
    (state) => state.technology,
  );
  const { correct, attemp } = useAppSelector((state) => state.quiz);
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

  const handleSetAndRemoveDataInRedux = async () => {
    if (!technology && !topic && paramTechnology && paramTopic && paramLevel) {
      dispatch(
        addTechSrack({
          technology: paramTechnology,
          level: +paramLevel,
          topic: paramTopic,
        }),
      );
    }

    if (attemp && correct) {
      await persistor.purge();
      dispatch(reset());
    }
  };

  useEffect(() => {
    handleSetAndRemoveDataInRedux();
  }, [technology, topic, paramLevel, paramTechnology, paramTopic]);

  return (
    <div className="max-w-2xl overflow-y-auto pt-20 mx-auto">
      {currentQuestion && (
        <MCQDisplay
          question={currentQuestion}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
          currQuestionNumber={currQuestionNumber}
        />
      )}
    </div>
  );
};

export default MCQ;
