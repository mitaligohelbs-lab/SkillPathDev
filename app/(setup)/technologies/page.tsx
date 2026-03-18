import SelectTechnology from "@/components/SelectTechnology/SelectTechnology";

const techList = ["javaScript", "React", "TypeScript"];
export const generateMetadata = () => {
  const techString = techList.join(", ");
  return {
    title: `Learn ${techString} – Practice Coding Skills | SkillPathDev`,
    description: `Explore and practice coding MCQs in ${techString} on SkillPathDev. Improve your programming skills with hands-on quizzes and challenges.`,
  };
};

const page = () => <SelectTechnology />;
export default page;
