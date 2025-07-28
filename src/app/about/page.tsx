import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/whoweare";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { metadata } from "./metadata";
import Head from "next/head";

export { metadata };

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about", activate: true },
  { label: "DEVELOPERS", href: "/developers" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT US", href: "/contact" },
  { label: "عربي", href: "/ar/about", issee: "no" },
];
const logo = [
  {
    title: "trust",
    img: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623058/logo/m2cl06lpflr9ygpibkzh.avif",
  },
  {
    title: "cooperation",
    img: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623046/logo/hmw9jitggbyzx0uxunbm.avif",
  },
  {
    title: "loyalty",
    img: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623054/logo/hkzifa0rz82xc0jynh09.avif",
  },
  {
    title: "modesty",
    img: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623056/logo/e0ndhb9gjej4c0doowl6.avif",
  },
  { title: "perseverance", img: "/perseverance.svg" },
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
        className="w-screen overflow-x-hidden"
        dir="ltr"
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
          currentLang={currentLang}
        />
        <About
          title=""
          desc="Credibility. Guidance. Reach. Elevation"
          bg={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623363/background/b0kim4dmjhnmxdyicf16.avif"
          }
          howwearetitle="ABOUT US"
          howwearedesc="Capital Gate provides comprehensive real estate advisory solutions, empowering both buyers and developers to make informed decisions aligned with their aspirations and goals."
          howwearedesc2="As a leading real estate marketing company, we're proud to collaborate directly and officially with a diverse portfolio of developers, offering extensive coverage across Egypt and numerous international destinations, including Saudi Arabia, Dubai, and Europe."
          howweareimg={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623048/logo/t6vdoxqehyrikxe4tvhy.avif"
          }
          missiontitle="Our Mission"
          missiondesc="Our mission is to deliver a distinguished real estate experience through professionalism and transparency. We meet client needs, build trust, and guide optimal investments for their future growth."
          missionbg={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753628375/background/udauvlkwgjdmhucdhdug.avif"
          }
          missionimg={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623389/background/vj1lerwowvtpwqb67qig.avif"
          }
          valuestitel="Our Vision"
          valueslogos={logo}
          whatmakestitle="WHY WE STAND OUT"
          whatmakesdir="en"
          whatmakesdesc="We believe every client deserves a tailored experience, that’s why we listen closely, understand deeply, and provide solutions that are just right for their goals."
          whatmakesdesc2="This commitment creates a genuine, trust-based bond, one that feels more like partnership than transaction, and fuels our collaborative, team-driven culture."
          whatmakesp="Credibility. Guidance. Reach. Elevation."
        />
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
