import BookMark from "@/components/bookmark/BookMark";

export const metadata = {
  title: "Bookmarked Questions – Review & Practice | SkillDev",
  description:
    "Access your saved MCQs and continue practicing. Review important questions and strengthen your programming concepts with SkillDev.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://skillpathdev.vercel.app/bookmark",
  },
};

const page = () => <BookMark />;
export default page;
