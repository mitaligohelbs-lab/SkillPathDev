import { Grid } from "@mui/material";

import ScoreProgressGraph from "./graph/ScoreProgressGraph";
import TopicPerformanceGraph from "./graph/TopicPerformenceGraph";

const Graph = ({ topicData, scoreData }: any) => {
  return (
    <Grid className="space-y-4 md:space-y-0 w-full grid md:flex gap-4">
      <ScoreProgressGraph data={scoreData} />
      <TopicPerformanceGraph data={topicData} />
    </Grid>
  );
};

export default Graph;
