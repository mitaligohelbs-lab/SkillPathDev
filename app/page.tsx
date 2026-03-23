import Landing from "@/components/Landing/Landing";

export const metadata = {
  title: "Practice Coding MCQs Online – Improve Your Skills | SkillDev",
  description:
    "Start practicing coding MCQs online with SkillDev. Explore features, test your knowledge, and level up your programming skills quickly.",
  alternates: {
    canonical: `https://skillpathdev.vercel.app/`,
  },
  openGraph: {
    title: "SkillPathDev – Practice Coding MCQs & Crack Tech Interviews",
    description:
      "Master JavaScript, React & more with topic-wise MCQs. Track progress, analyze performance, and prepare for real developer interviews on SkillPathDev.",
    url: "https://skillpathdev.vercel.app/",
    siteName: "SkillPathDev",
    images: [
      {
        url: "https://skillpathdev.vercel.app/landing.png",
        width: 1200,
        height: 630,
        alt: "SkillPathDev Coding Practice Platform",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return <Landing />;
}
