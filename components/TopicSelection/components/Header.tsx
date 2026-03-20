"use client";

import { useParams } from "next/navigation";
import CommonHeader from "@/components/common/CommonHeader";
import { TECHNOLOGIES } from "@/constant";

const Header = () => {
  const { technology } = useParams() as { technology: string };
  const formattedTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology?.split("-")[0],
  )?.name;

  return (
    <CommonHeader
      title={`${formattedTechnologyName} MCQ Questions by Topic`}
      description={`Practice ${formattedTechnologyName} MCQ questions by topic. These multiple-choice questions with answers and explanations help you prepare for interviews and test your knowledge.`}
    />
  );
};

export default Header;
