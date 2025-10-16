import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import video from "../images/web.mp4"
import image from "../images/lmss1.jpg"
const translations = {
  en: {
    heroTitle: "Master Web Development with Industry Experts",
    sectionTitle: "Web Development Courses",
    sectionDesc: "Our comprehensive web development curriculum is designed to take you from beginner to job-ready developer. Learn modern technologies like React, Node.js, and MongoDB through hands-on projects and real-world applications. Our industry-experienced instructors provide personalized guidance to help you build a strong portfolio and land your dream tech job.",
    sectionList: [
      "Full-Stack JavaScript Development",
      "React & Modern Frontend Frameworks",
      "Node.js & Backend Development",
      "Database Design & API Integration"
    ],
    servicesHeading: "Comprehensive Learning Paths",
    cards: [
      {
        frontTitle: "Frontend Development",
        frontDesc: "Master HTML, CSS, JavaScript and modern frameworks like React to build stunning user interfaces.",
        backDesc: "Learn responsive design, state management, and component-based architecture through real projects.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Backend Development",
        frontDesc: "Build robust server-side applications with Node.js, Express, and database technologies.",
        backDesc: "Master REST APIs, authentication, deployment, and server management with hands-on experience.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Full-Stack Mastery",
        frontDesc: "Combine frontend and backend skills to build complete, production-ready web applications.",
        backDesc: "Work on capstone projects that simulate real-world development scenarios and team workflows.",
        btn: "View Curriculum"
      }
    ],
    spotlightHeading: "Student Success: From Beginner to Developer",
    spotlightDesc: "Sarah started with zero coding experience and enrolled in our Full-Stack Web Development program. Through dedicated learning and project work, she built a portfolio of 15+ projects and landed her first developer job in just 6 months with a 40% salary increase.",
    spotlightDetails: [
      { label: "Background:", value: "Marketing Professional" },
      { label: "Program:", value: "Full-Stack Development" },
      { label: "Duration:", value: "6 Months" },
      { label: "Previous Experience:", value: "No Coding Background" }
    ],
    spotlightResults: [
      { value: "15+", label: "Projects Built" },
      { value: "40%", label: "Salary Increase" },
      { value: "6", label: "Months to First Job" }
    ],
    spotlightQuote: '"The project-based approach and mentor support helped me build real skills that employers value. I went from knowing nothing about code to getting multiple job offers."',
    spotlightAuthor: "- Sarah Chen, Junior Developer at TechCorp",
    processHeading: "Our Proven Learning Journey",
    processSubheading: "From fundamentals to advanced concepts, we guide you every step of the way to becoming a professional developer.",
    processSteps: [
      {
        step: "1",
        title: "Foundation Building",
        desc: "Start with HTML, CSS, and JavaScript fundamentals with interactive coding exercises and small projects."
      },
      {
        step: "2",
        title: "Framework Mastery",
        desc: "Learn React, Node.js, and modern development tools through guided projects and code reviews."
      },
      {
        step: "3",
        title: "Real Projects",
        desc: "Build full-stack applications that solve real problems and add to your professional portfolio."
      },
      {
        step: "4",
        title: "Career Launch",
        desc: "Get career coaching, interview preparation, and portfolio reviews to land your first developer role."
      }
    ],
    ctaHeading: "Ready to Start Your Developer Journey?",
    ctaDesc: "Join thousands of students who transformed their careers through our project-based web development programs.",
    ctaBtn: "Contact Us"
  },
  ar: {
    heroTitle: "إتقن تطوير الويب مع خبراء الصناعة",
    sectionTitle: "دورات تطوير الويب",
    sectionDesc: "منهجنا الشامل لتطوير الويب مصمم لتحويلك من مبتدئ إلى مطور جاهز للعمل. تعلم تقنيات حديثة مثل React وNode.js وMongoDB من خلال مشاريع عملية وتطبيقات واقعية. instructors ذوو خبرة صناعية يقدمون توجيهاً مخصصاً لمساعدتك في بناء portfolio قوي والحصول على وظيفة أحلامك في التكنولوجيا.",
    sectionList: [
      "تطوير JavaScript كامل المكدس",
      "React وأطر العمل الحديثة للواجهة الأمامية",
      "تطوير Node.js والخلفية",
      "تصميم قواعد البيانات وتكامل API"
    ],
    servicesHeading: "مسارات تعلم شاملة",
    cards: [
      {
        frontTitle: "تطوير الواجهة الأمامية",
        frontDesc: "أتقن HTML وCSS وJavaScript وأطر العمل الحديثة مثل React لبناء واجهات مستخدم مذهلة.",
        backDesc: "تعلم التصميم المتجاوب وإدارة الحالة والهندسة المعمارية القائمة على المكونات من خلال مشاريع حقيقية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "تطوير الخلفية",
        frontDesc: "ابن تطبيقات قوية للخادم باستخدام Node.js وExpress وتقنيات قواعد البيانات.",
        backDesc: "أتقن واجهات برمجة التطبيقات REST والمصادقة والنشر وإدارة الخوادم مع خبرة عملية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "الإتقان الكامل للمكدس",
        frontDesc: "اجمع مهارات الواجهة الأمامية والخلفية لبناء تطبيقات ويب كاملة وجاهزة للإنتاج.",
        backDesc: "اعمل على مشاريع تتويجية تحاكي سيناريوهات التطوير الواقعية وسير عمل الفريق.",
        btn: "عرض المنهج"
      }
    ],
    spotlightHeading: "نجاح الطالب: من مبتدئ إلى مطور",
    spotlightDesc: "بدأت سارة بدون خبرة في البرمجة والتحقت ببرنامجنا لتطوير الويب الكامل. من خلال التعلم المخصص والعمل على المشاريع، بنت portfolio لأكثر من 15 مشروعاً وحصلت على أول وظيفة مطورة في 6 أشهر فقط بزيادة راتب 40٪.",
    spotlightDetails: [
      { label: "الخلفية:", value: "متخصصة تسويق" },
      { label: "البرنامج:", value: "تطوير كامل المكدس" },
      { label: "المدة:", value: "6 أشهر" },
      { label: "الخبرة السابقة:", value: "لا توجد خلفية برمجة" }
    ],
    spotlightResults: [
      { value: "15+", label: "مشروع تم بناؤه" },
      { value: "40%", label: "زيادة الراتب" },
      { value: "6", label: "أشهر للوظيفة الأولى" }
    ],
    spotlightQuote: '"ساعدني النهج القائم على المشاريع ودعم المرشد في بناء مهارات حقيقية يقدرها أصحاب العمل. انتقلت من عدم معرفة أي شيء عن البرمجة إلى الحصول على عروض عمل متعددة."',
    spotlightAuthor: "- سارة تشين، مطورة مبتدئة في TechCorp",
    processHeading: "رحلة التعلم المثبتة لدينا",
    processSubheading: "من الأساسيات إلى المفاهيم المتقدمة، نرشدك في كل خطوة على طريق أن تصبح مطوراً محترفاً.",
    processSteps: [
      {
        step: "1",
        title: "بناء الأساس",
        desc: "ابدأ بأساسيات HTML وCSS وJavaScript مع تمارين برمجة تفاعلية ومشاريع صغيرة."
      },
      {
        step: "2",
        title: "إتقان الأطر",
        desc: "تعلم React وNode.js وأدوات التطوير الحديثة من خلال مشاريع موجهة ومراجعات الكود."
      },
      {
        step: "3",
        title: "مشاريع حقيقية",
        desc: "ابن تطبيقات كاملة المكدس تحل مشاكل حقيقية وتضيف إلى portfolio المهني الخاص بك."
      },
      {
        step: "4",
        title: "انطلاق المسيرة",
        desc: "احصل على تدريب مهني وتحضير للمقابلات ومراجعات portfolio للحصول على أول دور مطور."
      }
    ],
    ctaHeading: "جاهز لبدء رحلتك كمطور؟",
    ctaDesc: "انضم إلى آلاف الطلاب الذين غيروا مساراتهم المهنية من خلال برامجنا القائمة على المشاريع لتطوير الويب.",
    ctaBtn: "ابدأ التعلم الآن"
  },
  he: {
    heroTitle: "היה מפתח Full Stack עם מדריכים מומחים",
    sectionTitle: "קורסי פיתוח אתרים",
    sectionDesc: "תכנית הלימודים המקיפה שלנו לפיתוח אתרים נועדה להפוך אותך ממתחיל למפתח מוכן לעבודה. למד טכנולוגיות מודרניות כמו React, Node.js ו-MongoDB דרך פרויקטים מעשיים ויישומים בעולם האמיתי. המדריכים שלנו עם ניסיון בתעשייה מספקים הדרכה מותאמת אישית לעזור לך לבנות portfolio חזק ולהשיג עבודת חלום בטכנולוגיה.",
    sectionList: [
      "פיתוח Full Stack JavaScript",
      "React ומסגרות Frontend מודרניות",
      "Node.js ופיתוח Backend",
      "עיצוב מסדי נתונים ואינטגרציית API"
    ],
    servicesHeading: "מסלולי למידה מקיפים",
    cards: [
      {
        frontTitle: "פיתוח Frontend",
        frontDesc: "שלט ב-HTML, CSS, JavaScript ומסגרות מודרניות כמו React לבניית ממשקי משתמש מרהיבים.",
        backDesc: "למד עיצוב רספונסיבי, ניהול state וארכיטקטורה מבוססת קומפוננטות דרך פרויקטים אמיתיים.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "פיתוח Backend",
        frontDesc: "בנה אפליקציות server-side חזקות עם Node.js, Express וטכנולוגיות מסדי נתונים.",
        backDesc: "שלט ב-REST APIs, אימות, פריסה וניהול שרתים עם ניסיון מעשי.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "שליטה Full Stack",
        frontDesc: "שלב כישורי Frontend ו-Backend לבניית אפליקציות ווב מלאות ומוכנות ל-production.",
        backDesc: "עבוד על פרויקטי גמר המדמים תרחישי פיתוח אמיתיים ותהליכי עבודה בצוות.",
        btn: "צפה בסילבוס"
      }
    ],
    spotlightHeading: "הצלחת סטודנטית: ממתחילה למפתחת",
    spotlightDesc: "שרה התחילה ללא ניסיון קודם בתכנות והצטרפה לתכנית ה-Full Stack שלנו. דרך למידה מסורה ועבודה על פרויקטים, היא בנתה portfolio של 15+ פרויקטים והשיגה את עבודת הפיתוח הראשונה שלה תוך 6 חודשים בלבד עם עלייה של 40% במשכורת.",
    spotlightDetails: [
      { label: "רקע:", value: "מקצועית בשיווק" },
      { label: "תכנית:", value: "Full Stack Development" },
      { label: "משך:", value: "6 חודשים" },
      { label: "ניסיון קודם:", value: "ללא רקע בתכנות" }
    ],
    spotlightResults: [
      { value: "15+", label: "פרויקטים שנבנו" },
      { value: "40%", label: "עלייה במשכורת" },
      { value: "6", label: "חודשים לעבודה הראשונה" }
    ],
    spotlightQuote: '"הגישה מבוססת הפרויקטים והתמיכה של המנטורים עזרו לי לבנות כישורים אמיתיים שמעסיקים מעריכים. עברתי מלא לדעת קוד לקבלת מספר הצעות עבודה."',
    spotlightAuthor: "- שרה צ׳ן, מפתחת זוטרה ב-TechCorp",
    processHeading: "מסע הלמידה המוכח שלנו",
    processSubheading: "מיסודות ועד קונספטים מתקדמים, אנחנו מדריכים אותך בכל צעד בדרך להפוך למפתח מקצועי.",
    processSteps: [
      {
        step: "1",
        title: "בניית יסודות",
        desc: "התחל עם יסודות HTML, CSS ו-JavaScript עם תרגילי קוד אינטראקטיביים ופרויקטים קטנים."
      },
      {
        step: "2",
        title: "שליטה במסגרות",
        desc: "למד React, Node.js וכלי פיתוח מודרניים דרך פרויקטים מודרכים ובדיקות קוד."
      },
      {
        step: "3",
        title: "פרויקטים אמיתיים",
        desc: "בנה אפליקציות Full Stack שפותרות בעיות אמיתיות ומוסיפות ל-Portfolio המקצועי שלך."
      },
      {
        step: "4",
        title: "השקה קרייריסטית",
        desc: "קבל אימון קריירה, הכנה לראיונות ובדיקות Portfolio להשגת התפקיד הראשון כמפתח."
      }
    ],
    ctaHeading: "מוכן להתחיל את המסע כמפתח?",
    ctaDesc: "הצטרף לאלפי סטודנטים ששינו את הקריירה שלהם דרך תכניות הפיתוח מבוססות הפרויקטים שלנו.",
    ctaBtn: "התחל ללמוד עכשיו"
  }
};

