"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const ProgressHeader = () => {
  const pathName = usePathname();
  return (
    <Header
      text={
        pathName.split("/")[1].slice(0, 1).toUpperCase() +
        pathName.split("/")[1].slice(1)
      }
    />
  );
};

export default ProgressHeader;
