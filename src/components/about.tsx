"use client";
import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Image from "next/image";

type About = {
  title: string;
  desc: string;
  dir?: string;
};

type AboutFormProps = {
  background: string;
  img: string;
  date: About[];
};

export default function About({ background, img, date }: AboutFormProps) {
  return (
    <div
      className="bg-center bg-cover bg-fixed w-screen py-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-white items-center flex flex-col justify-center w-9/12 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full h-full">
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="flex items-center justify-center p-0.5 border-white border rounded-2xl">
              <Image
                src={img}
                alt="capital gate"
                width={256}
                height={512}
                className="rounded-2xl"
              ></Image>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center order-2 lg:order-1">
            <div className="gap-6">
              {date.map((item, index) => (
                <div className="flex-1 min-h-40" key={item.title}>
                  <div className="text-4xl relative mb-4 w-fit">
                    <span
                      className={`absolute  h-0.5 ${
                        item.dir ? "-bottom-2 w-3/12" : "-bottom-0.5 w-1/12"
                      } bg-white`}
                    ></span>
                    <AnimatedText
                      text={item.title}
                      direction={item.dir ? "right" : "left"}
                      lang={item.dir ? "ar" : "en"}
                      once={false}
                    />
                  </div>
                  <p
                    data-aos={item.dir ? "fade-right" : "fade-left"}
                    data-aos-delay={50 + index * 50}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
