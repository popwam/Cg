"use client";

import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import rawProducts from "@/json/productsData.json";
import Head from "next/head";

// ========== TYPES ==========
type Props = {
  params: Promise<{ slug: string }>;
};

type Product = {
  slug: string;
  imgmaster: string;
  imgdeve: string;
  linkdeve: string;
  namedeve?: string; // أضفناها هنا
  icon?: string; // وأضفنا دي كمان
  img1: string;
  img2?: string;
  img3?: string;
  img4?: string;
  district: string;
  districtKey: string;
  price?: string;
  downpayment?: string;
  years?: string;
  delivery?: string;
  name: string;
  desc?: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  apartments?: string;
  dublex?: string;
  villas?: string;
  chaletapartments?: string;
  chaletdublex?: string;
  chaletvillas?: string;
};

// ========== COMPONENT ==========
export default function DeveloperPage(props: Props) {
  const { slug } = use(props.params);

  const projects: Product[] = rawProducts.filter(
    (proj) => proj.linkdeve === slug
  );

  if (projects.length === 0) {
    console.log("slug:", slug);
    console.log(
      "all linkdeves:",
      rawProducts.map((p) => p.linkdeve)
    );

    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          المطور غير موجود: {slug}
        </h1>
        <p className="mt-4 text-gray-600">
          تأكد من صحة الرابط أو راجع المطورين المتاحين
        </p>
      </main>
    );
  }

  const developerName = projects[0].namedeve || slug.toUpperCase();
  const developerDesc = projects[0].desc || slug.toUpperCase();
  const developerImges = projects[0].imgdeve || slug.toUpperCase();
  const developerslug = projects[0].slug || slug.toUpperCase();

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "DEVELOPERS", href: "/developers", activate: true },
    { label: "PROJECTS", href: "/projects" },
    { label: "CONTACT US", href: "/contact" },
    { label: "عربي", href: `/ar/developer/${slug}`, issee: "false" },
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
  console.log("slug:", slug);
  console.log(
    "all linkdeves:",
    rawProducts.map((p) => p.linkdeve)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: developerName,
    description: developerDesc,
    brand: {
      "@type": "Brand",
      name: developerName,
    },
    image: developerImges,
    url: `https://capitalgate.com/developer/${developerslug}`,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main
        className="bg-white w-screen overflow-x-hidden min-h-screen items-center justify-center flex flex-col relative"
        dir="ltr"
        style={{ fontFamily: "EnLight" }}
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
          logoText="Capital Gate"
          currentLang="en"
        />

        <div className="max-w-6xl mx-auto p-6 rounded-xl flex flex-col md:flex-row gap-8 items-start mb-[10%] mt-[15vh] md:mt-[10%]">
          <div className="flex flex-row md:flex-col items-center gap-4 w-full lg:w-1/4 justify-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">
              <Image
                alt={developerName}
                src={developerImges || "/loading.webp"}
                width={200}
                height={100}
              />
            </div>
            <button className="w-24 h-24 bg-zinc-400 text-white rounded-full flex items-center justify-center text-center">
              Ask
              <br />
              NEW
            </button>
          </div>

          <div className="flex-1 w-full space-y-4 md:max-w-9/12">
            <div className="text-3xl capitalize relative mb-4 w-fit text-zinc-900 font-bold transition-all ">
              <span
                className={`absolute w-10/12 -bottom-2 h-0.5 bg-[#333]`}
              ></span>
              <AnimatedText
                text={developerName}
                direction="right"
                lang="en"
                once={false}
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed tracking-[1px] py-6">
              {developerDesc}
            </p>
            <div className="flex justify-center mt-8">
              <button className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-300 font-semibold text-md capitalize">
                Develpontes {developerName}
              </button>
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              loop={projects.length > 1}
              speed={800}
              slidesPerView={4}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1500: { slidesPerView: 4 },
              }}
              className="mt-6"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.slug}>
                  <Link href={`/ar/project/${project.slug}`}>
                    <div
                      className="h-[115px] w-[115px]"
                      style={{
                        backgroundImage: `url(${
                          project.icon || "/loading.webp"
                        })`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <Footer
            dir="ltr"
            logo={
              "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif"
            }
            links={socialLinks}
            titlemenu="MAIN MENU"
            linkmenu={navLinks}
            addresstitle="ADDRESS"
            addressline1="North 90 ST"
            addressline2="New Cairo"
            addressline3="Egypt"
            contacttitle="CONTACT"
            phone="+20 1144566600"
            email="info@capitalgateegy.com"
          />
        </div>
      </main>
    </>
  );
}
