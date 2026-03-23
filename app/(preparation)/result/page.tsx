import Result from "@/components/result/Result";

export const metadata = {
  title: "Your MCQ Results – Check Your Score | SkillDev",
  description:
    "View your MCQ results, scores, and performance summary. Understand your strengths and improve your coding skills with detailed insights.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => <Result />;
export default page;
