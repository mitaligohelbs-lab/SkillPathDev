import { Code2, Target, TrendingUp } from "lucide-react";

export const ALL_FEATURE = [
  {
    icon: <Target />,
    title: "Focused Topics",
    desc: "No random DSA. Pure language concepts.",
  },
  {
    icon: <TrendingUp />,
    title: "Progressive Levels",
    desc: "Unlock harder challenges as you grow.",
  },
  {
    icon: <Code2 />,
    title: "MCQ + Coding",
    desc: "Mixed rounds like real interviews.",
  },
];

export const TECHNOLOGIES = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    enabled: true,
  },
  { id: "react", name: "React", icon: "⚛️", enabled: false },
  { id: "typescript", name: "TypeScript", icon: "🔷", enabled: false },
];
