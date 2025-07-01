import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // تعطيل أخطاء ESLint وقت الـ build
  },
};

export default nextConfig;
