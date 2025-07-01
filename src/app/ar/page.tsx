import Hero from "@/components/Hero";
import Area from "@/components/area";
import Launches from "@/components/Launches";
import Developers from "@/components/Developers";
import Form from "@/components/Form";
import img from "@/assets/img/index";
import Footer from "@/components/Footer";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import About from "@/components/about";
import Navbar from "@/components/Navbar";
import images from "@/assets/images";

const navLinks = [
  { label: "الرئيسية", href: "/ar", activate: true },
  { label: "عناً", href: "/ar/about" },
  { label: "المطورين", href: "/ar/developers" },
  { label: "تواصل", href: "/ar/contact" },
  { label: "English", href: "/", issee: "no" },
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
const developens = [
  { title: " sx0", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx1", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx2", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx3", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx4", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx5", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx6", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx7", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx8", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx9", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx10", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx11", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx12", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx13", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx14", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx15", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx16", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx17", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx18", img: images.developers.hap.src, link: "/developens/" },
  { title: " sx19", img: images.developers.hap.src, link: "/developens/" },
];
const launche = [
  {
    title: "هذا نص  افتراضي",
    link: "/ar",
    thumbnail: images.developers.hap.src,
    background: images.developers.akamalrajhi.src,
    description: "هذا وصف افتراضي مكان الوصف الحقيقي ;)",
  },
  {
    title: "هذا نص  افتراضي",
    link: "/ar",
    thumbnail: images.developers.hap.src,
    background: images.developers.akamalrajhi.src,
    description: "هذا وصف افتراضي مكان الوصف الحقيقي ;)",
  },
  {
    title: "هذا نص  افتراضي",
    link: "/ar",
    thumbnail: images.developers.hap.src,
    background: images.developers.akamalrajhi.src,
    description: "هذا وصف افتراضي مكان الوصف الحقيقي ;)",
  },
  {
    title: "هذا نص  افتراضي",
    link: "/ar",
    thumbnail: images.developers.hap.src,
    background: images.developers.akamalrajhi.src,
    description: "هذا وصف افتراضي مكان الوصف الحقيقي ;)",
  },
  {
    title: "هذا نص  افتراضي",
    link: "/ar",
    thumbnail: images.developers.hap.src,
    background: images.developers.akamalrajhi.src,
    description: "هذا وصف افتراضي مكان الوصف الحقيقي ;)",
  },
  {
    title: "هذا نص  افتراضي",
    link: "/ar",
    thumbnail: images.developers.hap.src,
    background: images.developers.akamalrajhi.src,
    description: "هذا وصف افتراضي مكان الوصف الحقيقي ;)",
  },
];


const citys = [
  {title : 'القاهرة الجديدة' , link: '/ar/citys/', dir: 'ar'},
  {title : 'المستقبل سيتى' , link: '/ar/citys/', dir: 'ar'},
  {title : 'التجمع السادس' , link: '/ar/citys/', dir: 'ar'},
  {title : 'العاصمة الادارية الجديدة' , link: '/ar/citys/', dir: 'ar'},
  {title : 'الساحل الشمالي' , link: '/ar/citys/', dir: 'ar'},
  {title : 'العين السخنة' , link: '/ar/citys/', dir: 'ar'},
  {title : 'الشيخ زايد' , link: '/ar/citys/', dir: 'ar'},
  {title : 'أكتوير' , link: '/ar/citys/', dir: 'ar'},
];
const dirs = "rtl";
export default function HomePage({ children }: { children: React.ReactNode }) {

  return (
    <main
      className="w-screen overflow-x-hidden "
      dir="rtl"
      style={{ fontFamily: "ArLight" }}
    >
      {/* <div className="bg-[#5555] fixed w-screen h-screen z-10"></div> */}

      <Navbar
        navLinks={navLinks}
        logoTop={img.logos.top.src}
        logoTextTop={img.logos.texttop.src}
        logoBotoom={img.logos.bottom.src}
        logoTextBotoom={img.logos.textbottom.src}
        logoText="Capitl Gate"
        currentLang='ar'
      />
      <Hero />
      <About
        background={img.background.bgabout.src}
        img={img.image.imgabout.src}
        date={about}
      />
      <Area citys={citys} />
      <Launches title="مشروعات طرح جديد" dir="rtl" data={launche} />
      <Developers title="المطورين العقارين" dir="rtl" data={developens} />
      <Form
        dir={dirs}
        background={img.background.bgcontact.src}
        title="تواصل معنا "
        desc="إذا كان لديك أي أسئلة، فلا تتردد في التواصل معنا ."
        farst="الأسم الاول *"
        last="الاسم الكامل ( اختياري )"
        email="البريد الأكتروني ( اختياري )"
        phone="رقم الهاتف * "
        mobaile="رقم الموبايل ( اختياري )"
        message=" الرسالة  ( اختياري )"
        button="أرسال ألان  "
      />
      <Footer
        dir={dirs}
        logo={img.logos.logo.src}
        links={links}
        titlemenu="القائمة الرئيسية"
        linkmenu={navLinks}
        addresstitle="العنوان"
        addressline1="شارع 90 الشمالي "
        addressline2="القاهرة الجديده"
        addressline3="مصر"
        contacttitle="تواصل"
        phone="+20 1026555621"
        email="INFO@CAPITALGATEEGY.COM"
      />
    </main>
  );
}
