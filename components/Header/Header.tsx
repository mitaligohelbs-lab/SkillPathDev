import { Code2 } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex border-b px-6 py-4 items-center gap-3 border-[#272c3480]">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center  bg-[#31c47f]">
        <Code2 className="w-5 h-5 text-black" />
      </div>
      <span className="font-mono font-bold text-lg">
        SkillPath<span className="text-[#31c47f]">Dev</span>
      </span>
    </div>
  );
};

export default Header;
