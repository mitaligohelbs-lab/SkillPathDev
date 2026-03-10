"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ScoreProgressGraph = ({ data }: any) => {
  const chartData = data?.map((item: any, index: number) => ({
    attempt: index + 1,
    score: item.score,
    level: item.level,
  }));

  return (
    <div className="bg-[#15181e] p-4 rounded-xl border border-[#272c34]">
      <h3 className="text-[#e7ebef] mb-4 font-semibold">Score Progress</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#272c34" />
          <XAxis dataKey="attempt" stroke="#9aa4b2" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#31C47F"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreProgressGraph;
