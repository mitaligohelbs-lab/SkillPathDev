export default function sitemap() {
  const baseUrl = "https://skillpathdev.vercel.app";
  const technologies = ["javascript", "react", "nextjs"];

  const topics: Record<string, string[]> = {
    javascript: [
      "closure",
      "hoisting",
      "async",
      "event-loop",
      "scope",
      "arrays",
      "prototypes",
      "es6",
    ],
    react: ["hooks", "state", "lifecycle"],
    nextjs: ["routing", "seo", "data-fetching"],
  };

  const levels = ["level-1", "level-2", "level-3"];
  const urls: { url: string; lastModified: Date }[] = [];

  urls.push(
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/select-tech`, lastModified: new Date() },
    { url: `${baseUrl}/analysis`, lastModified: new Date() },
    { url: `${baseUrl}/leaderboard`, lastModified: new Date() },
    { url: `${baseUrl}/bookmark`, lastModified: new Date() },
    { url: `${baseUrl}/technologies`, lastModified: new Date() },
  );

  technologies.forEach((tech) => {
    urls.push({
      url: `${baseUrl}/${tech}-mcq`,
      lastModified: new Date(),
    });

    topics[tech]?.forEach((topic) => {
      // Topic page
      urls.push({
        url: `${baseUrl}/${tech}/${topic}-mcq`,
        lastModified: new Date(),
      });

      // MCQ levels
      levels.forEach((level) => {
        urls.push({
          url: `${baseUrl}/mcq/${tech}/${topic}/${level}`,
          lastModified: new Date(),
        });
      });
    });
  });

  return urls;
}
