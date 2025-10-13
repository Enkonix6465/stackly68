import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaShieldAlt, FaLock, FaEye } from 'react-icons/fa';
import video from "../images/cybersecurity.mp4"

const translations = {
  en: {
    heroTitle: "Master Cybersecurity with Industry Experts",
    sectionTitle: "Cybersecurity Courses",
    sectionDesc: "Our comprehensive cybersecurity curriculum is designed to take you from beginner to job-ready security professional. Learn critical security technologies like ethical hacking, network security, and incident response through hands-on labs and real-world scenarios. Our industry-experienced instructors provide personalized guidance to help you build a strong security portfolio and land your dream cybersecurity job.",
    sectionList: [
      "Ethical Hacking & Penetration Testing",
      "Network Security & Firewall Management",
      "Incident Response & Digital Forensics",
      "Security Compliance & Risk Management"
    ],
    servicesHeading: "Comprehensive Learning Paths",
    cards: [
      {
        frontTitle: "Ethical Hacking",
        frontDesc: "Master penetration testing, vulnerability assessment, and ethical hacking techniques to identify security weaknesses.",
        backDesc: "Learn Kali Linux, Metasploit, Burp Suite, and advanced attack vectors through hands-on lab exercises.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Network Security",
        frontDesc: "Build secure network infrastructures with firewalls, VPNs, and intrusion detection systems.",
        backDesc: "Master network protocols, security architecture, and threat detection with real-world configurations.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Security Operations",
        frontDesc: "Develop incident response skills, digital forensics, and security monitoring capabilities.",
        backDesc: "Work on SOC operations, threat hunting, and security incident management through practical scenarios.",
        btn: "View Curriculum"
      }
    ],
    spotlightHeading: "Student Success: From Beginner to Security Analyst",
    spotlightDesc: "David started with no cybersecurity experience and enrolled in our comprehensive Cybersecurity program. Through dedicated learning and hands-on labs, he built a portfolio of security projects and landed his first security analyst role in just 10 months with a 70% salary increase.",
    spotlightDetails: [
      { label: "Background:", value: "IT Support Technician" },
      { label: "Program:", value: "Cybersecurity Specialist" },
      { label: "Duration:", value: "10 Months" },
      { label: "Previous Experience:", value: "Basic IT Knowledge" }
    ],
    spotlightResults: [
      { value: "10+", label: "Security Labs Completed" },
      { value: "70%", label: "Salary Increase" },
      { value: "10", label: "Months to First Job" }
    ],
    spotlightQuote: "The hands-on approach with real security tools and threat scenarios helped me build practical skills that employers desperately need. I went from basic IT support to leading security incident response at my company.",
    spotlightAuthor: "- David Kim, Security Analyst at SecureTech",
    processHeading: "Our Proven Learning Journey",
    processSubheading: "From security fundamentals to advanced threat detection, we guide you every step of the way to becoming a professional cybersecurity expert.",
    processSteps: [
      {
        step: "1",
        title: "Security Fundamentals",
        desc: "Start with cybersecurity principles, threat landscapes, and security frameworks through interactive learning."
      },
      {
        step: "2",
        title: "Hands-On Labs",
        desc: "Learn ethical hacking, network security, and incident response through guided lab exercises and simulations."
      },
      {
        step: "3",
        title: "Real Security Projects",
        desc: "Build complete security assessments and incident response plans that solve real problems and add to your portfolio."
      },
      {
        step: "4",
        title: "Career Launch",
        desc: "Get career coaching, security certifications guidance, and interview preparation to land your first cybersecurity role."
      }
    ],
    ctaHeading: "Ready to Start Your Cybersecurity Journey?",
    ctaDesc: "Join thousands of students who transformed their careers through our project-based cybersecurity programs.",
    ctaBtn: "Contact Us"
  },
  ar: {
    heroTitle: "إتقن الأمن السيبراني مع خبراء الصناعة",
    sectionTitle: "دورات الأمن السيبراني",
    sectionDesc: "منهجنا الشامل للأمن السيبراني مصمم لتحويلك من مبتدئ إلى محترف أمان جاهز للعمل. تعلم تقنيات الأمان الحيوية مثل القرصنة الأخلاقية وأمان الشبكات والاستجابة للحوادث من خلال مختبرات عملية وسيناريوهات واقعية. مدرسونا ذوو الخبرة الصناعية يقدمون توجيهاً مخصصاً لمساعدتك في بناء portfolio قوي للأمان والحصول على وظيفة أحلامك في الأمن السيبراني.",
    sectionList: [
      "القرصنة الأخلاقية واختبار الاختراق",
      "أمان الشبكات وإدارة جدران الحماية",
      "الاستجابة للحوادث والطب الشرعي الرقمي",
      "امتثال الأمان وإدارة المخاطر"
    ],
    servicesHeading: "مسارات تعلم شاملة",
    cards: [
      {
        frontTitle: "القرصنة الأخلاقية",
        frontDesc: "أتقن اختبار الاختراق وتقييم الثغرات وتقنيات القرصنة الأخلاقية لتحديد نقاط الضعف الأمنية.",
        backDesc: "تعلم Kali Linux وMetasploit وBurp Suite ومتجهات الهجوم المتقدمة من خلال تمارين مختبرية عملية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "أمان الشبكات",
        frontDesc: "ابن بنى تحتية شبكة آمنة مع جدران الحماية وVPN وأنظمة كشف التسلل.",
        backDesc: "أتقن بروتوكولات الشبكة وهندسة الأمان وكشف التهديدات مع تكوينات واقعية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "عمليات الأمان",
        frontDesc: "طور مهارات الاستجابة للحوادث والطب الشرعي الرقمي وقدرات مراقبة الأمان.",
        backDesc: "اعمل على عمليات SOC وصيد التهديدات وإدارة حوادث الأمان من خلال سيناريوهات عملية.",
        btn: "عرض المنهج"
      }
    ],
    spotlightHeading: "نجاح الطالب: من مبتدئ إلى محلل أمان",
    spotlightDesc: "بدأ ديفيد بدون خبرة في الأمن السيبراني والتحق ببرنامجنا الشامل للأمن السيبراني. من خلال التعلم المخصص والمختبرات العملية، بنى portfolio من مشاريع الأمان وحصل على أول دور محلل أمان في 10 أشهر فقط بزيادة راتب 70٪.",
    spotlightDetails: [
      { label: "الخلفية:", value: "فني دعم تقني" },
      { label: "البرنامج:", value: "متخصص الأمن السيبراني" },
      { label: "المدة:", value: "10 أشهر" },
      { label: "الخبرة السابقة:", value: "معرفة تقنية أساسية" }
    ],
    spotlightResults: [
      { value: "10+", label: "مختبر أمان مكتمل" },
      { value: "70%", label: "زيادة الراتب" },
      { value: "10", label: "أشهر للوظيفة الأولى" }
    ],
    spotlightQuote: "ساعدني النهج العملي مع أدوات الأمان الحقيقية وسيناريوهات التهديد في بناء مهارات عملية يحتاجها أصحاب العمل بشدة. انتقلت من الدعم التقني الأساسي إلى قيادة الاستجابة لحوادث الأمان في شركتي.",
    spotlightAuthor: "- ديفيد كيم، محلل أمان في SecureTech",
    processHeading: "رحلة التعلم المثبتة لدينا",
    processSubheading: "من أساسيات الأمان إلى كشف التهديدات المتقدمة، نرشدك في كل خطوة على طريق أن تصبح خبير أمن سيبراني محترف.",
    processSteps: [
      {
        step: "1",
        title: "أساسيات الأمان",
        desc: "ابدأ بمبادئ الأمن السيبراني ومشهد التهديدات وأطر الأمان من خلال التعلم التفاعلي."
      },
      {
        step: "2",
        title: "مختبرات عملية",
        desc: "تعلم القرصنة الأخلاقية وأمان الشبكات والاستجابة للحوادث من خلال تمارين مختبرية موجهة ومحاكيات."
      },
      {
        step: "3",
        title: "مشاريع أمان حقيقية",
        desc: "ابن تقييمات أمنية كاملة وخطط الاستجابة للحوادث تحل مشاكل حقيقية وتضيف إلى portfolio الخاص بك."
      },
      {
        step: "4",
        title: "انطلاق المسيرة",
        desc: "احصل على تدريب مهني وإرشاد شهادات الأمان وتحضير للمقابلات للحصول على أول دور أمن سيبراني."
      }
    ],
    ctaHeading: "جاهز لبدء رحلتك في الأمن السيبراني؟",
    ctaDesc: "انضم إلى آلاف الطلاب الذين غيروا مساراتهم المهنية من خلال برامجنا القائمة على المشاريع للأمن السيبراني.",
    ctaBtn: "ابدأ التعلم الآن"
  },
  he: {
    heroTitle: "היה מומחה אבטחת סייבר עם מדריכים מובילים",
    sectionTitle: "קורסי אבטחת סייבר",
    sectionDesc: "תכנית הלימודים המקיפה שלנו לאבטחת סייבר נועדה להפוך אותך ממתחיל למקצועי אבטחה מוכן לעבודה. למד טכנולוגיות אבטחה קריטיות כמו האקינג אתי, אבטחת רשתות ותגובה לאירועים דרך מעבדות מעשיות ותרחישים אמיתיים. המדריכים שלנו עם ניסיון בתעשייה מספקים הדרכה מותאמת אישית לעזור לך לבנות portfolio חזק באבטחה ולהשיג עבודת חלום באבטחת סייבר.",
    sectionList: [
      "האקינג אתי ובדיקות חדירה",
      "אבטחת רשתות וניהול חומות אש",
      "תגובה לאירועים ומחקר דיגיטלי",
      "ציות אבטחה וניהול סיכונים"
    ],
    servicesHeading: "מסלולי למידה מקיפים",
    cards: [
      {
        frontTitle: "האקינג אתי",
        frontDesc: "שלט בבדיקות חדירה, הערכת פגיעות וטכניקות האקינג אתי לזיהוי חולשות אבטחה.",
        backDesc: "למד Kali Linux, Metasploit, Burp Suite ווקטורי תקיפה מתקדמים דרך תרגילי מעבדה מעשיים.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "אבטחת רשתות",
        frontDesc: "בנה תשתיות רשת מאובטחות עם חומות אש, VPN ומערכות זיהוי חדירות.",
        backDesc: "שלט בפרוטוקולי רשת, ארכיטקטורת אבטחה וזיהוי איומים עם תצורות אמיתיות.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "פעולות אבטחה",
        frontDesc: "פתח כישורי תגובה לאירועים, מחקר דיגיטלי ויכולות ניטור אבטחה.",
        backDesc: "עבוד על פעולות SOC, ציד איומים וניהול אירועי אבטחה דרך תרחישים מעשיים.",
        btn: "צפה בסילבוס"
      }
    ],
    spotlightHeading: "הצלחת סטודנט: ממתחיל לאנליסט אבטחה",
    spotlightDesc: "דייוויד התחיל ללא ניסיון באבטחת סייבר והצטרף לתכנית האבטחת סייבר המקיפה שלנו. דרך למידה מסורה ומעבדות מעשיות, הוא בנה portfolio של פרויקטי אבטחה והשיג את התפקיד הראשון כאנליסט אבטחה תוך 10 חודשים בלבד עם עלייה של 70% במשכורת.",
    spotlightDetails: [
      { label: "רקע:", value: "טכנאי תמיכה טכנית" },
      { label: "תכנית:", value: "מומחה אבטחת סייבר" },
      { label: "משך:", value: "10 חודשים" },
      { label: "ניסיון קודם:", value: "ידע טכני בסיסי" }
    ],
    spotlightResults: [
      { value: "10+", label: "מעבדות אבטחה הושלמו" },
      { value: "70%", label: "עלייה במשכורת" },
      { value: "10", label: "חודשים לעבודה הראשונה" }
    ],
    spotlightQuote: "הגישה המעשית עם כלי אבטחה אמיתיים ותרחישי איומים עזרה לי לבנות כישורים פרקטיים שמעסיקים זקוקים להם נואשות. עברתי מתמיכה טכנית בסיסית להובלת תגובת אירועי אבטחה בחברה שלי.",
    spotlightAuthor: "- דייוויד קים, אנליסט אבטחה ב-SecureTech",
    processHeading: "מסע הלמידה המוכח שלנו",
    processSubheading: "מיסודות אבטחה ועד זיהוי איומים מתקדם, אנחנו מדריכים אותך בכל צעד בדרך להפוך למומחה אבטחת סייבר מקצועי.",
    processSteps: [
      {
        step: "1",
        title: "יסודות אבטחה",
        desc: "התחל עם עקרונות אבטחת סייבר, נוף איומים ומסגרות אבטחה דרך למידה אינטראקטיבית."
      },
      {
        step: "2",
        title: "מעבדות מעשיות",
        desc: "למד האקינג אתי, אבטחת רשתות ותגובה לאירועים דרך תרגילי מעבדה מודרכים וסימולציות."
      },
      {
        step: "3",
        title: "פרויקטי אבטחה אמיתיים",
        desc: "בנה הערכות אבטחה מלאות ותוכניות תגובה לאירועים שפותרות בעיות אמיתיות ומוסיפות ל-Portfolio שלך."
      },
      {
        step: "4",
        title: "השקה קרייריסטית",
        desc: "קבל אימון קריירה, הדרכת הסמכות אבטחה והכנה לראיונות להשגת התפקיד הראשון באבטחת סייבר."
      }
    ],
    ctaHeading: "מוכן להתחיל את המסע באבטחת סייבר?",
    ctaDesc: "הצטרף לאלפי סטודנטים ששינו את הקריירה שלהם דרך תכניות אבטחת הסייבר מבוססות הפרויקטים שלנו.",
    ctaBtn: "התחל ללמוד עכשיו"
  }
};

const CyberSecurity = () => {
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
            {language === 'en' && "Become a Cybersecurity Professional in 10 Months"}
            {language === 'ar' && "كن محترف أمن سيبراني في 10 أشهر"}
            {language === 'he' && "הפוך למקצועי אבטחת סייבר תוך 10 חודשים"}
          </p>
        </div>
      </div>

      {/* Cybersecurity Courses Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="Cybersecurity operations"
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
                    {idx === 0 && <FaShieldAlt className="text-5xl text-sky-500 mb-4" />}
                    {idx === 1 && <FaLock className="text-5xl text-sky-600 mb-4" />}
                    {idx === 2 && <FaEye className="text-5xl text-sky-500 mb-4" />}
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
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Security analyst working"
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
            {language === 'en' && "Hands-on labs • Industry certifications • Real security tools training"}
            {language === 'ar' && "مختبرات عملية • شهادات صناعية • تدريب على أدوات الأمان الحقيقية"}
            {language === 'he' && "מעבדות מעשיות • הסמכות תעשייתיות • הכשרה על כלי אבטחה אמיתיים"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;
