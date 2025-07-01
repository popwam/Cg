import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/whoweare";
import images from "@/assets/images/index";
import img from "@/assets/img";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const navLinks = [
  { label: "الرئيسية", href: "/ar", activate: true },
  { label: "عناً", href: "/ar/about" },
  { label: "المطورين", href: "/ar/developers" },
  { label: "تواصل ", href: "/ar/contact" },
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

const dirs = "rtl";

const logo = [
  { title: "الثقة", img: images?.icon?.trust.src },
  { title: "التعاون", img: images?.icon?.cooperation.src },
  { title: "الولاء", img: images?.icon?.loyalty.src },
  { title: "التواضع", img: images?.icon?.modesty.src },
  { title: "المثابرة", img: images?.icon?.perseverance.src },
];

export default function HomePage({ children }: { children: React.ReactNode }) {
  const currentLang: "ar" | "en" = "en";

  return (
    <main
      className="w-screen overflow-x-hidden"
      dir="rtl"
      style={{ fontFamily: "ArLight" }}
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
        howwearetitle="من نحن"
        howwearedesc="تقدم كابيتال جيت حلولًا استشارية عقارية شاملة، تمكّن المشترين والمطورين على حد سواء من اتخاذ قرارات مستنيرة تتماشى مع تطلعاتهم وأهدافهم."
        howwearedesc2="بصفتنا إحدى الشركات الرائدة في تسويق العقارات، نفخر بالتعاون المباشر والرسمي مع مجموعة متنوعة من المطورين، مما يضمن تغطية واسعة في جميع أنحاء مصر والعديد من الوجهات الدولية الأخرى، بما في ذلك المملكة العربية السعودية ودبي وأوروبا."
        howweareimg={img.logos.textbottom.src}
        missiontitle="مهمتنا"
        missiondesc="مهمتنا هي تقديم تجربة عقارية مميزة من خلال الاحترافية والشفافية. نلبي احتياجات العملاء، ونبني الثقة، ونوجه الاستثمارات المثلى لنموهم المستقبلي."
        missionbg={img.background.bgpagemission.src}
        missionimg={img.image.imgpagemission.src}
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
