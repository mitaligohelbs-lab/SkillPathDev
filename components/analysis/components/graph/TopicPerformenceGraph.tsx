"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TopicPerformanceGraph = ({ data }: any) => {
  const chartData = data?.map((item: any) => ({
    topic: item.key,
    avgScore: Number(item.totalAvg.toFixed(2)),
    bestScore: item.bestScore,
  }));

  return (
    <div className="bg-[#15181e] p-4 rounded-xl border border-[#272c34]">
      <h3 className="text-[#e7ebef] mb-4 font-semibold">Topic Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid stroke="#272c34" />
          <XAxis dataKey="topic" stroke="#9aa4b2" />
          <YAxis stroke="#9aa4b2" />
          <Tooltip />
          <Bar dataKey="avgScore" fill="#31C47F" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopicPerformanceGraph;
