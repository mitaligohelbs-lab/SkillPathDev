"use client";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import DisplayName from "./components/DisplayName";
import { useUser } from "@clerk/nextjs";
import { useAppSelector } from "@/lib/hook";

const LeaderBoard = ({ isDisplay = true }) => {
  const { user } = useUser();
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
    ({ user_id }: any) => user_id === user?.id,
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
          user_id: user?.id,
          user_name: user?.fullName,
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
      <DisplayName
        data={leaderBoardData}
        select={select}
        selectedLevel={selectedLevel}
        currentUserrank={findCurrUserIndex + 1}
        isDisplay={isDisplay}
      />
    </div>
  );
};

export default LeaderBoard;
