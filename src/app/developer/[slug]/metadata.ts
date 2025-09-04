import type { Metadata } from "next";
import rawProducts from "@/json/productsData.json" assert { type: "json" };

type Product = {
  slug: string;
  name: string;
  desc: string;
  linkdeve: string;
  namedeve: string;
  imgdeve: string;
  district: string;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const developers = rawProducts as Product[];

  const developer = developers.find((dev) => dev.linkdeve === params.slug);

  if (!developer) {
    return {
      title: "Developer Not Found - Capital Gate",
      description: "No data found for this developer.",
    };
  }
  return {
    title: `${developer.namedeve || developer.name} - Capital Gate`,
    description:
      developer.desc ||
      `Learn about projects ${
        developer.namedeve || developer.name
      } Real estate.`,
    keywords: [
      developer.namedeve,
      "Real estate projects",
      developer.name,
      developer.district,
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
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
      title: `${developer.namedeve} - Capital Gate`,
      description: developer.desc,
      images: [
        {
          url: developer.imgdeve, // غير المسار لو مختلف
          width: 1200,
          height: 630,
          alt: developer.namedeve,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${developer.namedeve} - Capital Gate`,
      description: developer.desc,
      images: [developer.imgdeve],
    },
  };
}
