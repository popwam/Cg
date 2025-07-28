import { metadata } from "./metadata";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
export { metadata };

export default function Privacy() {
  const navLinks = [
    { label: "الرئيسية", href: "/ar" },
    { label: "عناً", href: "/ar/about" },
    { label: "المطورين", href: "/ar/developers" },
    { label: "المشاريع", href: "/ar/projects" },
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
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "كابيتال جيت للعقارات",
              url: "https://capitalgateegy.com/ar", // رابط النسخة العربية
              logo: "https://res.cloudinary.com/dfltsy2ov/image/upload/v1753623051/logo/sxdinb9u5qqkth3ewals.avif",
              sameAs: [
                "https://www.facebook.com/CapitalGateEstate",
                "https://www.instagram.com/capitalgaterealestate/",
                "https://www.linkedin.com/in/capital-gate-a076b6376/",
              ],
              description:
                "اكتشف أفضل المشاريع العقارية مع كابيتال جيت. الوكالة الموثوقة للقاهرة الجديدة، العاصمة الإدارية، الشيخ زايد، وأكثر.",
              inLanguage: "ar",
            }),
          }}
        />
      </Head>

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
            سياسة الخصوصية – شركة كابيتال جيت للاستثمار العقاري
          </h1>
          <p className="text-sm text-gray-500">آخر تحديث: يوليو 2025</p>

          <p>
            في كابيتال جيت العقارية، خصوصيتك أولوية قصوى. تشرح هذه السياسة كيفية
            جمعنا واستخدامنا وحمايتنا لمعلوماتك عند تفاعلك مع موقعنا الإلكتروني
            أو تواصلك معنا.
          </p>

          <h2 className="text-xl font-semibold">
            1. المعلومات التي نقوم بجمعها
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>الاسم الكامل</li>
            <li>رقم الهاتف</li>
            <li>البريد الإلكتروني</li>
            <li>تفضيلات العقارات</li>
            <li>الموقع الجغرافي (إذا سمحت بذلك)</li>
            <li>بيانات التصفح (عبر الكوكيز)</li>
          </ul>

          <h2 className="text-xl font-semibold">2. كيف نستخدم معلوماتك</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>للتواصل معك بشأن العقارات أو الاستفسارات</li>
            <li>تقديم عروض مخصصة للعقارات</li>
            <li>إرسال عروض أو تحديثات حصرية (بموافقتك)</li>
            <li>تحسين تجربتك على موقعنا</li>
          </ul>

          <h2 className="text-xl font-semibold">3. حماية البيانات</h2>
          <p>
            نستخدم تدابير أمان صارمة لحماية بياناتك الشخصية من الوصول أو التعديل
            أو سوء الاستخدام غير المصرح به.
          </p>

          <h2 className="text-xl font-semibold">4. مشاركة البيانات</h2>
          <p>لا نشارك بياناتك الشخصية مع أي طرف ثالث إلا في الحالات التالية:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>بموافقتك المسبقة</li>
            <li>مع مزودي خدمات موثوقين يساعدونا في تشغيل أعمالنا</li>
            <li>إذا تطلب القانون ذلك</li>
          </ul>

          <h2 className="text-xl font-semibold">5. الكوكيز</h2>
          <p>
            نستخدم الكوكيز لتحسين تجربتك. يمكنك التحكم في إعدادات الكوكيز من
            خلال إعدادات المتصفح الخاص بك.
          </p>

          <h2 className="text-xl font-semibold">6. حقوقك</h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>الوصول إلى بياناتك الشخصية</li>
            <li>طلب تصحيح أو تحديث البيانات</li>
            <li>طلب حذف بياناتك</li>
            <li>التواصل معنا لأي استفسار متعلق بالخصوصية</li>
          </ul>

          <h2 className="text-xl font-semibold">معلومات التواصل</h2>
          <p>📍 العنوان: 108 عمارات البنفسج، القاهرة الجديدة، مصر</p>
          <p>📞 الهاتف: 01144566600</p>
          <p>📧 البريد الإلكتروني: info@capitalgateegy.com</p>
          <p>🌐 الموقع: www.capitalgateegy.com</p>

          <h2 className="text-xl font-semibold">7. تحديثات السياسة</h2>
          <p>
            قد نقوم بمراجعة هذه السياسة من وقت لآخر. يرجى مراجعة هذه الصفحة بشكل
            دوري للبقاء على اطلاع.
          </p>
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
    </>
  );
}
