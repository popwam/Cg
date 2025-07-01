import React from "react";
import Link from "next/link";
type HeroProps = {
  background: string;
  title: string;
  desc: string;
};

const Hero: React.FC<HeroProps> = ({ background, title, desc }) => {
  return (
      <div
        className="w-screen h-[65vh] overflow-hidden shadow-md flex flex-col items-center justify-center gap-4"
        style={{
          backgroundImage: `linear-gradient(#3338,#2228),url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-5xl text-white uppercase tracking-[5px]">{title}</h2>
        <h6 className="text-xl text-gray-400 capitalize tracking-[6px]">{desc}</h6>
      </div>
  );
};

export default Hero;
