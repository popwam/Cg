import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/whoweare";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { metadata } from "./metadata";
import Head from "next/head";

export { metadata };

const navLinks = [
  { label: "الرئيسية", href: "/ar" },
  { label: "عناً", href: "/ar/about", activate: true },
  { label: "المطورين", href: "/ar/developers" },
  { label: "المشاريع", href: "/ar/projects" },
  { label: "تواصل ", href: "/ar/contact" },
  { label: "English", href: "/about", issee: "no" },
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

const dirs = "rtl";

const logo = [
  {
    title: "الثقة",
    img: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623058/logo/m2cl06lpflr9ygpibkzh.avif",
  },
  {
    title: "التعاون",
    img: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623046/logo/hmw9jitggbyzx0uxunbm.avif",
  },
  {
    title: "الولاء",
    img: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623054/logo/hkzifa0rz82xc0jynh09.avif",
  },
  {
    title: "التواضع",
    img: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623056/logo/e0ndhb9gjej4c0doowl6.avif",
  },
  { title: "المثابرة", img: "/perseverance.svg" },
];

export default function HomePage({ children }: { children: React.ReactNode }) {
  const currentLang: "ar" | "en" = "en";

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
        className="w-screen overflow-x-hidden"
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
          currentLang={currentLang}
        />
        <About
          title=""
          desc="Credibility. Guidance. Reach. Elevation"
          bg={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623363/background/b0kim4dmjhnmxdyicf16.avif"
          }
          howwearetitle="من نحن"
          howwearedesc="تقدم كابيتال جيت حلولًا استشارية عقارية شاملة، تمكّن المشترين والمطورين على حد سواء من اتخاذ قرارات مستنيرة تتماشى مع تطلعاتهم وأهدافهم."
          howwearedesc2="بصفتنا إحدى الشركات الرائدة في تسويق العقارات، نفخر بالتعاون المباشر والرسمي مع مجموعة متنوعة من المطورين، مما يضمن تغطية واسعة في جميع أنحاء مصر والعديد من الوجهات الدولية الأخرى، بما في ذلك المملكة العربية السعودية ودبي وأوروبا."
          howweareimg={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623048/logo/t6vdoxqehyrikxe4tvhy.avif"
          }
          missiontitle="مهمتنا"
          missiondesc="مهمتنا هي تقديم تجربة عقارية مميزة من خلال الاحترافية والشفافية. نلبي احتياجات العملاء، ونبني الثقة، ونوجه الاستثمارات المثلى لنموهم المستقبلي."
          missionbg={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753628375/background/udauvlkwgjdmhucdhdug.avif"
          }
          missionimg={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623389/background/vj1lerwowvtpwqb67qig.avif"
          }
          valuestitel="رؤيتنا"
          valueslogos={logo}
          whatmakestitle="لماذا نحن متميزون"
          whatmakesdir="ar"
          whatmakesdesc="نؤمن بأن كل عميل يستحق تجربة مصممة خصيصًا له؛ لهذا السبب، ننصت جيدًا، ونتفهم بعمق، ونقدم حلولًا تتناسب تمامًا مع أهدافهم."
          whatmakesdesc2="هذا الالتزام يخلق علاقة أصيلة قائمة على الثقة ،علاقة تشبه الشراكة أكثر من كونها مجرد معاملة، وهذا ما يغذي ثقافتنا التعاونية التي تعتمد على العمل الجماعي."
          whatmakesp="Credibility. Guidance. Reach. Elevation."
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
