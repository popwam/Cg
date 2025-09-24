import { metadata } from "./metadata";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export { metadata };
export default function Privacy() {
  const navLinks = [
    { label: "الرئيسية", href: "/ar" },
    { label: "عناً", href: "/ar/about" },
    { label: "المطورين", href: "/ar/developers" },
    { label: "المشاريع", href: "/ar/projects" },
    {label: "العروض", href: "/ar/offers" },
    { label: "تواصل ", href: "/ar/contact" },
    { label: "English", href: `/privacy/`, issee: "no" },
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

  const dirs = "rtl";
  return (
    <main
      className="bg-white w-screen overflow-x-hidden items-center justify-center flex flex-col relative"
      dir={dirs}
      style={{ fontFamily: "ArLight" }}
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

      <div className="max-w-4xl px-4 py-10 text-start text-gray-800 leading-loose space-y-6 my-[14vh]">
        <h1 className="text-3xl font-bold mb-6">
          سياسة وشروط استخدام موقع كابيتال جيت للاستثمار العقاري
        </h1>
        <p className="text-sm text-gray-500">آخر تحديث: يوليو 2025</p>

        <p>
          مرحبًا بك في موقع كابيتال جيت للاستثمار العقاري
          (www.capitalgateegy.com). باستخدامك لهذا الموقع، فإنك توافق على الشروط
          والأحكام التالية. إذا لم تكن موافقًا على أي من هذه الشروط، نرجو منك
          عدم استخدام الموقع.
        </p>

        <h2 className="text-xl font-semibold">1. استخدام الموقع</h2>
        <ul className="list-disc pr-6 space-y-1">
          <li>
            يُسمح باستخدام الموقع لأغراض شخصية أو للاستفادة من خدماتنا العقارية
            فقط.
          </li>
          <li>
            يمنع استخدام الموقع لأي أغراض غير قانونية أو تجارية أو لنسخ أو توزيع
            أي محتوى دون إذن كتابي.
          </li>
          <li>
            يجب تقديم معلومات صحيحة ودقيقة عند استخدام أي نماذج تواصل أو طلب
            خدمات.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">2. الملكية الفكرية</h2>
        <p>
          جميع الحقوق محفوظة لموقع كابيتال جيت للاستثمار العقاري. كافة النصوص،
          الصور، التصميمات، والشعارات هي ملك للشركة ولا يجوز استخدامها أو إعادة
          نشرها بدون إذن.
        </p>

        <h2 className="text-xl font-semibold">3. المحتوى العقاري</h2>
        <p>
          المعلومات الخاصة بالعقارات (الأسعار، التوفر، التفاصيل) يتم تحديثها
          بانتظام، ولكن قد تحدث تغييرات دون إشعار. لسنا مسؤولين عن أي أخطاء غير
          مقصودة في البيانات.
        </p>

        <h2 className="text-xl font-semibold">4. الروابط الخارجية</h2>
        <p>
          قد يحتوي الموقع على روابط لمواقع خارجية، ولسنا مسؤولين عن محتواها أو
          سياسات الخصوصية الخاصة بها.
        </p>

        <h2 className="text-xl font-semibold">5. حدود المسؤولية</h2>
        <p>
          استخدامك للموقع يكون على مسؤوليتك الخاصة. لا تتحمل الشركة أي مسؤولية
          عن خسائر ناتجة عن استخدام أو عدم قدرة استخدام الموقع أو الخدمات
          المعروضة.
        </p>

        <h2 className="text-xl font-semibold">6. التعديلات</h2>
        <p>
          يحق لشركة كابيتال جيت تعديل هذه الشروط في أي وقت. استمرارك في استخدام
          الموقع بعد التعديلات يعتبر موافقة ضمنية على السياسات الجديدة.
        </p>

        <h2 className="text-xl font-semibold">7. التواصل</h2>
        <p>📧 info@capitalgateegy.com</p>
        <p>📞 01144566600</p>
        <p>📍 108 البنفسج عمارات، القاهرة الجديدة</p>
      </div>

      <div className="">
        <Footer
          dir={dirs}
          logo={
            "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif"
          }
          links={socialLinks}
          titlemenu="القائمة الرئيسية"
          linkmenu={navLinks}
          addresstitle="عنوان"
          addressline1="شارع 90 الشمالي"
          addressline2="القاهرة الجديدة"
          addressline3="مصر"
          contacttitle="تواصل معنا"
          phone="+20 1144566600"
          email="info@capitalgateegy.com"
        />
      </div>
    </main>
  );
}
