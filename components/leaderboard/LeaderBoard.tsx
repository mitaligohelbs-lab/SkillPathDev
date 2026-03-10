"use client";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import DisplayName from "./components/DisplayName";
import { useAppSelector } from "@/lib/hook";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

const LeaderBoard = ({ isDisplay = true }) => {
  const { userId, fullName } = useCurrentUser();
  const [leaderBoardData, setLeaderBoardData] = useState<any>([]);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [select, setSelect] = useState({
    technology: "",
    topic: "",
  });
  const { correct } = useAppSelector((state) => state.quiz);
  const { technology, topic, level } = useAppSelector(
    (state) => state.technology,
  );

  const findCurrUserIndex = leaderBoardData.findIndex(
    ({ user_id }: any) => user_id === userId,
  );

  useEffect(() => {
    if (technology && topic && level) {
      setSelectedLevel(+level);
      setSelect({
        technology,
        topic,
      });
    }
  }, [technology, topic, level]);

  useEffect(() => {
    if (!isDisplay) {
      setLeaderBoardData([
        {
          user_id: userId,
          user_name: fullName,
          score: correct,
        },
      ]);
    }
  }, [isDisplay]);

  return (
    <div
      className={`${isDisplay ? "pt-30" : "pt-5"} flex flex-col justify-center items-center gap-4`}
    >
      {isDisplay && (
        <SearchBar
          setLeaderBoardData={setLeaderBoardData}
          select={select}
          setSelect={setSelect}
          setSelectedLevel={setSelectedLevel}
          selectedLevel={selectedLevel}
        />
      )}
      {select?.technology.toLowerCase() === "javascript" && (
        <DisplayName
          data={leaderBoardData}
          select={select}
          selectedLevel={selectedLevel}
          currentUserrank={findCurrUserIndex + 1}
          isDisplay={isDisplay}
        />
      )}
    </div>
  );
};

export default LeaderBoard;
