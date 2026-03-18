import { Zap } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col gap-4 pt-16 md:pt-0">
      <div className="border border-[rgba(49,196,127,0.3)] flex px-2 py-2 justify-center items-center rounded-full mx-auto bg-[#31C47F]/5 text-[#31C47F] text-sm w-64 gap-2">
        <Zap className="w-3.5 h-3.5 shrink-0" />
        Level-based Interview Prep
      </div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center pt-2">
        Level up for
        <span className="text-[#31c47f]"> frontend</span>
        <br />
        Interview
      </h1>

      <p className="max-w-xl text-lg mx-auto text-center text-[#707D8F]">
        Structured levels, real MCQs, leaderboards & analytics. Score 7/10 to
        unlock the next level. Compete. Learn. Repeat.
      </p>
    </div>
  );
};

export default Header;
