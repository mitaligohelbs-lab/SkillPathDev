"use client";

import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MCQList } from "../types/mcqTypes";
import { JS_TOPICS, TECHNOLOGIES } from "@/constant";

const MCQ = () => {
  const { technology, topic, level } = useParams();

  const currTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name;

  const [allQuestionData, setAllQuestionData] = useState<MCQList[]>([]);
  const [currQuestion, setCurrQuestion] = useState<MCQList | null>(null);

  async function fetchMCQs() {
    try {
      const { data } = await supabase
        .from("skilldev_mcq")
        .select("*")
        .eq("technology", currTechnologyName)
        .eq("topic", currTopicName)
        .eq("level", `Level ${level}`)
        .limit(10);

      setAllQuestionData(data ?? []);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMCQs();
  }, [technology, topic, level]);

  useEffect(() => {
    allQuestionData && !currQuestion
      ? setCurrQuestion(allQuestionData[0])
      : null;
  }, [allQuestionData]);

  return <div>Hii</div>;
};

export default MCQ;
