import Analysis from "@/components/analysis/Analysis";

export const metadata = {
  title: "Performance Analysis – Track Your Progress | SkillDev",
  description:
    "Analyze your MCQ performance, track progress, and identify strengths and weaknesses to improve your coding skills effectively.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => <Analysis />;
export default page;
