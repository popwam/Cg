"use client";
import { useEffect } from "react";
import Image from "next/image";
import img from "@/assets/img";

const SecurityBlocker = () => {
  useEffect(() => {
    // 🚫 كليك يمين
    const disableRightClick = (e: MouseEvent) => e.preventDefault();

    // 🚫 اختصارات DevTools والطباعة والحفظ والنسخ
    const blockKeys = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      const forbidden =
        e.ctrlKey &&
        (["u", "s", "p", "c", "a", "m"].includes(key) || e.shiftKey);

      const devTools =
        key === "f12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c", "m"].includes(key));

      if (forbidden || devTools) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // 🚫 PrintScreen
    const blockPrintScreen = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        navigator.clipboard.writeText("🛑 لا يمكنك نسخ هذا المحتوى");
        alert("🚫 ممنوع السكرينشوت!");
      }
    };

    // 🚫 تحديد أو سحب
    const blockSelectOrDrag = (e: Event) => e.preventDefault();

    // ⚠️ تغميش الشاشة عند الخروج أو التصغير
    const blurOnHidden = () => {
      if (document.hidden) {
        document.body.classList.add("blurred");
      } else {
        document.body.classList.remove("blurred");
      }
    };

    // 🎧 ربط الأحداث
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("keydown", blockPrintScreen);
    document.addEventListener("selectstart", blockSelectOrDrag);
    document.addEventListener("dragstart", blockSelectOrDrag);
    document.addEventListener("visibilitychange", blurOnHidden);
    window.addEventListener("blur", () => {
      document.body.classList.add("blurred");
      document.querySelector(".blur-content")?.classList.remove("hidden");
    });
    window.addEventListener("focus", () => {
      document.body.classList.remove("blurred");
      document.querySelector(".blur-content")?.classList.add("hidden");
    });

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("keydown", blockPrintScreen);
      document.removeEventListener("selectstart", blockSelectOrDrag);
      document.removeEventListener("dragstart", blockSelectOrDrag);
      document.removeEventListener("visibilitychange", blurOnHidden);
      window.addEventListener("blur", () => {
        document.body.classList.add("blurred");
        document.querySelector(".blur-content")?.classList.remove("hidden");
      });
      window.addEventListener("focus", () => {
        document.body.classList.remove("blurred");
        document.querySelector(".blur-content")?.classList.add("hidden");
      });
    };
  }, []);

  return (
    <div className="blur-content hidden fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      <Image
        src={img.logos.cg}
        alt="Capital Gate"
        className="opacity-25 w-32 md:w-md lg:w-72"
      />
      <div
        style={{ fontFamily: "EnLight", textTransform: "uppercase" }}
        className="flex flex-col opacity-45 items-center"
      >
        <div className="text-4xl w-fit tracking-[5px]">Capital Gate</div>
        <div className="text-xl w-fit tracking-[2px]">real estate</div>
      </div>
      <p className="text-lg font-semibold text-white mt-4">نحن في انتظارك ⏳</p>
    </div>
  );
};

export default SecurityBlocker;
