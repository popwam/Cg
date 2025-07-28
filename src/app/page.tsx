import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Area from "@/components/area";
import Launches from "@/components/Launches";
import Developers from "@/components/Developers";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import About from "@/components/about";
import { metadata } from "./metadata";
import Head from "next/head";
const navLinks = [
  { label: "HOME", href: "/", activate: true },
  { label: "ABOUT US", href: "/about" },
  { label: "DEVELOPERS", href: "/developers" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT US", href: "/contact" },
  { label: "عربي", href: "/ar", issee: "false" },
];

export { metadata };

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

const dirs = "ltr";
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
        className="w-screen overflow-x-hidden "
        dir={dirs}
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
          currentLang="en"
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
          title="New Launches"
          jsonFileName="productsData"
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
        <Developers title="OUR DEVELOPERS" jsonFileName="productsData" />
        <Form
          dir={dirs}
          background={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623369/background/mgos7ve6xwkhwijo5ks6.avif"
          }
          title="CONTACT US"
          desc="If you have any questions, please feel free to get in touch with us."
          farst="First Name"
          last="Last Name"
          email="Email"
          phone="Phone"
          mobile="Mobile"
          message="Short About you"
          button="SEND NOW"
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
