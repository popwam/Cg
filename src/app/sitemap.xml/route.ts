import { NextResponse } from 'next/server';
import data from '@/json/productsData.json';

const staticPaths = [
  '', 'about', 'contact', 'developers', 'projects', 'privacy', 'terms',
].flatMap((page) => [
  `/${page}`,
  `/ar/${page}`,
]);

export async function GET() {
  const baseUrl = 'https://capitalgateegy.com';

  // إزالة التكرار باستخدام Set
  const uniqueProjectSlugs = Array.from(new Set(data.map(p => p.slug)));
  const uniqueDeveloperSlugs = Array.from(new Set(data.map(p => p.linkdeve)));

  const projectPaths = uniqueProjectSlugs.flatMap((slug) => [
    `/project/${slug}`,
    `/ar/project/${slug}`,
  ]);

  const developerPaths = uniqueDeveloperSlugs.flatMap((slug) => [
    `/developer/${slug}`,
    `/ar/developer/${slug}`,
  ]);

  const allPaths = [...staticPaths, ...projectPaths, ...developerPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
