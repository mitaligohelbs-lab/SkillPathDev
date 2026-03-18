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
      title={`Choose a ${formattedTechnologyName} Topic`}
      description={`Select a ${technology} concept to practice`}
    />
  );
};

export default Header;
