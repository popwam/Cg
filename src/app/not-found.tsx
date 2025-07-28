import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function notfound() {
  const navLinks = [
    { label: "HOME", href: "/", activate: true },
    { label: "ABOUT US", href: "/about" },
    { label: "DEVELOPERS", href: "/developers" },
    { label: "PROJECTS", href: "/projects" },
    { label: "CONTACT US", href: "/contact" },
    { label: "عربي", href: "/ar", issee: "false" },
  ];

  return (
    <main
      className="w-screen h-screen overflow-x-hidden bg-[#111] flex items-center justify-center flex-col gap-8"
      style={{ fontFamily: "EnLight" }}
    >
      <div className="text-[#fff]" dir="ltr">
        <Image
          src={"/loading.webp"}
          width={512}
          height={512}
          alt="Capital Gate"
          className="opacity-35"
        ></Image>
        <div
          style={{ fontFamily: "EnLight", textTransform: "uppercase" }}
          className="flex flex-col -ml-0 opacity-45 items-center"
        >
          <div className="mt-0 text-5xl text-center w-fit" style={{ letterSpacing: 5 }}>
            <AnimatedText
              text="ERROR 404 !"
              once={false}
              lang="en"
              direction="right"
            />
          </div>
          <div className="mt-1  text-2xl text-center w-fit" style={{ letterSpacing: 2 }}>
            <AnimatedText
              text="Page not Found :)"
              once={false}
              lang="en"
              direction="right"
            />
          </div>
        </div>
      </div>
        <div className="flex gap-8 flex-wrap bg-[#fff2] py-3 px-8 rounded-3xl items-center justify-center">
        <Link href={'/'} style={{ fontFamily: "EnLight" }} >
        BACK HOME 
        </Link>
        {'/'}
        <Link href={'/ar'} style={{ fontFamily: "ArLight" }}>
        الرجوع للصفحة الريسية  
        </Link>
        </div>
    </main>
  );
}

export default notfound;
