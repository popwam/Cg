"use client";
import React from "react";
import Image from "next/image";

type FormProps = {
  dir: "rtl" | "ltr";
  background: string;
  title: string;
  desc: string;
  farst: string;
  last: string;
  email: string;
  phone: string;
  mobaile: string;
  message: string;
  button: string;
};

export default function Form({
  dir,
  background,
  title,
  desc,
  farst,
  last,
  email,
  phone,
  mobaile,
  message,
  button,
}: FormProps) {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: `linear-gradient(#111c),url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex items-center lg:items-end justify-center lg:justify-end min-h-screen px-0 lg:px-12 pb-0 lg:pb-32 ">
        <form
          className={`bg-[#111] p-8 rounded-lg max-w-2xl w-full space-y-4 text-gray-50`} dir={dir}
        >
          <h2 className="text-3xl font-light tracking-wide">{title}</h2>
          <p className={`text-sm text-gray-300`}>{desc}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <input
              type="text"
              placeholder={farst}
              className={`bg-zinc-900 p-3 border border-zinc-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-zinc-800 focus:bg-gray-200`}
              required
            />
            <input
              type="text"
              placeholder={last}
              className={`bg-zinc-900 p-3 border border-zinc-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-zinc-800 focus:bg-gray-200`}
              required
            />
            <input
              type="email"
              pattern=""
              placeholder={email}
              className={`bg-zinc-900 p-3 border border-zinc-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-zinc-800 focus:bg-gray-200 ${
                mobaile ? "col-start-1 col-end-3" : ""
              }`}
            />
            {mobaile ? (
              <>
                <input
                  type="tel"
                  placeholder={phone}
                  className={`bg-zinc-900 p-3 border border-zinc-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-zinc-800 focus:bg-gray-200`}
                  required
                />
                <input
                  type="tel"
                  placeholder={mobaile}
                  className={`bg-zinc-900 p-3 border border-zinc-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-zinc-800 focus:bg-gray-200`}
                  required
                />
              </>
            ) : (
              <input
                type="tel"
                placeholder={phone}
                className={`bg-zinc-900 p-3 border border-zinc-800 rounded outline-none focus:ring-1 text-gray-600 focus:text-zinc-800 focus:bg-gray-200`}
              />
            )}
          </div>

          <textarea
            rows={2}
            placeholder={message}
            className={`bg-zinc-900 p-3 border border-zinc-800 rounded w-full outline-none focus:ring-1 text-gray-600 focus:text-zinc-800 focus:bg-gray-200`}
          />

          <button
            type="submit"
            className={`bg-zinc-800 text-gray-100 hover:text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition cursor-pointer w-6/12`}
          >
            {button}
          </button>
        </form>
      </div>
    </div>
  );
}
