import Auth from "@/components/auth/Auth";

export const metadata = {
  title: "Join SkillDev – Start Practicing Coding MCQs Today",
  description:
    "Sign up on SkillDev to practice coding MCQs, improve your programming skills, and prepare for technical interviews with real-world questions.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://skillpathdev.vercel.app/signUp",
  },
};

const page = () => <Auth />;
export default page;
