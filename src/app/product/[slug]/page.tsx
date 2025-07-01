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
    { image: images.projects.mivida, link: "product/mivida" }
  ],
  hap: [
    { image: images.projects.haptown, link: "product/hap-town" },
    { image: images.projects.parkview, link: "product/park-view" },
    { image: images.projects.swanlake, link: "product/swan-lake" },
    { image: images.projects.swanlakeoct, link: "product/swan-lake-oct" },
  ],
  horizon: [
    { image: images.projects.saadanewcairo, link: "product/saada-new-cairo" },
    { image: images.projects.saadasahel, link: "product/saada-sahel" },
  ],
  hydepark: [
    { image: images.projects.gardenlakes, link: "product/garden-lakes" },
    { image: images.projects.hpnewcairo, link: "product/hyde-park-new-cairo" },
    { image: images.projects.seashore, link: "product/seashore" },
    { image: images.projects.tawny, link: "product/tawny" },
  ],
  ilcazar: [
    { image: images.projects.creektown, link: "product/creek-town" },
    { image: images.projects.crest, link: "product/crest" },
    { image: images.projects.glen, link: "product/glen" },
    { image: images.projects.goheliopolis, link: "product/go-heliopolis" },
    { image: images.projects.safia, link: "product/safia" },
  ],
  lavista: [
    { image: images.projects.city, link: "product/city" },
    { image: images.projects.ray, link: "product/ray" },
    { image: images.projects.vera, link: "product/vera" },
  ],
  lmd: [
    { image: images.projects.oneninety, link: "product/one-ninety" },
  ],
  madaar: [
    { image: images.projects.azhaein, link: "product/azha-ein" },
    { image: images.projects.azhanorth, link: "product/azha-north" },
    { image: images.projects.kenz, link: "product/kenz" },
  ],
  marakez: [
    { image: images.projects.aeon, link: "product/aeon" },
    { image: images.projects.cresentwalk, link: "product/cresent-walk" },
    { image: images.projects.district, link: "product/district" },
  ],
  marasem: [
    { image: images.projects.marbay, link: "product/mar-bay" },
    { image: images.projects.marville, link: "product/mar-ville" },
    { image: images.projects.moon, link: "product/moon" },
  ],
  marq: [
    { image: images.projects.garden, link: "product/garden" },
    { image: images.projects.marquete, link: "product/marquete" },
    { image: images.projects.waterlyn, link: "product/waterlyn" },
    { image: images.projects.watermarq, link: "product/the-water-marq" },
  ],
  mi: [
    { image: images.projects.cbp, link: "product/cbp" },
    { image: images.projects.ilbosco, link: "product/il-bosco" },
    { image: images.projects.kai, link: "product/kai" },
    { image: images.projects.lanouvavista, link: "product/lanouva-vista" },
    { image: images.projects.solare, link: "product/solare" },
    { image: images.projects.vinci, link: "product/vinci" },
  ],
  mnhd: [
    { image: images.projects.butterfly, link: "product/butterfly" },
    { image: images.projects.sarai, link: "product/sarai" },
    { image: images.projects.tajcity, link: "product/taj-city" },
  ],
  mv: [
    { image: images.projects.one, link: "product/mountain-view-1-1" },
    { image: images.projects.three, link: "product/mountain-view-3" },
    { image: images.projects.aliva, link: "product/aliva" },
    { image: images.projects.chillout, link: "product/chillout" },
    { image: images.projects.mvhydepark, link: "product/hyde-park" },
    { image: images.projects.icity, link: "product/i-city-oct" },
    { image: images.projects.icitynewcairo, link: "product/i-city-new-cairo" },
    { image: images.projects.jrian, link: "product/jrian" },
    { image: images.projects.lvls, link: "product/lvls" },
    { image: images.projects.m, link: "product/mountain-view" },
    { image: images.projects.raselhekma, link: "product/ras-elhekma" },
    { image: images.projects.sokhna, link: "product/sokhna" },
  ],
  n: [
    { image: images.projects.nest, link: "product/nest" }
  ],
  naia: [
    { image: images.projects.naiabay, link: "product/naia-bay" },
    { image: images.projects.naiawest, link: "product/naia-west" },
  ],
  nationofsky: [
    { image: images.projects.zomra, link: "product/zomra" }

  ],
  g: [
    { image: images.projects.districtone, link: "product/district-one" },
    { image: images.projects.thegrove, link: "product/the-grove" },
  ],
  ora: [
    { image: images.projects.silversands, link: "product/silversands" },
    { image: images.projects.zed, link: "product/zed" },
    { image: images.projects.zedeast, link: "product/zed-east" },
  ],
  palmhills: [
    { image: images.projects.alamien, link: "product/alamien" },
    { image: images.projects.badya, link: "product/badya" },
    { image: images.projects.capitalgardens, link: "product/capital-gardens" },
    { image: images.projects.cc, link: "product/crown-central" },
    { image: images.projects.hacienda, link: "product/hacienda" },
    { image: images.projects.newcairo, link: "product/new-cairo" },
    { image: images.projects.palparks, link: "product/palm-parks" },
  ],
  pap: [
    { image: images.projects.hoo, link: "product/hills-of-one" },
    { image: images.projects.med, link: "product/med" },
  ],
  pre: [
    { image: images.projects.brooks, link: "product/the-brooks" },
    { image: images.projects.ivoryeast, link: "product/ivory-east" },
    { image: images.projects.stone, link: "product/stone" },
  ],
  qamzi: [
    { image: images.projects.eastshire, link: "product/east-shire" },
    { image: images.projects.seazen, link: "product/seazen" },
  ],
  roya: [
    { image: images.projects.stonepark, link: "product/stone-park" },
    { image: images.projects.telal, link: "product/telal" },
    { image: images.projects.telaleast, link: "product/telal-east" },
  ],
  sabbour: [
    { image: images.projects.amwaj, link: "product/amwaj" },
    { image: images.projects.gaia, link: "product/gaia" },
    { image: images.projects.oddeysa, link: "product/oddeysa" },
    { image: images.projects.ridge, link: "product/ridge" },
    { image: images.projects.square, link: "product/the-square" },
  ],
  sed: [
    { image: images.projects.bluevert, link: "product/bluevert" },
    { image: images.projects.central, link: "product/central" },
    { image: images.projects.jayd, link: "product/jayd" },
    { image: images.projects.latiny, link: "product/latiny" },
  ],
  sodic: [
    { image: images.projects.eastown, link: "product/eastown" },
    { image: images.projects.ednc, link: "product/ednc" },
    { image: images.projects.estates, link: "product/the-estates" },
    { image: images.projects.june, link: "product/june" },
    { image: images.projects.ogami, link: "product/ogami" },
    { image: images.projects.onesixteen, link: "product/one-sixteen" },
    { image: images.projects.portal, link: "product/the-por-tal" },
    { image: images.projects.sixwest, link: "product/six-west" },
    { image: images.projects.skycodos, link: "product/sky-codos" },
    { image: images.projects.sodiceast, link: "product/sodic-east" },
    { image: images.projects.vye, link: "product/vye" },
  ],
  starlight: [
    { image: images.projects.creeks, link: "product/creeks" },
    { image: images.projects.crystal, link: "product/crystal" },
  ],
  tatweer: [
    { image: images.projects.bloomfields, link: "product/bloomfields" },
    { image: images.projects.dbay, link: "product/dbay" },
    { image: images.projects.foukabay, link: "product/fouka-bay" },
    { image: images.projects.ilmontegalala, link: "product/il-montegalala" },
    { image: images.projects.rivers, link: "product/rivers" },
    { image: images.projects.salt, link: "product/salt" },
  ],
  tmg: [
    { image: images.projects.alrehab, link: "product/alrehab" },
    { image: images.projects.madinaty, link: "product/madinaty" },
    { image: images.projects.noor, link: "product/noor" },
    { image: images.projects.southmed, link: "product/southmed" },
  ],
  waterway: [
    { image: images.projects.cw, link: "product/capital-way" },
    { image: images.projects.nc, link: "product/waterway-new-cairo" },
    { image: images.projects.triangle, link: "product/triangle" },
  ],

};
const products = [
  {
    slug: "akam-alrajhi",
    shortname: "Akam Elrajhi",
    name: "Akam Elrajhi developments",
    desc: "Akam Elrajhi seeks to be the leading company that contributes to the success of the real estate sector, and to be one of the fastest growing real estate developers in the Middle East. Starting from Cairo’s New Capital, Akam Elrajhi always excels in all its projects aiming to become the leader of innovation in real estate development. Akam Elrajhi offers the highest return of investment to its customers, investors, and clients, providing a unique state-of-the-art residential community. Akam addresses the priorities of its customers, partners and employees through long-term professional relationships based on strong values and gratitude.In collaboration with the largest real estate developers in the Middle East, Akam Elrajhi is proud to have a reliable track record and a strong history in real estate development, offering exceptional quality and a unique experience to its customers in every project. Akam Elrajhi consists of four entities; the two Egyptian entities are Benayat for real estate investment and Residence Development for real estate and tourism investment. The third entity is Al Muhaid Group, a Saudi Arabian company, and the fourth entity is Faisal Bank.",
    logo: images.developers.akamalrajhi,
    projects: icons.akamalrajhi,
  },
  {
    slug: "arabella",
    shortname: "arabella",
    name: "arabella developments",
    desc: "The company is a pioneer within the field of real estate development and contracting since 1993 and has numerous executed projects as well as projects beneath construction, whether residential or administrative projects or commercial malls, as well as medical centers and inn officesThecompany oversees and markets all these projects and has rapidly set up itself among Egypt’s top property companies. This success stems from its establishing by experienced real estate specialists with 35 years of experience. Possessing in-depth knowledge of investment standards and opportunities, they aim to provide profitable investment returns and improved living for residents.",
    logo: images.developers.arabella,
    projects: icons.arabella,
  },
  {
    slug: "emaar",
    shortname: "emaar",
    name: "emaar developments",
    desc: "Find charm and comfort at Mivida | Apartment, a lovely Apartment in New Cairo with 3 bedrooms and 3 bathrooms, available for rent at 100,000 EGP, offering an excellent opportunity for those seeking a blend of luxury and comfort of a real estate property in Egypt available for rent. ",
    logo: images.developers.emaar,
    projects: icons.mivida,
  },
  {
    slug: "hassan-allam",
    shortname: "Hassan Allam",
    name: "Hassan Allam Properties",
    desc: "Since the foundation of Hassan Allam Properties in 1936, the company successfully launched major projects across various sectors. Including commercial and investment projects, also, luxury residential compounds in different areas of Egypt. Besides the coastal villages, and resorts. In addition to the sports, and service areas. In order to ensure that clients are going to meet all customer needs. As well as client comfort remains the top priority throughout all project phases, characterized by high quality and the establishment of long-term, trustworthy relationships. ",
    logo: images.developers.hap,
    projects: icons.hap,
  },
  {
    slug: "horizon",
    shortname: "Horizon Egypt",
    name: "Horizon Egypt Developments",
    desc: "The Horizon Egypt Developments Company is a new player in the Egyptian real estate market. It was established by a team of highly skilled professionals with extensive experience. The company prides itself on its ability to offer innovative and contemporary residential communities that cater to the distinct lifestyle preferences of its customers. With a strong focus on excellence, the company continually collaborates with top-tier engineers, designers, and architects to deliver on the dreams and expectations of its valued clientele.",
    logo: images.developers.horizon,
    projects: icons.horizon,
  },
  {
    slug: "hyde-park",
    shortname: "Hyde Park",
    name: "Hyde Park Developments",
    desc: "Hyde Park Developments for Development (HPD) S.A.E. was established in 2011 with a mission to become Egypt’s most valued developer by revolutionizing the real estate market and establishing an environmentally and socially-conscious culture. Working in full forceHyde Park’s dedicated vision and exhaustive strategies have paid off, as the company continues to affirm its positioning and flaunt its success stories.  Hyde Park  is jointly owned by an esteemed consortium of Egyptian investment and development companies and institutions, all of which are well-established and highly credible in the local market.",
    logo: images.developers.hydepark,
    projects: icons.hydepark,
  },
  {
    slug: "il-cazar",
    shortname: "IL cazar",
    name: "IL cazar Developments",
    desc: "IL cazar Developments presents its latest projects Nord New Alamein, Book your unit now with a distinctive view of all units on the lagoon and landscape, strategically located In Front Of Latin Settlement with land area ​​80 acres, charming view of 650 meters directly on the main lake, own your unit among a variety of villas and chalets fully finished, Nord Village is characterized by providing many services and entertainment facilities to provide its customers with a feeling of comfort and luxury .",
    logo: images.developers.ilcazar,
    projects: icons.ilcazar,
  },
  {
    slug: "lavista",
    shortname: "La Vista",
    name: "La Vista Developments",
    desc: "Established in 1991, La Vista Developments prides itself on having created a new standard in resort and residential living through its outstanding record of accomplishments. With an in-house design office that includes an expert team of architects and landscape designers, La Vista Developments’ holistic approach to building new communities encompasses all the processes from vision to design, construction, finishing and maintenance. The harmonious marriage of architecture and landscape in all of our resort and residential communities is a result of very specific and detailed study and design. Our client-base believes in our expertise in developing communities, and in the strong investments made with a property purchase from La Vista Developments.They have successfully delivered on schedule several LA VISTA resorts in Ain Sokhna, and the North Coast, with more projects currently being developed. You can be assured that we are constantly working on bringing new ideas to life in developing communities that surpass the expectations we have previously set. We work hard to provide exclusive communities of like-minded residents.They are well-known in the real estate market for our strong commitment to providing our clients with the highest quality standard of living unmatched anywhere else. And we have consistently met that promise.<br>We are a real estate investment and development company that believes in enhancing the lives of our clients. We are highly invested in developing exceptional communities in which our clients can live, thrive, and feel a sense of belonging among an exclusive community of like-minded neighbors. We provide the highest standards in architectural design, construction, landscape design, finishing, and maintenance all while retaining a conscientious approach to the surrounding environment and the surrounding local communities.",
    logo: images.developers.lavista,
    projects: icons.lavista,
  },
  {
    slug: "lmd",
    shortname: "LMD",
    name: "LMD Developments",
    desc: "Since its inception in 2007, LMD has been on a dedicated mission to craft transformative experiences through thriving communities and integrated destinations that put you and innovation at heart. The company boasts a successful selection of projects, spanning first and second homes, as well as iconic mixed-use developments with a strong foothold in Dubai, Spain and Greece.In Egypt, the journey began with two distinctive projects in New Cairo. With an eye on excellence, a passion for impeccable taste and a commitment to exceed every expectation, LMD is renowned today for its strategic locations, generous spaces and the highest standards of quality. The company strives to transform living spaces by crafting larger than life places where quality seamlessly merges with comfort and integrated excellence, dictating the LMD experience.",
    logo: images.developers.lmd,
    projects: icons.lmd,
  },
  {
    slug: "madaar",
    shortname: "Madaar",
    name: "Madaar Developments",
    desc: "Development is a full-service, privately held commercial and residential real estate investment and development company with a distinguished ability to rapidly move projects from site selection, acquisition, financing, construction, property management and maintenance.Founded in March 2015 with forward-thinking strategic planning and professional marketing capabilities, Madaar has successfully created a high profile quality of life in Egypt’s real estate industry, becoming one of the leading real estate development companies in Egypt in no time, providing the finest residential and commercial properties.",
    logo: images.developers.madaar,
    projects: icons.madaar,
  },
  {
    slug: "marakez",
    shortname: "MARAKEZ",
    name: "MARAKEZ Developments",
    desc: "In September 2015, Fawaz Al Hokair group assembled a new team of experienced as well as young and innovative Egyptian professionals to alter the market through establishing the largest mixed-use development and Management Company in Egypt under the name of MARAKEZ.Fawaz Alhokair Group broke into the Egyptian market in December 2010 with the launch of Mall of Arabia. With the success that followed the launch, Fawaz Alhokair Group saw merit in the Egyptian market which led to extensive investment in the retail development and fashion retail sector.",
    logo: images.developers.marakez,
    projects: icons.marakez,
  },
  {
    slug: "marasem",
    shortname: "marasem",
    name: "MARAKEZ Developments",
    desc: "In September 2015, Fawaz Al Hokair group assembled a new team of experienced as well as young and innovative Egyptian professionals to alter the market through establishing the largest mixed-use development and Management Company in Egypt under the name of MARAKEZ.Fawaz Alhokair Group broke into the Egyptian market in December 2010 with the launch of Mall of Arabia. With the success that followed the launch, Fawaz Alhokair Group saw merit in the Egyptian market which led to extensive investment in the retail development and fashion retail sector.",
    logo: images.developers.marasem,
    projects: icons.marasem,
  },
  {
    slug: "the-marq",
    shortname: "the marq",
    name: "THE MarQ Developments",
    desc: "One of the most well-known real estate organizations in the Egyptian marketplace is MarQ Communities. The company's well-known name speaks volumes about its past achievements and high sales rates. Through these achievements, it has also gained a sizable portion of consumers with high weight rates. By creating unique integrated communities that cater to the interests of its clients, MarQ Communities hopes to become Egypt's top lifestyle supplier. Another art-driven real estate developer, MarQ Communities is renowned for building unique and cutting-edge communities in the most advantageous areas of the Arab Republic of Egypt.One of the biggest real estate companies in the Egyptian market, MarQ Communities Real Estate Investment Company, gained a prominent position and a brilliant reputation by competing with other significant businesses in the industry. The business chooses the most advantageous sites that are near major thoroughfares and other significant locations, as well as the primary direct axes that make it simple to reach every client without traveling great distances. The following are The MarQ Communities Real Estate Company's most significant projects.",
    logo: images.developers.marq,
    projects: icons.marq,
  },
  {
    slug: "misr-italia",
    shortname: "Misr Italia",
    name: "Misr Italia Properties",
    desc: "Misr Italia Properties is a leading real estate developer in Egypt expanding with a range of top-notch projects throughout the country. We aim to change the concept of the ever-growing real estate market by listening to our customers who inspire us to stay ahead with innovative real estate solutions & designs. Built on a philosophy of creativity and innovation, we offer our clients trend-setting projects with unique concepts and designs that are unmatched in the market. Misr Italia Properties is the developer of residential projects such as La Nuova Vista villas and townhouses in New Cairo, administrative compounds such as Cairo Business Park which is set to become New Cairo’s business hub and second homes projects such as Kai Sokhna, Kai Sahel and the newest addition to our portfolio to will soon be, IL BOSCO new Capital.",
    logo: images.developers.mi,
    projects: icons.mi,
  },
  {
    slug: "mnhd",
    shortname: "mnhd ",
    name: "MNHD Developments",
    desc: "For over 65 years, our vision has been to build for the future and create thriving communities that grow and evolve. As a pioneering force in the real estate sector, we have established ourselves as experts in designing and planning growth-oriented cities.",
    logo: images.developers.mnhd,
    projects: icons.mnhd,
  },
  {
    slug: "mountain-view",
    shortname: "mountain view ",
    name: "Mountain View Developments",
    desc: "Since its inception in 2005, Mountain View Developments has emerged as a pioneer in the Egyptian real estate market, recognized for creating high-quality living spaces that resonate with a deep sense of belonging. As Egypt’s first and only experience focused real estate developer, Mountain View is dedicated to crafting communities where happiness and a sense of home are paramount. With a diverse portfolio of 20 residential projects and ongoing developments in West Cairo and now in Saudi Arabia, Mountain View continues to lead the way in innovation. Their unwavering commitment to quality and novelty has cemented their reputation as a trusted industry leader. At Mountain View, the mission is clear: to create vibrant spaces where people can live, work, and experience happiness.",
    logo: images.developers.mv,
    projects: icons.mv,
  },
  {
    slug: "n",
    shortname: "N ",
    name: "N Developments",
    desc: "N Developments…Is not just a word with an excellent phonetic sense, it is an urban name that reflect the primeness in every detail you can experience from a developer’s entity, it refers to premium locations and unique architecture designs, as well as having a highly important and distinctive connotation in Arabic dictionary. Simply, it reflects the grandests details!, Establishing a new entity in the real estate industry is not an easy thing, because we want to stand out and be distinctive. This is possible as we continually strive and make ongoing efforts to improve ourselves and leave a better world for future generations. The secret significance of “Nawassy” is primarily reflected in our projects, which boasts superior locations, designs, facilities, and amenities. Nawassy introduces a compelling vision of integrated excellence. Our elemental edge lies in an expert team of multifaceted experts who oversee the entire development cycle from concept to spectacular completion, transforming sites into dream-like realities where quality is unrivaled. Our objective is to launch a variety of real estate ventures in various cities that satisfy clients’ demand and offer cutting-edge, sustainable solutions.",
    logo: images.developers.n,
    projects: icons.n,
  },
  {
    slug: "naia",
    shortname: "NAIA ",
    name: "NAIA Developments",
    desc: "NAIA Developments is a Real Estate Developer established in 2016 with a clear focus on providing clarity to its clients through where it runs its projects through a group of subsidiaries, providing a wide range of inclusive services with superior integration and growth in everything it does.Since its creation in 2016, NAIA Developments has delivered an exceptional concept to the real estate industry via exploring new urban areas that promise new opportunities to the Egyptian economy. Our wealth of technicalndustrial communities; thus attaining more pleasing outcome for the rising demand especially for mixed-use projects.",
    logo: images.developers.naia,
    projects: icons.naia,
  },
  {
    slug: "nation-of-sky",
    shortname: "nation of sky ",
    name: "Nation Of Sky Developments",
    desc: "was established in 2024, aiming to lead the real estate development sector by offering innovative solutions that meet the needs of the Egyptian market and enhance quality of life. Backed by a highly skilled team and global expertise, the company builds strategic partnerships with top developers to create integrated, sustainable communities. With a diverse portfolio of strategically located lands across Egypt, Nations of Sky acts as both a master developer for large-scale projects and a direct developer for its own ventures, delivering groundbreaking developments that address present and future market needs.",
    logo: images.developers.nationofsky,
    projects: icons.nationofsky,
  },
  {
    slug: "g",
    shortname: "G Developments ",
    name: "G Developments",
    desc: "G Developments, for merly known as New Giza Development, was founded in 2006, and since then, it has been providing the Egyptian real estate market with high-quality gated communities that reinvent luxury living. The company has completed numerous high-profile projects in the country and abroad, and it is considered one of the largest and most professional real estate firms in the region. Well-known for building the New Giza Compound in the 6th of October City, the company has a successful track record in seizing the best investment opportunities through the sound judgment and sensible decision-making of its board members. It chooses the locations of its luxurious real estate projects thoroughly, utilizing their total land areas flawlessly, and delivering state-of-the-art communities that offer its clients an elevated living experience.",
    logo: images.developers.g,
    projects: icons.g,
  },
  {
    slug: "ora",
    shortname: "ora ",
    name: "ORA Developments",
    desc: "Ora is a leading name in the field of designing and developing luxury lifestyle destinations in unique locations. The company brings world-class expertise, exceptional attention to detail and visionary ideas to every landmark project it works on.",
    logo: images.developers.ora,
    projects: icons.ora,
  },
  {
    slug: "palm-hills",
    shortname: "palm hills ",
    name: "Palm Hills Developments",
    desc: "Following a vision to create self-sufficient and well-integrated communities in Egypt, Palm Hills Developments became an ever-growing leader in integrated residential, commercial and resorts projects since 1997. Today, we possess one of the largest and most diversified land banks spreading 33 million sqm, and an impressive roster of 38 projects in West Cairo, East Cairo, Alexandria and North Coast.",
    logo: images.developers.palmhills,
    projects: icons.palmhills,
  },
  {
    slug: "people-and-places",
    shortname: "people & places ",
    name: "people & places Developments",
    desc: "People Places is founded by Khaled El Assal, Mohamed Khaled El Assal, Karim Khaled El Assal, and Nabil Amasha. The founders have been leaders of the real estate industry, have designed, developed, and delivered superb mixed use masterplans and communities in Egypt.",
    logo: images.developers.pap,
    projects: icons.pap,
  },
  {
    slug: "pre",
    shortname: "pre ",
    name: "pre Developments",
    desc: "PRE was established in 2017 by Pioneers Holding Group with a plan to be one of the market leaders in the Egyptian Real Estate field, Our Sister Companies: Cairo Housing – Giza General Contracting – Rooaya Group – Electro Cable Egypt – United Housing – El Saeed Contracting – Giza Power – Arab Dairy – Universal Unipack.",
    logo: images.developers.pre,
    projects: icons.pre,
  },
  {
    slug: "qamzi",
    shortname: "Al Qamzi ",
    name: "Al Qamzi Developments",
    desc: "Al Qamzi Developments is the result of a constructive Egyptian-Emirati partnership that always meets the requirements of its clients and seriously exceeds their expectations. Thanks to the acquainted experience of its Emirati partner in the field of transportation, contracting and infrastructure, and the proven competence of its Egyptian partner in the field of contracting, Al Qamzi Developments was established in 2010 to integrate the experiences of its two partners and enrich its activities in all areas of real estate development and development, to preside over its exceptional projects in a short period of time, major construction and development institutions Real estate in the Arab Republic of Egypt.In a market that always promises everything that is distinctive and new, Al Qamzi Developments is unique in its creative designs that combine the fragrance of our authentic Arab history and the highest arts of international architecture, with its high-end buildings characterized by luxurious engineering styles.",
    logo: images.developers.qamzi,
    projects: icons.qamzi,
  },
  {
    slug: "roya",
    shortname: "roya ",
    name: "Roya Developments",
    desc: "Roya Group was founded by Engineer Hisham Shoukry in 1997 – a real mastermind in the real-estate industry who started his success story 20 years ago by developing a branch called “TIBA Real Estate Development Company”. Today Roya group is one of Egypt’s fastest growing holding companies in the fields of Tourism Real Estate Development, Investment Contracting as well as consultancy with investments that exceed US$ 3 billion, a working capital worth over EGP 2 billion a land bank of over 9 million m2.Roya Group owns 13 companies including TIBA Company, Okoplan and Roya for development of Real Estate and Tourism. Roya boasts unique developments resorts such as the astonishing La Vista 1 2 in El Sokhna El Patio 1 2 in New Cairo. With clients, investors, partners and employees, Roya Developments promises to deliver to its residents a unique way of life. Roya Group has mastered the art of providing uniqueness, elegance and innovation in its projects ranging from Telal North Coast and Telal Soul to Telal El Sokhna, Stone Park and Stone Hills.",
    logo: images.developers.roya,
    projects: icons.roya,
  },
  {
    slug: "sabbour",
    shortname: "sabbour ",
    name: "Sabbour Developments",
    desc: "In Egypt, the journey began with two distinctive projects in New Cairo. With an eye on excellence, a passion for impeccable taste and a commitment to exceed every expectation, LMD is renowned today for its strategic locations, generous spaces and the highest standards of quality. The company strives to transform living spaces by crafting larger than life places where quality seamlessly merges with comfort and integrated excellence, dictating the experience.Since its inception , has been on a dedicated mission to craft transformative experiences through thriving communities and integrated destinations that put you and innovation at heart. The company boasts a successful selection of projects, spanning first and second homes, as well as iconic mixed-use developments with a strong foothold in Dubai, Spain and Greece.",
    logo: images.developers.sabbour,
    projects: icons.sabbour,
  },
  {
    slug: "sed",
    shortname: "sed ",
    name: "SAD Developments",
    desc: "The group’s current portfolio carries a variety of over 50 land- mark projects within Egypt presenting a mix of luxurious residential towers as well as mixed-use communities such as Jayd New Cairo, Bleu Vert New Capital and Nile Towers Maadi. SED’s future investments and developments carry the establishment of 7 new projects across Egypt.Founded in 1975, SED is a joint partnership between the Saudi and Egyptian govern- ments that focuses on developing and in- troducing the Egyptian market with break- through destinations that add value through innovative solutions and strategies.With a track record and objective to create communities that shape future landmarks, the company has delivered around 24,000 housing units currently inhabited by more than 114,000 individuals.",
    logo: images.developers.sed,
    projects: icons.sed,
  },
  {
    slug: "sodic",
    shortname: "sodic ",
    name: "Sodic Developments",
    desc: "SODIC is one of the leading real estate development companies in Egypt, creating communities where people can realize their full potential and live productive lives transforming the way people live and work through encouraging innovation and challenging convention. Building on a history of almost two decades of successful operations in Egypt, SODIC is one of the country's leading real estate development companies.Headquartered in Cairo and listed on the Egyptian stock exchange, SODIC brings to the market award-winning large scale developments, meeting Egypt’s ever growing need for high quality housing, commercial and retail spaces. We pride ourselves on our passion for excellence and commitment to fostering long-term relationships with our clients, shareholders, business partners and employees, which has helped to grow to the corporation SODIC is today.",
    logo: images.developers.sodic,
    projects: icons.sodic,
  },
  {
    slug: "starlight",
    shortname: "Starlight ",
    name: "Starlight Developments",
    desc: "Starlight developments is a design driven developer, with over 3 decades of experience standing as a true pioneer of luxury real estate in egypt with a heartfelt vocation to create design-driven living spaces that inspire communities to flourish with real value. Founded on the principles of cultivating respect and passion for human relationships, for culture, for our heritage and for sophistication, bringing you 4 developments, katameya creeks, urbnk, &amp; katameya coast: see the sea, crystal edition.Over the years the katameya brand has become an icon in egyptian real estate, serving as a highly esteemed role model for many developers in the nation. Building on the katameya brand heritage — a real estate icon in egypt — we primarily focus on maintaining this position by expanding in prime destinations of egypt with upscale residential, mixed-use and resort projects that stand out amongst luxury-seekers. The brand is distinguished for its achievements in introducing unmatched standards of living.",
    logo: images.developers.starlight,
    projects: icons.starlight,
  },
  {
    slug: "tatweer-misr",
    shortname: "Tatweer Misr ",
    name: "Tatweer Misr Developments",
    desc: "Established in 2014, Tatweer Misr is an Egyptian shareholding real estate company, that capitalizes on a wealth of industrial and real estate experience brought to the table by its shareholders. Major shareholders such as Arafa, Daoud and Ahram Groups provide the business and technical expertise needed to fulfill the vision of mixed use residential developments based on elegant and luxurious modern architecture and landscaping.The combined expertise of Tatweer Misr's management team allows the company to maintain excellence at all levels of their developments. From construction, design and architecture, to landscaping, lifestyle services and amenities, Tatweer Misr covers all the facets of the real estate industry offering a fresh outlook on their projects.",
    logo: images.developers.tatweer,
    projects: icons.tatweer,
  },
  {
    slug: "tatweer-misr",
    shortname: "Tatweer Misr ",
    name: "Tatweer Misr Developments",
    desc: "Established in 2014, Tatweer Misr is an Egyptian shareholding real estate company, that capitalizes on a wealth of industrial and real estate experience brought to the table by its shareholders. Major shareholders such as Arafa, Daoud and Ahram Groups provide the business and technical expertise needed to fulfill the vision of mixed use residential developments based on elegant and luxurious modern architecture and landscaping.The combined expertise of Tatweer Misr's management team allows the company to maintain excellence at all levels of their developments. From construction, design and architecture, to landscaping, lifestyle services and amenities, Tatweer Misr covers all the facets of the real estate industry offering a fresh outlook on their projects.",
    logo: images.developers.tatweer,
    projects: icons.tatweer,
  },
  {
    slug: "tmg",
    shortname: "TMG ",
    name: "TMG Developments",
    desc: "A leading conglomerate with a special emphasis on real estate development, and an outstanding track record of creating large, vibrant, diverse communities and hospitality developments, providing high-quality experiences accompanied by superb amenities, TMG stands today as an industry giant that presents world-class developments across all real estate asset classes.TMG is committed to create a distinctive lifestyle for modern communities and tourism destinations in Egypt and overseas, providing employees with opportunities to contribute to the development and success of our communities.",
    logo: images.developers.tmg,
    projects: icons.tmg,
  },
  {
    slug: "waterway",
    shortname: "waterway ",
    name: "Waterway Developments",
    desc: "Waterway Developments, a well-known developer, created the upscale, distinguished Triangle Waterway project. This project is a perfect example of contemporary living, emphasizing ease, comfort, and style. The Triangle Waterway New Cairo, which occupies an astounding 250 acres, blends luxurious living with beautiful surroundings.",
    logo: images.developers.waterway,
    projects: icons.waterway,
  },
];
export default function ProductPage(props: Props) {
  const { slug } = use(props.params);
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    redirect("/developers");
  }
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "DEVELOPERS", href: "/developers", activate: true },
    { label: "CONTACT US", href: "/contact" },
    { label: "عربي", href: `/ar/developer/${slug}`, issee: "false" },
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

  return (
    <main
      className="w-screen overflow-x-hidden bg-white min-h-screen"
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
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-xl flex flex-col md:flex-row gap-8 items-start mb-[10%] mt-[15vh] md:mt-[10%]">
        {/* الجانب الأيسر */}
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
            Ask
            <br />
            Now
          </button>
        </div>

        {/* الجانب الأيمن */}
        <div className="flex-1 w-full space-y-4 md:max-w-9/12">
          <div className="text-3xl uppercase relative mb-4 w-fit text-zinc-900 font-bold transition-all ">
            <span
              className={`absolute w-10/12 -bottom-2 h-0.5 bg-[#333]`}
            ></span>
            <AnimatedText
              text={product.shortname}
              direction="right"
              lang="en"
              once={false}
            />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {product.desc}
          </p>
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-300 font-semibold text-md capitalize">
              {product.name} Projects
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
