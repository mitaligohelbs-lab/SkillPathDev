import Header from "@/components/Header/Header";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="min-h-screen flex flex-col">
    <div className="fixed left-0 right-0 top-0 bg-[#101319] z-10 flex justify-between border-b px-6 py-4 items-center gap-3 border-[#272c3480]">
      <Header text="SkillPath" subText="Dev" isDisplay />
    </div>
    <div className="grow overflow-y-auto">{children}</div>
  </div>
);
export default layout;
