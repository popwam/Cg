import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/whoweare";
import images from "@/assets/images/index";
import img from "@/assets/img";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about", activate: true },
  { label: "DEVELOPERS", href: "/developers" },
  { label: "CONTACT US", href: "/contact" },
  // { label: "عربي", href: "/ar/about" },
];
const logo = [
  { title: "trust", img: images?.icon?.trust.src },
  { title: "cooperation", img: images?.icon?.cooperation.src },
  { title: "loyalty", img: images?.icon?.loyalty.src },
  { title: "modesty", img: images?.icon?.modesty.src },
  { title: "perseverance", img: images?.icon?.perseverance.src },
];

const links = [
  {
    title: "facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com",
  },
  {
    title: "instgram",
    icon: <FaInstagram />,
    href: "https://www.insttagram.com",
  },
];

const dirs = "ltr";

export default function HomePage({ children }: { children: React.ReactNode }) {
  const currentLang: "ar" | "en" = "en";

  return (
    <main
      className="w-screen overflow-x-hidden"
      dir="ltr"
      style={{ fontFamily: "EnLight" }}
    >
      <Navbar
        navLinks={navLinks}
        logoTop={img.logos.top.src}
        logoTextTop={img.logos.texttop.src}
        logoBotoom={img.logos.bottom.src}
        logoTextBotoom={img.logos.textbottom.src}
        logoText="Capitl Gate"
        currentLang={currentLang}
      />
      <About
        title=""
        desc="Credibility. Guidance. Reach. Elevation"
        bg={img.background.bgpageabout.src}
        howwearetitle="ABOUT US"
        howwearedesc="Capital Gate provides comprehensive real estate advisory solutions, empowering both buyers and developers to make informed decisions aligned with their aspirations and goals."
        howwearedesc2="As a leading real estate marketing company, we're proud to collaborate directly and officially with a diverse portfolio of developers, offering extensive coverage across Egypt and numerous international destinations, including Saudi Arabia, Dubai, and Europe."
        howweareimg={img.logos.bottom.src}
        missiontitle="Our Mission"
        missiondesc="Our mission is to deliver a distinguished real estate experience through professionalism and transparency. We meet client needs, build trust, and guide optimal investments for their future growth."
        missionbg={img.background.bgpagemission.src}
        missionimg={img.image.imgpagemission.src}
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
        logo={img.logos.logo.src}
        links={links}
        titlemenu="MAIN MENU"
        linkmenu={navLinks}
        addresstitle="ADDRESS"
        addressline1="Narth 90 ST"
        addressline2="New Cairo"
        addressline3="Egypt"
        contacttitle="CONACT"
        phone="+20 1026555621"
        email="INFO@CAPITALGATEEGY.COM"
      />
    </main>
  );
}
