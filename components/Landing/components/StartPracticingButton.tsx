import Link from "next/link";
import { ChevronRight } from "lucide-react";

const StartPracticingButton = () => {
  return (
    <Link
      href="/technologies"
      className="bg-[#31C47A] uppercase text-[#0C0E12] px-8 py-4 rounded-lg font-bold flex items-center gap-2 w-fit"
    >
      Start Practicing <ChevronRight />
    </Link>
  );
};

export default StartPracticingButton;
