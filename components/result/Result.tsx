"use client";

import { useEffect } from "react";

import { useAppSelector } from "@/lib/hook";
import { supabase } from "@/lib/supabase";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

import ActionButton from "./components/ActionButton";
import ResultHeader from "./components/ResultHeader";
import LeaderBoard from "../leaderboard/LeaderBoard";

import Layout from "../common/Layout";

import { TECHNOLOGIES, JS_TOPICS } from "@/constant";


const Result = () => {
  const { userId, fullName } = useCurrentUser();

  const { technology, topic, correct, level } = useAppSelector(
    (state) => state.quiz,
  );

  const currTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name;

  const addScore = async () => {
    if (!userId || !currTechnologyName || !currTopicName) return;

    try {
      // Check existing record
      const { data: existingUser, error } = await supabase
        .from("user_scores")
        .select("score")
        .eq("user_id", userId)
        .eq("technology", currTechnologyName)
        .eq("topic", currTopicName)
        .eq("level", level)
        .eq("user_name", fullName)
        .maybeSingle();

      if (error) {
        console.log("Fetch error:", error);
        return;
      }

      // If record exists → compare score
      if (existingUser) {
        if (correct > existingUser.score) {
          const { error: updateError } = await supabase
            .from("user_scores")
            .update({ score: correct })
            .match({
              user_id: userId,
              user_name: fullName,
              technology: currTechnologyName,
              topic: currTopicName,
              level,
            });

          if (updateError) console.log("Update error:", updateError);
        }
      } else {
        // Insert new record
        const { error: insertError } = await supabase
          .from("user_scores")
          .insert({
            user_id: userId,
            technology: currTechnologyName,
            topic: currTopicName,
            level,
            score: correct,
            user_name: fullName,
          });

        if (insertError) console.log("Insert error:", insertError);
      }
    } catch (err) {
      console.log("Unexpected error:", err);
    }
  };

  const addAttemp = async () => {
    try {
      await supabase.from("user_attempts").insert({
        user_id: userId,
        technology: technology,
        topic: topic,
        level: level,
        score: correct,
        total_questions: 10,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (technology && topic && userId && correct >= 7 && level) {
      addScore();
    }

    if (technology && topic && userId && level && correct) {
      addAttemp();
    }
  }, [technology, topic, userId, correct, level]);

  return (
    <Layout>
      <div className="w-full space-y-3 pt-20 pb-10">
        <ResultHeader />
        {userId && <LeaderBoard isDisplay={false} />}
        <ActionButton />
      </div>
    </Layout>
  );
};

export default Result;
