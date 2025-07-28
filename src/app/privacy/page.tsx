import { metadata } from "./metadata";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
export { metadata };

export default function Privacy() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Developers", href: "/developers" },
    { label: "Projects", href: "/projects" },
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
      {" "}
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
            Privacy Policy – Capital Gate Real Estate
          </h1>
          <p className="text-sm text-gray-500">Last Updated: July, 2025</p>

          <p>
            At Capital Gate Real Estate, your privacy is a top priority. This
            privacy policy explains how we collect, use, and protect your
            information when you interact with our website or communicate with
            us.
          </p>

          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Property preferences</li>
            <li>Geographic location (if permitted)</li>
            <li>Browsing data (via cookies)</li>
          </ul>

          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact you about properties or inquiries</li>
            <li>Provide you with tailored real estate options</li>
            <li>Send exclusive offers or updates (with your consent)</li>
            <li>Enhance your experience on our website</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Data Protection</h2>
          <p>
            We use strict security measures to protect your personal data from
            unauthorized access, modification, or misuse.
          </p>

          <h2 className="text-xl font-semibold">4. Data Sharing</h2>
          <p>We do not share your personal data with third parties unless:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You give us prior consent</li>
            <li>
              It is with trusted service providers helping us operate our
              business
            </li>
            <li>We are legally required to do so</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your experience. You can control
            cookie usage through your browser settings.
          </p>

          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Request correction or updates</li>
            <li>Ask for your data to be deleted</li>
            <li>Contact us for privacy concerns</li>
          </ul>

          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p>📍 Address: 108 El Banafseg Buildings, New Cairo, Egypt</p>
          <p>📞 Mobile: 01144566600</p>
          <p>📧 Email: info@capitalgateegy.com</p>
          <a href="https://capitalgateegy.com">
            🌐 Website: www.capitalgateegy.com
          </a>

          <h2 className="text-xl font-semibold pt-3">7. Policy Updates</h2>
          <p>
            We may revise this policy occasionally. Please check this page
            regularly to stay informed of any updates.
          </p>
        </div>

        <div className="">
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
        </div>
      </main>
    </>
  );
}
