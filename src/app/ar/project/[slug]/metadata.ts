import type { Metadata } from "next";
import rawProducts from "@/json/productsDataAr.json" assert { type: "json" };

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

  // بندور بالمشروع linkproject
  const project = projects.find((proj) => proj.slug === params.slug);

  if (!project) {
    return {
      title: "المشروع غير موجود - كابيتال جيت",
      description: "لم يتم العثور على بيانات هذا المشروع العقاري.",
    };
  }

  return {
    title: `${project.name} - مشروع عقاري من ${project.namedeve} | كابيتال جيت`,
    description:
      project.desc1 ||
      `اكتشف تفاصيل مشروع ${project.name} العقاري من تطوير ${project.namedeve}.`,
    keywords: [
      project.name,
      "مشاريع عقارية",
      "عقارات العاصمة الإدارية",
      "كابيتال جيت",
      project.namedeve,
      project.district,
      "مشروعات عقارية",
      "مشاريع سكنية",
      "عقارات التجمع الخامس",
      "شقق العاصمة الإدارية",
      " فيلات الشيخ زايد",
      " الساحل الشمالي",
      "شركة عقارات مصر",
      "كابيتال جيت",
      "شراء شقة",
      "الاستثمار العقاري",
      "وسيط عقاري",
      "مشروعات مصر العقارية",
      "عقارات فاخرة",
    ],
    viewport: 'width=device-width, initial-scale=1.0',
    openGraph: {
      title: `${project.name} - كابيتال جيت`,
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
      title: `${project.name} - كابيتال جيت`,
      description: project.desc1,
      images: [project.imgmaster || project.icon],
    },
  };
}
