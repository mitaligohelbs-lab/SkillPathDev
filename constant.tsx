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
    id: "javaScript",
    name: "JavaScript",
    icon: "⚡",
    enabled: true,
  },
  { id: "react", name: "React", icon: "⚛️", enabled: false },
  { id: "typescript", name: "TypeScript", icon: "🔷", enabled: false },
];

export const JS_TOPICS = [
  {
    id: "closure",
    name: "Closure",
    icon: "🔒",
    description: "Lexical scope, closure patterns, and memory",
  },
  {
    id: "hoisting",
    name: "Hoisting",
    icon: "⬆️",
    description: "Variable and function hoisting behavior",
  },
  {
    id: "async",
    name: "Async JS",
    icon: "⏳",
    description: "Promises, async/await, and callbacks",
  },
  {
    id: "event-loop",
    name: "Event Loop",
    icon: "🔄",
    description: "Call stack, task queue, and microtasks",
  },
  {
    id: "scope",
    name: "Variables & Scope",
    icon: "📦",
    description: "var, let, const, and scope chains",
  },
  {
    id: "arrays",
    name: "Array & Object Methods",
    icon: "🗃️",
    description: "map, filter, reduce, and more",
  },
  {
    id: "prototypes",
    name: "Prototypes",
    icon: "🧬",
    description: "Prototype chain and inheritance",
  },
  {
    id: "es6",
    name: "ES6+ Features",
    icon: "✨",
    description: "Destructuring, spread, modules, and more",
  },
];

export const LEVELS = [
  {
    level: 1,
    name: "Basics",
    description: "Foundational concepts and simple problems",
  },
  {
    level: 2,
    name: "Intermediate",
    description: "Tricky edge cases and applied patterns",
  },
  {
    level: 3,
    name: "Advanced",
    description: "Expert-level mastery and optimization",
  },
];
