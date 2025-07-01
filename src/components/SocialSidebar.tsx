// components/SocialSidebar.tsx
"use client";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type RTL = {
  rtl: "col" | "row";
  dir?: 'justify-center' | "justify-start" | 'justify-end'
};

export default function SocialSidebar({rtl, dir}:RTL) {
  return (
    <div
      className={` ${rtl === 'col' ? 'absolute top-11/12 lg:top-1/2  right-1/2 lg:right-5 z-10 flex flex-row lg:flex-col gap-4 w-8 -translate-1/2 -translate-x-full' :'w-full flex gap-2'} ${dir}`}
    >
      <a
        href="https://facebook.com"
        target="_blank"
        className="bg-gray-500  hover:bg-blue-600 p-2 rounded-full text-white hover:scale-110 transition"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className="bg-gray-500  hover:bg-sky-500 p-2 rounded-full text-white hover:scale-110 transition"
      >
        <FaTwitter />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        className="bg-gray-500  hover:bg-pink-500 p-2 rounded-full text-white hover:scale-110 transition"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
