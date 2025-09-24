"use client";

import { useEffect, useMemo, useState } from "react";
import rawProducts from "@/json/OffersData.json" assert { type: "json" };
import { FaFilter, FaPhone, FaSquareWhatsapp } from "react-icons/fa6";
import Head from "next/head";
import Navbar from "@/components/Navbar";

/** === Types that match your JSON === */
interface Product {
  slug: string;
  name: string;
  district: string;
  start_price: string;
  originalPlan: Record<string, Partial<Plan>>; // بدل Plan مباشرةً
  offerplan: Record<string, Partial<Plan>>;
  offerType: string[];
  location: string;
  description: string;
  landmarks: string[];
  imgmaster: string;
  imgdeve: string;
  namedeve: string;
  images: string[];
}

type Plan = {
  downpayment?: string;
  years?: string;
  discount?: string;
};


/** === Helpers === */
const asArray = (obj?: Record<string, Plan>): Plan[] =>
  obj
    ? Object.keys(obj)
      .sort()
      .map((k) => obj[k])
    : [];

export default function OffersPage() {
  /** === State === */
  const products = useMemo(() => {
    return (rawProducts as any[]).map((p) => ({
      ...p,
      offerplan: Object.fromEntries(
        Object.entries(p.offerplan || {}).filter(([_, v]) => v != null)
      ),
      originalPlan: Object.fromEntries(
        Object.entries(p.originalPlan || {}).filter(([_, v]) => v != null)
      ),
    })) as Product[];
  }, []);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProject, setSelectedProject] = useState<Product | null>(null);

  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedDevs, setSelectedDevs] = useState<string[]>([]);
  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);

  /** Detect mobile */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /** Apply filters */
  useEffect(() => {
    let result = products;

    if (selectedAreas.length) {
      result = result.filter((p) => selectedAreas.includes(p.district));
    }
    if (selectedDevs.length) {
      result = result.filter((p) => selectedDevs.includes(p.namedeve));
    }
    if (selectedOffers.length) {
      result = result.filter((p) =>
        p.offerType?.some((ot) => selectedOffers.includes(ot))
      );
    }

    setFilteredProducts(result);
  }, [products, selectedAreas, selectedDevs, selectedOffers]);

  /** Multi-select helper */
  const toggleSelect = (
    value: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    setList(
      list.includes(value) ? list.filter((x) => x !== value) : [...list, value]
    );
  };

  /** Distinct lists for filters */
  const areas = useMemo(
    () => Array.from(new Set(products.map((p) => p.district))).sort(),
    [products]
  );
  const devs = useMemo(
    () => Array.from(new Set(products.map((p) => p.namedeve))).sort(),
    [products]
  );
  const offers = useMemo(() => {
    const allOffers = products.flatMap((p) => p.offerType || []);
    return Array.from(new Set(allOffers)).sort();
  }, [products]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Developers", href: "/developers" },
    { label: "Projects", href: "/projects" },
    { label: "Contact ", href: "/contact" },
    { label: "العربية", href: `/ar/privacy/`, issee: "no" },
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
        className="bg-white w-screen overflow-x-hidden items-center justify-center flex flex-col relative"
        dir={"ltr"}
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

        <div className="relative px-4 pb-24 pt-8 space-y-6 my-[13vh]">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Real Estate Offers
          </h1>

          {/* Filters button */}
          <button
            onClick={() => setShowFilters(true)}
            className="fixed bottom-4 right-4 md:top-24 md:right-4 md:bottom-auto z-50 px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg"
          >
            <FaFilter />
          </button>

          {/* Cards */}
          <ul className="flex flex-wrap gap-6 justify-center">
            {filteredProducts.map((product) => (
              <li
                key={product.slug}
                onClick={() => setSelectedProject(product)}
                className="cursor-pointer rounded-md overflow-hidden shadow-sm transition-all duration-300 w-[308px] h-[495px] lg:w-[420px] lg:h-[520px] bg-gray-50"
              >
                {/* Image */}
                <div
                  className="w-full h-3/5 relative bg-cover bg-cov"
                  style={{
                    backgroundImage: `url(${product.imgmaster || "/loading.webp"})`,
                  }}
                >
                  {/* Developer logo */}
                  <div className="w-[75px] h-[75px] p-1 absolute bottom-3.5 start-3 rounded-full bg-transparent border-0">
                    <div
                      className="w-full h-full bg-contain p-1 bg-center rounded-full"
                      style={{
                        backgroundImage: `url(${product.imgdeve || "/loading.webp"
                          })`,
                      }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center px-[4%] py-4">
                  <div className="flex flex-col gap-1 w-full">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <h3 className="text-sm text-gray-600">{product.district}</h3>
                    <p className="font-semibold">
                      Start Price {product.start_price} EGP
                    </p>
                    <div className="flex flex-wrap gap-1 text-xs text-gray-600">
                      {product.offerType?.map((ot, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-gray-200 rounded-md"
                        >
                          {ot}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 ms-2">
                    <a
                      href={`https://wa.me/201144566600?text=I'm interested in ${product.name} by ${product.namedeve}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareWhatsapp size={32} />
                    </a>
                    <a href="tel:+201144566600" rel="noopener noreferrer">
                      <FaPhone size={32} />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* ===== Mobile Full Screen Details ===== */}
          {isMobile && selectedProject && (
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto animate-slide-up">
              <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-blue-600 font-semibold"
                  >
                    ← Back
                  </button>
                  <span className="text-sm text-gray-500">
                    {selectedProject.namedeve}
                  </span>
                </div>

                {/* Simple slider */}
                <div className="w-full h-56 overflow-hidden rounded-md mb-4">
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${selectedProject.images?.[0] || selectedProject.imgmaster
                        })`,
                    }}
                  />
                </div>

                <h2 className="text-xl font-bold">{selectedProject.name}</h2>
                <p className="text-gray-600 mb-2">{selectedProject.district}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-green-700">
                    {selectedProject.start_price} EGP
                  </span>
                  <div className="flex flex-wrap gap-1 text-xs text-gray-600">
                    {selectedProject.offerType?.map((ot, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-200 rounded-md">
                        {ot}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Offer plan */}
                <section className="mb-5">
                  <h3 className="font-semibold mb-2">Available offers</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {asArray(selectedProject.offerplan).map((pl, i) => (
                      <li
                        key={i}
                        className="border rounded-md p-2 text-sm relative overflow-hidden"
                      >
                        {/* أول عنصر فقط يظهر فيه المثلث */}
                        {i === 0 && pl.discount && (
                          <div className="absolute top-0 right-0 w-0 h-0 
                        border-t-[50px] border-t-red-600 
                        border-l-[50px] border-l-transparent 
                        border-solid">
                            <span className="text-[10px] text-white font-bold rotate-45">
                              {pl.discount && <div>discount: {pl.discount}%</div>}
                            </span>
                          </div>
                        )}
                        {pl.discount && <div>discount: {pl.discount}%</div>}
                        {pl.downpayment && <div>Downpayment: {pl.downpayment}%</div>}
                        {pl.years && <div>Years: {pl.years}</div>}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Original plan */}
                <section className="mb-5">
                  <h3 className="font-semibold mb-2">Original plan</h3>
                  <ul className="flex flex-wrap gap-2">
                    {asArray(selectedProject.originalPlan).map((pl, i) => (
                      <li key={i} className="border rounded-md p-2 text-sm">
                        Downpayment {pl.downpayment}% — {pl.years} Years
                      </li>
                    ))}
                  </ul>
                </section>
                {/* Texts */}
                <section className="mb-5">
                  <h3 className="font-semibold mb-1">About {selectedProject.name} </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </section>

                <section className="mb-5">
                  <h3 className="font-semibold mb-1">{selectedProject.name} location</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedProject.location}
                  </p>
                </section>

                <section className="mb-5">
                  <h3 className="font-semibold mb-2">Nearby landmarks {selectedProject.name}</h3>
                  <ul className="list-disc ps-5 text-sm text-gray-700">
                    {selectedProject.landmarks?.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </section>

                {/* Actions */}
                <div className="sticky bottom-0 bg-white pt-3 pb-4 flex gap-3">
                  <a
                    href={`https://wa.me/201144566600?text=I'm interested in ${selectedProject.name} by ${selectedProject.namedeve}`}
                    target="_blank"
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg text-center font-semibold"
                  >
                    واتساب
                  </a>
                  <a
                    href="tel:+201144566600"
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-center font-semibold"
                  >
                    اتصال
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ===== Desktop Modal Details ===== */}
          {!isMobile && selectedProject && (
            <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-md w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-4 text-xl font-bold"
                >
                  ✖
                </button>

                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={selectedProject.imgdeve}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h2 className="text-2xl font-bold leading-tight">
                      {selectedProject.name}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {selectedProject.namedeve} • {selectedProject.district}
                    </p>
                  </div>
                </div>

                {/* Hero */}
                <img
                  src={selectedProject.imgmaster}
                  alt={selectedProject.name}
                  className="w-full rounded-md mb-4"
                />

                <div className="mb-4">
                  <div className="font-semibold text-green-700">
                    Start Price {selectedProject.start_price} EGP
                  </div>
                  <div className="flex flex-wrap gap-1 text-xs text-gray-600">
                    {selectedProject.offerType?.map((ot, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-200 rounded-md">
                        {ot}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grids */}
                {/* Offer plan */}
                <section className="mb-5">
                  <h3 className="font-semibold mb-2">Available offers</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {asArray(selectedProject.offerplan).map((pl, i) => (
                      <li key={i} className="border rounded-md p-2 text-sm">
                        {pl.discount && <div>discount: {pl.discount}%</div>}
                        {pl.downpayment && <div>Downpayment: {pl.downpayment}%</div>}
                        {pl.years && <div>Years: {pl.years}</div>}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Original plan */}
                <section className="mb-5">
                  <h3 className="font-semibold mb-2">Original plan</h3>
                  <ul className="flex flex-wrap gap-2">
                    {asArray(selectedProject.originalPlan).map((pl, i) => (
                      <li key={i} className="border rounded-md p-2 text-sm">
                        Downpayment {pl.downpayment}% — {pl.years} Years
                      </li>
                    ))}
                  </ul>
                </section>

                <h3 className="font-semibold mb-1">About {selectedProject.name} </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                <h3 className="font-semibold mb-1">{selectedProject.name} location</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {selectedProject.location}
                </p>

                <h3 className="font-semibold mb-2"> Nearby landmarks {selectedProject.name}</h3>
                <ul className="list-disc ps-5 text-sm text-gray-700 mb-6">
                  {selectedProject.landmarks?.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ===== Filters Panel ===== */}
          {showFilters && (
            <div
              className={`fixed z-50 bg-white shadow-2xl transition-all duration-300
            ${isMobile
                  ? "bottom-0 left-0 right-0 h-[80vh] rounded-t-2xl animate-slide-up"
                  : "top-0 right-0 h-full w-[420px] border-l animate-slide-start"
                }`}
            >
              <div className="p-4 relative h-full overflow-y-auto">
                <button
                  onClick={() => setShowFilters(false)}
                  className="absolute top-2 right-4 text-xl font-bold"
                >
                  ✖
                </button>

                <h2 className="text-xl font-bold mb-4">فلترة المشاريع</h2>

                {/* Areas */}
                <div className="mb-4">
                  <label className="block font-semibold mb-1">المناطق</label>
                  <div className="flex flex-col gap-1 max-h-40 overflow-auto border p-2 rounded">
                    {areas.map((area) => (
                      <label key={area} className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          checked={selectedAreas.includes(area)}
                          onChange={() =>
                            toggleSelect(area, selectedAreas, setSelectedAreas)
                          }
                        />
                        {area}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Developers */}
                <div className="mb-4">
                  <label className="block font-semibold mb-1">المطوّر</label>
                  <div className="flex flex-col gap-1 max-h-40 overflow-auto border p-2 rounded">
                    {devs.map((dev) => (
                      <label key={dev} className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          checked={selectedDevs.includes(dev)}
                          onChange={() =>
                            toggleSelect(dev, selectedDevs, setSelectedDevs)
                          }
                        />
                        {dev}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Offer types */}
                <div className="mb-4">
                  <label className="block font-semibold mb-1">نوع العرض</label>
                  <div className="flex flex-col gap-1 max-h-40 overflow-auto border p-2 rounded">
                    {offers.map((offer) => (
                      <label key={offer} className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          checked={selectedOffers.includes(offer)}
                          onChange={() =>
                            toggleSelect(offer, selectedOffers, setSelectedOffers)
                          }
                        />
                        {offer}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedAreas([]);
                    setSelectedDevs([]);
                    setSelectedOffers([]);
                  }}
                  className="mt-2 bg-gray-200 px-4 py-2 rounded-md text-sm"
                >
                  إعادة تعيين الفلاتر
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}


