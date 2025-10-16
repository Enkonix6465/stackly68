import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaPalette, FaUser, FaMobile } from 'react-icons/fa';
import video from "../images/web.mp4"
import image from "../images/lmss3.jpg"
const translations = {
  en: {
    heroTitle: "Master UI/UX Design with Industry Experts",
    sectionTitle: "UI/UX Design Courses",
    sectionDesc: "Our comprehensive UI/UX design curriculum is designed to take you from beginner to job-ready designer. Learn modern design principles, prototyping tools like Figma, and user research through hands-on projects and real-world case studies. Our industry-experienced instructors provide personalized guidance to help you build a strong design portfolio and land your dream design job.",
    sectionList: [
      "User Experience Design & Research",
      "Visual Design & Typography",
      "Prototyping with Figma & Adobe XD",
      "Interaction Design & Animation"
    ],
    servicesHeading: "Comprehensive Learning Paths",
    cards: [
      {
        frontTitle: "UI Design",
        frontDesc: "Master visual design principles, color theory, and typography to create stunning user interfaces.",
        backDesc: "Learn design systems, component libraries, and visual hierarchy through real design projects.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "UX Research",
        frontDesc: "Understand user behavior through research methods, testing, and data-driven design decisions.",
        backDesc: "Master user interviews, usability testing, and personas to create user-centered designs.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Mobile Design",
        frontDesc: "Design responsive mobile interfaces and native app experiences for iOS and Android.",
        backDesc: "Work on real mobile projects with focus on touch interactions and mobile-first design.",
        btn: "View Curriculum"
      }
    ],
    spotlightHeading: "Student Success: From Beginner to UX Designer",
    spotlightDesc: "Emma started with no design background and enrolled in our comprehensive UI/UX Design program. Through dedicated learning and portfolio projects, she built a collection of 12+ design case studies and landed her first UX designer role in just 7 months with a 55% salary increase.",
    spotlightDetails: [
      { label: "Background:", value: "Project Manager" },
      { label: "Program:", value: "UI/UX Design Mastery" },
      { label: "Duration:", value: "7 Months" },
      { label: "Previous Experience:", value: "No Design Background" }
    ],
    spotlightResults: [
      { value: "12+", label: "Case Studies Built" },
      { value: "55%", label: "Salary Increase" },
      { value: "7", label: "Months to First Job" }
    ],
    spotlightQuote: '"The hands-on approach with real client projects and mentor feedback helped me build a portfolio that stands out. I went from zero design skills to leading UX projects at my company."',
    spotlightAuthor: "- Emma Wilson, Senior UX Designer at DesignTech",
    processHeading: "Our Proven Learning Journey",
    processSubheading: "From design fundamentals to advanced prototyping, we guide you every step of the way to becoming a professional UI/UX designer.",
    processSteps: [
      {
        step: "1",
        title: "Design Foundations",
        desc: "Start with design principles, color theory, and typography fundamentals through hands-on exercises."
      },
      {
        step: "2",
        title: "UX Research & Strategy",
        desc: "Learn user research methods, personas, and information architecture through real projects."
      },
      {
        step: "3",
        title: "Prototyping & Testing",
        desc: "Build interactive prototypes in Figma and conduct usability tests with real users."
      },
      {
        step: "4",
        title: "Portfolio & Career",
        desc: "Create a professional portfolio and get career coaching to land your first design role."
      }
    ],
    ctaHeading: "Ready to Start Your Design Journey?",
    ctaDesc: "Join thousands of students who transformed their careers through our project-based UI/UX design programs.",
    ctaBtn: "Contact Us"
  },
  ar: {
    heroTitle: "إتقن تصميم UI/UX مع خبراء الصناعة",
    sectionTitle: "دورات تصميم UI/UX",
    sectionDesc: "منهجنا الشامل لتصميم UI/UX مصمم لتحويلك من مبتدئ إلى مصمم جاهز للعمل. تعلم مبادئ التصميم الحديثة وأدوات النماذج الأولية مثل Figma وبحوث المستخدمين من خلال مشاريع عملية ودراسات حالات من العالم الواقعي. مدرسونا ذوو الخبرة الصناعية يقدمون توجيهاً مخصصاً لمساعدتك في بناء portfolio تصميم قوي والحصول على وظيفة التصميم المثالية.",
    sectionList: [
      "تصميم تجربة المستخدم والبحث",
      "التصميم البصري والطباعة",
      "النماذج الأولية مع Figma وAdobe XD",
      "تصميم التفاعل والحركة"
    ],
    servicesHeading: "مسارات تعلم شاملة",
    cards: [
      {
        frontTitle: "تصميم UI",
        frontDesc: "أتقن مبادئ التصميم البصري ونظرية الألوان والطباعة لإنشاء واجهات مستخدم مذهلة.",
        backDesc: "تعلم أنظمة التصميم ومكتبات المكونات والتسلسل الهرمي البصري من خلال مشاريع تصميم حقيقية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "بحوث UX",
        frontDesc: "افهم سلوك المستخدم من خلال طرق البحث والاختبار وقرارات التصميم المبنية على البيانات.",
        backDesc: "أتقن مقابلات المستخدمين واختبار سهولة الاستخدام والشخصيات لإنشاء تصاميم تركز على المستخدم.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "تصميم الهاتف المحمول",
        frontDesc: "صمم واجهات هاتف محمول متجاوبة وتجارب تطبيقات أصلية لـ iOS وAndroid.",
        backDesc: "اعمل على مشاريع هاتف محمول حقيقية مع التركيز على تفاعلات اللمس والتصميم المحمول أولاً.",
        btn: "عرض المنهج"
      }
    ],
    spotlightHeading: "نجاح الطالبة: من مبتدئة إلى مصممة UX",
    spotlightDesc: "بدأت إيما بدون خلفية تصميم والتحقت ببرنامجنا الشامل لتصميم UI/UX. من خلال التعلم المخصص ومشاريع portfolio، بنت مجموعة من أكثر من 12 دراسة حالة تصميم وحصلت على أول دور مصممة UX في 7 أشهر فقط بزيادة راتب 55٪.",
    spotlightDetails: [
      { label: "الخلفية:", value: "مديرة مشاريع" },
      { label: "البرنامج:", value: "إتقان تصميم UI/UX" },
      { label: "المدة:", value: "7 أشهر" },
      { label: "الخبرة السابقة:", value: "لا توجد خلفية تصميم" }
    ],
    spotlightResults: [
      { value: "12+", label: "دراسة حالة تم بناؤها" },
      { value: "55%", label: "زيادة الراتب" },
      { value: "7", label: "أشهر للوظيفة الأولى" }
    ],
    spotlightQuote: '"ساعدني النهج العملي مع مشاريع العملاء الحقيقيين وملاحظات المرشد في بناء portfolio يبرز. انتقلت من صفر مهارات تصميم إلى قيادة مشاريع UX في شركتي."',
    spotlightAuthor: "- إيما ويلسون، مصممة UX أولى في DesignTech",
    processHeading: "رحلة التعلم المثبتة لدينا",
    processSubheading: "من أساسيات التصميم إلى النماذج الأولية المتقدمة، نرشدك في كل خطوة على طريق أن تصبح مصمم UI/UX محترف.",
    processSteps: [
      {
        step: "1",
        title: "أسس التصميم",
        desc: "ابدأ بمبادئ التصميم ونظرية الألوان وأساسيات الطباعة من خلال تمارين عملية."
      },
      {
        step: "2",
        title: "بحوث UX والاستراتيجية",
        desc: "تعلم طرق بحث المستخدم والشخصيات وهندسة المعلومات من خلال مشاريع حقيقية."
      },
      {
        step: "3",
        title: "النماذج الأولية والاختبار",
        desc: "ابن نماذج أولية تفاعلية في Figma وأجر اختبارات سهولة الاستخدام مع مستخدمين حقيقيين."
      },
      {
        step: "4",
        title: "Portfolio والمسيرة",
        desc: "أنشئ portfolio مهني واحصل على تدريب مهني للحصول على أول دور تصميم."
      }
    ],
    ctaHeading: "جاهز لبدء رحلتك في التصميم؟",
    ctaDesc: "انضم إلى آلاف الطلاب الذين غيروا مساراتهم المهنية من خلال برامجنا القائمة على المشاريع لتصميم UI/UX.",
    ctaBtn: "ابدأ التعلم الآن"
  },
  he: {
    heroTitle: "היה מעצב UI/UX עם מדריכים מומחים",
    sectionTitle: "קורסי עיצוב UI/UX",
    sectionDesc: "תכנית הלימודים המקיפה שלנו לעיצוב UI/UX נועדה להפוך אותך ממתחיל למעצב מוכן לעבודה. למד עקרונות עיצוב מודרניים, כלי prototyping כמו Figma ומחקר משתמשים דרך פרויקטים מעשיים ומקרי בוחן מהעולם האמיתי. המדריכים שלנו עם ניסיון בתעשייה מספקים הדרכה מותאמת אישית לעזור לך לבנות portfolio עיצוב חזק ולהשיג עבודת עיצוב חלום.",
    sectionList: [
      "עיצוב חוויית משתמש ומחקר",
      "עיצוב ויזואלי וטיפוגרפיה",
      "Prototyping עם Figma ו-Adobe XD",
      "עיצוב אינטראקציה ואנימציה"
    ],
    servicesHeading: "מסלולי למידה מקיפים",
    cards: [
      {
        frontTitle: "עיצוב UI",
        frontDesc: "שלט בעקרונות עיצוב ויזואלי, תיאוריית צבעים וטיפוגרפיה ליצירת ממשקי משתמש מרהיבים.",
        backDesc: "למד מערכות עיצוב, ספריות קומפוננטים והיררכיה ויזואלית דרך פרויקטי עיצוב אמיתיים.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "מחקר UX",
        frontDesc: "הבן התנהגות משתמשים דרך שיטות מחקר, בדיקות והחלטות עיצוב מבוססות נתונים.",
        backDesc: "שלט בראיונות משתמשים, בדיקות שימושיות ופרסונות ליצירת עיצובים ממוקדי משתמש.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "עיצוב מובייל",
        frontDesc: "עצב ממשקי מובייל רספונסיביים וחוויות אפליקציות נייטיביות ל-iOS ו-Android.",
        backDesc: "עבוד על פרויקטי מובייל אמיתיים עם דגש על אינטראקציות מגע ועיצוב mobile-first.",
        btn: "צפה בסילבוס"
      }
    ],
    spotlightHeading: "הצלחת סטודנטית: ממתחילה למעצבת UX",
    spotlightDesc: "אמה התחילה ללא רקע בעיצוב והצטרפה לתכנית עיצוב UI/UX המקיפה שלנו. דרך למידה מסורה ופרויקטי portfolio, היא בנתה אוסף של 12+ מקרי בוחן עיצוב והשיגה את התפקיד הראשון כמעצבת UX תוך 7 חודשים בלבד עם עלייה של 55% במשכורת.",
    spotlightDetails: [
      { label: "רקע:", value: "מנהלת פרויקטים" },
      { label: "תכנית:", value: "שליטה בעיצוב UI/UX" },
      { label: "משך:", value: "7 חודשים" },
      { label: "ניסיון קודם:", value: "ללא רקע בעיצוב" }
    ],
    spotlightResults: [
      { value: "12+", label: "מקרי בוחן שנבנו" },
      { value: "55%", label: "עלייה במשכורת" },
      { value: "7", label: "חודשים לעבודה הראשונה" }
    ],
    spotlightQuote: '"הגישה המעשית עם פרויקטי לקוחות אמיתיים ומשוב מנטורים עזרה לי לבנות portfolio שבולט. עברתי מאפס כישורי עיצוב להובלת פרויקטי UX בחברה שלי."',
    spotlightAuthor: "- אמה ווילסון, מעצבת UX בכירה ב-DesignTech",
    processHeading: "מסע הלמידה המוכח שלנו",
    processSubheading: "מיסודות עיצוב ועד prototyping מתקדם, אנחנו מדריכים אותך בכל צעד בדרך להפוך למעצב UI/UX מקצועי.",
    processSteps: [
      {
        step: "1",
        title: "יסודות עיצוב",
        desc: "התחל עם עקרונות עיצוב, תיאוריית צבעים ויסודות טיפוגרפיה דרך תרגילים מעשיים."
      },
      {
        step: "2",
        title: "מחקר UX ואסטרטגיה",
        desc: "למד שיטות מחקר משתמשים, פרסונות וארכיטקטורת מידע דרך פרויקטים אמיתיים."
      },
      {
        step: "3",
        title: "Prototyping ובדיקות",
        desc: "בנה prototypes אינטראקטיביים ב-Figma ובצע בדיקות שימושיות עם משתמשים אמיתיים."
      },
      {
        step: "4",
        title: "Portfolio וקריירה",
        desc: "צור portfolio מקצועי וקבל אימון קריירה להשגת התפקיד הראשון בעיצוב."
      }
    ],
    ctaHeading: "מוכן להתחיל את המסע בעיצוב?",
    ctaDesc: "הצטרף לאלפי סטודנטים ששינו את הקריירה שלהם דרך תכניות עיצוב UI/UX מבוססות הפרויקטים שלנו.",
    ctaBtn: "התחל ללמוד עכשיו"
  }
};

