"use client";

import { useParams } from "next/navigation";
import CommonHeader from "@/components/common/CommonHeader";

const Header = () => {
  const { technology } = useParams();

  return (
    <CommonHeader
      title={`Choose a ${technology} Topic`}
      description={`Select a ${technology} concept to practice`}
    />
  );
};

export default Header;
