import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";

type Menu = {
  label: string;
  href: string;
  activate?: any;
  issee?: string;
};
type Links = {
  title: string;
  icon: any;
  href: string;
};
type FooterFormProps = {
  dir: "ltr" | "rtl";
  logo: string;
  links: Links[];
  titlemenu: string;
  linkmenu: Menu[];
  addresstitle: string;
  addressline1: string;
  addressline2: string;
  addressline3: string;
  contacttitle: string;
  email: string;
  phone: string;
};
export default function Footer({
  dir,
  logo,
  links,
  titlemenu,
  linkmenu,
  addresstitle,
  addressline1,
  addressline2,
  addressline3,
  contacttitle,
  email,
  phone,
}: FooterFormProps) {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 text-sm" dir={dir}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 self-center">
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold mb-4 ">
            <div className="w-fit px-2 py-1">
              <Image src={logo} alt="capital gate" width={215} height={21} />
            </div>
          </div>
          <div className="flex gap-4 ">
            {links.map((link) => (
              <div key={link.href}>
                <a href={link.href} className="hover:text-zinc-500 text-white">
                  {link.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <h4 className="font-bold mb-2 border-b border-white w-fit">
            {titlemenu}
          </h4>
          <ul className="space-y-1 mt-2">
            {linkmenu
              .filter((link) => !link.issee)
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-500">
                    - {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex flex-col justify-start">
          <h4 className="font-bold mb-2 border-b border-white w-fit">
            {addresstitle}
          </h4>
          <p className="mt-2">
            {addressline1}, <br />
            {addressline2}, <br />
            {addressline3}.
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <h4 className="font-bold mb-2 border-b border-white w-fit">
            {contacttitle}
          </h4>
          <p className="mt-2">
            <span className="font-bold">- T:</span> {phone} <br />
            <span className="font-bold">- E:</span> {email}
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-zinc-800 pt-4">
        © 2025 CAPTALE GATE EGYPT. <br />
        DESIGNED BY
        <span className="text-sky-500 font-semibold cursor-pointer">WAM</span>
      </div>
    </footer>
  );
}
