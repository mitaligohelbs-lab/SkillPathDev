import LeaderBoard from "@/components/leaderboard/LeaderBoard";

export const metadata = {
  title: "Leaderboard – Top Coders & Rankings | SkillDev",
  description:
    "Check the leaderboard to see top performers. Compare your ranking with others and stay motivated to improve your coding skills.",
  alternates: {
    canonical: "https://skillpathdev.vercel.app/leaderboard",
  },
};

const page = () => <LeaderBoard />;
export default page;
