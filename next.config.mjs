/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/en/terms.html", destination: "/en/terms", permanent: true },
      { source: "/en/privacy.html", destination: "/en/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
