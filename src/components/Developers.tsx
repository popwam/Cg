"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Card from "@/components/CardDev";
import AnimatedText from "@/components/AnimatedText";
import images from "@/assets/images";

type developens = {
  title: string;
  img: string;
  link: string;
};
type carddev = {
  title: string;
  data: developens[];
  dir?: string;
};

export default function Developers({ title, data, dir }: carddev) {
  const allCards = data.map((item) => ({
    link: item.link,
    background: item.img, 
  }));

  // تقسيمهم على 3 أجزاء
  const chunkSize = Math.ceil(allCards.length / 3);
  const chunks = Array.from({ length: 3 }, (_, i) =>
    allCards.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <div className="max-w-11/12 lg:max-w-9/12 mx-auto py-8">
      <div className="text-4xl relative mb-4 w-fit">
        <span className={`absolute  ${dir ? "w-2/12 -bottom-2" : "w-1/12 -bottom-2"} h-0.5 bg-[#333]`}></span>
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
            key={index}
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
            {chunk.map((card, i) => (
              <SwiperSlide
                key={`slide-${index}-${i}`}
                className="!w-[208px] md:!w-[320px]"
              >
                <div className="rounded-xl w-fit">
                  <Card link={card.link} background={card.background} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </div>
  );
}
