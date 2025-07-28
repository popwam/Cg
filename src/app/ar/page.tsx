import Hero from "@/components/Hero";
import Area from "@/components/area";
import Launches from "@/components/Launches";
import Developers from "@/components/Developers";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import About from "@/components/about";
import Navbar from "@/components/Navbar";
import { metadata } from "./metadata";
import Head from "next/head";
export { metadata };

const navLinks = [
  { label: "الرئيسية", href: "/ar", activate: true },
  { label: "عناً", href: "/ar/about" },
  { label: "المطورين", href: "/ar/developers" },
  { label: "المشاريع", href: "/ar/projects" },
  { label: "تواصل ", href: "/ar/contact" },
  { label: "English", href: "/", issee: "no" },
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

const about = [
  {
    title: "من نحن",
    desc: "تتميز كابيتال جيت بتقديم حلول استشارية وتسويقية عقارية شاملة، لتمكين المشترين والمطورين من اتخاذ قرارات مستنيرة.",
    dir: "rtl",
  },
  {
    title: "مهمتنا",
    desc: "مهمتنا هي تقديم تجربة عقارية مميزة من خلال الاحترافية والشفافية. نلبي احتياجات العملاء، ونبني الثقة، ونوجه الاستثمارات المثلى لنموهم المستقبلي.",
    dir: "rtl",
  },
  {
    title: "رؤيتنا",
    desc: "رؤيتنا هي أن نكون شركة السمسرة العقارية الرائدة في مصر والشرق الأوسط، مقدمين إرشادات احترافية وشفافة، لنصبح الخيار المفضل للجميع.",
    dir: "rtl",
  },
];
const citys = [
  { title: "القاهرة الجديدة", link: "new-cairo", dir: "ar" },
  { title: "المستقبل سيتى", link: "mostakbal-city", dir: "ar" },
  { title: "التجمع السادس", link: "the-6th-settlement", dir: "ar" },
  { title: "العاصمة الادارية الجديدة", link: "new-capital", dir: "ar" },
  { title: "الساحل الشمالي", link: "north-coast", dir: "ar" },
  { title: "العين السخنة", link: "ain-sokhna", dir: "ar" },
  { title: "الشيخ زايد", link: "sheikh-zayed", dir: "ar" },
  { title: "أكتوير", link: "october", dir: "ar" },
];
const dirs = "rtl";
export default function HomePage({ children }: { children: React.ReactNode }) {
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
        dir="rtl"
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
          currentLang="ar"
        />
        <Hero />
        <About
          background={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623349/background/ffrb1l1cup63adlsubkr.avif"
          }
          img={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623360/background/vrphwcbvun4fg1aiuhmf.avif"
          }
          date={about}
        />
        <Area citys={citys} />
        <Launches
          title="مشروعات طرح جديد"
          jsonFileName="productsDataAr"
          projectSlugs={[
            "dose",
            "direction-white",
            "mivida",
            "swan-lake-oct",
            "hap-town",
            "park-view",
          ]}
          dir={dirs}
        />
        <Developers title="المطورين العقارين" jsonFileName="productsDataAr" />
        <Form
          dir={dirs}
          background={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623369/background/mgos7ve6xwkhwijo5ks6.avif"
          }
          title="تواصل معنا "
          desc="إذا كان لديك أي أسئلة، فلا تتردد في التواصل معنا ."
          farst="الأسم الاول *"
          last="الاسم الكامل ( اختياري )"
          email="البريد الأكتروني ( اختياري )"
          phone="رقم الهاتف * "
          mobile="رقم الموبايل ( اختياري )"
          message=" الرسالة  ( اختياري )"
          button="أرسال ألان  "
        />
        <Footer
          dir={dirs}
          logo={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif"
          }
          links={links}
          titlemenu="القائمة الرئيسية"
          linkmenu={navLinks}
          addresstitle="العنوان"
          addressline1="شارع 90 الشمالي "
          addressline2="القاهرة الجديده"
          addressline3="مصر"
          contacttitle="تواصل"
          phone="+20 1144566600"
          email="info@capitalgateegy.com"
        />
      </main>
    </>
  );
}
