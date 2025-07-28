"use client";
import React from "react";
import Image from "next/image";
import SocialSidebar from "./SocialSidebar";
import { CiCircleMore, CiMail, CiMap, CiPhone, CiTimer } from "react-icons/ci";

type ContactProps = {
  dir: "rtl" | "ltr";
  background: string;
  title: string;
  desc: string;
  name: string;
  email: string;
  phone: string;
  mobaile: string;
  message: string;
  button: string;
};

export default function Contact({
  dir,
  background,
  title,
  desc,
  name,
  email,
  phone,
  mobaile,
  message,
  button,
}: ContactProps) {
  return (
    <div
      className="relative w-screen min-h-screen"
      style={{
        backgroundImage: `linear-gradient(#5551),url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 items-center justify-center min-h-screen hidden md:flex">
        <form
          className={` shadow-xl rounded-2xl text-gray-50 flex lg:min-h-[70vh]  w-full h-full lg:max-w-[70vw]`}
          dir={dir}
          target="_blank"
          action="https://formsubmit.co/info@capitalgateegy.com"
          method="POST"
        >
          <div
            className={`bg-[#000]/85 w-1/2 min-h-full px-6 py-8 text-white flex-col flex gap-8`}
          >
            <div className="flex-col flex gap-4 mt-8">
              <h2 className="text-3xl font-light tracking-wide !text-start">
                {title}
              </h2>
              <p className={`text-sm text-gray-300`}>{desc}</p>
            </div>
            <div className="flex-col flex gap-4 mt-8">
              <p className="flex gap-4">
                <CiPhone size={24} color="#eee" />
                (+20) 1026555623
              </p>
              <p className="flex gap-4">
                <CiMail size={24} color="#eee" />
                info@capitalgateegy.com
              </p>
              <p className="flex gap-4">
                <CiMap size={24} color="#eee" />
                {dir === "ltr" ? "New Cairo , Egypt" : "القاهرة الجديدة  , مصر"}
              </p>
            </div>
            <div className="flex-col flex gap-2 mt-8">
              <p className="flex gap-4">
                <CiTimer size={24} color="#eee0" />
                {dir === "ltr" ? "Sunday - Thursday" : "الاحد - الخميس"}
              </p>
              <p className="flex gap-4">
                <CiTimer size={24} color="#eee" />
                {dir === "ltr" ? "10:00 AM - 07-00 PM" : "10:00 ص - 00-07 م"}
              </p>
            </div>
            <div className="flex-col flex gap-2 mt-8 relative">
              <p className="flex gap-4">
                <CiCircleMore size={24} color="#eee0" />
                <SocialSidebar rtl="row" dir="justify-start" />
              </p>
            </div>
          </div>
          <div className={`flex items-center justify-center w-full  bg-[#eee]`}>
            <div className={`bg-[#fff6] p-8 w-full gap-4`}>
              <div className="gap-4 flex flex-wrap">
                <input
                  type="text"
                  name="fullName"
                  placeholder={name}
                  className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full`}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={email}
                  className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full ${
                    mobaile ? "col-start-1 col-end-3" : ""
                  }`}
                />
                {mobaile ? (
                  <>
                    <input
                      type="tel"
                      placeholder={phone}
                      name="phoneNumber"
                      className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full ${
                        dir === "ltr" ? "text-left" : "text-right"
                      }`}
                      required
                    />
                    <input
                      type="tel"
                      name="secondPhoneNumber"
                      placeholder={mobaile}
                      className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full ${
                        dir === "ltr" ? "text-left" : "text-right"
                      }`}
                    />
                  </>
                ) : (
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder={phone}
                    className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full ${
                      dir === "ltr" ? "text-left" : "text-right"
                    }`}
                  />
                )}

                <textarea
                  name="message"
                  rows={2}
                  placeholder={message}
                  className={`bg-gray-100 p-3 border border-gray-800 rounded w-full outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full`}
                />

                <button
                  type="submit"
                  className={`bg-gray-800 text-gray-100 hover:text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 w-full transition cursor-pointer w-6/12`}
                >
                  {button}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen md:hidden">
        <form
          className={` shadow-xl rounded-2xl text-gray-50 flex lg:min-h-[70vh]  w-full h-full lg:max-w-[70vw]`}
          dir={dir}
        >
          <div
            className={`bg-[#000]/85  px-6 py-8 text-white flex-col flex gap-8 pt-[13vh]`}
          >
            <div className="flex-col flex gap-4 mt-8">
              <h2 className="text-3xl font-light tracking-wide !text-start">
                {title}
              </h2>
              <p className={`text-sm text-gray-300`}>{desc}</p>
            </div>
            <div
              className={`flex items-center justify-center w-full  bg-[#0000]`}
            >
              <div className={`bg-[#fff6] p-8 w-full gap-4`}>
                <div className="gap-4 flex flex-wrap">
                  <input
                    type="text"
                    name="FullName"
                    placeholder={name}
                    className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full`}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={email}
                    className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full ${
                      mobaile ? "col-start-1 col-end-3" : ""
                    }`}
                  />
                  {mobaile ? (
                    <>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder={phone}
                        className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full`}
                        required
                      />
                      <input
                        type="tel"
                        name="secondPhoneNumber"
                        placeholder={mobaile}
                        className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full`}
                        required
                      />
                    </>
                  ) : (
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder={phone}
                      className={`bg-gray-100 p-3 border border-gray-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full`}
                    />
                  )}

                  <textarea
                    rows={2}
                    name="message"
                    placeholder={message}
                    className={`bg-gray-100 p-3 border border-gray-800 rounded w-full outline-none focus:ring-1 text-gray-600 focus:text-gray-800 focus:bg-gray-200 w-full`}
                  />

                  <button
                    type="submit"
                    className={`bg-gray-800 text-gray-100 hover:text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 w-full transition cursor-pointer w-6/12`}
                  >
                    {button}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-col flex gap-4 mt-2">
              <p className="flex gap-4">
                <CiPhone size={24} color="#eee" />
                (+20) 1026555623
              </p>
              <p className="flex gap-4">
                <CiMail size={24} color="#eee" />
                info@capitalgateegy.com
              </p>
              <p className="flex gap-4">
                <CiMap size={24} color="#eee" />
                {dir === "ltr" ? "New Cairo , Egypt" : "القاهرة الجديدة  , مصر"}
              </p>
            </div>
            <div className="flex-col flex gap-2 mt-2">
              <p className="flex gap-4">
                <CiTimer size={24} color="#eee0" />
                {dir === "ltr" ? "Sunday - Thursday" : "الاحد - الخميس"}
              </p>
              <p className="flex gap-4">
                <CiTimer size={24} color="#eee" />
                {dir === "ltr" ? "10:00 AM - 07-00 PM" : "10:00 ص - 00-07 م"}
              </p>
            </div>
            <div className="flex-col flex gap-2 mt-2 relative">
              <p className="flex gap-4">
                <CiCircleMore size={24} color="#eee0" />
                <SocialSidebar rtl="row" dir="justify-start" />
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
