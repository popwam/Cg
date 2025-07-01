/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ يتجاهل أي خطأ Lint أثناء build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ يتجاهل أخطاء TypeScript كمان (اختياري)
  },
};

module.exports = nextConfig;
