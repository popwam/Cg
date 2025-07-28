import Navbar from "@/components/Navbar";
import Contact from "@/components/contact";
import { metadata } from "./metadata";
import Head from "next/head";

export { metadata };

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "DEVELOPERS", href: "/developers" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT US", href: "/contact", activate: true },
  { label: "عربي", href: "/ar/contact" },
];
const dirs = "ltr";

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

        <Contact
          dir={dirs}
          background={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623382/background/ntpua08vyt8g1n2ztwyi.avif"
          }
          title="CONTACT US"
          desc="If you have any questions, please feel free to get in touch with us."
          name="Full Name"
          email="Email"
          phone="Mobile Number"
          mobaile="Another Number"
          message="Short Message"
          button="SEND NOW"
        />
      </main>
    </>
  );
};

export default ContactPage;
