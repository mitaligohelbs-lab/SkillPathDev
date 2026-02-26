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

  return <Header text={headerText} />;
};

export default SetupHeader;
