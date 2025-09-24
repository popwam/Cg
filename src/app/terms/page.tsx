import Head from "next/head";
import { metadata } from "./metadata";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export { metadata };

export default function Privacy() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Developers", href: "/developers" },
    { label: "Projects", href: "/projects" },
    { label: "Offers", href: "/offers" },
    { label: "Contact ", href: "/contact" },
    { label: "العربية", href: `/ar/privacy/`, issee: "no" },
  ];

  const socialLinks = [
    {
      title: "facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/CapitalGateEstate",
    },
    {
      title: "instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/capitalgaterealestate",
    },
  ];

  const dirs = "ltr";
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
              logo:
                "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif",
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
        className="bg-white w-screen overflow-x-hidden items-center justify-center flex flex-col relative"
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
          logoText="Capital Gate"
          currentLang="en"
        />

        <div className="max-w-4xl px-4 py-10 text-start text-gray-800 leading-loose space-y-6 my-[13vh]">
          <h1 className="text-3xl font-bold mb-6">
            Terms of Use – Capital Gate Real Estate Website
          </h1>
          <p className="text-sm text-gray-500">Last Updated: July, 2025</p>

          <p>
            Welcome to Capital Gate Real Estate’s website
            (www.capitalgateegy.com). By accessing or using this site, you agree
            to the following terms and conditions. If you do not agree, please do
            not use the website.
          </p>

          <h2 className="text-xl font-semibold">1. Website Usage</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>The website is for personal or property-related use only.</li>
            <li>
              You may not use it for any illegal or commercial purposes, or
              copy/distribute content without written permission.
            </li>
            <li>
              You must provide accurate information when filling out forms or
              making inquiries.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">2. Intellectual Property</h2>
          <p>
            All content on this site is the property of Capital Gate Real Estate.
            Text, images, designs, and logos may not be reused without permission.
          </p>

          <h2 className="text-xl font-semibold">3. Property Listings</h2>
          <p>
            Property details (prices, availability, features) are updated
            regularly, but may change without prior notice. We are not liable for
            unintentional errors in listings.
          </p>

          <h2 className="text-xl font-semibold">4. External Links</h2>
          <p>
            This site may contain links to third-party websites. We are not
            responsible for their content or privacy policies.
          </p>

          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>
            Your use of the site is at your own risk. Capital Gate is not liable
            for any damages arising from your use of or inability to use the
            website or its services.
          </p>

          <h2 className="text-xl font-semibold">6. Modifications</h2>
          <p>
            Capital Gate reserves the right to update these terms at any time.
            Continued use of the website implies your acceptance of any changes.
          </p>

          <h2 className="text-xl font-semibold">7. Contact</h2>
          <p>📧 info@capitalgateegy.com</p>
          <p>📞 01144566600</p>
          <p>📍 108 El Banafseg Buildings, New Cairo, Egypt</p>
        </div>

        <Footer
          dir={dirs}
          logo={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif"
          }
          links={socialLinks}
          titlemenu="Main menu"
          linkmenu={navLinks}
          addresstitle="Address"
          addressline1="90th Street North"
          addressline2="New Cairo"
          addressline3="Egypt"
          contacttitle="Contact us"
          phone="+20 1144566600"
          email="info@capitalgateegy.com"
        />
      </main>
    </>
  );
}
