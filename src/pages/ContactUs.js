import contact from "../images/contact.mp4";
import map from "../images/map.jpg";
import { useState, useEffect } from "react";

const translations = {
  en: {
    heroTitle: "Connect & Create.",
    heroDesc: "Reach out and experience the future of support our AI-powered team is here to help you quickly, intelligently, and with a personal touch.",
    formTitle: "Get In Touch With Us",
    name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    contactInfo: "Contact Information",
    phoneLabel: "Phone",
    phoneValue: "+1 (555) 123-4567",
    phoneTime: "Mon-Fri, 9am-6pm EST",
    emailLabel: "Email",
    emailValue: "contact@yourcompany.com",
    emailTime: "Response within 24 hours",
    locationLabel: "Location",
    locationValue: "123 Event Plaza, Suite 456",
    locationTime: "New York, NY 10001",
    faqsTitle: "AI Tools FAQs",
    mapTitle: "Find Us On The Map",
    supportTitle: "Student Support & Academic Advising",
    supportDesc: "Our dedicated academic support team is here to guide you through your learning journey with personalized assistance and expert advice.",
    academicAdvisingTitle: "Academic Advising",
    academicAdvisingDesc: "Get personalized course recommendations and career guidance from our certified academic advisors.",
    academicAdvisingTime: "Mon-Fri, 8am-7pm EST",
    technicalSupportTitle: "Technical Support",
    technicalSupportDesc: "24/7 technical assistance for platform issues, course access, and learning tool troubleshooting.",
    technicalSupportTime: "Available 24/7",
    careerServicesTitle: "Career Services",
    careerServicesDesc: "Resume reviews, interview preparation, and job placement assistance for course graduates.",
    careerServicesTime: "Mon-Fri, 10am-5pm EST",
    
  },
  ar: {
    heroTitle: "تواصل وابتكر.",
    heroDesc: "تواصل معنا واختبر مستقبل الدعم—فريقنا المدعوم بالذكاء الاصطناعي هنا لمساعدتك بسرعة وبذكاء وبلمسة شخصية.",
    formTitle: "تواصل معنا",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    company: "الشركة",
    subject: "الموضوع",
    message: "الرسالة",
    send: "إرسال الرسالة",
    contactInfo: "معلومات التواصل",
    phoneLabel: "الهاتف",
    phoneValue: "+1 (555) 123-4567",
    phoneTime: "الاثنين-الجمعة، 9ص-6م بتوقيت شرق أمريكا",
    emailLabel: "البريد الإلكتروني",
    emailValue: "contact@yourcompany.com",
    emailTime: "الرد خلال 24 ساعة",
    locationLabel: "الموقع",
    locationValue: "123 Event Plaza، جناح 456",
    locationTime: "نيويورك، NY 10001",
    faqsTitle: "أسئلة شائعة حول أدوات الذكاء الاصطناعي",
    mapTitle: "اعثر علينا على الخريطة",
    supportTitle: "دعم الطلاب والإرشاد الأكاديمي",
    supportDesc: "فريق الدعم الأكاديمي المخصص لدينا هنا لإرشادك خلال رحلة التعلم مع المساعدة الشخصية والمشورة الخبيرة.",
    academicAdvisingTitle: "الإرشاد الأكاديمي",
    academicAdvisingDesc: "احصل على توصيات شخصية للدورات وإرشادات مهنية من مستشارينا الأكاديميين المعتمدين.",
    academicAdvisingTime: "الاثنين-الجمعة، 8ص-7م بتوقيت شرق أمريكا",
    technicalSupportTitle: "الدعم الفني",
    technicalSupportDesc: "مساعدة فنية على مدار الساعة لمشاكل المنصة والوصول للدورات واستكشاف أخطاء أدوات التعلم.",
    technicalSupportTime: "متاح 24/7",
    careerServicesTitle: "خدمات التوظيف",
    careerServicesDesc: "مراجعة السير الذاتية وإعداد المقابلات ومساعدة التوظيف لخريجي الدورات.",
    careerServicesTime: "الاثنين-الجمعة، 10ص-5م بتوقيت شرق أمريكا",
    
  },
  he: {
    heroTitle: "התחבר וצור.",
    heroDesc: "פנה אלינו ותחווה את עתיד השירות—הצוות שלנו, המופעל על ידי בינה מלאכותית, כאן כדי לעזור לך במהירות, בחוכמה ובאופן אישי.",
    formTitle: "צור קשר איתנו",
    name: "שם",
    email: "אימייל",
    phone: "טלפון",
    company: "חברה",
    subject: "נושא",
    message: "הודעה",
    send: "שלח הודעה",
    contactInfo: "פרטי קשר",
    phoneLabel: "טלפון",
    phoneValue: "+1 (555) 123-4567",
    phoneTime: "ב'-ו', 9:00-18:00 שעון ניו-יורק",
    emailLabel: "אימייל",
    emailValue: "contact@yourcompany.com",
    emailTime: "תגובה תוך 24 שעות",
    locationLabel: "מיקום",
    locationValue: "123 Event Plaza, Suite 456",
    locationTime: "ניו יורק, NY 10001",
    faqsTitle: "שאלות נפוצות על כלי AI",
    mapTitle: "מצאו אותנו על המפה",
    supportTitle: "תמיכה לסטודנטים וייעוץ אקדמי",
    supportDesc: "צוות התמיכה האקדמית המסור שלנו כאן כדי להדריך אותך במהלך מסע הלמידה עם סיוע אישי וייעוץ מומחה.",
    academicAdvisingTitle: "ייעוץ אקדמי",
    academicAdvisingDesc: "קבל המלצות קורס מותאמות אישית והדרכה מקצועית מהיועצים האקדמיים המוסמכים שלנו.",
    academicAdvisingTime: "ב'-ו', 8:00-19:00 שעון ניו-יורק",
    technicalSupportTitle: "תמיכה טכנית",
    technicalSupportDesc: "סיוע טכני 24/7 לבעיות פלטפורמה, גישה לקורסים ופתרון בעיות בכלי למידה.",
    technicalSupportTime: "זמין 24/7",
    careerServicesTitle: "שירותי קריירה",
    careerServicesDesc: "סקירת קורות חיים, הכנה לראיונות וסיוע בהשמה לבוגרי הקורסים.",
    careerServicesTime: "ב'-ו', 10:00-17:00 שעון ניו-יורק",
    
  },
};

