"use client";
import images from "@/assets/images";
import img from "@/assets/img";
import AnimatedText from "@/components/AnimatedText";
import Card from "@/components/CardDev";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { useState } from "react";

const products = [
  {
    background: images.developers.akamalrajhi,
    link: "akam-alrajhi",
    name: "akam alrajhi , اكام الراجحي",
  },
  {
    background: images.developers.arabella,
    link: "arabella",
    name: "arabella , ارابيلا",
  },
  {
    background: images.developers.emaar,
    link: "emaar",
    name: "emaar , اعمار اليكس",
  },
  {
    background: images.developers.hap,
    link: "hassan-allam",
    name: "Hassan Allam , حسن علام",
  },
  {
    background: images.developers.horizon,
    link: "horizon",
    name: "horizon , هورايزون",
  },
  {
    background: images.developers.hydepark,
    link: "hyde-park",
    name: "hyde park , هايد بارك",
  },
  {
    background: images.developers.ilcazar,
    link: "il-cazar",
    name: "il cazar , الكزار",
  },
  {
    background: images.developers.lavista,
    link: "lavista",
    name: "lavistaz , لافيستا",
  },
  {
    background: images.developers.lmd,
    link: "lmd",
    name: "lmd , لاند مارك , ال ام دي",
  },
  {
    background: images.developers.madaar,
    link: "madaar",
    name: "madaar , مدار",
  },
  {
    background: images.developers.marakez,
    link: "marakez",
    name: "marakez , مراكز",
  },
  {
    background: images.developers.marasem,
    link: "marasem",
    name: "marasem , المراسم",
  },
  {
    background: images.developers.marq,
    link: "the-marq",
    name: "the marq , ذا مارك",
  },
  {
    background: images.developers.mi,
    link: "misr-italia",
    name: "misr italia , مصر ايطاليا",
  },
  {
    background: images.developers.mnhd,
    link: "mnhd",
    name: "mnhd , مدينة مصر للاسكان والتعمير",
  },
  {
    background: images.developers.mv,
    link: "mountain-view",
    name: "mountain view , ماونتن فيواى",
  },
  { background: images.developers.n, link: "n", name: "N , ان , نواصي" },
  { background: images.developers.naia, link: "naia", name: "naia  , نايا" },
  {
    background: images.developers.nationofsky,
    link: "nation-of-sky",
    name: "nation of sky  , نيشنز اوف سكاي",
  },
  {
    background: images.developers.g,
    link: "g",
    name: "new giza, g,جي  ,نيو جيزة",
  },
  { background: images.developers.ora, link: "ora", name: "ora  ,اورا" },
  {
    background: images.developers.palmhills,
    link: "palm-hills",
    name: "palm hills  ,بالم هيلز",
  },
  {
    background: images.developers.pap,
    link: "people-and-places",
    name: "people and places  ,بيبول اند بليسيز",
  },
  { background: images.developers.pre, link: "pre", name: "pre  , بي ار اي" },
  {
    background: images.developers.qamzi,
    link: "qamzi",
    name: "qamzi  , القمزي",
  },
  { background: images.developers.roya, link: "roya", name: "roya  , رؤية" },
  {
    background: images.developers.sabbour,
    link: "sabbour",
    name: "sabbour  , الاهلي صبور",
  },
  {
    background: images.developers.sed,
    link: "sed",
    name: "sed  ,الشركة المصرية السعودية ,سيد,اس اي دي ",
  },
  { background: images.developers.sodic, link: "sodic", name: "sodic  ,سوديك" },
  {
    background: images.developers.starlight,
    link: "starlight",
    name: "starlight ,  ستارلايت ",
  },
  {
    background: images.developers.tatweer,
    link: "tatweer-misr",
    name: "Tatweer Misr, تطوير مصر ",
  },
  {
    background: images.developers.tmg,
    link: "tmg",
    name: "tmg , تي ام جي , طلعت مصطفى",
  },
  {
    background: images.developers.waterway,
    link: "waterway",
    name: "The WaterWay , ذا واتر واي",
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const router = useRouter();
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "DEVELOPERS", href: "/developers", activate: true },
    { label: "CONTACT US", href: "/contact" },
    // { label: "عربي", href: "/ar/developers", issee: "false" },
  ];

  const links = [
    {
      title: "facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com",
    },
    {
      title: "instgram",
      icon: <FaInstagram />,
      href: "https://www.insttagram.com",
    },
  ];
  const dirs = "ltr";

  return (
    <main
      className="w-screen overflow-x-hidden bg-white"
      dir={dirs}
      style={{ fontFamily: "EnLight" }}
    >
      <Navbar
        navLinks={navLinks}
        logoTop={img.logos.top.src}
        logoTextTop={img.logos.texttop.src}
        logoBotoom={img.logos.bottom.src}
        logoTextBotoom={img.logos.textbottom.src}
        logoText="Capitl Gate"
        currentLang="en"
      />

      <div className="my-[15vh] flex flex-col items-center">
        <div className="text-3xl md:text-5xl relative mb-4 w-fit text-zinc-900 group duration-500 transition-all uppercase">
          <span
            className={`absolute w-0/12 group-hover:w-11/12 -bottom-2 h-0.5 transition-all duration-500 bg-[#333]`}
          ></span>
          <AnimatedText
            text="our developers"
            direction="right"
            lang="en"
            once={false}
          />
        </div>
        <input
          type="text"
          placeholder="Search for a developer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded my-16 w-10/12 text-lg"
        />

        <ul className="space-y-2 w-fit flex flex-wrap justify-center gap-4 mt-2">
          {filteredProducts.map((product) => (
            <li key={product.link}>
              <div className="rounded-xl">
                <Card
                  link={`/${product.link}`}
                  background={product.background.src}
                />
              </div>
            </li>
          ))}
          {filteredProducts.length === 0 && (
            <div className="flex flex-col">
              <p className="text-center text-gray-400">No results found.</p>
              <p className="text-center text-yellow-400">
                We are working on adding the rest of the developers.
              </p>
            </div>
          )}
        </ul>
      </div>
      <Footer
        dir={dirs}
        logo={img.logos.logo.src}
        links={links}
        titlemenu="MAIN MENU"
        linkmenu={navLinks}
        addresstitle="ADDRESS"
        addressline1="Narth 90 ST"
        addressline2="New Cairo"
        addressline3="Egypt"
        contacttitle="CONACT"
        phone="+20 1026555621"
        email="INFO@CAPITALGATEEGY.COM"
      />
    </main>
  );
}
