// components/Card.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";
type CardProps = {
  title: string;
  description: string;
  thumbnail: string;
  background: string;
  dir?: "ltr" | "rtl";
  link: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  thumbnail,
  background,
  dir = "ltr",
  link,
}) => {
  const isRTL = dir === "rtl";
  return (
    <Link href={link}>
      <div
        className="relative w-full h-full min-h-96 rounded-lg overflow-hidden shadow-lg filter contrast-more:15 hover:filter-none"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          direction: dir,
        }}
      >
        <div className="flex items-center gap-4 p-4 bg-white bg-opacity-70 backdrop-blur-sm absolute bottom-0 w-full lg:w-10/12 rounded-t-lg lg:rounded-none lg:rounded-tl-3xl">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        </div>

        <div
          className={` absolute top-1/12 left-1/12  bg-opacity-70 bg-[#eee] p-2 rounded-full`}
        >
          <div
            className="w-18 h-18"
            style={{
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
