import Certificate from "@/components/certificate/Certificate";

export const metadata = {
  title: "Your Coding Certificate | SkillDev",
  description:
    "View and share your SkillDev certificate. Showcase your coding skills and achievements with verified certificates.",
  keywords: [
    "coding certificate",
    "programming certificate",
    "skilldev certificate",
    "online certification",
    "developer certificate",
  ],
  alternates: {
    canonical: "https://skillpathdev.vercel.app/certificate",
  },
  openGraph: {
    title: "My Coding Certificate – SkillDev",
    description:
      "I just earned my coding certificate on SkillDev! Check it out and start your journey.",
    url: "https://skillpathdev.vercel.app/certificate",
    siteName: "SkillDev",
    images: [
      {
        url: "https://skillpathdev.vercel.app/og-certificate.png",
        width: 1200,
        height: 630,
        alt: "SkillDev Certificate",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Coding Certificate – SkillDev",
    description: "I just earned my certificate on SkillDev 🚀",
    images: ["https://skillpathdev.vercel.app/og-certificate.png"],
  },
};

const page = () => <Certificate />;
export default page;
