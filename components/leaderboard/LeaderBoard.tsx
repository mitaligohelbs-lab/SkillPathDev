"use client";

import { useEffect, useState } from "react";

import { useAppSelector } from "@/lib/hook";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

import SearchBar from "./components/SearchBar";
import DisplayName from "./components/DisplayName";
import LeaderboardDescription from "./components/LeaderboardDescription";
import { FolderX } from "lucide-react";

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
      className={`${isDisplay ? "pt-30" : "pt-5"} max-w-2xl mx-auto flex flex-col justify-center items-center gap-4 pb-5  md:px-0 px-6`}
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
      {select?.technology.toLowerCase() === "javascript" ? (
        <>
          <DisplayName
            data={leaderBoardData}
            select={select}
            selectedLevel={selectedLevel}
            currentUserrank={findCurrUserIndex + 1}
            isDisplay={isDisplay}
          />
          <LeaderboardDescription
            technology={select?.technology}
            topic={select?.topic}
            level={selectedLevel}
            correct={correct}
          />
        </>
      ) : (
        <div className="text-center py-12 space-y-2">
          <FolderX className="w-12 h-12 text-[#272c34] mx-auto" />
          <p className="text-[#9aa4b2] font-mono">Select technology</p>
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;
