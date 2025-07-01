"use client";
import Image from "next/image";
import SocialSidebar from "./SocialSidebar";
import AnimatedText from "@/components/AnimatedText";
import img from "@/assets/img";

export default function Hero() {
  return (
    <section
      className=' bg-[url("/assets/img/bgdark.jpg")] bg-cover bg-center h-screen bg-fixed relative w-screen'
      dir="ltr"
    >
      <div className="absolute flex items-center h-full  bg-[#000a] w-screen">
        <div className=" text-white left-0 ml-8 mt-32 items-center hidden lg:flex ">
          <Image
            src={img.logos.cg}
            width={512}
            alt="Capital Gate"
            className="opacity-35"
          ></Image>
          <div
            style={{ fontFamily: "EnLight", textTransform: "uppercase" }}
            className="flex flex-col -ml-0 opacity-45"
          >
            <div className="mt-0 ml-2 text-5xl" style={{ letterSpacing: 5 }}>
              <AnimatedText
                text="Capital Gate"
                once={false}
                lang="en"
                direction="right"
              />
            </div>
            <div className="mt-1 ml-1 text-2xl" style={{ letterSpacing: 2 }}>
              <AnimatedText
                text="real estate"
                once={false}
                lang="en"
                direction="right"
              />
            </div>
          </div>
        </div>
        <div className=" text-white  items-center flex lg:hidden flex-col justify-center w-screen">
          <Image
            src={img.logos.cg}
            width={512}
            alt="Capital Gate"
            className="opacity-25"
          ></Image>
          <div
            style={{ fontFamily: "EnLight", textTransform: "uppercase" }}
            className="flex flex-col opacity-45 items-center"
          >
            <div className="">
            </div>
            <div className="text-4xl w-fit tracking-[4px]">
              <AnimatedText
                text="Capital Gate"
                once={false}
                lang="en"
                direction="right"
              />
            </div>
            <div className="text-xl w-fit tracking-[1px]">
              <AnimatedText
                text="real estate"
                once={false}
                lang="en"
                direction="right"
              />
            </div>
          </div>
        </div>
      </div>
      <SocialSidebar rtl="col" />
    </section>
  );
}
