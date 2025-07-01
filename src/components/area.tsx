"use client";
import { useRouter } from "next/navigation";
import React from "react";
type date = {
  link: string;
  title: string;
  dir?: string;
};

type Areas = {
  title?: string;
  citys: date[];
};

export default function Area({ title, citys }: Areas) {
  const router = useRouter();
  return (
    <div className='relative bg-[#111] w-screen min-h-40 flex items-center justify-center after:content-[""] after:absolute after:inset-0 after:bg-[url("/assets/mov/area.gif")] after:bg-cover after:bg-center after:opacity-5'>
      <ul className="text-white grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center w-9/12 h-full mx-auto list-none py-14 z-50">
        {citys.map((item, index) => (
          <li
            className="relative flex flex-row items-center justify-center aos-init aos-animate"
            data-aos={item.dir ? "fade-right" : "fade-left"}
            data-aos-delay={50 + index * 50}
            key={item.title}
          >
            <div
              // onClick={() => {
              //   sessionStorage.setItem("selectedArray", item.link ?? "all");
              //   router.push("/products");
              // }}
              className="cursor-pointer z-10"
            >
              <span className="text-xl me-2">&mdash;</span>
              <span>{item.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
