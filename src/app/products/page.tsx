"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Card from "@/components/CardDev";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import images from "@/assets/images";
import img from "@/assets/img";
import { FaFacebookF, FaInstagram, FaSquareWhatsapp, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import rawProducts from '@/json/productsData.json';

export default function ProductsPage({ params }: any) {
const getByPath = (obj: any, path: string) => {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
};
  
const products = rawProducts.map((product) => ({
  ...product,
  background: getByPath(images, product.background), // هنا الصورة الحقيقية
}));
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArray, setSelectedArray] = useState<string | null>(null);

  // نستقبل البيانات من الصفحة التانية مرة واحدة فقط
  useEffect(() => {
    const saved = sessionStorage.getItem("selectedArray");
    if (saved) {
      setSelectedArray(saved);
    } else {
      setSelectedArray("all");
      sessionStorage.setItem("selectedArray", "all");
    }
  }, []);

  // تاني useEffect: حفظ القيمة كل ما تتغير
  useEffect(() => {
    sessionStorage.setItem("selectedArray", selectedArray ?? "all");
  }, [selectedArray]);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedArray ||
        selectedArray === "all" ||
        product.arrya === selectedArray)
  );

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "DEVELOPERS", href: "/developers", activate: true },
    { label: "CONTACT US", href: "/contact" },
    { label: "عربي", href: "/ar/developers", issee: "false" },
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

  const areas = [
    { name: "New Cairo", link: "new-cairo" },
    { name: "Mostakbal City", link: "mostakbal-city" },
    { name: "District 6", link: "the-6th-settlement" },
    { name: "New Capital", link: "new-capital" },
    { name: "North Coast", link: "north-coast" },
    { name: "Ain Sokhna", link: "ain-sokhna" },
    { name: "Sheikh Zayed", link: "sheikh-zayed-city" },
    { name: "October", link: "october" },
  ];

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
          <span className="absolute w-0/12 group-hover:w-11/12 -bottom-2 h-0.5 transition-all duration-500 bg-[#333]"></span>
          <AnimatedText
            text="our products"
            direction="right"
            lang="en"
            once={false}
          />
        </div>

        <input
          type="text"
          placeholder="Search for a products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded my-6 w-10/12 text-lg"
        />

        {/* فلترة بدون تغيير الرابط */}
        <div className="flex flex-wrap justify-center gap-2 my-4">
          <button
            onClick={() => setSelectedArray("all")}
            className={`px-4 py-2 rounded-full border ${
              selectedArray === "all" ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            All
          </button>
          {areas.map((area) => (
            <button
              key={area.link}
              onClick={() => setSelectedArray(area.link)}
              className={`px-4 py-2 rounded-full border ${
                selectedArray === area.link
                  ? "bg-black text-white"
                  : "bg-gray-100"
              }`}
            >
              {area.name.toUpperCase()}
            </button>
          ))}
        </div>

        <ul className="space-y-2 w-fit flex flex-wrap justify-center gap-4 mt-2">
          {filteredProducts.map((product) => (
            <li key={product.link} className="flex flex-wrap gap-4 justify-center">
              <div>
                <div className="rounded-md overflow-hidden shadow-sm transition-all duration-500 w-[308px] h-[456px] lg:w-[420px] lg:h-[520px] bg-gray-50 pb-4 m-0">
                    <div
                      className="w-full h-9/12 relative bg-amber-200"
                      style={{
                        backgroundImage: `url(${product.background.src})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <Link href={""} className="z-10">
                        <div className="w-[75px] h-[75px] bg-amber-50 p-2 absolute bottom-3.5 start-3 rounded-full">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `url(${product.background.src})`,
                              backgroundSize: "contain",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center px-[4%] py-">
                      <div className="flex flex-col w-full">
                        <h2>The Name Of Product</h2>
                        <h3>Area - Egypt</h3>
                        <p>item -  item -  item -  item </p>
                        <p>D.P 3% , 8 years</p>
                        <h4>start price 32,M Egp</h4>
                      </div>
                      <p className="z-10">
                        <FaSquareWhatsapp  color="#111" size={48}/>
                        <FaWhatsapp  color="#111" size={48}/>
                      </p>
                    </div>
                  </div>
              </div>
            </li>
          ))}
          {filteredProducts.length === 0 && (
            <div className="flex flex-col">
              <p className="text-center text-red-400">No results found.</p>
              <p className="text-center text-gray-400">
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
