"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Card from "@/components/CardDev";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  jsonFileName: "productsDataAr" | "productsData"; // من غير .json
};

type Product = {
  slug: string;
  imgmaster: string;
  imgdeve: string;
  linkdeve: string;
  namedeve?: string;
  icon?: string;
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

export default function Developers({ title, jsonFileName }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const dir = jsonFileName === "productsData" ? "ltr" : "rtl";

  const rawData = require(`@/json/${jsonFileName}.json`);
  const allProjects: Product[] = rawData as Product[];

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

  const chunkSize = Math.ceil(filteredDevelopers.length / 3);
  const chunks = Array.from({ length: 3 }, (_, i) =>
    filteredDevelopers.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <div className="max-w-11/12 lg:max-w-9/12 mx-auto py-8">
      <div className="text-4xl relative mb-4 w-fit">
        <span
          className={`absolute ${
            dir ? "w-2/12 -bottom-2" : "w-1/12 -bottom-2"
          } h-0.5 bg-[#333]`}
        ></span>
        <AnimatedText
          text={title}
          direction={dir ? "left" : "right"}
          lang={dir ? "ar" : "en"}
          once={false}
        />
      </div>

      <div className="space-y-6">
        {chunks.map((chunk, index) => (
          <Swiper
            key={`swiper-${index}`}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: index % 2 !== 0,
            }}
            allowTouchMove={false}
            grabCursor={false}
            simulateTouch={false}
            slidesPerView="auto"
          >
            {chunk.map((dev, i) => (
              <SwiperSlide
                key={`slide-${index}-${i}`}
                className="!w-[208px] md:!w-[320px]"
              >
                <Link href={jsonFileName === 'productsData' ? `/developer/${dev.linkdeve}` : `/ar/developer/${dev.linkdeve}`}>
                  <div className="rounded-xl overflow-hidden bg-white shadow-md">
                    <Image
                      src={dev.imgdeve || "/loading.webp"}
                      alt={dev.name || "developer"}
                      width={320}
                      height={180}
                      loading="lazy"
                      unoptimized
                      className="w-full h-[180px] object-contain filter grayscale hover:grayscale-0 hover:saturate-150 transition-all duration-300"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </div>
  );
}
