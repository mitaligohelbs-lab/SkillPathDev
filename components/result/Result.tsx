"use client";

import { useUser } from "@clerk/nextjs";
import Layout from "../common/Layout";
import ActionButton from "./components/ActionButton";
import ResultHeader from "./components/ResultHeader";
import { useAppSelector } from "@/lib/hook";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { TECHNOLOGIES, JS_TOPICS } from "@/constant";
import LeaderBoard from "../leaderboard/LeaderBoard";

const Result = () => {
  const { user } = useUser();

  const { technology, topic, correct, level } = useAppSelector(
    (state) => state.quiz,
  );

  const currTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name;

  const addScore = async () => {
    if (!user || !currTechnologyName || !currTopicName) return;

    try {
      // Check existing record
      const { data: existingUser, error } = await supabase
        .from("user_scores")
        .select("score")
        .eq("user_id", user.id)
        .eq("technology", currTechnologyName)
        .eq("topic", currTopicName)
        .eq("level", level)
        .eq("user_name", user.fullName)
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
              user_id: user.id,
              user_name: user.fullName,
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
            user_id: user.id,
            technology: currTechnologyName,
            topic: currTopicName,
            level,
            score: correct,
            user_name: user.fullName,
          });

        if (insertError) console.log("Insert error:", insertError);
      }
    } catch (err) {
      console.log("Unexpected error:", err);
    }
  };

  useEffect(() => {
    if (technology && topic && user && correct >= 7 && level) {
      addScore();
    }
  }, [technology, topic, user, correct, level]);

  return (
    <Layout>
      <div className="w-full space-y-3 pt-20">
        <ResultHeader />
        {user && <LeaderBoard isDisplay={false} />}
        <ActionButton user={user} />
      </div>
    </Layout>
  );
};

export default Result;
