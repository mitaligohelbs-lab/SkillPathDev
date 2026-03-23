import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/analysis", "/bookmark", "/result", "/review", "/api","/signIn","/signUp"],
      },
    ],
    sitemap: "https://skillpathdev.vercel.app/sitemap.xml",
  };
}
