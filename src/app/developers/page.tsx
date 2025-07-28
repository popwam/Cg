"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import rawProducts from "@/json/productsData.json";
import Card from "@/components/CardDev";
import Head from "next/head";

type Props = {
  params?: Promise<{ slug: string }>;
};

type Product = {
  imgdeve: string;
  linkdeve: string;
  namedeve?: string;
  name: string;
};

export default function DeveloperPage(props: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const allProjects: Product[] = rawProducts as Product[];

  const developersMap = new Map<string, Product>();
  allProjects.forEach((proj) => {
    if (!developersMap.has(proj.linkdeve)) {
      developersMap.set(proj.linkdeve, proj);
    }
  });
  const uniqueDevelopers = Array.from(developersMap.values());

  const filteredDevelopers = uniqueDevelopers.filter(
    (dev) =>
      dev.namedeve?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "DEVELOPERS", href: "/developers", activate: true },
    { label: "PROJECTS", href: "/projects" },
    { label: "CONTACT US", href: "/contact" },
    { label: "عربي", href: "/ar/developers", issee: "false" },
  ];

  const socialLinks = [
    {
      title: "facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/CapitalGateEstate",
    },
    {
      title: "instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/capitalgaterealestate",
    },
  ];
  const dirs = "ltr";
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Capital Gate Real Estate",
              url: "https://capitalgateegy.com",
              logo: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif",
              sameAs: [
                "https://www.facebook.com/CapitalGateEstate",
                "https://www.instagram.com/capitalgaterealestate/",
                "https://www.linkedin.com/in/capital-gate-a076b6376/",
              ],
              description:
                "Discover the best real estate projects with Capital Gate. Trusted agency for New Cairo, New Capital, Sheikh Zayed, and more.",
            }),
          }}
        />
      </Head>
      <main
        className="bg-white w-screen overflow-x-hidden "
        dir={dirs}
        style={{ fontFamily: "EnLight" }}
      >
        <Navbar
          navLinks={navLinks}
          logoTop={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623049/logo/agfrf31kpws0sxgxkudk.avif"
          }
          logoTextTop={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623053/logo/fcygqklzlehiiori2dic.avif"
          }
          logoBotoom={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623048/logo/t6vdoxqehyrikxe4tvhy.avif"
          }
          logoTextBotoom={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/ritntst37ef2kpb7aohv.avif"
          }
          logoText="Capital Gate"
          currentLang="en"
        />

        <div className="max-w-6xl mx-auto px-6 my-[15vh]">
          <div className="text-center mb-10 flex items-center flex-col">
            <div className="text-3xl md:text-5xl relative mb-4 w-fit text-zinc-900 group transition-all uppercase text-center">
              <span className="absolute w-0/12 group-hover:w-11/12 -bottom-2 h-0.5 transition-all duration-500 bg-[#333] left-0"></span>
              <AnimatedText
                text="our developers"
                direction="right"
                lang="en"
                once={false}
              />
            </div>

            <input
              type="text"
              placeholder="Search for a developer or project..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded my-16 w-10/12 text-lg"
            />
          </div>

          <ul className="space-y-2 w-fit flex flex-wrap justify-center gap-4 mt-2">
            {filteredDevelopers.length > 0 ? (
              filteredDevelopers.map((dev) => {
                return (
                  <li key={dev.linkdeve}>
                    <div className="rounded-xl">
                      <Card
                        link={dev.linkdeve}
                        background={dev.imgdeve || "/loading.webp"}
                        dir={dirs}
                      />
                    </div>
                  </li>
                );
              })
            ) : (
              <div className="flex flex-col">
                <p className="text-center text-red-500">No results found.</p>
                <p className="text-center text-gray-300/85">
                  We are working on adding the rest of the developers.
                </p>
              </div>
            )}
          </ul>
        </div>

        <Footer
          dir="ltr"
          logo={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif"
          }
          links={socialLinks}
          titlemenu="MAIN MENU"
          linkmenu={navLinks}
          addresstitle="ADDRESS"
          addressline1="North 90 ST"
          addressline2="New Cairo"
          addressline3="Egypt"
          contacttitle="CONTACT"
          phone="+20 1144566600"
          email="info@capitalgateegy.com"
        />
      </main>
    </>
  );
}
