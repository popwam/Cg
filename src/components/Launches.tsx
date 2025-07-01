"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "@/components/Card";
import AnimatedText from "@/components/AnimatedText";
import images from "@/assets/images";

// داتا الكروت
type datas = {
  title: string;
  link: string;
  thumbnail: string;
  background: string;
  description: string;
};

type Launche = {
  title: string;
  data: datas[];
  dir?: string;
};

export default function Launches({ title, data, dir }: Launche) {
  const slidesSm = data.map((item, i) => (
    <div key={i} className="bg-red-500 rounded-xl w-full h-[560px]">
      <Card
        title={item.title}
        link={item.link}
        thumbnail={item.thumbnail}
        dir="rtl"
        background={item.background}
        description={item.description}
      />
    </div>
  ));

  const slidesLg = [];
  for (let i = 0; i < data.length; i += 3) {
    slidesLg.push(
      <div key={i} className="flex flex-col md:flex-row gap-4 mx-auto p-4">
        <div className="rounded-xl w-full md:w-2/3 min-h-[600px]">
          {data[i] && (
            <Card
              title={data[i].title}
              link={data[i].link}
              thumbnail={data[i].thumbnail}
              dir="rtl"
              background={data[i].background}
              description={data[i].description}
            />
          )}
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {[1, 2].map((j) =>
            data[i + j] ? (
              <div key={j} className={`rounded-xl min-h-[290px] w-full`}>
                <Card
                  title={data[i + j].title}
                  link={data[i + j].link}
                  thumbnail={data[i + j].thumbnail}
                  dir="rtl"
                  background={data[i + j].background}
                  description={data[i + j].description}
                />
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

      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 10000 }}
          pagination={false}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.1}
          grabCursor={false}
          touchRatio={1}
          simulateTouch={true}
        >
          {slidesSm.map((component, i) => (
            <SwiperSlide key={i}>{component}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* سلايدر الديسكتوب */}
      <div className="hidden md:block">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 50000 }}
          pagination={false}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.1}
          grabCursor={false}
          touchRatio={1}
          simulateTouch={true}
        >
          {slidesLg.map((component, i) => (
            <SwiperSlide key={i}>{component}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
