import { Stack } from "@mui/material";
import ScoreProgressGraph from "./graph/ScoreProgressGraph";
import TopicPerformanceGraph from "./graph/TopicPerformenceGraph";

const Graph = ({ topicData, scoreData }: any) => {
  return (
    <Stack className="space-y-4 w-full">
      <ScoreProgressGraph data={scoreData} />
      <TopicPerformanceGraph data={topicData} />
    </Stack>
  );
};

export default Graph;
