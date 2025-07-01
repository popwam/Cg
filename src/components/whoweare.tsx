import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/icon/trust.png";
import AnimatedText from "./AnimatedText";

type Logo = {
  img: string;
  title: string;
};

type AboutProps = {
  bg: string;
  title: string;
  desc: string;
  howwearetitle: string;
  howwearedesc: string;
  howwearedesc2: string;
  howweareimg: string;
  missiontitle: string;
  missiondesc: string;
  missionbg: string;
  missionimg: string;
  valuestitel: string;
  valueslogos: Logo[];
  whatmakestitle: string;
  whatmakesdir: string;
  whatmakesdesc: string;
  whatmakesdesc2: string;
  whatmakesp: string;
};

const About: React.FC<AboutProps> = ({
  bg,
  title,
  desc,
  howwearetitle,
  howwearedesc,
  howwearedesc2,
  howweareimg,
  missionbg,
  missiondesc,
  missiontitle,
  missionimg,
  valuestitel,
  valueslogos,
  whatmakesdir,
  whatmakesdesc,
  whatmakesdesc2,
  whatmakesp,
  whatmakestitle,
}) => {
  return (
    <>
      {/* about */}
      <div
        className="w-screen min-h-[65vh] overflow-hidden shadow-md flex flex-col items-center justify-center gap-4"
        style={{
          backgroundImage: `linear-gradient(#3338,#2228),url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          className={`text-5xl text-white uppercase ${
            whatmakesdir === "ar" ? "tracking-[2px]" : "tracking-[5px]"
          }`}
        >
          {title}
        </h2>
        <h6 className="text-xl md:text-2xl lg:text-3xl text-gray-400 capitalize tracking-[2px]">
          {desc}
        </h6>
      </div>
      {/* how we are */}
      <div className="w-screen min-h-[55vh] flex flex-col py-8 gap-4">
        <h2
          className={`text-6xl text-gray-400/35 uppercase font-extrabold opacity-40 ${
            whatmakesdir === "ar" ? "tracking-[2px]" : "tracking-[10px]"
          }`}
          style={{ fontFamily: "sans-serif" }}
        >
          {howwearetitle}
        </h2>
        <h2
          className={`text-5xl text-gray-600 uppercase ${
            whatmakesdir === "ar"
              ? "tracking-[2px] -mt-10"
              : "tracking-[5px] -mt-10"
          }`}
          style={{ fontFamily: whatmakesdir === "ar" ? "ArLight" : "Enlight" }}
        >
          {howwearetitle}
        </h2>
        <div className="mt-6 w-screen md:w-[80vw] mx-auto flex items-center h-full p-6 gap-4 relative">
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center z-20">
            <p className="capitalize tracking-[1px] text-xl">{howwearedesc}</p>
            <p className="capitalize tracking-[1px] text-xl">{howwearedesc2}</p>
          </div>
          <div className="w-full h-full flex items-center justify-center absolute  z-10 opacity-10">
            <Image
              src={howweareimg}
              alt={`${howwearetitle}`}
              width={400}
              height={214}
              className=""
            />
          </div>
        </div>
      </div>
      {/* our mission */}
      <div
        className="w-screen min-h-[35vh] shadow-md flex flex-col py-8 gap-4 h-full"
        style={{
          backgroundImage: `linear-gradient(#111b,#111b),url(${missionbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          className={`text-5xl text-white uppercase h-fit ${
            whatmakesdir === "ar" ? "tracking-[2px]" : "tracking-[5px]"
          }`}
          style={{ fontFamily: whatmakesdir === "ar" ? "ArLight" : "Enlight" }}
        >
          {missiontitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full w-full gap-4">
          <div className="w-full min-h-[21vh] relative flex items-center justify-center">
            <Image
              src={missionimg}
              alt={`${title}`}
              width={200}
              height={0}
              className="lg:absolute -bottom-5/12 "
            />
          </div>
          <p className="text-gray-200 text-lg capitalize w-[88%] lg:w-full mx-auto bg-[#1113] p-3 rounded-xl">
            {missiondesc}
          </p>
        </div>
      </div>
      {/* our vaiues */}
      <div className="w-screen min-h-[45vh] flex flex-col py-8 my-8 gap-4">
        <h2
          className={`text-6xl text-gray-400/35 uppercase font-extrabold opacity-40 ${
            whatmakesdir === "ar" ? "tracking-[2px]" : "tracking-[10px]"
          }`}
          style={{ fontFamily: "sans-serif" }}
        >
          {valuestitel}
        </h2>
        <h2
          className={`text-5xl text-gray-600 uppercase ${
            whatmakesdir === "ar"
              ? "tracking-[2px] -mt-8"
              : "tracking-[5px] -mt-10"
          }`}
          style={{ fontFamily: whatmakesdir === "ar" ? "ArLight" : "Enlight" }}
        >
          {valuestitel}
        </h2>
        <div className="mt-6 w-screen md:w-[80vw] mx-auto flex items-center h-full p-6">
          <div className="w-full flex flex-wrap justify-center gap-4">
            {valueslogos.map((logo) => (
              <div
                key={logo.title}
                className="flex flex-col items-center justify-center gap-2 w-[45%] sm:w-[45%] md:w-[30%] lg:w-[18%]"
              >
                <Image src={logo.img} alt="logo" width={112} height={112} />
                <h6 className="uppercase tracking-[2px]">{logo.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-screen min-h-[45vh] flex flex-col py-8 gap-4 ">
        <div className="mt-6 w-[90vw] mx-auto border-2 rounded-xl h-full p-6 gap-4 relative flex flex-col ">
          <div className="md:text-4xl text-3xl relative my-4 w-fit">
            <span className="absolute w-1/12 h-0.5 -bottom-0.5 bg-[#333]"></span>
            <AnimatedText
              text={`${whatmakestitle}`}
              direction="right"
              lang={whatmakesdir === "ar" ? "ar" : "en"}
              once={false}
            />
          </div>
          <h6>{whatmakesdesc}</h6>
          <h6>{whatmakesdesc2}</h6>
          <p className="w-full text-center text-lg font-bold text-black text-shadow-lg mt-3">
            {whatmakesp}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
