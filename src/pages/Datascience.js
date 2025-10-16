import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaChartBar, FaDatabase, FaBrain } from 'react-icons/fa';
import video from "../images/datascience.mp4"
import image from "../images/lmss2.jpg"
const translations = {
  en: {
    heroTitle: "Master Data Science with Industry Experts",
    sectionTitle: "Data Science Courses",
    sectionDesc: "Our comprehensive data science curriculum is designed to take you from beginner to job-ready data scientist. Learn cutting-edge technologies like Python, Machine Learning, and Big Data through hands-on projects and real-world datasets. Our industry-experienced instructors provide personalized guidance to help you build a strong portfolio and land your dream data science job.",
    sectionList: [
      "Python Programming & Data Analysis",
      "Machine Learning & AI Algorithms",
      "Deep Learning & Neural Networks",
      "Big Data & Cloud Computing"
    ],
    servicesHeading: "Comprehensive Learning Paths",
    cards: [
      {
        frontTitle: "Data Analysis",
        frontDesc: "Master Python, Pandas, NumPy and visualization tools to extract insights from complex datasets.",
        backDesc: "Learn statistical analysis, data cleaning, and visualization techniques through real business datasets.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "Machine Learning",
        frontDesc: "Build predictive models using scikit-learn, TensorFlow, and advanced ML algorithms.",
        backDesc: "Master supervised and unsupervised learning, model evaluation, and deployment strategies.",
        btn: "View Curriculum"
      },
      {
        frontTitle: "AI & Deep Learning",
        frontDesc: "Develop neural networks and AI applications using TensorFlow, PyTorch, and advanced frameworks.",
        backDesc: "Work on computer vision, NLP, and deep learning projects that solve real-world problems.",
        btn: "View Curriculum"
      }
    ],
    spotlightHeading: "Student Success: From Analyst to Data Scientist",
    spotlightDesc: "Michael started as a business analyst with basic Excel skills and enrolled in our comprehensive Data Science program. Through dedicated learning and hands-on projects, he built a portfolio of 20+ data science projects and landed his first data scientist role in just 8 months with a 60% salary increase.",
    spotlightDetails: [
      { label: "Background:", value: "Business Analyst" },
      { label: "Program:", value: "Data Science Mastery" },
      { label: "Duration:", value: "8 Months" },
      { label: "Previous Experience:", value: "Excel & Basic SQL" }
    ],
    spotlightResults: [
      { value: "20+", label: "Projects Built" },
      { value: "60%", label: "Salary Increase" },
      { value: "8", label: "Months to First Job" }
    ],
    spotlightQuote: '"The hands-on approach with real datasets and industry mentorship helped me transition from business analysis to advanced machine learning. I now lead AI initiatives at my company."',
    spotlightAuthor: "- Michael Rodriguez, Senior Data Scientist at DataTech",
    processHeading: "Our Proven Learning Journey",
    processSubheading: "From statistical foundations to advanced AI, we guide you every step of the way to becoming a professional data scientist.",
    processSteps: [
      {
        step: "1",
        title: "Foundation Building",
        desc: "Start with Python, statistics, and data manipulation with hands-on exercises using real datasets."
      },
      {
        step: "2",
        title: "ML Algorithm Mastery",
        desc: "Learn machine learning algorithms, model building, and evaluation through guided projects."
      },
      {
        step: "3",
        title: "Advanced AI Projects",
        desc: "Build deep learning models, work with big data, and create AI solutions for complex problems."
      },
      {
        step: "4",
        title: "Career Launch",
        desc: "Get portfolio reviews, interview preparation, and industry connections to land your first data science role."
      }
    ],
    ctaHeading: "Ready to Start Your Data Science Journey?",
    ctaDesc: "Join thousands of students who transformed their careers through our project-based data science programs.",
    ctaBtn: "Contact Us"
  },
  ar: {
    heroTitle: "إتقن علوم البيانات مع خبراء الصناعة",
    sectionTitle: "دورات علوم البيانات",
    sectionDesc: "منهجنا الشامل لعلوم البيانات مصمم لتحويلك من مبتدئ إلى عالم بيانات جاهز للعمل. تعلم تقنيات متطورة مثل Python والتعلم الآلي والبيانات الضخمة من خلال مشاريع عملية ومجموعات بيانات من العالم الواقعي. مدرسونا ذوو الخبرة الصناعية يقدمون توجيهاً مخصصاً لمساعدتك في بناء portfolio قوي والحصول على وظيفة أحلامك في علوم البيانات.",
    sectionList: [
      "برمجة Python وتحليل البيانات",
      "خوارزميات التعلم الآلي والذكاء الاصطناعي",
      "التعلم العميق والشبكات العصبية",
      "البيانات الضخمة والحوسبة السحابية"
    ],
    servicesHeading: "مسارات تعلم شاملة",
    cards: [
      {
        frontTitle: "تحليل البيانات",
        frontDesc: "أتقن Python وPandas وNumPy وأدوات التصور لاستخراج رؤى من مجموعات البيانات المعقدة.",
        backDesc: "تعلم التحليل الإحصائي وتنظيف البيانات وتقنيات التصور من خلال مجموعات بيانات تجارية حقيقية.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "التعلم الآلي",
        frontDesc: "ابن نماذج تنبؤية باستخدام scikit-learn وTensorFlow وخوارزميات ML المتقدمة.",
        backDesc: "أتقن التعلم المراقب وغير المراقب وتقييم النماذج واستراتيجيات النشر.",
        btn: "عرض المنهج"
      },
      {
        frontTitle: "الذكاء الاصطناعي والتعلم العميق",
        frontDesc: "طور الشبكات العصبية وتطبيقات AI باستخدام TensorFlow وPyTorch والأطر المتقدمة.",
        backDesc: "اعمل على مشاريع رؤية الحاسوب ومعالجة اللغة الطبيعية والتعلم العميق التي تحل مشاكل العالم الحقيقي.",
        btn: "عرض المنهج"
      }
    ],
    spotlightHeading: "نجاح الطالب: من محلل إلى عالم بيانات",
    spotlightDesc: "بدأ مايكل كمحلل أعمال بمهارات Excel أساسية والتحق ببرنامجنا الشامل لعلوم البيانات. من خلال التعلم المخصص والمشاريع العملية، بنى portfolio من أكثر من 20 مشروع علوم بيانات وحصل على أول دور عالم بيانات في 8 أشهر فقط بزيادة راتب 60٪.",
    spotlightDetails: [
      { label: "الخلفية:", value: "محلل أعمال" },
      { label: "البرنامج:", value: "إتقان علوم البيانات" },
      { label: "المدة:", value: "8 أشهر" },
      { label: "الخبرة السابقة:", value: "Excel وSQL أساسي" }
    ],
    spotlightResults: [
      { value: "20+", label: "مشروع تم بناؤه" },
      { value: "60%", label: "زيادة الراتب" },
      { value: "8", label: "أشهر للوظيفة الأولى" }
    ],
    spotlightQuote: '"ساعدني النهج العملي مع مجموعات البيانات الحقيقية والإرشاد الصناعي في الانتقال من تحليل الأعمال إلى التعلم الآلي المتقدم. أقود الآن مبادرات AI في شركتي."',
    spotlightAuthor: "- مايكل رودريغيز، عالم بيانات أول في DataTech",
    processHeading: "رحلة التعلم المثبتة لدينا",
    processSubheading: "من الأسس الإحصائية إلى الذكاء الاصطناعي المتقدم، نرشدك في كل خطوة على طريق أن تصبح عالم بيانات محترف.",
    processSteps: [
      {
        step: "1",
        title: "بناء الأساس",
        desc: "ابدأ مع Python والإحصائيات ومعالجة البيانات مع تمارين عملية باستخدام مجموعات بيانات حقيقية."
      },
      {
        step: "2",
        title: "إتقان خوارزميات ML",
        desc: "تعلم خوارزميات التعلم الآلي وبناء النماذج والتقييم من خلال مشاريع موجهة."
      },
      {
        step: "3",
        title: "مشاريع AI متقدمة",
        desc: "ابن نماذج التعلم العميق واعمل مع البيانات الضخمة وأنشئ حلول AI للمشاكل المعقدة."
      },
      {
        step: "4",
        title: "انطلاق المسيرة",
        desc: "احصل على مراجعات portfolio وتحضير للمقابلات وعلاقات صناعية للحصول على أول دور عالم بيانات."
      }
    ],
    ctaHeading: "جاهز لبدء رحلتك في علوم البيانات؟",
    ctaDesc: "انضم إلى آلاف الطلاب الذين غيروا مساراتهم المهنية من خلال برامجنا القائمة على المشاريع لعلوم البيانات.",
    ctaBtn: "ابدأ التعلم الآن"
  },
  he: {
    heroTitle: "היה מדען נתונים עם מדריכים מומחים",
    sectionTitle: "קורסי מדע הנתונים",
    sectionDesc: "תכנית הלימודים המקיפה שלנו למדע הנתונים נועדה להפוך אותך ממתחיל למדען נתונים מוכן לעבודה. למד טכנולוgiות חדישות כמו Python, למידת מכונה ו-Big Data דרך פרויקטים מעשיים ומערכי נתונים מהעולם האמיתי. המדריכים שלנו עם ניסיון בתעשייה מספקים הדרכה מותאמת אישית לעזור לך לבנות portfolio חזק ולהשיג עבודת חלום במדע הנתונים.",
    sectionList: [
      "תכנות Python ואנליזת נתונים",
      "אלגוריתמי למידת מכונה ובינה מלאכותית",
      "למידה עמוקה ורשתות נוירונים",
      "Big Data ועיבוד ענן"
    ],
    servicesHeading: "מסלולי למידה מקיפים",
    cards: [
      {
        frontTitle: "אנליזת נתונים",
        frontDesc: "שלט ב-Python, Pandas, NumPy וכלי ויזואליזציה לחילוץ תובנות ממערכי נתונים מורכבים.",
        backDesc: "למד אנליזה סטטיסטית, ניקוי נתונים וטכניקות ויזואליזציה דרך מערכי נתונים עסקיים אמיתיים.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "למידת מכונה",
        frontDesc: "בנה מודלים פרדיקטיביים באמצעות scikit-learn, TensorFlow ואלגוריתמי ML מתקדמים.",
        backDesc: "שלט בלמידה מפוקחת ולא מפוקחת, הערכת מודלים ואסטרטגיות פריסה.",
        btn: "צפה בסילבוס"
      },
      {
        frontTitle: "בינה מלאכותית ולמידה עמוקה",
        frontDesc: "פתח רשתות נוירונים ויישומי AI באמצעות TensorFlow, PyTorch ומסגרות מתקדמות.",
        backDesc: "עבוד על פרויקטי computer vision, NLP ולמידה עמוקה שפותרים בעיות בעולם האמיתי.",
        btn: "צפה בסילבוס"
      }
    ],
    spotlightHeading: "הצלחת סטודנט: מאנליסט למדען נתונים",
    spotlightDesc: "מייקל התחיל כאנליסט עסקי עם כישורי Excel בסיסיים והצטרף לתכנית מדע הנתונים המקיפה שלנו. דרך למידה מסורה ופרויקטים מעשיים, הוא בנה portfolio של 20+ פרויקטי מדע נתונים והשיג את התפקיד הראשון כמדען נתונים תוך 8 חודשים בלבד עם עלייה של 60% במשכורת.",
    spotlightDetails: [
      { label: "רקע:", value: "אנליסט עסקי" },
      { label: "תכנית:", value: "שליטה במדע נתונים" },
      { label: "משך:", value: "8 חודשים" },
      { label: "ניסיון קודם:", value: "Excel ו-SQL בסיסי" }
    ],
    spotlightResults: [
      { value: "20+", label: "פרויקטים שנבנו" },
      { value: "60%", label: "עלייה במשכורת" },
      { value: "8", label: "חודשים לעבודה הראשונה" }
    ],
    spotlightQuote: '"הגישה המעשית עם מערכי נתונים אמיתיים והמנטורינג התעשייתי עזרו לי לעבור מאנליזה עסקית ללמידת מכונה מתקדמת. אני מוביל כעת יוזמות AI בחברה שלי."',
    spotlightAuthor: "- מייקל רודריגז, מדען נתונים בכיר ב-DataTech",
    processHeading: "מסע הלמידה המוכח שלנו",
    processSubheading: "מיסודות סטטיסטיים ועד בינה מלאכותית מתקדמת, אנחנו מדריכים אותך בכל צעד בדרך להפוך למדען נתונים מקצועי.",
    processSteps: [
      {
        step: "1",
        title: "בניית יסודות",
        desc: "התחל עם Python, סטטיסטיקה ומניפולציית נתונים עם תרגילים מעשיים באמצעות מערכי נתונים אמיתיים."
      },
      {
        step: "2",
        title: "שליטה באלגוריתמי ML",
        desc: "למד אלגוריתמי למידת מכונה, בניית מודלים והערכה דרך פרויקטים מודרכים."
      },
      {
        step: "3",
        title: "פרויקטי AI מתקדמים",
        desc: "בנה מודלי למידה עמוקה, עבוד עם Big Data וצור פתרונות AI לבעיות מורכבות."
      },
      {
        step: "4",
        title: "השקה קרייריסטית",
        desc: "קבל ביקורות Portfolio, הכנה לראיונות וקשרים בתעשייה להשגת התפקיד הראשון כמדען נתונים."
      }
    ],
    ctaHeading: "מוכן להתחיל את המסע במדע הנתונים?",
    ctaDesc: "הצטרף לאלפי סטודנטים ששינו את הקריירה שלהם דרך תכניות מדע הנתונים מבוססות הפרויקטים שלנו.",
    ctaBtn: "התחל ללמוד עכשיו"
  }
};

const Datascience = () => {
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
            {language === 'en' && "Become a Data Scientist in 8 Months"}
            {language === 'ar' && "كن عالم بيانات في 8 أشهر"}
            {language === 'he' && "הפוך למדען נתונים תוך 8 חודשים"}
          </p>
        </div>
      </div>

      {/* Data Science Courses Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt="Data science analytics"
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
                    {idx === 0 && <FaChartBar className="text-3xl text-sky-500 mb-3" />}
                    {idx === 1 && <FaDatabase className="text-3xl text-sky-600 mb-3" />}
                    {idx === 2 && <FaBrain className="text-3xl text-sky-500 mb-3" />}
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
            {language === 'en' && "Free consultation • Real project experience • Industry mentorship"}
            {language === 'ar' && "استشارة مجانية • خبرة مشاريع حقيقية • إرشاد صناعي"}
            {language === 'he' && "ייעוץ חינם • ניסיון פרויקטים אמיתיים • מנטורינג תעשייתי"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Datascience;
