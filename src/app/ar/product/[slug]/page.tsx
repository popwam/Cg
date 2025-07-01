"use client";
import { redirect } from "next/navigation";
import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import images from "@/assets/images";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import img from "@/assets/img";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};
const icons = {
  akamalrajhi: [
    { image: images.projects.dose, link: "/product/dose" }
  ],
  arabella: [
    { image: images.projects.directionwhite, link: "/product/direction-white" },
  ],
  mivida: [
    { image: images.projects.mivida, link: "/ar/product/mivida" }
  ],
  hap: [
    { image: images.projects.haptown, link: "/ar/product/hap-town" },
    { image: images.projects.parkview, link: "/ar/product/park-view" },
    { image: images.projects.swanlake, link: "/ar/product/swan-lake" },
    { image: images.projects.swanlakeoct, link: "/ar/product/swan-lake-oct" },
  ],
  horizon: [
    { image: images.projects.saadanewcairo, link: "/ar/product/saada-new-cairo" },
    { image: images.projects.saadasahel, link: "/ar/product/saada-sahel" },
  ],
  hydepark: [
    { image: images.projects.gardenlakes, link: "/ar/product/garden-lakes" },
    { image: images.projects.hpnewcairo, link: "/ar/product/hyde-park-new-cairo" },
    { image: images.projects.seashore, link: "/ar/product/seashore" },
    { image: images.projects.tawny, link: "/ar/product/tawny" },
  ],
  ilcazar: [
    { image: images.projects.creektown, link: "/ar/product/creek-town" },
    { image: images.projects.crest, link: "/ar/product/crest" },
    { image: images.projects.glen, link: "/ar/product/glen" },
    { image: images.projects.goheliopolis, link: "/ar/product/go-heliopolis" },
    { image: images.projects.safia, link: "/ar/product/safia" },
  ],
  lavista: [
    { image: images.projects.city, link: "/ar/product/city" },
    { image: images.projects.ray, link: "/ar/product/ray" },
    { image: images.projects.vera, link: "/ar/product/vera" },
  ],
  lmd: [
    { image: images.projects.oneninety, link: "/ar/product/one-ninety" },
  ],
  madaar: [
    { image: images.projects.azhaein, link: "/ar/product/azha-ein" },
    { image: images.projects.azhanorth, link: "/ar/product/azha-north" },
    { image: images.projects.kenz, link: "/ar/product/kenz" },
  ],
  marakez: [
    { image: images.projects.aeon, link: "/ar/product/aeon" },
    { image: images.projects.cresentwalk, link: "/ar/product/cresent-walk" },
    { image: images.projects.district, link: "/ar/product/district" },
  ],
  marasem: [
    { image: images.projects.marbay, link: "/ar/product/mar-bay" },
    { image: images.projects.marville, link: "/ar/product/mar-ville" },
    { image: images.projects.moon, link: "/ar/product/moon" },
  ],
  marq: [
    { image: images.projects.garden, link: "/ar/product/garden" },
    { image: images.projects.marquete, link: "/ar/product/marquete" },
    { image: images.projects.waterlyn, link: "/ar/product/waterlyn" },
    { image: images.projects.watermarq, link: "/ar/product/the-water-marq" },
  ],
  mi: [
    { image: images.projects.cbp, link: "/ar/product/cbp" },
    { image: images.projects.ilbosco, link: "/ar/product/il-bosco" },
    { image: images.projects.kai, link: "/ar/product/kai" },
    { image: images.projects.lanouvavista, link: "/ar/product/lanouva-vista" },
    { image: images.projects.solare, link: "/ar/product/solare" },
    { image: images.projects.vinci, link: "/ar/product/vinci" },
  ],
  mnhd: [
    { image: images.projects.butterfly, link: "/ar/product/butterfly" },
    { image: images.projects.sarai, link: "/ar/product/sarai" },
    { image: images.projects.tajcity, link: "/ar/product/taj-city" },
  ],
  mv: [
    { image: images.projects.one, link: "/ar/product/mountain-view-1-1" },
    { image: images.projects.three, link: "/ar/product/mountain-view-3" },
    { image: images.projects.aliva, link: "/ar/product/aliva" },
    { image: images.projects.chillout, link: "/ar/product/chillout" },
    { image: images.projects.mvhydepark, link: "/ar/product/hyde-park" },
    { image: images.projects.icity, link: "/ar/product/i-city-oct" },
    { image: images.projects.icitynewcairo, link: "/ar/product/i-city-new-cairo" },
    { image: images.projects.jrian, link: "/ar/product/jrian" },
    { image: images.projects.lvls, link: "/ar/product/lvls" },
    { image: images.projects.m, link: "/ar/product/mountain-view" },
    { image: images.projects.raselhekma, link: "/ar/product/ras-elhekma" },
    { image: images.projects.sokhna, link: "/ar/product/sokhna" },
  ],
  n: [
    { image: images.projects.nest, link: "/ar/product/nest" }
  ],
  naia: [
    { image: images.projects.naiabay, link: "/ar/product/naia-bay" },
    { image: images.projects.naiawest, link: "/ar/product/naia-west" },
  ],
  nationofsky: [
    { image: images.projects.zomra, link: "/ar/product/zomra" }

  ],
  g: [
    { image: images.projects.districtone, link: "/ar/product/district-one" },
    { image: images.projects.thegrove, link: "/ar/product/the-grove" },
  ],
  ora: [
    { image: images.projects.silversands, link: "/ar/product/silversands" },
    { image: images.projects.zed, link: "/ar/product/zed" },
    { image: images.projects.zedeast, link: "/ar/product/zed-east" },
  ],
  palmhills: [
    { image: images.projects.alamien, link: "/ar/product/alamien" },
    { image: images.projects.badya, link: "/ar/product/badya" },
    { image: images.projects.capitalgardens, link: "/ar/product/capital-gardens" },
    { image: images.projects.cc, link: "/ar/product/crown-central" },
    { image: images.projects.hacienda, link: "/ar/product/hacienda" },
    { image: images.projects.newcairo, link: "/ar/product/new-cairo" },
    { image: images.projects.palparks, link: "/ar/product/palm-parks" },
  ],
  pap: [
    { image: images.projects.hoo, link: "/ar/product/hills-of-one" },
    { image: images.projects.med, link: "/ar/product/med" },
  ],
  pre: [
    { image: images.projects.brooks, link: "/ar/product/the-brooks" },
    { image: images.projects.ivoryeast, link: "/ar/product/ivory-east" },
    { image: images.projects.stone, link: "/ar/product/stone" },
  ],
  qamzi: [
    { image: images.projects.eastshire, link: "/ar/product/east-shire" },
    { image: images.projects.seazen, link: "/ar/product/seazen" },
  ],
  roya: [
    { image: images.projects.stonepark, link: "/ar/product/stone-park" },
    { image: images.projects.telal, link: "/ar/product/telal" },
    { image: images.projects.telaleast, link: "/ar/product/telal-east" },
  ],
  sabbour: [
    { image: images.projects.amwaj, link: "/ar/product/amwaj" },
    { image: images.projects.gaia, link: "/ar/product/gaia" },
    { image: images.projects.oddeysa, link: "/ar/product/oddeysa" },
    { image: images.projects.ridge, link: "/ar/product/ridge" },
    { image: images.projects.square, link: "/ar/product/the-square" },
  ],
  sed: [
    { image: images.projects.bluevert, link: "/ar/product/bluevert" },
    { image: images.projects.central, link: "/ar/product/central" },
    { image: images.projects.jayd, link: "/ar/product/jayd" },
    { image: images.projects.latiny, link: "/ar/product/latiny" },
  ],
  sodic: [
    { image: images.projects.eastown, link: "/ar/product/eastown" },
    { image: images.projects.ednc, link: "/ar/product/ednc" },
    { image: images.projects.estates, link: "/ar/product/the-estates" },
    { image: images.projects.june, link: "/ar/product/june" },
    { image: images.projects.ogami, link: "/ar/product/ogami" },
    { image: images.projects.onesixteen, link: "/ar/product/one-sixteen" },
    { image: images.projects.portal, link: "/ar/product/the-por-tal" },
    { image: images.projects.sixwest, link: "/ar/product/six-west" },
    { image: images.projects.skycodos, link: "/ar/product/sky-codos" },
    { image: images.projects.sodiceast, link: "/ar/product/sodic-east" },
    { image: images.projects.vye, link: "/ar/product/vye" },
  ],
  starlight: [
    { image: images.projects.creeks, link: "/ar/product/creeks" },
    { image: images.projects.crystal, link: "/ar/product/crystal" },
  ],
  tatweer: [
    { image: images.projects.bloomfields, link: "/ar/product/bloomfields" },
    { image: images.projects.dbay, link: "/ar/product/dbay" },
    { image: images.projects.foukabay, link: "/ar/product/fouka-bay" },
    { image: images.projects.ilmontegalala, link: "/ar/product/il-montegalala" },
    { image: images.projects.rivers, link: "/ar/product/rivers" },
    { image: images.projects.salt, link: "/ar/product/salt" },
  ],
  tmg: [
    { image: images.projects.alrehab, link: "/ar/product/alrehab" },
    { image: images.projects.madinaty, link: "/ar/product/madinaty" },
    { image: images.projects.noor, link: "/ar/product/noor" },
    { image: images.projects.southmed, link: "/ar/product/southmed" },
  ],
  waterway: [
    { image: images.projects.cw, link: "/ar/product/capital-way" },
    { image: images.projects.nc, link: "/ar/product/waterway-new-cairo" },
    { image: images.projects.triangle, link: "/ar/product/triangle" },
  ],

};
const products = [
  {
    slug: "akam-alrajhi",
    shortname: "اكام الراجحي",
    name: "اكام الراجحي",
    desc: "تسعى اكام الراجحي لان تكون الشركة الرائدة في القطاع العقاري، وواحدة من اسرع الشركات نمواً في الشرق الاوسط. بدءاً من العاصمة الادارية الجديدة بالقاهرة، تقدم الشركة مجتمعات سكنية متطورة مع ضمان اعلى عائد استثماري للعملاء.",
    logo: images.developers.akamalrajhi,
    projects: icons.akamalrajhi
  },
  {
    slug: "arabella",
    shortname: "ارابيلا",
    name: "ارابيلا",
    desc: "رائدة في التطوير العقاري والمقاولات منذ 1993، تمتلك سجلاً حافلاً بالمشاريع السكنية والادارية والتجارية. تاسست على يد خبراء عقاريين بخبرة 35 عاماً لتحقيق عوائد استثمارية مجزية.",
    logo: images.developers.arabella,
    projects: icons.arabella
  },
  {
    slug: "emaar",
    shortname: "اعمار",
    name: "اعمار",
    desc: "تقدم اعمار فرصاً سكنية فاخرة مثل مشروع ميفيدا في القاهرة الجديدة، الذي يوفر شققاً بتصاميم عصرية ومرافق متكاملة.",
    logo: images.developers.emaar,
    projects: icons.mivida
  },
  {
    slug: "hassan-allam",
    shortname: "حسن علام",
    name: "حسن علام",
    desc: "منذ تاسيسها عام 1936، نجحت الشركة في تنفيذ مشاريع سكنية فاخرة ومنتجعات سياحية في مختلف انحاء مصر، مع التركيز على الجودة ورضا العملاء.",
    logo: images.developers.hap,
    projects: icons.hap
  },
  {
    slug: "horizon",
    shortname: "هورايزون",
    name: "هورايزون مصر",
    desc: "شركة ناشئة في السوق العقاري المصري، تقدم حلولاً سكنية مبتكرة مصممة وفق احدث المعايير العالمية وبالتعاون مع كبار المصممين.",
    logo: images.developers.horizon,
    projects: icons.horizon
  },
  {
    slug: "hyde-park",
    shortname: "هايد بارك",
    name: "هايد بارك",
    desc: "تاسست عام 2011 بهدف احداث ثورة في السوق العقاري المصري من خلال مشاريع مستدامة تراعي الجوانب البيئية والاجتماعية.",
    logo: images.developers.hydepark,
    projects: icons.hydepark
  },
  {
    slug: "il-cazar",
    shortname: "الكزار",
    name: "الكزار",
    desc: "تشتهر بمشاريعها الفاخرة مثل نورد العلمين الذي يوفر وحدات سكنية مطلة على البحيرات بمساحات خضراء شاسعة ومرافق ترفيهية متكاملة.",
    logo: images.developers.ilcazar,
    projects: icons.ilcazar
  },
  {
    slug: "lavista",
    shortname: "لافيستا",
    name: "لافيستا",
    desc: "منذ 1991، تخصصت في انشاء مجتمعات سكنية ومنتجعات فاخرة، مع دمج متكامل بين التصميم المعماري والمناظر الطبيعية في الساحل الشمالي والعين السخنة.",
    logo: images.developers.lavista,
    projects: icons.lavista
  },
  {
    slug: "lmd",
    shortname: "ال ام دي",
    name: "ال ام دي",
    desc: "تاسست عام 2007، وتشتهر بمشاريعها الفريدة في مصر ودبي واسبانيا واليونان، مع التركيز على الابتكار وجودة الحياة.",
    logo: images.developers.lmd,
    projects: icons.lmd
  },
  {
    slug: "madaar",
    shortname: "مدار",
    name: "مدار",
    desc: "شركة متكاملة الخدمات تاسست عام 2015، تخصصت في المشاريع السكنية والتجارية عالية الجودة، واصبحت من ابرز المطورين في مصر.",
    logo: images.developers.madaar,
    projects: icons.madaar
  },
  {
    slug: "marakez",
    shortname: "مراكز",
    name: "مراكز",
    desc: "تاسست عام 2015 كاكبر شركة لتطوير وادارة المشاريع المتكاملة في مصر، تحت مظلة مجموعة فواز الحكير السعودية.",
    logo: images.developers.marakez,
    projects: icons.marakez
  },
  {
    slug: "marasem",
    shortname: "المراسم",
    name: "المراسم",
    desc: "تتبع لمجموعة فواز الحكير، وتتميز بمشاريعها المتكاملة التي تجمع بين الوحدات السكنية والمرافق التجارية والترفيهية.",
    logo: images.developers.marasem,
    projects: icons.marasem
  },
  {
    slug: "the-marq",
    shortname: "ذا مارك",
    name: "ذا مارك",
    desc: "واحدة من اشهر الشركات العقارية في مصر، تختص بانشاء مجتمعات متكاملة في مواقع استراتيجية بالقرب من المحاور الرئيسية.",
    logo: images.developers.marq,
    projects: icons.marq
  },
  {
    slug: "misr-italia",
    shortname: "مصر ايطاليا",
    name: "مصر ايطاليا",
    desc: "شركة رائدة في التطوير العقاري بمصر، تقدم مشاريع سكنية وادارية فاخرة مثل لا نوفا فيستا وكاي السخنة، مع حلول عقارية مبتكرة.",
    logo: images.developers.mi,
    projects: icons.mi
  },
  {
    slug: "mnhd",
    shortname: "مدينة مصر",
    name: "مدينة مصر",
    desc: "خبرة تتجاوز 65 عاماً في انشاء مجتمعات متكاملة، مع تركيز على التصميم الحضري والتطوير العقاري الموجه للنمو.",
    logo: images.developers.mnhd,
    projects: icons.mnhd
  },
  {
    slug: "mountain-view",
    shortname: "ماونتن فيو",
    name: "ماونتن فيو",
    desc: "رائدة في السوق العقاري المصري منذ 2005، تختص بانشاء مجتمعات سكنية تركز على تجارب المعيشة الفريدة والسعادة في غرب القاهرة والسعودية.",
    logo: images.developers.mv,
    projects: icons.mv
  },
  {
    slug: "n",
    shortname: "ان (نواصي) سابقا",
    name: "ان (نواصي) سابقا",
    desc: "كيان جديد في القطاع العقاري يقدم مشاريع فريدة بمواقع استراتيجية وتصاميم معمارية مميزة، مع التركيز على التفاصيل الفاخرة.",
    logo: images.developers.n,
    projects: icons.n
  },
  {
    slug: "naia",
    shortname: "نايا",
    name: "نايا",
    desc: "تاسست عام 2016، تختص باستكشاف المناطق الحضرية الجديدة وتقديم حلول عقارية متكاملة تلبي احتياجات السوق المصري.",
    logo: images.developers.naia,
    projects: icons.naia
  },
  {
    slug: "nation-of-sky",
    shortname: "نيشنز اوف سكاي",
    name: "نيشنز اوف سكاي",
    desc: "تاسست عام 2024، تهدف الى قيادة قطاع التطوير العقاري من خلال تقديم حلول مبتكرة وشراكات استراتيجية مع كبار المطورين.",
    logo: images.developers.nationofsky,
    projects: icons.nationofsky
  },
  {
    slug: "g",
    shortname: "جي (نيو جيزة) سابقا",
    name: "جي (نيو جيزة) سابقا",
    desc: "تاسست عام 2006، تختص بانشاء مجتمعات سكنية فاخرة مثل مشروع نيوجيزا، مع التركيز على المواقع المتميزة والتصاميم العصرية.",
    logo: images.developers.g,
    projects: icons.g
  },
  {
    slug: "ora",
    shortname: "اورا",
    name: "اورا",
    desc: "رائدة في تصميم وتطوير الوجهات السكنية الفاخرة في مواقع مميزة، مع التركيز على التفاصيل الدقيقة والافكار الرائدة.",
    logo: images.developers.ora,
    projects: icons.ora
  },
  {
    slug: "palm-hills",
    shortname: "بالم هيلز",
    name: "بالم هيلز",
    desc: "منذ 1997، تختص بانشاء مجتمعات سكنية متكاملة فاخرة في غرب وشرق القاهرة والاسكندرية والساحل الشمالي.",
    logo: images.developers.palmhills,
    projects: icons.palmhills
  },
  {
    slug: "people-and-places",
    shortname: "بيبول اند بليسيز",
    name: "بيبول اند بليسيز",
    desc: "تاسست على يد خبراء عقاريين متمرسين، تختص بتصميم وتنفيذ المجتمعات السكنية المتكاملة والمخططات العمرانية المتميزة.",
    logo: images.developers.pap,
    projects: icons.pap
  },
  {
    slug: "pre",
    shortname: "بي ار اي",
    name: "بي ار اي",
    desc: "تاسست عام 2017 تحت مظلة مجموعة بانيورز القابضة، تهدف الى ان تكون من الشركات الرائدة في السوق العقاري المصري.",
    logo: images.developers.pre,
    projects: icons.pre
  },
  {
    slug: "qamzi",
    shortname: "القمزي",
    name: "القمزي",
    desc: "شراكة مصرية اماراتية تاسست عام 2010، تختص بالمشاريع العقارية الفاخرة التي تجمع بين التصميم العربي الاصيل والمعايير العالمية.",
    logo: images.developers.qamzi,
    projects: icons.qamzi
  },
  {
    slug: "roya",
    shortname: "رؤية",
    name: "رؤية",
    desc: "تاسست عام 1997، تختص بالمشاريع السياحية والسكنية الفاخرة مثل لافيستا بالعين السخنة، باستثمارات تتجاوز 3 مليارات دولار.",
    logo: images.developers.roya,
    projects: icons.roya
  },
  {
    slug: "sabbour",
    shortname: "الاهلي صبور",
    name: "الاهلي صبور",
    desc: "تتميز بمشاريعها السكنية المتكاملة في القاهرة الجديدة، مع التركيز على المواقع الاستراتيجية والمساحات الواسعة وجودة البناء.",
    logo: images.developers.sabbour,
    projects: icons.sabbour
  },
  {
    slug: "sed",
    shortname: "المصرية السعودية",
    name: "الشركة المصرية السعودية",
    desc: "شراكة مصرية سعودية تاسست عام 1975، تختص بالمشاريع السكنية والتجارية المتميزة مثل جايد القاهرة الجديدة وبليو فيرت العاصمة الادارية.",
    logo: images.developers.sed,
    projects: icons.sed
  },
  {
    slug: "sodic",
    shortname: "سوديك",
    name: "سوديك",
    desc: "من الشركات الرائدة في التطوير العقاري المصري منذ 20 عاماً، تختص بالمشاريع السكنية والتجارية التي تشجع على الابتكار وتحدي التقاليد.",
    logo: images.developers.sodic,
    projects: icons.sodic
  },
  {
    slug: "starlight",
    shortname: "ستارلايت",
    name: "ستارلايت",
    desc: "متخصصة في المشاريع الفاخرة مثل كاتاميا كريكس، مع اكثر من 30 عاماً من الخبرة في انشاء مساحات معيشة ملهمة ومجتمعات مزدهرة.",
    logo: images.developers.starlight,
    projects: icons.starlight
  },
  {
    slug: "tatweer-misr",
    shortname: "تطوير مصر",
    name: "تطوير مصر",
    desc: "تاسست عام 2014، تختص بالمشاريع السكنية المتكاملة التي تجمع بين العمارة الحديثة والخدمات المتكاملة، بدعم من مجموعات عرافة وداود والاهرام.",
    logo: images.developers.tatweer,
    projects: icons.tatweer
  },
  {
    slug: "tmg",
    shortname: "تي ام جي",
    name: "تي ام جي (طلعت مصطفى)",
    desc: "عملاق عقاري يختص بانشاء مجتمعات سكنية ومنتجعات فاخرة في مصر والخارج، مع التركيز على المرافق والخدمات عالية الجودة.",
    logo: images.developers.tmg,
    projects: icons.tmg
  },
  {
    slug: "waterway",
    shortname: "ووترواي",
    name: "ووترواي",
    desc: "تشتهر بمشروعها المتميز تريانجل ووترواي في القاهرة الجديدة، الذي يمزج بين الفخامة المعاصرة والمناظر الطبيعية الخلابة على مساحة 250 فداناً.",
    logo: images.developers.waterway,
    projects: icons.waterway
  }
];