function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const t = translations[language] || translations["en"];

  useEffect(() => {
    // Listen for language changes from header
    const syncLanguage = () => {
      const lang = localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("storage", syncLanguage);

    // Also listen for custom event from header (for immediate update)
    const customLangChange = (e) => {
      const lang = e.detail || localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("languageChange", customLangChange);

    // Initial sync
    syncLanguage();

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", customLangChange);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={contact}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10 h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg text-center">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-center">
            {t.heroDesc}
          </p>
        </div>
      </section>
      {/* End Hero Section */}
      <section className="w-full py-20 px-4 bg-white dark:bg-black flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white dark:bg-black rounded-2xl shadow-xl p-8 border border-sky-200 dark:border-sky-700">
          <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-6 text-center">
            {t.formTitle}
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.name} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.email} <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.subject} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                {t.message} <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message here"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-sky-600 text-white font-bold rounded-lg shadow hover:bg-sky-700 transition-all text-lg"
            >
              {t.send}
            </button>
          </form>
        </div>
      </section>
     

      {/* Student Support & Academic Advising Section */}
      <section className="w-full py-16 px-4 bg-sky-50 dark:bg-sky-900">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-4 text-center">
            {t.supportTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            {t.supportDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 flex flex-col items-center border border-sky-200 dark:border-sky-700 hover:shadow-2xl transition-shadow">
              <i className="fas fa-graduation-cap text-4xl text-sky-600 dark:text-sky-400 mb-4"></i>
              <h3 className="text-xl font-bold mb-3 text-sky-600 dark:text-sky-400 text-center">
                {t.academicAdvisingTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center leading-relaxed">
                {t.academicAdvisingDesc}
              </p>
              <span className="text-sm text-sky-600 dark:text-sky-400 font-medium px-3 py-1 bg-sky-100 dark:bg-sky-800 rounded-full">
                {t.academicAdvisingTime}
              </span>
            </div>

            <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 flex flex-col items-center border border-sky-200 dark:border-sky-700 hover:shadow-2xl transition-shadow">
              <i className="fas fa-tools text-4xl text-sky-600 dark:text-sky-400 mb-4"></i>
              <h3 className="text-xl font-bold mb-3 text-sky-600 dark:text-sky-400 text-center">
                {t.technicalSupportTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center leading-relaxed">
                {t.technicalSupportDesc}
              </p>
              <span className="text-sm text-sky-600 dark:text-sky-400 font-medium px-3 py-1 bg-sky-100 dark:bg-sky-800 rounded-full">
                {t.technicalSupportTime}
              </span>
            </div>

            <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 flex flex-col items-center border border-sky-200 dark:border-sky-700 hover:shadow-2xl transition-shadow">
              <i className="fas fa-briefcase text-4xl text-sky-600 dark:text-sky-400 mb-4"></i>
              <h3 className="text-xl font-bold mb-3 text-sky-600 dark:text-sky-400 text-center">
                {t.careerServicesTitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center leading-relaxed">
                {t.careerServicesDesc}
              </p>
              <span className="text-sm text-sky-600 dark:text-sky-400 font-medium px-3 py-1 bg-sky-100 dark:bg-sky-800 rounded-full">
                {t.careerServicesTime}
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 px-0 bg-white dark:bg-black">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-8 text-center">
            {t.mapTitle}
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-sky-200 dark:border-sky-700 w-full">
            <img
              src={map}
              alt="Company Location Map"
              className="w-full h-[300px] object-cover rounded-2xl shadow-xl border border-sky-200 dark:border-sky-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;