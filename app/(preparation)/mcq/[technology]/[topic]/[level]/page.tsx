import MCQ from "@/components/mcq/MCQ";
import { JS_TOPICS, TECHNOLOGIES } from "@/constant";

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const { technology, topic, level } = resolvedParams;

  const techName = TECHNOLOGIES.find(({ id }) => id === technology)?.name;
  const topicName = JS_TOPICS?.find(({ id }) => id === topic)?.name;
  const levelMap: any = {
    "level-1": "Basic",
    "level-2": "Intermediate",
    "level-3": "Advanced",
  };
  const levelName = levelMap[level] || level;

  return {
    title: `${techName} ${topicName} MCQs (${levelName}) – Practice Questions | SkillDev`,
    description: `Practice ${techName} ${topicName} MCQs at ${levelName} level. Test your knowledge, improve your coding skills, and prepare for interviews with SkillDev.`,
  };
}

const page = () => <MCQ />;
export default page;
