import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaMobileAlt, FaAndroid, FaApple } from 'react-icons/fa';
import video from "../images/mobile.mp4"

const translations = {
  en: {
    heroTitle: "Master Mobile Development with Industry Experts",
    sectionTitle: "Mobile Development Courses",
    sectionDesc: "Our comprehensive mobile development curriculum is designed to take you from beginner to job-ready mobile developer. Learn cutting-edge technologies like React Native, Flutter, and native iOS/Android development through hands-on projects and real-world app development. Our industry-experienced instructors provide personalized guidance to help you build a strong mobile app portfolio and land your dream mobile development job.",
    sectionList: [
      "React Native & Cross-Platform Development",
      "Native iOS Development with Swift",
      "Native Android Development with Kotlin",
      "Flutter & Dart Programming"
    ],
    servicesHeading: "Comprehensive Learning Paths",
    cards: [
      {
        frontTitle: "Cross-Platform Development",
        frontDesc: "Master React Native and Flutter to build apps that work seamlessly on both iOS and Android platforms.",
        backDesc: "Learn component architecture, state management, and deployment strategies for cross-platform mobile apps.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "iOS Development",
        frontDesc: "Build native iOS applications using Swift, Xcode, and Apple's latest frameworks and design guidelines.",
        backDesc: "Master SwiftUI, Core Data, push notifications, and App Store deployment with hands-on projects.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Android Development",
        frontDesc: "Create powerful Android apps using Kotlin, Android Studio, and Google's modern development tools.",
        backDesc: "Work on real Android projects with Material Design, Jetpack Compose, and Google Play Store publishing.",
        btn: "View Curriculum"
      }
    ],
    spotlightHeading: "Student Success: From Beginner to Mobile Developer",
    spotlightDesc: "Alex started with no mobile development experience and enrolled in our comprehensive Mobile Development program. Through dedicated learning and app projects, he built a portfolio of 8+ mobile apps and landed his first mobile developer role in just 9 months with a 50% salary increase.",
    spotlightDetails: [
      { label: "Background:", value: "Web Developer" },
      { label: "Program:", value: "Mobile Development Mastery" },
      { label: "Duration:", value: "9 Months" },
      { label: "Previous Experience:", value: "Web Development Only" }
    ],
    spotlightResults: [
      { value: "8+", label: "Mobile Apps Built" },
      { value: "50%", label: "Salary Increase" },
      { value: "9", label: "Months to First Job" }
    ],
    spotlightQuote: "The hands-on approach with real app development and mentor guidance helped me transition from web to mobile seamlessly. I now lead mobile development at my company and have apps with thousands of users.",
    spotlightAuthor: "- Alex Thompson, Senior Mobile Developer at AppTech",
    processHeading: "Our Proven Learning Journey",
    processSubheading: "From mobile fundamentals to advanced app development, we guide you every step of the way to becoming a professional mobile developer.",
    processSteps: [
      {
        step: "1",
        title: "Mobile Fundamentals",
        desc: "Start with mobile UI/UX principles, platform guidelines, and basic app development concepts."
      },
      {
        step: "2",
        title: "Platform Mastery",
        desc: "Learn React Native, Flutter, or native development through guided projects and code reviews."
      },
      {
        step: "3",
        title: "Real App Projects",
        desc: "Build complete mobile applications that solve real problems and add to your professional portfolio."
      },
      {
        step: "4",
        title: "Career Launch",
        desc: "Get career coaching, portfolio reviews, and interview preparation to land your first mobile developer role."
      }
    ],
    ctaHeading: "Ready to Start Your Mobile Development Journey?",
    ctaDesc: "Join thousands of students who transformed their careers through our project-based mobile development programs.",
    ctaBtn: "Contact Us"
  },
  ar: {
    heroTitle: "إتقن تطوير تطبيقات الهاتف المحمول مع خبراء الصناعة",
    sectionTitle: "دورات تطوير تطبيقات الهاتف المحمول",
    sectionDesc: "منهجنا الشامل لتطوير تطبيقات الهاتف المحمول مصمم لتحويلك من مبتدئ إلى مطور تطبيقات جاهز للعمل. تعلم تقنيات متطورة مثل React Native وFlutter وتطوير iOS/Android الأصلي من خلال مشاريع عملية وتطوير تطبيقات حقيقية. مدرسونا ذوو الخبرة الصناعية يقدمون توجيهاً مخصصاً لمساعدتك في بناء portfolio قوي لتطبيقات المحمول والحصول على وظيفة أحلامك في تطوير التطبيقات.",
    sectionList: [
      "React Native وتطوير متعدد المنصات",
      "تطوير iOS الأصلي مع Swift",
      "تطوير Android الأصلي مع Kotlin",
      "برمجة Flutter وDart"
    ],
    servicesHeading: "مسارات تعلم شاملة",
    cards: [
      {
        frontTitle: "تطوير متعدد المنصات",
        frontDesc: "أتقن React Native وFlutter لبناء تطبيقات تعمل بسلاسة على منصتي iOS وAndroid.",
        backDesc: "تعلم هندسة المكونات وإدارة الحالة واستراتيجيات النشر للتطبيقات متعددة المنصات.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "تطوير iOS",
        frontDesc: "ابن تطبيقات iOS أصلية باستخدام Swift وXcode وأحدث أطر عمل Apple ومبادئ التصميم.",
        backDesc: "أتقن SwiftUI وCore Data والإشعارات الفورية ونشر App Store مع مشاريع عملية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "تطوير Android",
        frontDesc: "أنشئ تطبيقات Android قوية باستخدام Kotlin وAndroid Studio وأدوات التطوير الحديثة من Google.",
        backDesc: "اعمل على مشاريع Android حقيقية مع Material Design وJetpack Compose ونشر Google Play Store.",
        btn: "عرض المنهج"
      }
    ],
    spotlightHeading: "نجاح الطالب: من مبتدئ إلى مطور تطبيقات محمول",
    spotlightDesc: "بدأ أليكس بدون خبرة في تطوير تطبيقات الهاتف المحمول والتحق ببرنامجنا الشامل لتطوير التطبيقات المحمولة. من خلال التعلم المخصص ومشاريع التطبيقات، بنى portfolio من أكثر من 8 تطبيقات محمولة وحصل على أول دور مطور تطبيقات في 9 أشهر فقط بزيادة راتب 50٪.",
    spotlightDetails: [
      { label: "الخلفية:", value: "مطور ويب" },
      { label: "البرنامج:", value: "إتقان تطوير التطبيقات المحمولة" },
      { label: "المدة:", value: "9 أشهر" },
      { label: "الخبرة السابقة:", value: "تطوير الويب فقط" }
    ],
    spotlightResults: [
      { value: "8+", label: "تطبيق محمول تم بناؤه" },
      { value: "50%", label: "زيادة الراتب" },
      { value: "9", label: "أشهر للوظيفة الأولى" }
    ],
    spotlightQuote: "ساعدني النهج العملي مع تطوير التطبيقات الحقيقية وتوجيه المرشد في الانتقال من الويب إلى المحمول بسلاسة. أقود الآن تطوير التطبيقات المحمولة في شركتي ولدي تطبيقات بآلاف المستخدمين.",
    spotlightAuthor: "- أليكس تومسون، مطور تطبيقات محمول أول في AppTech",
    processHeading: "رحلة التعلم المثبتة لدينا",
    processSubheading: "من أساسيات الهاتف المحمول إلى تطوير التطبيقات المتقدمة، نرشدك في كل خطوة على طريق أن تصبح مطور تطبيقات محمول محترف.",
    processSteps: [
      {
        step: "1",
        title: "أساسيات الهاتف المحمول",
        desc: "ابدأ بمبادئ واجهة المستخدم/تجربة المستخدم للهاتف المحمول ومبادئ المنصة ومفاهيم تطوير التطبيقات الأساسية."
      },
      {
        step: "2",
        title: "إتقان المنصة",
        desc: "تعلم React Native أو Flutter أو التطوير الأصلي من خلال مشاريع موجهة ومراجعات الكود."
      },
      {
        step: "3",
        title: "مشاريع تطبيقات حقيقية",
        desc: "ابن تطبيقات محمولة كاملة تحل مشاكل حقيقية وتضيف إلى portfolio المهني الخاص بك."
      },
      {
        step: "4",
        title: "انطلاق المسيرة",
        desc: "احصل على تدريب مهني ومراجعات portfolio وتحضير للمقابلات للحصول على أول دور مطور تطبيقات محمول."
      }
    ],
    ctaHeading: "جاهز لبدء رحلتك في تطوير التطبيقات المحمولة؟",
    ctaDesc: "انضم إلى آلاف الطلاب الذين غيروا مساراتهم المهنية من خلال برامجنا القائمة على المشاريع لتطوير التطبيقات المحمولة.",
    ctaBtn: "ابدأ التعلم الآن"
  },
  he: {
    heroTitle: "היה מפתח אפליקציות מובייל עם מדריכים מומחים",
    sectionTitle: "קורסי פיתוח אפליקציות מובייל",
    sectionDesc: "תכנית הלימודים המקיפה שלנו לפיתוח אפליקציות מובייל נועדה להפוך אותך ממתחיל למפתח אפליקציות מוכן לעבודה. למד טכנולוגיות חדישות כמו React Native, Flutter ופיתוח iOS/Android נייטיבי דרך פרויקטים מעשיים ופיתוח אפליקציות אמיתיות. המדריכים שלנו עם ניסיון בתעשייה מספקים הדרכה מותאמת אישית לעזור לך לבנות portfolio חזק של אפליקציות מובייל ולהשיג עבודת חלום בפיתוח אפליקציות.",
    sectionList: [
      "React Native ופיתוח חוצה פלטפורמות",
      "פיתוח iOS נייטיבי עם Swift",
      "פיתוח Android נייטיבי עם Kotlin",
      "תכנות Flutter ו-Dart"
    ],
    servicesHeading: "מסלולי למידה מקיפים",
    cards: [
      {
        frontTitle: "פיתוח חוצה פלטפורמות",
        frontDesc: "שלט ב-React Native ו-Flutter לבניית אפליקציות שעובדות בצורה חלקה על פלטפורמות iOS ו-Android.",
        backDesc: "למד ארכיטקטורת קומפוננטים, ניהול state ואסטרטגיות פריסה לאפליקציות חוצות פלטפורמות.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "פיתוח iOS",
        frontDesc: "בנה אפליקציות iOS נייטיביות באמצעות Swift, Xcode ומסגרות העבודה והעיצוב העדכניות של Apple.",
        backDesc: "שלט ב-SwiftUI, Core Data, התראות push ופריסת App Store עם פרויקטים מעשיים.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "פיתוח Android",
        frontDesc: "צור אפליקציות Android חזקות באמצעות Kotlin, Android Studio וכלי הפיתוח המודרניים של Google.",
        backDesc: "עבוד על פרויקטי Android אמיתיים עם Material Design, Jetpack Compose ופרסום ב-Google Play Store.",
        btn: "צפה בסילבוס"
      }
    ],
    spotlightHeading: "הצלחת סטודנט: ממתחיל למפתח אפליקציות מובייל",
    spotlightDesc: "אלכס התחיל ללא ניסיון בפיתוח אפליקציות מובייל והצטרף לתכנית הפיתוח מובייל המקיפה שלנו. דרך למידה מסורה ופרויקטי אפליקציות, הוא בנה portfolio של 8+ אפליקציות מובייל והשיג את התפקיד הראשון כמפתח מובייל תוך 9 חודשים בלבד עם עלייה של 50% במשכורת.",
    spotlightDetails: [
      { label: "רקע:", value: "מפתח אתרים" },
      { label: "תכנית:", value: "שליטה בפיתוח מובייל" },
      { label: "משך:", value: "9 חודשים" },
      { label: "ניסיון קודם:", value: "פיתוח אתרים בלבד" }
    ],
    spotlightResults: [
      { value: "8+", label: "אפליקציות מובייל שנבנו" },
      { value: "50%", label: "עלייה במשכורת" },
      { value: "9", label: "חודשים לעבודה הראשונה" }
    ],
    spotlightQuote: "הגישה המעשית עם פיתוח אפליקציות אמיתיות והדרכת מנטורים עזרה לי לעבור מאתרים למובייל בצורה חלקה. אני מוביל כעת פיתוח מובייל בחברה שלי ויש לי אפליקציות עם אלפי משתמשים.",
    spotlightAuthor: "- אלכס תומפסון, מפתח מובייל בכיר ב-AppTech",
    processHeading: "מסע הלמידה המוכח שלנו",
    processSubheading: "מיסודות מובייל ועד פיתוח אפליקציות מתקדם, אנחנו מדריכים אותך בכל צעד בדרך להפוך למפתח מובייל מקצועי.",
    processSteps: [
      {
        step: "1",
        title: "יסודות מובייל",
        desc: "התחל עם עקרונות UI/UX למובייל, הנחיות פלטפורמה וקונספטים בסיסיים לפיתוח אפליקציות."
      },
      {
        step: "2",
        title: "שליטה בפלטפורמה",
        desc: "למד React Native, Flutter או פיתוח נייטיבי דרך פרויקטים מודרכים ובדיקות קוד."
      },
      {
        step: "3",
        title: "פרויקטי אפליקציות אמיתיות",
        desc: "בנה אפליקציות מובייל מלאות שפותרות בעיות אמיתיות ומוסיפות ל-Portfolio המקצועי שלך."
      },
      {
        step: "4",
        title: "השקה קרייריסטית",
        desc: "קבל אימון קריירה, בדיקות Portfolio והכנה לראיונות להשגת התפקיד הראשון כמפתח מובייל."
      }
    ],
    ctaHeading: "מוכן להתחיל את המסע בפיתוח מובייל?",
    ctaDesc: "הצטרף לאלפי סטודנטים ששינו את הקריירה שלהם דרך תכניות פיתוח מובייל מבוססות הפרויקטים שלנו.",
    ctaBtn: "התחל ללמוד עכשיו"
  }
};

const Mobiledevelopment = () => {
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
            {language === 'en' && "Become a Mobile Developer in 9 Months"}
            {language === 'ar' && "كن مطور تطبيقات محمول في 9 أشهر"}
            {language === 'he' && "הפוך למפתח מובייל תוך 9 חודשים"}
          </p>
        </div>
      </div>

      {/* Mobile Development Courses Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Mobile app development"
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
                    {idx === 0 && <FaMobileAlt className="text-5xl text-sky-500 mb-4" />}
                    {idx === 1 && <FaApple className="text-5xl text-sky-600 mb-4" />}
                    {idx === 2 && <FaAndroid className="text-5xl text-sky-500 mb-4" />}
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
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                  alt="Mobile developer working"
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
            {language === 'en' && "App Store & Play Store guidance • Device testing included • Industry mentorship"}
            {language === 'ar' && "إرشاد App Store وPlay Store • اختبار الأجهزة مضمون • إرشاد صناعي"}
            {language === 'he' && "הדרכת App Store ו-Play Store • בדיקות מכשירים כלולות • מנטורינג תעשייתי"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mobiledevelopment;
