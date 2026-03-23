import Auth from "@/components/auth/Auth";

export const metadata = {
  title: "Sign In – Access Your Coding Practice Dashboard | SkillDev",
  description:
    "Sign in to SkillDev to continue practicing coding MCQs, track your progress, and improve your programming skills with personalized insights.",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => <Auth isLogin />;
export default page;
