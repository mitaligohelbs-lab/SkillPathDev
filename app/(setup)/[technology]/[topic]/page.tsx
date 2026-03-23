import LevelSelection from "@/components/level/LevelSelection";

export const generateMetadata = async ({ params }: any) => {
  const resolveParams = await params;
  const { technology, topic } = resolveParams;
  return {
    title: "Choose a Level – Practice Coding MCQs | SkillDev",
    description: "Select a difficulty level for your coding practice.",
    alternates: {
      canonical: `https://skillpathdev.vercel.app/${technology}/${topic}`,
    },
  };
};

const page = () => <LevelSelection />;
export default page;