export default function ProductPage(props: Props) {
  const { slug } = use(props.params);
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    redirect("/ar/developers");
  }
  const navLinks = [
  { label: "الرئيسية", href: "/ar" },
  { label: "عناً", href: "/ar/about" },
  { label: "المطورين", href: "/ar/developers", activate: true },
  { label: "تواصل", href: "/ar/contact" },
  { label: "English", href: `/developer/${slug}`, issee: "no" },
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

  return (
    <main
      className="w-screen overflow-x-hidden bg-white min-h-screen"
      dir={dirs}
      style={{ fontFamily: "ArLight" }}
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
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-xl flex flex-col md:flex-row gap-8 items-start mb-[10%] mt-[15vh] md:mt-[10%]">
        <div className="flex flex-row md:flex-col items-center gap-4 w-full lg:w-1/4 justify-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">
            <Image
              alt={product.name}
              src={product.logo.src}
              width={90}
              height={90}
            />
          </div>
          <button className="w-24 h-24 bg-zinc-400 text-white rounded-full flex items-center justify-center text-center">
            اسئل
            <br />
            الان
          </button>
        </div>

        <div className="flex-1 w-full space-y-4 md:max-w-9/12">
          <div className="text-3xl uppercase relative mb-4 w-fit text-zinc-900 font-bold transition-all ">
            <span
              className={`absolute w-10/12 -bottom-2 h-0.5 bg-[#333]`}
            ></span>
            <AnimatedText
              text={product.shortname}
              direction="left"
              lang="ar"
              once={false}
            />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {product.desc}
          </p>
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-300 font-semibold text-md capitalize">
              مشاريع {product.name} 
            </button>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={5}
            loop={true}
            speed={800}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1500: { slidesPerView: 4 },
            }}
            className="mt-6"
          >
            {product?.projects?.map((project) => (
              <SwiperSlide key={project.link}>
                <Link href={project.link}>
                  <div
                    className="h-[115px] w-[115px]"
                    style={{
                      backgroundImage: `url(${project.image.src})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
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
