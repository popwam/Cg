"use client";
import { redirect } from "next/navigation";
import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import rawProducts from "@/json/productsData.json";
import Image from "next/image";
import Head from "next/head";

type Props = {
  params: { slug: string };
};

export default function ProductPage(props: Props) {
  const products = rawProducts.map((product) => ({
    ...product,
  }));
  const { slug } = props.params;

  const product = products.find((item) => item.slug === slug);
  if (!product) {
    redirect("/developers");
  }
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "DEVELOPERS", href: "/developers" },
    { label: "PROJECTS", href: "/projects", activate: true },
    { label: "CONTACT US", href: "/contact" },
    { label: "عربي", href: `/ar/project/${slug}`, issee: "false" },
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
  const relatedProjects = products
    .filter((p) => p.district === product.district && p.slug !== product.slug)
    .slice(0, 4); // حد أقصى ٤ مشاريع

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: product.name,
    description: product.desc1,
    brand: {
      "@type": "Brand",
      name: product.namedeve,
    },
    image: product.imgmaster,
    url: `https://capitalgate.com/project/${product.slug}`,
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main
        className="w-screen overflow-x-hidden bg-white min-h-screen "
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
        {/* hero bg */}
        <div className="w-screen min-h-[50vh] md:h-[85vh] relative">
          <div className="relative lg:absolute h-[50vh] md:h-[85vh] w-screen lg:top-0 lg:left-0 lg:right-0 z-0">
            <Swiper
              modules={[Navigation]}
              spaceBetween={5}
              loop={true}
              speed={800}
              slidesPerView={1}
              className="w-full h-full"
            >
              {[
                product.img1,
                product.img2,
                product.img3,
                product.img4,
                product.img5,
              ]
                .filter((img): img is string => typeof img === "string")
                .map((img, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: `url(${img || "/loading.webp"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-gray-50 bottom-4 lg:bottom-12 start-5 lg:start-16 absolute z-10 flex items-center p-3 rounded-full shadow">
              <Link href={`/developer/${product.linkdeve}`}>
                <Image
                  src={product.imgdeve || "/loading.webp"}
                  alt={product.linkdeve}
                  width={120}
                  height={100}
                />
              </Link>
            </div>
          </div>
          <div className="z-10 relative md:absolute w-full md:w-[350px] md:end-28 md:top-1/2 lg:-translate-y-1/2">
            <form
              className={`bg-[#ccce] p-8 rounded-lg max-w-2xl w-full space-y-4 text-gray-800 md:shadow-2xl shadow-black`}
              dir={dirs}
              target="_blank"
              action="https://formsubmit.co/info@capitalgateegy.com"
              method="POST"
            >
              {" "}
              <p className={`text-sm text-gray-700 capitalize`}>
                For more information about <br />
                <strong className="font-bold text-[15px] text-black">
                  {product.name}{" "}
                </strong>
                and to schedule a visit, Register your contact details and we
                will call you as soon as possible.
              </p>
              <div className="grid grid-cols-1 gap-4 ">
                <input
                  type="text"
                  placeholder="Name"
                  className={`bg-gray-50 p-3 border border-gray-300 rounded outline-none focus:ring-1 text-gray-700 focus:text-gray-800 focus:bg-white`}
                  required
                />
                <input
                  type="email"
                  pattern=""
                  placeholder="Email"
                  className={`bg-gray-50 p-3 border border-gray-300 rounded outline-none focus:ring-1 text-gray-600 focus:bg-white`}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className={`bg-gray-50 p-3 border border-gray-300 rounded outline-none focus:ring-1 text-gray-600 focus:bg-white`}
                  required
                />
                <input
                  type="tel"
                  placeholder="Another Number"
                  className={`bg-gray-50 p-3 border border-gray-300 rounded outline-none focus:ring-1 text-gray-600 focus:bg-white`}
                  required
                />
              </div>
              <textarea
                rows={2}
                placeholder="Message"
                className={`bg-gray-50 p-3 border border-gray-300 rounded w-full outline-none focus:ring-1 text-gray-600 focus:bg-white`}
              />
              <button
                type="submit"
                className={`bg-gray-50 text-gray-900 hover:text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition cursor-pointer w-12/12`}
              >
                send
              </button>
            </form>
          </div>
        </div>
        <div className="w-screen lg:w-[85vw] lg:mx-auto min-h-[50vh] grid grid-cols-1 lg:grid-cols-10">
          <div className="lg:col-start-1 lg:col-end-8 p-8 my-auto order-2 md:order-1">
            <div className="flex items-end">
              <h2 className="text-3xl capitalize">
                {product.name}&nbsp;&nbsp;&nbsp;
                <span className="text-5xl">|</span>&nbsp;
              </h2>
              <h5 className="flex">District : &nbsp;</h5>
              {product.district}
            </div>
            <div className="flex flex-col justify-end pt-6 md:w-10/12 gap-y-4 capitalize">
              <p className="text-lg tracking-[1px]">
                {product.desc1 && `${product.desc1}`}
              </p>
              <p className="text-lg tracking-[1px]">
                {product.desc2 && `${product.desc2}`}
              </p>
              <p className="text-lg tracking-[1px]">
                {product.desc3 && `${product.desc3}`}
              </p>
            </div>
          </div>
          <div className="lg:col-start-8 lg:col-end-11 flex items-center order-1">
            {product.price && (
              <div className="max-w-md mx-auto rounded-xl shadow-lg bg-white p-6 text-center">
                <p className="text-teal-500 font-medium mb-2">Starting Price</p>
                <h2 className="text-3xl font-bold text-blue-900 mb-1">
                  {product.price}{" "}
                  <span className="text-base font-normal">EGP</span>
                </h2>
                {product.updated && (
                  <p className="text-sm text-gray-500 mb-4">
                    {product.updated}&nbsp;&nbsp;|&nbsp;
                    <span className="text-blue-600">Current Phase</span>
                  </p>
                )}
                <div className="flex justify-between items-center text-center text-blue-900 font-semibold my-4">
                  <div className="flex flex-col items-center gap-2 px-2">
                    <p className="text-sm text-gray-500">Down Payment</p>
                    <p className="text-xl font-extrabold">
                      {product.downpayment} %
                    </p>
                  </div>
                  <div
                    className={`flex flex-col items-center gap-2 px-2 ${
                      product.downpayment && product.delivery && `border-x`
                    }`}
                  >
                    <p className="text-sm text-gray-500">Installments Years</p>
                    <p className="text-xl font-extrabold">{product.years}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 px-2">
                    <p className="text-sm text-gray-500">Delivery date</p>
                    <p className="text-xl font-extrabold">{product.delivery}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <h2 className="text-2xl capitalize ps-12 md:ps-24 text-start">
          Projects like to {""}
          <span className="text-2xl font-bold">{product.name}</span>
        </h2>
        <ul className="flex flex-wrap justify-center gap-4 mt-10 w-full min-h-96">
          {relatedProjects.map((product) => (
            <li
              key={product.slug}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href={`/project/${product.slug}`}
                className="rounded-md overflow-hidden shadow-sm transition-all duration-500 w-[308px] h-[495px] lg:w-[420px] lg:h-[520px] bg-gray-50 pb-4 m-0"
              >
                <div
                  className="w-full h-9/12 relative bg-amber-200"
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
                    <div className="w-[75px] h-[75px] bg-amber-50 p-3 absolute bottom-3.5 start-3 rounded-full">
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
                      <div className="text-red-500 font-semibold">Sold Out</div>
                    )}
                  </div>
                  <div className="z-10 flex flex-col gap-2 ms-2">
                    <a
                      href={`https://wa.me/201144566600?text=I'm interested in ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareWhatsapp color="#111" size={36} />
                    </a>
                    <a
                      href={`https://wa.me/201144566600?text=I'm interested in ${product.name}`}
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
        </ul>

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
          contacttitle="CONACT"
          phone="+20 1144566600"
          email="info@capitalgateegy.com"
        />
      </main>
    </>
  );
}
