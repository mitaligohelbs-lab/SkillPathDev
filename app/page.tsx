import Landing from "@/components/Landing/Landing";

export const metadata = {
  metadataBase: new URL("https://skillpathdev.vercel.app"),
  title: "Practice Coding MCQs Online – Improve Your Skills | SkillDev",
  description:
    "Start practicing coding MCQs online with SkillDev. Explore features and level up your programming skills.",
  openGraph: {
    title: "SkillPathDev – Practice Coding MCQs & Crack Tech Interviews",
    description: "Master JavaScript, React & more with topic-wise MCQs.",
    url: "/",
    siteName: "SkillPathDev",
    images: [
      {
        url: "/landing.png",
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
