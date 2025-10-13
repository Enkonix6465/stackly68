import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaChartLine, FaBullhorn, FaUsers } from 'react-icons/fa';
import video from "../images/marketing.mp4"

const translations = {
  en: {
    heroTitle: "Master Business & Marketing with Industry Experts",
    sectionTitle: "Business & Marketing Courses",
    sectionDesc: "Our comprehensive business and marketing curriculum is designed to take you from beginner to job-ready professional. Learn modern strategies like digital marketing, business analytics, and brand management through hands-on projects and real-world campaigns. Our industry-experienced instructors provide personalized guidance to help you build a strong portfolio and land your dream business role.",
    sectionList: [
      "Digital Marketing & Social Media Strategy",
      "Business Analytics & Data-Driven Decisions",
      "Brand Management & Customer Experience",
      "E-commerce & Growth Marketing"
    ],
    servicesHeading: "Comprehensive Learning Paths",
    cards: [
      {
        frontTitle: "Digital Marketing",
        frontDesc: "Master SEO, SEM, social media marketing, and content strategy to build powerful digital campaigns.",
        backDesc: "Learn campaign optimization, conversion tracking, and ROI analysis through real marketing projects.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Business Analytics",
        frontDesc: "Build data-driven business strategies with analytics tools, market research, and performance metrics.",
        backDesc: "Master Google Analytics, business intelligence tools, and data visualization with hands-on experience.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Brand Strategy",
        frontDesc: "Develop comprehensive brand strategies, customer personas, and market positioning frameworks.",
        backDesc: "Work on real branding projects that include market research, brand identity, and customer journey mapping.",
        btn: "View Curriculum"
      }
    ],
    spotlightHeading: "Student Success: From Beginner to Marketing Professional",
    spotlightDesc: "Maria started with no marketing experience and enrolled in our Digital Marketing & Business program. Through dedicated learning and campaign projects, she built a portfolio of 12+ successful campaigns and landed her first marketing manager role in just 8 months with a 60% salary increase.",
    spotlightDetails: [
      { label: "Background:", value: "Sales Representative" },
      { label: "Program:", value: "Digital Marketing & Business" },
      { label: "Duration:", value: "8 Months" },
      { label: "Previous Experience:", value: "No Marketing Background" }
    ],
    spotlightResults: [
      { value: "12+", label: "Campaigns Created" },
      { value: "60%", label: "Salary Increase" },
      { value: "8", label: "Months to First Job" }
    ],
    spotlightQuote: "The hands-on approach with real campaign development and industry mentorship helped me build practical skills that employers value. I went from knowing nothing about digital marketing to leading campaigns that generate real ROI.",
    spotlightAuthor: "- Maria Rodriguez, Marketing Manager at GrowthCorp",
    processHeading: "Our Proven Learning Journey",
    processSubheading: "From business fundamentals to advanced marketing strategies, we guide you every step of the way to becoming a professional marketer.",
    processSteps: [
      {
        step: "1",
        title: "Business Fundamentals",
        desc: "Start with marketing principles, consumer behavior, and business strategy fundamentals through interactive case studies."
      },
      {
        step: "2",
        title: "Digital Marketing Mastery",
        desc: "Learn SEO, SEM, social media, and content marketing through guided campaigns and performance analysis."
      },
      {
        step: "3",
        title: "Real Campaign Projects",
        desc: "Build complete marketing campaigns that drive real results and add to your professional portfolio."
      },
      {
        step: "4",
        title: "Career Launch",
        desc: "Get career coaching, interview preparation, and portfolio reviews to land your first marketing role."
      }
    ],
    ctaHeading: "Ready to Start Your Marketing Journey?",
    ctaDesc: "Join thousands of students who transformed their careers through our project-based business and marketing programs.",
    ctaBtn: "Contact Us"
  },
  ar: {
    heroTitle: "إتقن الأعمال والتسويق مع خبراء الصناعة",
    sectionTitle: "دورات الأعمال والتسويق",
    sectionDesc: "منهجنا الشامل للأعمال والتسويق مصمم لتحويلك من مبتدئ إلى محترف جاهز للعمل. تعلم استراتيجيات حديثة مثل التسويق الرقمي وتحليلات الأعمال وإدارة العلامة التجارية من خلال مشاريع عملية وحملات واقعية. مدرسونا ذوو الخبرة الصناعية يقدمون توجيهاً مخصصاً لمساعدتك في بناء portfolio قوي والحصول على وظيفة أحلامك في الأعمال.",
    sectionList: [
      "التسويق الرقمي واستراتيجية وسائل التواصل الاجتماعي",
      "تحليلات الأعمال والقرارات المدفوعة بالبيانات",
      "إدارة العلامة التجارية وتجربة العملاء",
      "التجارة الإلكترونية وتسويق النمو"
    ],
    servicesHeading: "مسارات تعلم شاملة",
    cards: [
      {
        frontTitle: "التسويق الرقمي",
        frontDesc: "أتقن SEO وSEM وتسويق وسائل التواصل الاجتماعي واستراتيجية المحتوى لبناء حملات رقمية قوية.",
        backDesc: "تعلم تحسين الحملات وتتبع التحويلات وتحليل العائد على الاستثمار من خلال مشاريع تسويقية حقيقية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "تحليلات الأعمال",
        frontDesc: "ابن استراتيجيات أعمال مدفوعة بالبيانات مع أدوات التحليل وبحوث السوق ومقاييس الأداء.",
        backDesc: "أتقن Google Analytics وأدوات ذكاء الأعمال وتصور البيانات مع خبرة عملية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "استراتيجية العلامة التجارية",
        frontDesc: "طور استراتيجيات علامة تجارية شاملة وشخصيات العملاء وأطر تموضع السوق.",
        backDesc: "اعمل على مشاريع علامة تجارية حقيقية تشمل بحوث السوق وهوية العلامة التجارية ورسم رحلة العميل.",
        btn: "عرض المنهج"
      }
    ],
    spotlightHeading: "نجاح الطالبة: من مبتدئة إلى محترفة تسويق",
    spotlightDesc: "بدأت ماريا بدون خبرة في التسويق والتحقت ببرنامجنا للتسويق الرقمي والأعمال. من خلال التعلم المخصص ومشاريع الحملات، بنت portfolio لأكثر من 12 حملة ناجحة وحصلت على أول دور مدير تسويق في 8 أشهر فقط بزيادة راتب 60٪.",
    spotlightDetails: [
      { label: "الخلفية:", value: "مندوبة مبيعات" },
      { label: "البرنامج:", value: "التسويق الرقمي والأعمال" },
      { label: "المدة:", value: "8 أشهر" },
      { label: "الخبرة السابقة:", value: "لا توجد خلفية تسويقية" }
    ],
    spotlightResults: [
      { value: "12+", label: "حملة تم إنشاؤها" },
      { value: "60%", label: "زيادة الراتب" },
      { value: "8", label: "أشهر للوظيفة الأولى" }
    ],
    spotlightQuote: "ساعدني النهج العملي مع تطوير الحملات الحقيقية والإرشاد الصناعي في بناء مهارات عملية يقدرها أصحاب العمل. انتقلت من عدم معرفة أي شيء عن التسويق الرقمي إلى قيادة حملات تحقق عائد استثمار حقيقي.",
    spotlightAuthor: "- ماريا رودريجز، مدير تسويق في GrowthCorp",
    processHeading: "رحلة التعلم المثبتة لدينا",
    processSubheading: "من أساسيات الأعمال إلى استراتيجيات التسويق المتقدمة، نرشدك في كل خطوة على طريق أن تصبح مسوقاً محترفاً.",
    processSteps: [
      {
        step: "1",
        title: "أساسيات الأعمال",
        desc: "ابدأ بمبادئ التسويق وسلوك المستهلك وأساسيات استراتيجية الأعمال من خلال دراسات حالة تفاعلية."
      },
      {
        step: "2",
        title: "إتقان التسويق الرقمي",
        desc: "تعلم SEO وSEM ووسائل التواصل الاجتماعي وتسويق المحتوى من خلال حملات موجهة وتحليل الأداء."
      },
      {
        step: "3",
        title: "مشاريع حملات حقيقية",
        desc: "ابن حملات تسويقية كاملة تحقق نتائج حقيقية وتضيف إلى portfolio المهني الخاص بك."
      },
      {
        step: "4",
        title: "انطلاق المسيرة",
        desc: "احصل على تدريب مهني وتحضير للمقابلات ومراجعات portfolio للحصول على أول دور تسويقي."
      }
    ],
    ctaHeading: "جاهز لبدء رحلتك التسويقية؟",
    ctaDesc: "انضم إلى آلاف الطلاب الذين غيروا مساراتهم المهنية من خلال برامجنا القائمة على المشاريع للأعمال والتسويق.",
    ctaBtn: "ابدأ التعلم الآن"
  },
  he: {
    heroTitle: "היה מומחה עסקים ושיווק עם מדריכים מובילים",
    sectionTitle: "קורסי עסקים ושיווק",
    sectionDesc: "תכנית הלימודים המקיפה שלנו לעסקים ושיווק נועדה להפוך אותך ממתחיל למקצועי מוכן לעבודה. למד אסטרטגיות מודרניות כמו שיווק דיגיטלי, אנליטיקה עסקית וניהול מותגים דרך פרויקטים מעשיים וקמפיינים אמיתיים. המדריכים שלנו עם ניסיון בתעשייה מספקים הדרכה מותאמת אישית לעזור לך לבנות portfolio חזק ולהשיג עבודת חלום בעסקים.",
    sectionList: [
      "שיווק דיגיטלי ואסטרטגיית רשתות חברתיות",
      "אנליטיקה עסקית והחלטות מונעות נתונים",
      "ניהול מותג וחוויית לקוח",
      "מסחר אלקטרוני ושיווק צמיחה"
    ],
    servicesHeading: "מסלולי למידה מקיפים",
    cards: [
      {
        frontTitle: "שיווק דיגיטלי",
        frontDesc: "שלט ב-SEO, SEM, שיווק ברשתות חברתיות ואסטרטגיית תוכן לבניית קמפיינים דיגיטליים חזקים.",
        backDesc: "למד אופטימיזציה של קמפיינים, מעקב המרות וניתוח ROI דרך פרויקטי שיווק אמיתיים.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "אנליטיקה עסקית",
        frontDesc: "בנה אסטרטגיות עסקיות מונעות נתונים עם כלי אנליטיקה, מחקר שוק ומדדי ביצועים.",
        backDesc: "שלט ב-Google Analytics, כלי BI וויזואליזציה של נתונים עם ניסיון מעשי.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "אסטרטגיית מותג",
        frontDesc: "פתח אסטרטגיות מותג מקיפות, פרסונות לקוחות ומסגרות מיצוב שוק.",
        backDesc: "עבוד על פרויקטי מיתוג אמיתיים הכוללים מחקר שוק, זהות מותג ומיפוי מסע לקוח.",
        btn: "צפה בסילבוס"
      }
    ],
    spotlightHeading: "הצלחת סטודנטית: ממתחילה למקצועית שיווק",
    spotlightDesc: "מריה התחילה ללא ניסיון בשיווק והצטרפה לתכנית השיווק הדיגיטלי והעסקים שלנו. דרך למידה מסורה ופרויקטי קמפיינים, היא בנתה portfolio של 12+ קמפיינים מוצלחים והשיגה את התפקיד הראשון כמנהלת שיווק תוך 8 חודשים בלבד עם עלייה של 60% במשכורת.",
    spotlightDetails: [
      { label: "רקע:", value: "נציגת מכירות" },
      { label: "תכנית:", value: "שיווק דיגיטלי ועסקים" },
      { label: "משך:", value: "8 חודשים" },
      { label: "ניסיון קודם:", value: "ללא רקע בשיווק" }
    ],
    spotlightResults: [
      { value: "12+", label: "קמפיינים שנוצרו" },
      { value: "60%", label: "עלייה במשכורת" },
      { value: "8", label: "חודשים לעבודה הראשונה" }
    ],
    spotlightQuote: "הגישה המעשית עם פיתוח קמפיינים אמיתיים והמנטורינג התעשייתי עזרו לי לבנות כישורים פרקטיים שמעסיקים מעריכים. עברתי מלא לדעת על שיווק דיגיטלי להובלת קמפיינים שמניבים ROI אמיתי.",
    spotlightAuthor: "- מריה רודריגז, מנהלת שיווק ב-GrowthCorp",
    processHeading: "מסע הלמידה המוכח שלנו",
    processSubheading: "מיסודות עסקיים ועד אסטרטגיות שיווק מתקדמות, אנחנו מדריכים אותך בכל צעד בדרך להפוך למשווק מקצועי.",
    processSteps: [
      {
        step: "1",
        title: "יסודות עסקיים",
        desc: "התחל עם עקרונות שיווק, התנהגות צרכנים ויסודות אסטרטגיה עסקית דרך מקרי בוחן אינטראקטיביים."
      },
      {
        step: "2",
        title: "שליטה בשיווק דיגיטלי",
        desc: "למד SEO, SEM, רשתות חברתיות ושיווק תוכן דרך קמפיינים מודרכים וניתוח ביצועים."
      },
      {
        step: "3",
        title: "פרויקטי קמפיינים אמיתיים",
        desc: "בנה קמפיינים שיווקיים מלאים שמביאים תוצאות אמיתיות ומוסיפים ל-Portfolio המקצועי שלך."
      },
      {
        step: "4",
        title: "השקה קרייריסטית",
        desc: "קבל אימון קריירה, הכנה לראיונות ובדיקות Portfolio להשגת התפקיד הראשון בשיווק."
      }
    ],
    ctaHeading: "מוכן להתחיל את המסע השיווקי?",
    ctaDesc: "הצטרף לאלפי סטודנטים ששינו את הקריירה שלהם דרך תכניות העסקים והשיווק מבוססות הפרויקטים שלנו.",
    ctaBtn: "התחל ללמוד עכשיו"
  }
};

