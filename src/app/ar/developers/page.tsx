"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import rawProducts from "@/json/productsDataAr.json";
import Card from "@/components/CardDev";
import Head from "next/head";

type Props = {
  params?: Promise<{ slug: string }>;
};

type Product = {
  imgdeve: string;
  linkdeve: string;
  namedeve?: string;
  name: string;
};
export default function DeveloperPage(props: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const allProjects: Product[] = rawProducts as Product[];

  const developersMap = new Map<string, Product>();
  allProjects.forEach((proj) => {
    if (!developersMap.has(proj.linkdeve)) {
      developersMap.set(proj.linkdeve, proj);
    }
  });
  const uniqueDevelopers = Array.from(developersMap.values());

  const filteredDevelopers = uniqueDevelopers.filter(
    (dev) =>
      dev.namedeve?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navLinks = [
    { label: "الرئيسية", href: "/ar" },
    { label: "عناً", href: "/ar/about" },
    { label: "المطورين", href: "/ar/developers", activate: true },
    { label: "المشاريع", href: "/ar/projects" },
    { label: "تواصل ", href: "/ar/contact" },
    { label: "English", href: "/developers", issee: "no" },
  ];

  const socialLinks = [
    {
      title: "facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/CapitalGateEstate",
    },
    {
      title: "instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/capitalgaterealestate",
    },
  ];
  const dirs = "rtl";
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "كابيتال جيت للعقارات",
              url: "https://capitalgateegy.com/ar", // رابط النسخة العربية
              logo: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif",
              sameAs: [
                "https://www.facebook.com/CapitalGateEstate",
                "https://www.instagram.com/capitalgaterealestate/",
                "https://www.linkedin.com/in/capital-gate-a076b6376/",
              ],
              description:
                "اكتشف أفضل المشاريع العقارية مع كابيتال جيت. الوكالة الموثوقة للقاهرة الجديدة، العاصمة الإدارية، الشيخ زايد، وأكثر.",
              inLanguage: "ar",
            }),
          }}
        />
      </Head>
    <main
      className="w-screen overflow-x-hidden bg-white"
      dir={dirs}
      style={{ fontFamily: "ArLight" }}
    >

      <Navbar
        navLinks={navLinks}
        logoTop={
          "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623049/logo/agfrf31kpws0sxgxkudk.avif"
        }
        logoTextTop={
          "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623053/logo/fcygqklzlehiiori2dic.avif"
        }
        logoBotoom={
          "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623048/logo/t6vdoxqehyrikxe4tvhy.avif"
        }
        logoTextBotoom={
          "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/ritntst37ef2kpb7aohv.avif"
        }
        logoText="Capitl Gate"
        currentLang="en"
      />

      <div className="my-[15vh] flex flex-col items-center">
        <div className="text-3xl md:text-5xl relative mb-4 w-fit text-zinc-900 group duration-500 transition-all uppercase">
          <span
            className={`absolute w-0/12 group-hover:w-11/12 -bottom-2 h-0.5 transition-all duration-500 bg-[#333]`}
          ></span>
          <AnimatedText
            text="المطورون"
            direction="left"
            lang="ar"
            once={false}
          />
        </div>
        <input
          type="text"
          placeholder="البحث باسم المطور او المشروع ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded my-16 w-10/12 text-lg"
        />

        <ul className="space-y-2 w-fit flex flex-wrap justify-center gap-4 mt-2">
          {filteredDevelopers.length > 0 ? (
            filteredDevelopers.map((dev) => {
              return (
                <li key={dev.linkdeve}>
                  <div className="rounded-xl">
                    <Card
                      link={dev.linkdeve}
                      background={dev.imgdeve || "/loading.webp"}
                      dir={dirs}
                    />
                  </div>
                </li>
              );
            })
          ) : (
            <div className="flex flex-col">
              <p className="text-center text-red-500">
                لم يتم العثور على أي نتائج.
              </p>
              <p className="text-center text-gray-300/85">
                نعمل على إضافة بقية المطورون.
              </p>
            </div>
          )}
        </ul>
      </div>
      <Footer
        dir={dirs}
        logo={
          "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif"
        }
        links={socialLinks}
        titlemenu="القائمة الرئيسية"
        linkmenu={navLinks}
        addresstitle="عنوان"
        addressline1="شارع 90 الشمالي"
        addressline2="القاهرة الجديدة"
        addressline3="مصر"
        contacttitle="تواصل معنا"
        phone="+20 1144566600"
        email="info@capitalgateegy.com"
      />
    </main>
    </>
  );
}
