  "use client";

import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MCQList } from "../types/mcqTypes";
import { JS_TOPICS, TECHNOLOGIES } from "@/constant";

import Layout from "../common/Layout";
import MCQDisplay from "./components/MCQDisplay";

const MCQ = () => {
  const { technology, topic, level } = useParams();

  const currTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name;

  const [allQuestionData, setAllQuestionData] = useState<MCQList[]>([]);
  const [currQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);

  const findQuestion = allQuestionData.find(
    (_, idx) => idx + 1 === currQuestionNumber,
  );

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

  return (
    <Layout isCard>
      {findQuestion && (
        <MCQDisplay
          question={findQuestion}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
          currQuestionNumber={currQuestionNumber}
        />
      )}
    </Layout>
  );
};

export default MCQ;
