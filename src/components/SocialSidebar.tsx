// components/SocialSidebar.tsx
"use client";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

type RTL = {
  rtl: "col" | "row";
  dir?: "justify-center" | "justify-start" | "justify-end";
};

export default function SocialSidebar({ rtl, dir }: RTL) {
  return (
    <div
      className={` ${
        rtl === "col"
          ? "absolute top-11/12 lg:top-1/2  right-1/2 lg:right-5 z-10 flex flex-row lg:flex-col gap-4 w-8 -translate-1/2 -translate-x-full"
          : "w-full flex gap-2"
      } ${dir}`}
    >
      <a
        href="https://www.facebook.com/CapitalGateEstate"
        target="_blank"
        className="bg-gray-500 hover:bg-[#1877F2] p-2 rounded-full text-white transition"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/capitalgaterealestate/"
        target="_blank"
        className="bg-gray-500 hover:bg-[#E4405F] p-2 rounded-full text-white transition"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/in/capital-gate-a076b6376/"
        target="_blank"
        className="bg-gray-500 hover:bg-[#0A66C2] p-2 rounded-full text-white transition"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