const UIDesign = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];
  const [flippedCards, setFlippedCards] = useState([]);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const updateTheme = () => {
      const theme = localStorage.getItem("theme");
      setDarkMode(theme === "dark");
    };
    updateTheme();
    window.addEventListener("themeChange", updateTheme);
    window.addEventListener("storage", updateTheme);
    return () => {
      window.removeEventListener("themeChange", updateTheme);
      window.removeEventListener("storage", updateTheme);
    };
  }, []);

  useEffect(() => {
    if (language === "ar" || language === "he") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [language]);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  const handleCardFlip = (index) => {
    setFlippedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          className="w-full h-full object-cover absolute top-0 left-0 z-10"
          src={video}
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-20"></div>
        <div className="relative z-30 text-white text-center w-full max-w-4xl px-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {language === 'en' && "Become a UI/UX Designer in 7 Months"}
            {language === 'ar' && "كن مصمم UI/UX في 7 أشهر"}
            {language === 'he' && "הפוך למעצב UI/UX תוך 7 חודשים"}
          </p>
        </div>
      </div>

      {/* UI/UX Design Courses Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt="UI/UX design workspace"
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.sectionTitle}</h2>
              <p className={`text-lg mb-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {t.sectionDesc}
              </p>
              <ul className="space-y-3">
                {t.sectionList.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`text-sky-500 mr-3 mt-1 ${darkMode ? "text-sky-400" : ""}`}>✓</span>
                    <span className={darkMode ? "text-gray-300" : "text-gray-700"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section with Flip Cards */}
      <section className={`py-16 ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.servicesHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.cards.map((card, idx) => (
              <div
                key={idx}
                className="relative h-72 cursor-pointer"
                onClick={() => handleCardFlip(idx)}
              >
                <div className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${flippedCards.includes(idx) ? 'rotate-y-180 opacity-0' : 'opacity-100'
                  }`}>
                  <div className={`h-full rounded-2xl p-4 flex flex-col items-center justify-center text-center border-2 ${darkMode ? "bg-gray-800 border-sky-500" : "bg-sky-50 border-sky-200"
                    }`}>
                    {idx === 0 && <FaPalette className="text-3xl text-sky-500 mb-3" />}
                    {idx === 1 && <FaUser className="text-3xl text-sky-600 mb-3" />}
                    {idx === 2 && <FaMobile className="text-3xl text-sky-500 mb-3" />}
                    <h3 className="text-lg font-bold mb-3">{card.frontTitle}</h3>
                    <p className={`text-sm leading-tight ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {card.frontDesc}
                    </p>
                  </div>
                </div>

                <div className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${flippedCards.includes(idx) ? 'opacity-100' : 'rotate-y-180 opacity-0'
                  }`}>
                  <div className={`h-full rounded-2xl p-4 flex flex-col items-center justify-center text-center ${darkMode ? "bg-sky-600" : "bg-sky-600 text-white"
                    }`}>
                    <p className="text-sm leading-tight mb-4">{card.backDesc}</p>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Spotlight */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.spotlightHeading}</h2>
              <p className={`text-lg mb-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {t.spotlightDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {t.spotlightDetails.map((detail, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className={`font-semibold ${darkMode ? "text-sky-400" : "text-sky-600"}`}>
                      {detail.label}
                    </span>
                    <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {t.spotlightResults.map((result, idx) => (
                  <div
                    key={idx}
                    className={`text-center p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white shadow-lg"
                      }`}
                  >
                    <div className={`text-2xl font-bold mb-1 ${darkMode ? "text-sky-400" : "text-sky-600"
                      }`}>
                      {result.value}
                    </div>
                    <div className="text-sm font-medium">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`p-6 rounded-lg border-l-4 ${darkMode ? "bg-gray-800 border-sky-400" : "bg-white border-sky-500 shadow-lg"
                }`}>
                <blockquote className="italic text-lg mb-4">
                  {t.spotlightQuote}
                </blockquote>
                <footer className="font-semibold text-sky-500">
                  {t.spotlightAuthor}
                </footer>
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src={video}
                  className="w-full h-96 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process Section */}
      <section className={`py-16 ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.processHeading}</h2>
          <p className={`text-xl text-center mb-12 max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            {t.processSubheading}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`text-center p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-sky-50 hover:bg-sky-100"
                  }`}
              >
                <div className="w-16 h-16 bg-sky-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-sky-50 to-sky-100"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaHeading}</h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${darkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-sky-600 text-white hover:bg-sky-700"
                }`}
              onClick={() => handleGetStarted("/services")}
            >
              {t.ctaBtn}
            </button>
            <button
              className={`px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 ${darkMode
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white"
                }`}
              onClick={() => handleGetStarted("/contact")}
            >
              {language === 'en' && "View All Courses"}
              {language === 'ar' && "عرض جميع الدورات"}
              {language === 'he' && "צפה בכל הקורסים"}
            </button>
          </div>
          <p className={`mt-6 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
            {language === 'en' && "Portfolio review included • Figma license provided • Industry mentorship"}
            {language === 'ar' && "مراجعة portfolio مضمونة • ترخيص Figma مقدم • إرشاد صناعي"}
            {language === 'he' && "בדיקת Portfolio כלולה • רישיון Figma מסופק • מנטורינג תעשייתי"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default UIDesign;
