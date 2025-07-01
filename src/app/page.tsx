import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Area from "@/components/area";
import Launches from "@/components/Launches";
import Developers from "@/components/Developers";
import Form from "@/components/Form";
import img from "@/assets/img/index";
import Footer from "@/components/Footer";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import About from "@/components/about";
import images from "@/assets/images";

const navLinks = [
  { label: "HOME", href: "/", activate: true },
  { label: "ABOUT US", href: "/about" },
  { label: "DEVELOPERS", href: "/developers" },
  { label: "CONTACT US", href: "/contact" },
  // { label: "عربي", href: "/ar", issee: "false" },
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
const about = [
  {
    title: "WHO WE ARE",
    desc: "Capital Gate is a leading real estate advisory and marketing company, providing comprehensive solutions to empower buyers and developers.",
  },
  {
    title: "OUR VISION",
    desc: "Our vision is to be the leading real estate brokerage in Egypt and the Middle East, providing professional, transparent guidance, becoming the preferred choice for all.",
  },
  {
    title: "OUR MISSION",
    desc: "Our mission is to deliver a distinguished real estate experience through professionalism and transparency. We meet client needs, build trust, and guide optimal investments for their future growth.",
  },
];
const citys = [
  { title: "New Cairo", link: "new-cairo" },
  { title: "Mostakbal City", link: "mostakbal-city" },
  { title: "The 6th Settlement", link: "the-6th-settlement" },
  { title: "New Capital", link: "new-capital" },
  { title: "North Coast", link: "north-coast" },
  { title: "Ain Sokhna", link: "ain-sokhna" },
  { title: "Sheikh Zayed", link: "sheikh-zayed" },
  { title: "October", link: "october" },
];
const developens = [
  {
    img: images.developers.akamalrajhi.src,
    link: "akam-alrajhi",
    title: "akam alrajhi , أكام الراجحي",
  },
  {
    img: images.developers.arabella.src,
    link: "arabella",
    title: "arabella , أرابيلا",
  },
  {
    img: images.developers.emaar.src,
    link: "emaar",
    title: "emaar , اعمار اليكس",
  },
  {
    img: images.developers.hap.src,
    link: "hassan-allam",
    title: "Hassan Allam , حسن علام",
  },
  {
    img: images.developers.horizon.src,
    link: "horizon",
    title: "horizon , هورايزون",
  },
  {
    img: images.developers.hydepark.src,
    link: "hyde-park",
    title: "hyde park , هايد بارك",
  },
  {
    img: images.developers.ilcazar.src,
    link: "il-cazar",
    title: "il cazar , الكزار",
  },
  {
    img: images.developers.lavista.src,
    link: "lavista",
    title: "lavistaz , لافيستا",
  },
  {
    img: images.developers.lmd.src,
    link: "lmd",
    title: "lmd , لاند مارك , ال ام دي",
  },
  {
    img: images.developers.madaar.src,
    link: "madaar",
    title: "madaar , مدار",
  },
  {
    img: images.developers.marakez.src,
    link: "marakez",
    title: "marakez , مراكز",
  },
  {
    img: images.developers.marasem.src,
    link: "marasem",
    title: "marasem , المراسم",
  },
  {
    img: images.developers.marq.src,
    link: "the-marq",
    title: "the marq , ذا مارك",
  },
  {
    img: images.developers.mi.src,
    link: "misr-italia",
    title: "misr italia , مصر ايطاليا",
  },
  {
    img: images.developers.mnhd.src,
    link: "mnhd",
    title: "mnhd , مدينة مصر للاسكان والتعمير",
  },
  {
    img: images.developers.mv.src,
    link: "mountain-view",
    title: "mountain view , ماونتن فيواى",
  },
  { img: images.developers.n.src, link: "n", title: "N , ان , نواصي" },
  { img: images.developers.naia.src, link: "naia", title: "naia  , نايا" },
  {
    img: images.developers.nationofsky.src,
    link: "nation-of-sky",
    title: "nation of sky  , نيشنز اوف سكاي",
  },
  {
    img: images.developers.g.src,
    link: "g",
    title: "new giza, g,جي  ,نيو جيزة",
  },
  { img: images.developers.ora.src, link: "ora", title: "ora  ,أورا" },
  {
    img: images.developers.palmhills.src,
    link: "palm-hills",
    title: "palm hills  ,بالم هيلز",
  },
  {
    img: images.developers.pap.src,
    link: "people-and-places",
    title: "people and places  ,بيبول اند بليسيز",
  },
  { img: images.developers.pre.src, link: "pre", title: "pre  , بي ار اي" },
  {
    img: images.developers.qamzi.src,
    link: "qamzi",
    title: "qamzi  , القمزي",
  },
  { img: images.developers.roya.src, link: "roya", title: "roya  , رؤية" },
  {
    img: images.developers.sabbour.src,
    link: "sabbour",
    title: "sabbour  , الاهلي صبور",
  },
  {
    img: images.developers.sed.src,
    link: "sed",
    title: "sed  ,السعودية المصرية للتعمير ,سيد,اس اي دي ",
  },
  { img: images.developers.sodic.src, link: "sodic", title: "sodic  ,سوديك" },
  {
    img: images.developers.starlight.src,
    link: "starlight",
    title: "starlight ,  ستارلايت ",
  },
  {
    img: images.developers.tatweer.src,
    link: "tatweer-misr",
    title: "Tatweer Misr, تطوير مصر ",
  },
  {
    img: images.developers.tmg.src,
    link: "tmg",
    title: "tmg , تي ام جي , طلعت مصطفى",
  },
  {
    img: images.developers.waterway.src,
    link: "waterway",
    title: "The WaterWay , ذا واتر واي",
  },
];
const launche = [
  {
    title: "DOSE",
    link: "/",
    thumbnail: images.developers.akamalrajhi.src,
    background: images.imgprojects.doseimg2.src,
    description: "",
  },
  {
    title: "MIVIDA",
    link: "/",
    thumbnail: images.developers.emaar.src,
    background: images.imgprojects.mividaimg2.src,
    description: "",
  },
  {
    title: "PARK VIEW",
    link: "/",
    thumbnail: images.developers.hap.src,
    background: images.imgprojects.parkviewimg2.src,
    description: "",
  },
  {
    title: "SWAN LAKE",
    link: "/",
    thumbnail: images.developers.hap.src,
    background: images.imgprojects.swanlakeimg4.src,
    description: "",
  },
  {
    title: "SAADA NEW CAIRO",
    link: "/",
    thumbnail: images.developers.horizon.src,
    background: images.imgprojects.saadanewcairoimg1.src,
    description: "",
  },
  {
    title: "TAWNY",
    link: "/",
    thumbnail: images.developers.hydepark.src,
    background: images.imgprojects.tawnyimg4.src,
    description: "",
  },
];

const dirs = "ltr";
export default function HomePage({ children }: { children: React.ReactNode }) {

  return (
    <main
      className="w-screen overflow-x-hidden "
      dir={dirs}
      style={{ fontFamily: "EnLight" }}
    >
      <Navbar
        navLinks={navLinks}
        logoTop={img.logos.top.src}
        logoTextTop={img.logos.texttop.src}
        logoBotoom={img.logos.bottom.src}
        logoTextBotoom={img.logos.textbottom.src}
        logoText="Capitl Gate"
        currentLang='en'
      />
      <Hero />
      <About
        background={img.background.bgabout.src}
        img={img.image.imgabout.src}
        date={about}
      />
      <Area citys={citys} />
      <Launches title="New Launches" dir="" data={launche} />
      <Developers title="OUR DEVELOPENS" data={developens} />
      <Form
        dir={dirs}
        background={img.background.bgcontact.src}
        title="CONTACT US"
        desc="If you have any questions, please feel free to get in touch with us."
        farst="First Name"
        last="Last Name"
        email="Email"
        phone="Phone"
        mobaile="Mobile"
        message="Short About you"
        button="SEND NOW"
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
