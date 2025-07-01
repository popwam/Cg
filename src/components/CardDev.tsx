import React from "react";
import Link from "next/link";
type CardProps = {
  background: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ background, link }) => {
  return (
    <Link href={`developer/${link}`}>
     <div className="relative rounded-md overflow-hidden shadow-sm filter grayscale hover:filter-none transition-all duration-500 p-8  w-[208px] h-[156px] md:w-[320px] md:h-[264px]">
       <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
     </div>
    </Link>
  );
};

export default Card;
