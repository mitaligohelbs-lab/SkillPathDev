"use client";

import CommonHeader from "@/components/common/CommonHeader";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const name = pathName.split("/")[2];
  return (
    <CommonHeader
      title={`Choose a ${name} Topic`}
      description={`Select a ${name} concept to practice`}
    />
  );
};

export default Header;