const BusinessandMarketing = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];
  const [flippedCards, setFlippedCards] = useState([]);

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
            {language === 'en' && "Become a Marketing Professional in 8 Months"}
            {language === 'ar' && "كن محترف تسويق في 8 أشهر"}
            {language === 'he' && "הפוך למקצועי שיווק תוך 8 חודשים"}
          </p>
        </div>
      </div>

      {/* Business & Marketing Courses Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80"
                  alt="Business and marketing strategy"
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
                className="relative h-96 cursor-pointer"
                onClick={() => handleCardFlip(idx)}
              >
                <div className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
                  flippedCards.includes(idx) ? 'rotate-y-180 opacity-0' : 'opacity-100'
                }`}>
                  <div className={`h-full rounded-2xl p-6 flex flex-col items-center justify-center text-center border-2 ${
                    darkMode ? "bg-gray-800 border-sky-500" : "bg-sky-50 border-sky-200"
                  }`}>
                    {idx === 0 && <FaBullhorn className="text-5xl text-sky-500 mb-4" />}
                    {idx === 1 && <FaChartLine className="text-5xl text-sky-600 mb-4" />}
                    {idx === 2 && <FaUsers className="text-5xl text-sky-500 mb-4" />}
                    <h3 className="text-xl font-bold mb-4">{card.frontTitle}</h3>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      {card.frontDesc}
                    </p>
                    <div className="mt-4 text-sm text-sky-500 font-semibold">
                      {language === 'en' && "Click to learn more →"}
                      {language === 'ar' && "انقر لمعرفة المزيد →"}
                      {language === 'he' && "לחץ למידע נוסף →"}
                    </div>
                  </div>
                </div>
                
                <div className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
                  flippedCards.includes(idx) ? 'opacity-100' : 'rotate-y-180 opacity-0'
                }`}>
                  <div className={`h-full rounded-2xl p-6 flex flex-col items-center justify-center text-center ${
                    darkMode ? "bg-sky-600" : "bg-sky-600 text-white"
                  }`}>
                    <p className="mb-6">{card.backDesc}</p>
                    <button className="bg-white text-sky-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      {card.btn}
                    </button>
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
                    className={`text-center p-4 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-white shadow-lg"
                    }`}
                  >
                    <div className={`text-2xl font-bold mb-1 ${
                      darkMode ? "text-sky-400" : "text-sky-600"
                    }`}>
                      {result.value}
                    </div>
                    <div className="text-sm font-medium">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`p-6 rounded-lg border-l-4 ${
                darkMode ? "bg-gray-800 border-sky-400" : "bg-white border-sky-500 shadow-lg"
              }`}>
                <blockquote className="italic text-lg mb-4">
                  "{t.spotlightQuote}"
                </blockquote>
                <footer className="font-semibold text-sky-500">
                  {t.spotlightAuthor}
                </footer>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Marketing professional working"
                  className="w-full h-96 object-cover"
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
          <p className={`text-xl text-center mb-12 max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {t.processSubheading}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processSteps.map((step, idx) => (
              <div 
                key={idx}
                className={`text-center p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-sky-50 hover:bg-sky-100"
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
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                darkMode 
                  ? "bg-white text-black hover:bg-gray-200" 
                  : "bg-sky-600 text-white hover:bg-sky-700"
              }`}
              onClick={() => handleGetStarted("/services")}
            >
              {t.ctaBtn}
            </button>
            <button
              className={`px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 ${
                darkMode
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
          <p className={`mt-6 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            {language === 'en' && "Real campaign projects • Industry mentorship • ROI-focused training"}
            {language === 'ar' && "مشاريع حملات حقيقية • إرشاد صناعي • تدريب مركز على العائد"}
            {language === 'he' && "פרויקטי קמפיינים אמיתיים • מנטורינג תעשייתי • הכשרה ממוקדת ROI"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default BusinessandMarketing;
