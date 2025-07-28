"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Card from "@/components/Card";
import AnimatedText from "@/components/AnimatedText";

type Project = {
  slug: string;
  title: string;
  link: string;
  thumbnail: string;
  background: string;
  description: string;
};

type Props = {
  title: string;
  jsonFileName: string;
  projectSlugs: string[];
  dir: "ltr" | "rtl";
};

export default function Launches({
  title,
  jsonFileName,
  projectSlugs,
  dir,
}: Props) {
  const rawData = require(`@/json/${jsonFileName}.json`);
  const allProjects: any[] = rawData as any[];
  const selectedProjects = allProjects
    .filter((proj) => projectSlugs.includes(proj.slug))
    .map((proj) => ({
      slug: proj.slug,
      title: proj.name,
      link: `${dir === "ltr" ? "/project" : "/ar/project"}/${proj.slug}`,
      thumbnail: proj.imgdeve || "/loading.webp",
      background: proj.imgmaster || "/loading.webp",
      description: proj.desc1,
    }));

  const slidesSm = selectedProjects.map((item, i) => (
    <div key={i} className="bg-red-500 rounded-xl w-full h-[560px]">
      <Card
        title={item.title}
        link={item.link}
        thumbnail={item.thumbnail}
        dir={dir}
        background={item.background}
        description={item.description}
      />
    </div>
  ));

  const slidesLg = [];
  for (let i = 0; i < selectedProjects.length; i += 3) {
    slidesLg.push(
      <div key={i} className="flex flex-col md:flex-row gap-4 mx-auto p-4">
        <div className="rounded-xl w-full md:w-2/3 min-h-[600px]">
          {selectedProjects[i] && <Card {...selectedProjects[i]} dir={dir} />}
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {[1, 2].map((j) =>
            selectedProjects[i + j] ? (
              <div key={j} className="rounded-xl min-h-[290px] w-full">
                <Card {...selectedProjects[i + j]} dir={dir} />
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-11/12 lg:max-w-9/12 mx-auto py-8">
      <div className="text-4xl relative mb-4 w-fit">
        <span
          className={`absolute  ${
            dir ? "w-2/12 -bottom-2" : "w-1/12 -bottom-2"
          } h-0.5 bg-[#333]`}
        ></span>
        <AnimatedText
          text={title}
          direction={dir ? "right" : "left"}
          lang={dir ? "ar" : "en"}
          once={false}
        />
      </div>

      {/* للموبايل */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 10000 }}
          pagination={false}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.1}
        >
          {slidesSm.map((component, i) => (
            <SwiperSlide key={i}>{component}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* للديسكتوب */}
      <div className="hidden md:block">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 50000 }}
          pagination={false}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.1}
        >
          {slidesLg.map((component, i) => (
            <SwiperSlide key={i}>{component}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
