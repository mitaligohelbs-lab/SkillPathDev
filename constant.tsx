import {
  BarChart3,
  Code2,
  Star,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";

export const ALL_FEATURE = [
  {
    icon: <Target />,
    title: "Focused MCQs",
    desc: "Topic-wise questions, 10 per level.",
  },
  {
    icon: <TrendingUp />,
    title: "Progressive Levels",
    desc: "Score 7+ to unlock the next level.",
  },
  {
    icon: <Code2 />,
    title: "Compete & Learn",
    desc: "Leaderboards, analytics, bookmarks.",
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

export const LOGIN_PROMPT = [
  {
    text: "Bookmark questions for later review",
    icon: "⭐",
  },
  {
    text: "Compete on the Leaderboard",
    icon: "🏆",
  },
  {
    text: "Track your Analytics & progress",
    icon: "📊 ",
  },
  {
    text: "See your rank among other devs",
    icon: "🎯",
  },
];

export const HEADER_LINKS = [
  {
    icon: <BarChart3 className="w-5 h-5 text-[#707d8f]" />,
    to: "/analysis",
  },
  {
    icon: <Star className="w-5 h-5 text-[#707d8f]" />,
    to: "/bookmark",
  },
  {
    icon: <Trophy className="w-5 h-5 text-[#707d8f]" />,
    to: "/leaderboard",
  },
];
