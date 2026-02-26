"use client";

import CommonHeader from "@/components/common/CommonHeader";
import { useParams } from "next/navigation";

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
