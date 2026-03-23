import TopicSelection from "@/components/TopicSelection/TopicSelection";

export const generateMetadata = async ({ params }: any) => {
  const resolvedParams = await params;
  const { technology } = resolvedParams;
  return {
    title: "Choose a Topic – Practice Coding MCQs | SkillDev",
    description:
      "Select a topic and start practicing coding MCQs online. Test your skills in popular technologies like JavaScript, React, Next.js, and more on SkillDev.",
    alternates: {
      canonical: `https://skillpathdev.vercel.app/${technology}`,
    },
  };
};

const page = () => <TopicSelection />;
export default page;
