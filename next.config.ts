import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/company", permanent: true },
      { source: "/pricing", destination: "/price", permanent: true },
      { source: "/case-studies", destination: "/case", permanent: true },
      { source: "/capabilities", destination: "/works", permanent: true },
      { source: "/support", destination: "/company", permanent: true },
      { source: "/legal", destination: "/tokushoho", permanent: true },
      { source: "/blog", destination: "/info", permanent: true },
      { source: "/blog/:id*", destination: "/info", permanent: true },
      {
        source: "/curriculum/:step/lesson/:lessonId",
        destination: "/curriculum/:step",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
