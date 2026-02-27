"use client";

import { JS_TOPICS, TECHNOLOGIES } from "@/constant";
import Header from "./Header";
import { useParams } from "next/navigation";

const SetupHeader = () => {
  const { technology, topic } = useParams();

  const currTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name;
  const headerText = currTopicName ?? currTechnologyName ?? "SkillPathDev";

  return (
    <div className="flex border-b px-6 py-4 items-center gap-3 border-[#272c3480]">
      <Header text={headerText} />
    </div>
  );
};

export default SetupHeader;
