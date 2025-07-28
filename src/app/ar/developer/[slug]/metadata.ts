import type { Metadata } from "next";
import rawProducts from "@/json/productsDataAr.json" assert { type: "json" };

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

  // بندور بالمطور linkdeve مش slug
  const developer = developers.find((dev) => dev.linkdeve === params.slug);

  if (!developer) {
    return {
      title: "المطور غير موجود - كابيتال جيت",
      description: "لم يتم العثور على بيانات هذا المطور العقاري.",
    };
  }

  return {
    title: `${developer.namedeve || developer.name} - كابيتال جيت`,
    description:
      developer.desc ||
      `تعرف على مشاريع ${developer.namedeve || developer.name} العقارية.`,
    keywords: [
      developer.namedeve,
      "مشاريع عقارية",
      developer.name,
      developer.district,
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
    openGraph: {
      title: `${developer.namedeve} - كابيتال جيت`,
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
      title: `${developer.namedeve} - كابيتال جيت`,
      description: developer.desc,
      images: [developer.imgdeve],
    },
  };
}