const Webdevelopment = () => {
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
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-black text-white" : "bg-white text-black"
    }`}>
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
            {language === 'en' && "Become a Full-Stack Developer in 6 Months"}
            {language === 'ar' && "كن مطور ويب كامل المكدس في 6 أشهر"}
            {language === 'he' && "הפוך למפתח Full Stack תוך 6 חודשים"}
          </p>
         
        </div>
      </div>

      {/* Web Development Courses Section */}
      <section className={`py-16 dark:bg-black bg-white`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.sectionTitle}</h2>
              <p className={`text-lg mb-6 leading-relaxed dark:text-white`}>
                {t.sectionDesc}
              </p>
              <ul className="space-y-3">
                {t.sectionList.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`text-sky-500 mr-3 mt-1 dark:text-white`}>✓</span>
                    <span className={`dark:text-white`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section with Flip Cards */}
      <section className={`py-10 `}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.servicesHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.cards.map((card, idx) => (
              <div 
                key={idx}
                className="relative min-h-[280px] cursor-pointer"
                onClick={() => handleCardFlip(idx)}
              >
                <div className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
                  flippedCards.includes(idx) ? 'rotate-y-180 opacity-0' : 'opacity-100'
                }`}>
                  <div className={`h-full rounded-2xl p-4 flex flex-col items-center justify-start text-center border-2 ${
                    darkMode ? "bg-gray-800 border-sky-500" : "bg-sky-50 border-sky-200"
                  }`}>
                    {idx === 0 && <FaCode className="text-4xl text-sky-500 mb-3 mt-2" />}
                    {idx === 1 && <FaLaptopCode className="text-4xl text-sky-600 mb-3 mt-2" />}
                    {idx === 2 && <FaGraduationCap className="text-4xl text-sky-500 mb-3 mt-2" />}
                    <h3 className="text-lg font-bold mb-3">{card.frontTitle}</h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {card.frontDesc}
                    </p>
                    
                  </div>
                </div>
                
                <div className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
                  flippedCards.includes(idx) ? 'opacity-100' : 'rotate-y-180 opacity-0'
                }`}>
                  <div className={`h-full rounded-2xl p-4 flex flex-col items-center justify-center text-center ${
                    darkMode ? "bg-sky-600" : "bg-sky-600 text-white"
                  }`}>
                    <p className="text-sm leading-relaxed mb-4">{card.backDesc}</p>
                   
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
                <video
                  src={video}
                  alt="Student coding journey"
                  autoPlay
                  loop
                  muted
                  playsInline
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
            {language === 'en' && "7-day free trial • No credit card required • Career support included"}
            {language === 'ar' && "نسخة تجريبية مجانية لمدة 7 أيام • لا حاجة لبطاقة ائتمان • دعم مهني مضمون"}
            {language === 'he' && "ניסיון חינם ל-7 ימים • אין צורך בכרטיס אשראי • תמיכה קרייריסטית כלולה"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Webdevelopment;