import Navbar from "@/components/Navbar";
import Contact from "@/components/contact";
import { metadata } from "./metadata";
import Head from "next/head";

export { metadata };

const navLinks = [
  { label: "الرئيسية", href: "/ar" },
  { label: "عناً", href: "/ar/about" },
  { label: "المطورين", href: "/ar/developers" },
  { label: "المشاريع", href: "/ar/projects" },
  { label: "تواصل ", href: "/ar/contact", activate: true },
  { label: "English", href: "/contact", issee: "no" },
];

const dirs = "rtl";

const ContactPage = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "كابيتال جيت للعقارات",
              url: "https://capitalgateegy.com/ar", // رابط النسخة العربية
              logo: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif",
              sameAs: [
                "https://www.facebook.com/CapitalGateEstate",
                "https://www.instagram.com/capitalgaterealestate/",
                "https://www.linkedin.com/in/capital-gate-a076b6376/",
              ],
              description:
                "اكتشف أفضل المشاريع العقارية مع كابيتال جيت. الوكالة الموثوقة للقاهرة الجديدة، العاصمة الإدارية، الشيخ زايد، وأكثر.",
              inLanguage: "ar",
            }),
          }}
        />
      </Head>
      <main
        className="w-screen overflow-x-hidden "
        dir={dirs}
        style={{ fontFamily: "ArLight" }}
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

        <Contact
          dir={dirs}
          background={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623382/background/ntpua08vyt8g1n2ztwyi.avif"
          }
          title="تواصل معنا "
          desc="إذا كان لديك أي أسئلة، فلا تتردد في التواصل معنا "
          name="الاسم بالكامل"
          email="البريد الالكتروني "
          phone="رقم الهاتف "
          mobaile="رقم بديل "
          message=" نص الرسالة "
          button="ارسال الان"
        />
      </main>
    </>
  );
};

export default ContactPage;
