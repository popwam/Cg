"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";
type NavLink = {
  label: string;
  href: string;
  activate?: boolean;
  font?: string;
  issee?: string
};

type NavbarProps = {
  navLinks: NavLink[];
  logoText: string;
  logoTop: string;
  logoBotoom: string;
  logoTextTop: string;
  logoTextBotoom: string;
  currentLang: "ar" | "en";
};

export default function Navbar({
  navLinks,
  logoText,
  logoTop,
  logoBotoom,
  logoTextTop,
  logoTextBotoom,
  currentLang,
}: NavbarProps) {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-screen fixed left-0 top-0 z-50 duration-300">
        <nav
          dir='ltr'
          className={`flex items-center justify-between px-4 lg:px-18  border-b transition-all duration-300 ${
            isScrolled
              ? "bg-[#eee8] shadow-md border-[#fffa]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* اللوجو */}
          <div className="text-xl font-bold cursor-pointer" style={{fontFamily: currentLang === 'ar' ? 'ArLight' : 'EnLight'}}>
            <Link href={currentLang === 'ar' ? '/ar' : '/'}>
              {logoTop || logoBotoom ? (
                <div className="flex items-center text-white">
                  <img
                    src={isScrolled ? logoBotoom : logoTop}
                    alt={logoText}
                    className="h-25 w-auto object-contain"
                  />
                  <img
                    src={isScrolled ? logoTextBotoom : logoTextTop}
                    alt={logoText}
                    className="h-25 w-auto object-contain"
                  />
                </div>
              ) : (
                logoText
              )}
            </Link>
          </div>

          {isOpen ? (
            <IoIosArrowForward
              size={48}
              color={`${isScrolled ? "#f44" : "#f99"}`}
              onClick={() => {
                setIsOpen(false);
              }}
              className="cursor-pointer hover:border"
            />
          ) : (
            <IoIosMenu
              size={48}
              color={`${isScrolled ? "#222" : "#eee"}`}
              onClick={() => {
                setIsOpen(true);
              }}
              className="cursor-pointer hover:border"
            />
          )}
        </nav>
      </div>
      <div
        className={`w-screen md:w-3/12 h-screen md:h-7/12 bg-black/75 md:bg-black/95 fixed left-0 top-0 md:right-[5%] md:top-[12%] z-30  shadow-2xl rounded-2xl border ${
          isOpen ? "flex" : "hidden"
        } items-center justify-center text-gray-100  `}
      >
          <div className="text-center text-2xl w-fit z-20 ">
          {navLinks.map((link) => (
            <div key={link.href} className="relative my-4">
              <Link
                href={link.href}
                className={`relative py-2  font-medium group ${
                  link.activate ? "text-gray-50" : "text-gray-400"
                }`}
              >
                {link.label}
                <span
                  className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2
                  h-0.5 border-b-2 border-white
                  transition-all duration-300
                  ${link.activate ? "w-10/12" : "w-0 group-hover:w-10/12"}
                  `} style={{fontFamily:'ArLight'}}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
