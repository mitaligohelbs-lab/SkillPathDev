"use client";

import Header from "./Header";
import { useParams } from "next/navigation";

const PreparationHeader = () => {
  const { technology, topic, level } = useParams();
  return (
    <Header text={`MCQ Round | ${technology} | ${topic} | Level ${level}`} />
  );
};

export default PreparationHeader;
