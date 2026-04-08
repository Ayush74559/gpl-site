/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any specific Next.js config here
  reactStrictMode: true,
  images: {
    unoptimized: true, // Recommended for easier hosting on platforms like Netlify if not using a dedicated image optimizer
  },
};

export default nextConfig;
