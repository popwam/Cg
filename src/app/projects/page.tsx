"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaSquareWhatsapp,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import rawProducts from "@/json/productsData.json";
import Head from "next/head"; // احذفه لو داخل app/ وبدّل metadata

export default function ProductsPage({ params }: any) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArray, setSelectedArray] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("selectedArray");
    if (saved) {
      setSelectedArray(saved);
    } else {
      setSelectedArray("all");
      sessionStorage.setItem("selectedArray", "all");
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("selectedArray", selectedArray ?? "all");
  }, [selectedArray]);

  const products = rawProducts.map((product) => ({
    ...product,
  }));

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedArray ||
        selectedArray === "all" ||
        product.districtKey === selectedArray)
  );

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "DEVELOPERS", href: "/developers" },
    { label: "PROJECTS", href: "/projects", activate: true },
    { label: "Offers", href: "/offers" },
    { label: "CONTACT US", href: "/contact" },
    { label: "عربي", href: "/ar/projects", issee: "false" },
  ];

  const links = [
    {
      title: "facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/CapitalGateEstate",
    },
    {
      title: "instgram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/capitalgaterealestate",
    },
  ];

  const dirs = "ltr";

  const areas = [
    { name: "New Cairo", link: "new-cairo" },
    { name: "Mostakbal City", link: "mostakbal-city" },
    { name: "District 6", link: "district-6" },
    { name: "New Capital", link: "new-capital" },
    { name: "North Coast", link: "north-coast" },
    { name: "Ain Sokhna", link: "ain-sokhna" },
    { name: "Sheikh Zayed", link: "sheikh-zayed-city" },
    { name: "October", link: "october" },
  ];

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
        className="w-screen overflow-x-hidden bg-white "
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
          logoText="Capitl Gate"
          currentLang="en"
        />

        <div className="my-[15vh] flex flex-col items-center">
          <div className="text-3xl md:text-5xl relative mb-4 w-fit text-zinc-900 group duration-500 transition-all uppercase">
            <span className="absolute w-0/12 group-hover:w-11/12 -bottom-2 h-0.5 transition-all duration-500 bg-[#333]"></span>
            <AnimatedText
              text="our Projects"
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
              <li
                key={product.slug}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href={`/project/${product.slug}`}
                  className="rounded-md overflow-hidden shadow-sm transition-all duration-500 w-[308px] h-[495px] lg:w-[420px] lg:h-[520px] bg-gray-50 pb-4 m-0"
                >
                  <div
                    className="w-full h-9/12 relative bg-cover bg-center bg-no-repeat bg-[url('/loading.webp')]"
                    style={{
                      backgroundImage: `url(${
                        product.imgmaster || "/loading.webp"
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Link
                      href={`/developer/${product.linkdeve}`}
                      className="z-10"
                    >
                      <div className="w-[75px] h-[75px] p-3 absolute bottom-3.5 start-3 rounded-full bg-white">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage: `url(${
                              product.imgdeve || "/loading.webp"
                            })`,
                            backgroundSize: "100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center px-[4%] my-4">
                    <div className="flex flex-col justify-center w-full h-full gap-1">
                      <h2 className="text-xl font-bold">{product.name}</h2>
                      <h3>{product.district}</h3>
                      {product.price && product.price !== "---" ? (
                        <div>
                          {product.downpayment && product.years && (
                            <p>
                              D.P {product.downpayment}% , {product.years} years
                            </p>
                          )}
                          <h4>Start Price {product.price} EGP</h4>
                        </div>
                      ) : product.price === "---" ? (
                        <div className="text-yellow-500 font-semibold">
                          On Hold
                        </div>
                      ) : (
                        <div className="text-red-500 font-semibold">
                          Sold Out
                        </div>
                      )}
                    </div>
                    <div className="z-10 flex flex-col gap-2 ms-2">
                      <a
                        href={`https://wa.me/201144566600?text=I'm interested in ${product.name} | owned by me ${product.namedeve} in ${product.district}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaSquareWhatsapp color="#111" size={36} />
                      </a>
                      <a
                        href={`tel:+201144566600`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPhone color="#111" size={36} />
                      </a>
                    </div>
                  </div>
                </Link>
              </li>
            ))}

            {filteredProducts.length === 0 && (
              <div className="flex flex-col">
                <p className="text-center text-red-400">No results found.</p>
                <p className="text-center text-gray-400">
                  We are working on adding the rest of the Projects.
                </p>
              </div>
            )}
          </ul>
        </div>

        <Footer
          dir={dirs}
          logo={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif"
          }
          links={links}
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
