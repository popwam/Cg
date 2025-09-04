import type { Metadata } from "next";
import rawProducts from "@/json/productsData.json" assert { type: "json" };

type Project = {
  slug: string;
  name: string;
  desc: string;
  desc1: string;
  namedeve: string;
  icon: string;
  imgmaster: string;
  district: string;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const projects = rawProducts as Project[];

  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project) {
    return {
      title: "Project not available - Capital Gate",
      description: "No data found for this real estate project.",
    };
  }
  return {
    title: `${project.name} - Real estate project from ${project.namedeve} | Capital Gate`,
    description:
      project.desc1 ||
      `Find out project details ${project.name} Real estate development ${project.namedeve}.`,
    keywords: [
      project.name,
      project.namedeve,
      project.district,
      "Real estate projects",
      "Real Estate Projects",
      "Residential Projects",
      "Fifth Settlement Real Estate",
      "New Administrative Capital Apartments",
      "Sheikh Zayed Villas",
      "North Coast",
      "Egypt Real Estate Company",
      "Capital Gate",
      "Buying an Apartment",
      "Real Estate Investment",
      "Real Estate Broker",
      "Egypt Real Estate Projects",
      "Luxury Real Estate",
      "New Cairo properties",
      "New Capital apartments",
      "Sheikh Zayed villas",
      "North Coast real estate",
      "Egypt property broker",
      "Capital Gate Real Estate",
      "buy apartment in Egypt",
      "real estate investment",
      "trusted real estate agency",
      "luxury properties Egypt",
    ],
    openGraph: {
      title: `${project.name} - Capital Gate`,
      description: project.desc1,
      images: [
        {
          url: project.imgmaster || project.icon, // غير المسار لو مختلف
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} - Capital Gate`,
      description: project.desc1,
viewport: 'width=device-width, initial-scale=1.0',

      images: [project.imgmaster || project.icon],
    },
  };
}
