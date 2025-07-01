import Navbar from "@/components/Navbar";
import img from "@/assets/img";
import Form from "@/components/Form";
import Contact from "@/components/contact";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "DEVELOPERS", href: "/developers" },
  { label: "CONTACT US", href: "/contact", activate: true },
  // { label: "عربي", href: "/ar" },
];
const dirs = "ltr";

const ContactPage = () => {
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
        currentLang="en"
      />
  
      <Contact
        dir={dirs}
        background={img.background.contact.src}
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
    </main>
  );
};

export default ContactPage;
