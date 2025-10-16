import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import video from "../images/bloglms.mp4"
// Translations for all visible text - Updated for online course provider
const translations = {
  en: {
    heroTagline: "Transform Your Career with Expert-Led Online Courses",
    featuredTitle: "Featured Courses",
    cards: [
      {
        title: "Full Stack Web Development",
        description: "Master modern web technologies including React, Node.js, and MongoDB to build complete web applications from scratch.",
        buttonText: "Enroll Now",
      },
      {
        title: "Data Science & Machine Learning",
        description: "Learn Python, statistical analysis, and machine learning algorithms to extract insights from complex datasets.",
        buttonText: "Start Learning",
      },
      {
        title: "UX/UI Design Mastery",
        description: "Create stunning user interfaces and experiences with industry-standard design tools and methodologies.",
        buttonText: "Explore Design",
      }
    ],
    storyGalleryTitle: "Student Success Stories",
    storyGalleryDesc: "Discover how our students transformed their careers through our courses",
    stories: [
      {
        nav: "Sarah's Career Switch",
        title: "From Accountant to Web Developer",
        desc: "Sarah transitioned from accounting to a full-time web developer role after completing our Full Stack Development program, doubling her salary in 6 months.",
        points: [
          "Landed first developer job in 3 months",
          "Increased salary by 120%",
          "Now works remotely for international company"
        ],
        link: "Read full success story →"
      },
      {
        nav: "Mike's Promotion Journey",
        title: "Data Analyst to Lead Data Scientist",
        desc: "Mike upgraded his skills with our Data Science program and earned a promotion to lead his company's data science team within 8 months.",
        points: [
          "Promoted to team lead position",
          "Implemented AI solutions saving company $500k annually",
          "Now mentors junior data scientists"
        ],
        link: "Read full success story →"
      },
      {
        nav: "Emma's Freelance Success",
        title: "Building a Six-Figure Design Business",
        desc: "Emma started with no design experience and built a successful freelance UI/UX design business serving clients worldwide.",
        points: [
          "Went from zero to $10k/month in 9 months",
          "Works with clients from 15+ countries",
          "Built a personal brand with 50K+ followers"
        ],
        link: "Read full success story →"
      }
    ],
    highlightsTitle: "Popular Learning Paths",
    highlightsSubtitle: "Choose from career-focused programs designed to get you job-ready with hands-on projects and expert mentorship.",
    highlights: [
      {
        category: "Development",
        title: "Full Stack Developer Career Path",
        meta: "12 Months • 45 Projects • Career Support",
        desc: "Become job-ready as a full-stack developer with our comprehensive program covering front-end, back-end, databases, and deployment.",
        link: "/webdevelopment",
        linkText: "View Curriculum →"
      },
      {
        category: "Data Science",
        title: "Data Scientist Specialization",
        meta: "10 Months • 35 Projects • Portfolio Building",
        desc: "Master data analysis, machine learning, and data visualization to become a proficient data scientist in high-demand industries.",
        link: "/datascience",
        linkText: "Explore Program"
      },
      {
        category: "Design",
        title: "UX/UI Designer Certification",
        meta: "8 Months • 25 Projects • Design Toolkit",
        desc: "Learn user research, wireframing, prototyping, and design systems to create exceptional digital experiences that users love.",
        link: "/uidesign",
        linkText: "See Details"
      }
    ],
    mythbustersTitle: "Online Learning Myths Debunked",
    mythbustersSubtitle: "We separate fact from fiction so you can make informed decisions about your education.",
    myths: [
      {
        title: 'Myth #1: "Online degrees are not respected."',
        desc: "Top companies like Google, Amazon, and Microsoft actively hire from online programs. What matters are your skills and portfolio, not where you learned."
      },
      {
        title: 'Myth #2: "You need prior experience to succeed."',
        desc: "Our programs are designed for complete beginners with step-by-step guidance. Many successful students started with zero coding or design experience."
      },
      {
        title: 'Myth #3: "Self-study is just as effective."',
        desc: "Structured learning with expert mentorship, peer support, and career guidance accelerates your progress far beyond self-study alone."
      }
    ],
    ctaTitle: "Ready to Launch Your Tech Career?",
    ctaDesc: "Join thousands of students who transformed their lives through our industry-relevant courses and career support.",
    ctaBtn1: "Contact Us",
    ctaBtn2: "View All Courses"
  },
  ar: {
    heroTagline: "حول مسارك المهني مع دوراتنا الإلكترونية بقيادة الخبراء",
    featuredTitle: "الدورات المميزة",
    cards: [
      {
        title: "تطوير الويب الشامل",
        description: "أتقن تقنيات الويب الحديثة including React, Node.js, and MongoDB لبناء تطبيقات ويب كاملة من الصفر.",
        buttonText: "سجل الآن",
      },
      {
        title: "علم البيانات وتعلم الآلة",
        description: "تعلم Python والتحليل الإحصائي وخوارزميات تعلم الآلة لاستخلاص الرؤى من مجموعات البيانات المعقدة.",
        buttonText: "ابدأ التعلم",
      },
      {
        title: "إتقان تصميم UX/UI",
        description: "أنشئ واجهات وتجارب مستخدم مذهلة باستخدام أدوات ومنهجيات التصميم القياسية في الصناعة.",
        buttonText: "استكشف التصميم",
      }
    ],
    storyGalleryTitle: "قصص نجاح الطلاب",
    storyGalleryDesc: "اكتشف كيف غير طلابنا مساراتهم المهنية من خلال دوراتنا",
    stories: [
      {
        nav: "تحول سارة المهني",
        title: "من محاسبة إلى مطورة ويب",
        desc: "انتقلت سارة من المحاسبة إلى وظيفة مطورة ويب بدوام كامل بعد إكمال برنامجنا للتطوير الشامل، مضاعفة راتبها في 6 أشهر.",
        points: [
          "حصلت على أول وظيفة مطورة في 3 أشهر",
          "زادت راتبها بنسبة 120٪",
          "تعمل الآن عن بعد لشركة دولية"
        ],
        link: "اقرأ قصة النجاح كاملة →"
      },
      {
        nav: "رحلة ترقية مايك",
        title: "من محلل بيانات إلى قائد علم البيانات",
        desc: "طور مايك مهاراته مع برنامجنا لعلم البيانات وحصل على ترقية لقيادة فريق علم البيانات في شركته خلال 8 أشهر.",
        points: [
          "تمت ترقيته إلى منصب قائد الفريق",
          "نفذ حلول ذكاء اصطناعي وفرت 500 ألف دولار سنوياً",
          "يدرب الآن علماء بيانات مبتدئين"
        ],
        link: "اقرأ قصة النجاح كاملة →"
      },
      {
        nav: "نجاح إيما في العمل الحر",
        title: "بناء عمل تصميم بمستوى ستة أرقام",
        desc: "بدأت إيما بدون خبرة في التصميم وبناء عمل ناجح لتصميم UI/UX الحر يخدم عملاء من جميع أنحاء العالم.",
        points: [
          "انتقلت من الصفر إلى 10 آلاف دولار شهرياً في 9 أشهر",
          "تعمل مع عملاء من 15+ دولة",
          "بناء علامة شخصية مع 50 ألف+ متابع"
        ],
        link: "اقرأ قصة النجاح كاملة →"
      }
    ],
    highlightsTitle: "مسارات التعلم الشائعة",
    highlightsSubtitle: "اختر من بين البرامج المركزة على المهن المصممة لإعدادك للوظائف مع مشاريع عملية وإرشاد الخبراء.",
    highlights: [
      {
        category: "التطوير",
        title: "مسار مهنة مطور الويب الشامل",
        meta: "12 شهر • 45 مشروع • دعم مهني",
        desc: "كن جاهزاً للوظيفة كمطور ويب شامل مع برنامجنا الشامل الذي يغطي الواجهة الأمامية والخلفية وقواعد البيانات والنشر.",
        link: "/fullstack-path",
        linkText: "عرض المنهج →"
      },
      {
        category: "علم البيانات",
        title: "تخصص عالم البيانات",
        meta: "10 أشهر • 35 مشروع • بناء portfolio",
        desc: "أتقن تحليل البيانات وتعلم الآلة وتصور البيانات لتصبح عالماً متمكناً في الصناعات عالية الطلب.",
        link: "/data-science-path",
        linkText: "استكشف البرنامج"
      },
      {
        category: "التصميم",
        title: "شهادة مصمم UX/UI",
        meta: "8 أشهر • 25 مشروع • أدوات التصميم",
        desc: "تعلم بحث المستخدم والتخطيط والنماذج الأولية وأنظمة التصميم لإنشاء تجارب رقمية استثنائية يحبها المستخدمون.",
        link: "/design-path",
        linkText: "راجع التفاصيل"
      }
    ],
    mythbustersTitle: "تفنيد الخرافات حول التعلم عبر الإنترنت",
    mythbustersSubtitle: "نفصل الحقيقة عن الخيال حتى تتمكن من اتخاذ قرارات مستنيرة حول تعليمك.",
    myths: [
      {
        title: 'خرافة #1: "الشهادات عبر الإنترنت غير محترمة."',
        desc: "شركات رائدة مثل Google وAmazon وMicrosoft توظف بنشاط من البرامج عبر الإنترنت. ما يهم هو مهاراتك وportfolio وليس أين تعلمت."
      },
      {
        title: 'خرافة #2: "تحتاج إلى خبرة مسبقة للنجاح."',
        desc: "برامجنا مصممة للمبتدئين تماماً مع إرشادات خطوة بخطوة. العديد من الطلاب الناجحين بدأوا بدون خبرة في البرمجة أو التصميم."
      },
      {
        title: 'خرافة #3: "الدراسة الذاتية فعالة بنفس القدر."',
        desc: "التعلم المنظم مع إرشاد الخبراء ودعم الأقران والتوجيه المهني يسرع تقدمك إلى أبعد من الدراسة الذاتية وحدها."
      }
    ],
    ctaTitle: "مستعد لإطلاق مسارك المهني في التكنولوجيا؟",
    ctaDesc: "انضم إلى آلاف الطلاب الذين غيروا حياتهم من خلال دوراتنا ذات الصلة بالصناعة والدعم المهني.",
    ctaBtn1: "ابدأ النسخة التجريبية المجانية",
    ctaBtn2: "عرض جميع الدورات"
  },
  he: {
    heroTagline: "שנה את הקריירה שלך עם קורסים מקוונים בהנחיית מומחים",
    featuredTitle: "קורסים מומלצים",
    cards: [
      {
        title: "פיתוח Full Stack",
        description: "שלט בטכנולוגיות ווב מודרניות כולל React, Node.js ו-MongoDB כדי לבנות אפליקציות ווב מלאות מאפס.",
        buttonText: "הירשם עכשיו",
      },
      {
        title: "מדע נתונים ולמידת מכונה",
        description: "למד Python, ניתוח סטטיסטי ואלגוריתמים של למידת מכונה כדי להפיק תובנות ממערכי נתונים מורכבים.",
        buttonText: "התחל ללמוד",
      },
      {
        title: "שליטה בעיצוב UX/UI",
        description: "צור ממשקי משתמש וחוויות משתמש מרהיבות עם כלי עיצוב ושיטות עבודה סטנדרטיות בתעשייה.",
        buttonText: "גלה עיצוב",
      }
    ],
    storyGalleryTitle: "סיפורי הצלחה של סטודנטים",
    storyGalleryDesc: "גלה כיצד הסטודנטים שלנו שינו את הקריירה שלהם דרך הקורסים שלנו",
    stories: [
      {
        nav: "המעבר הקרייריסטי של שרה",
        title: "מנהלת חשבונות למפתחת Full Stack",
        desc: "שרה עברה מניהול חשבונות לתפקיד מפתחת Full Stack לאחר השלמת תוכנית הפיתוח שלנו, והכפילה את משכורתה תוך 6 חודשים.",
        points: [
          "השיגה עבודת פיתוח ראשונה תוך 3 חודשים",
          "הגדילה את המשכורת ב-120%",
          "עובדת כעת מרחוק לחברה בינלאומית"
        ],
        link: "קרא את סיפור ההצלחה המלא →"
      },
      {
        nav: "דרך הקידום של מיכאל",
        title: "מאנליסט נתונים למנהל צוות Data Science",
        desc: "מיכאל שדרג את כישוריו עם תוכנית ה-Data Science שלנו וקיבל קידום לניהול צוות ה-Data Science של החברה תוך 8 חודשים.",
        points: [
          "קודם לתפקיד מנהל צוות",
          "יישם פתרונות AI שחסכו לחברה 500 אלף דולר בשנה",
          "מנטור כעת למדעני נתונים מתחילים"
        ],
        link: "קרא את סיפור ההצלחה המלא →"
      },
      {
        nav: "ההצלחה העצמאית של אמה",
        title: "בניית עסק עיצוב בשישה ספרות",
        desc: "אמה החלה ללא ניסיון קודם בעיצוב ובנתה עסק UI/UX עצמאי מצליח המשרת לקוחות מרחבי העולם.",
        points: [
          "הגיעה מאפס ל-10,000 דולר לחודש תוך 9 חודשים",
          "עובדת עם לקוחות מ-15+ מדינות",
          "בנתה מותג אישי עם 50K+ עוקבים"
        ],
        link: "קרא את סיפור ההצלחה המלא →"
      }
    ],
    highlightsTitle: "מסלולי למידה פופולריים",
    highlightsSubtitle: "בחר מתוך תוכניות ממוקדות קריירה שנועדו להכין אותך לשוק העבודה עם פרויקטים מעשיים והנחיית מומחים.",
    highlights: [
      {
        category: "פיתוח",
        title: "מסלול קריירה Full Stack Developer",
        meta: "12 חודשים • 45 פרויקטים • תמיכה בקריירה",
        desc: "הפוך למוכן לעבודה כמפתח Full Stack עם התוכנית המקיפה שלנו הכוללת Front-end, Back-end, מסדי נתונים ופריסה.",
        link: "/fullstack-path",
        linkText: "צפה בתכנית הלימודים →"
      },
      {
        category: "מדע נתונים",
        title: "התמחות Data Scientist",
        meta: "10 חודשים • 35 פרויקטים • בניית Portfolio",
        desc: "שלט בניתוח נתונים, למידת מכונה והדמיה כדי להפוך ל-Data Scientist מיומן בתעשיות מבוקשות.",
        link: "/datascience",
        linkText: "גלה את התוכנית"
      },
      {
        category: "עיצוב",
        title: "הסמכת UX/UI Designer",
        meta: "8 חודשים • 25 פרויקטים • כלי עיצוב",
        desc: "למד מחקר משתמשים, Wireframing, יצירת אבות טיפוס ומערכות עיצוב כדי ליצור חוויות דיגיטליות יוצאות דופן.",
        link: "/uxui-design",
        linkText: "ראה פרטים"
      }
    ],
    mythbustersTitle: "מיתוסים על למידה מקוונת מפוצצים",
    mythbustersSubtitle: "אנחנו מפרידים בין עובדות לבדיות כדי שתוכל לקבל החלטות מושכלות על החינוך שלך.",
    myths: [
      {
        title: 'מיתוס #1: "תארים מקוונים לא מכובדים."',
        desc: "חברות מובילות כמו Google, Amazon ו-Microsoft מגייסות באופן פעיל מתוכניות מקוונות. מה שחשוב הם הכישורים וה-Portfolio שלך, לא איפה למדת."
      },
      {
        title: 'מיתוס #2: "אתה צריך ניסיון קודם כדי להצליח."',
        desc: "התוכניות שלנו נועדו למתחילים מוחלטים עם הדרכה צעד אחר צעד. סטודנטים מצליחים רבים החלו ללא ניסיון קודם בתכנות או עיצוב."
      },
      {
        title: 'מיתוס #3: "לימוד עצמי יעיל באותה מידה."',
        desc: "למידה מובנית עם הנחיית מומחים, תמיכת עמיתים והכוונה קרייריסטית מאיצה את ההתקדמות שלך הרבה מעבר ללמידה עצמית בלבד."
      }
    ],
    ctaTitle: "מוכן להשיק את הקריירה הטכנולוגית שלך?",
    ctaDesc: "הצטרף לאלפי סטודנטים ששינו את חייהם דרך הקורסים הרלוונטיים שלנו לתעשייה ותמיכה קרייריסטית.",
    ctaBtn1: "התחל ניסיון חינם",
    ctaBtn2: "צפה בכל הקורסים"
  }
};

const Blog = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeStory, setActiveStory] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark");
    
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem("theme");
      setDarkMode(currentTheme === "dark");
    };

    window.addEventListener("storage", handleThemeChange);
    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  // Use translated cards
  const t = translations[language] || translations["en"];
  const [cards] = useState([
    {
      id: 1,
      ...t.cards[0],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      path: "/fullstack-course",
      style: "modern"
    },
    {
      id: 2,
      ...t.cards[1],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      path: "/data-science-course",
      style: "minimalist"
    },
    {
      id: 3,
      ...t.cards[2],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
      path: "/design-course",
      style: "bold"
    }
  ]);

  const handleGetStarted = (path) => {
    navigate(path);
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg">
            {t.heroTagline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {language === 'en' && "Join 50,000+ students building in-demand tech skills"}
            {language === 'ar' && "انضم إلى 50,000+ طالب يبنيون مهارات تكنولوجية مطلوبة"}
            {language === 'he' && "הצטרף ל-50,000+ סטודנטים הבונים כישורים טכנולוגיים מבוקשים"}
          </p>

        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-600">
          {language === 'en' && "Featured Articles About Online Learning"}
          {language === 'ar' && "مقالات مميزة حول التعلم الإلكتروني"}
          {language === 'he' && "מאמרים מובילים על למידה מקוונת"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 - Online Learning Revolution */}
          <article className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${darkMode ? "bg-black border border-sky-400" : "bg-white"}`}>
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt={language === 'en' ? "Online Learning Revolution" : language === 'ar' ? "ثورة التعلم الإلكتروني" : "מהפכת הלמידה המקוונת"}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {language === 'en' && "Trending"}
                {language === 'ar' && "متداول"}
                {language === 'he' && "טרנדינג"}
              </div>
            </div>
            <div className="p-6">
              <h2 className={`text-xl font-bold mb-3 text-sky-600`}>
                {language === 'en' && "The Future of Online Course Providers"}
                {language === 'ar' && "مستقبل مقدمي الدورات الإلكترونية"}
                {language === 'he' && "עתיד ספקי הקורסים המקוונים"}
              </h2>
              <p className={`mb-4 leading-relaxed ${darkMode ? "text-white" : "text-black"}`}>
                {language === 'en' && "Discover how online course providers are revolutionizing education with AI-powered learning, personalized curricula, and industry partnerships."}
                {language === 'ar' && "اكتشف كيف يقوم مقدمو الدورات الإلكترونية بإحداث ثورة في التعليم من خلال التعلم المدعوم بالذكاء الاصطناعي والمناهج الشخصية والشراكات الصناعية."}
                {language === 'he' && "גלה כיצד ספקי קורסים מקוונים מחוללים מהפכה בחינוך עם למידה מבוססת AI, תכניות לימוד מותאמות אישית ושותפויות תעשייתיות."}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm ${darkMode ? "text-sky-400" : "text-sky-600"}`}>
                  {language === 'en' && "5 min read"}
                  {language === 'ar' && "5 دقائق قراءة"}
                  {language === 'he' && "5 דקות קריאה"}
                </span>
                <span className={`font-semibold text-sky-600`}>
                  {language === 'en' && "Education Tech"}
                  {language === 'ar' && "تكنولوجيا التعليم"}
                  {language === 'he' && "טכנולוגיית חינוך"}
                </span>
              </div>
              <button
                className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 bg-sky-600 hover:bg-sky-700 text-white"
                onClick={() => handleGetStarted("/blog1")}
              >
                {language === 'en' && "Read Article"}
                {language === 'ar' && "اقرأ المقال"}
                {language === 'he' && "קרא מאמר"}
              </button>
            </div>
          </article>

          {/* Article 2 - Course Quality Standards */}
          <article className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${darkMode ? "bg-black border border-sky-400" : "bg-white"}`}>
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt={language === 'en' ? "Quality Standards" : language === 'ar' ? "معايير الجودة" : "תקני איכות"}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {language === 'en' && "Expert"}
                {language === 'ar' && "خبير"}
                {language === 'he' && "מומחה"}
              </div>
            </div>
            <div className="p-6">
              <h2 className={`text-xl font-bold mb-3 text-sky-600`}>
                {language === 'en' && "How Top Course Providers Ensure Quality"}
                {language === 'ar' && "كيف يضمن أفضل مقدمي الدورات الجودة"}
                {language === 'he' && "כיצד ספקי קורסים מובילים מבטיחים איכות"}
              </h2>
              <p className={`mb-4 leading-relaxed ${darkMode ? "text-white" : "text-black"}`}>
                {language === 'en' && "Learn about the rigorous quality standards, expert instructor vetting, and continuous improvement processes that set premium course providers apart."}
                {language === 'ar' && "تعرف على معايير الجودة الصارمة وفحص المدربين الخبراء وعمليات التحسين المستمر التي تميز مقدمي الدورات المتميزين."}
                {language === 'he' && "למד על תקני האיכות הקפדניים, בדיקת מדריכים מומחים ותהליכי שיפור מתמיד שמבדילים ספקי קורסים מובילים."}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm ${darkMode ? "text-sky-400" : "text-sky-600"}`}>
                  {language === 'en' && "7 min read"}
                  {language === 'ar' && "7 دقائق قراءة"}
                  {language === 'he' && "7 דקות קריאה"}
                </span>
                <span className={`font-semibold text-sky-600`}>
                  {language === 'en' && "Quality Assurance"}
                  {language === 'ar' && "ضمان الجودة"}
                  {language === 'he' && "בטחת איכות"}
                </span>
              </div>
              <button
                className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 bg-sky-600 hover:bg-sky-700 text-white"
                onClick={() => handleGetStarted("/blog2")}
              >
                {language === 'en' && "Read Article"}
                {language === 'ar' && "اقرأ المقال"}
                {language === 'he' && "קרא מאמר"}
              </button>
            </div>
          </article>

          {/* Article 3 - Success Stories */}
          <article className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${darkMode ? "bg-black border border-sky-400" : "bg-white"}`}>
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt={language === 'en' ? "Success Stories" : language === 'ar' ? "قصص النجاح" : "סיפורי הצלחה"}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {language === 'en' && "Popular"}
                {language === 'ar' && "شائع"}
                {language === 'he' && "פופולרי"}
              </div>
            </div>
            <div className="p-6">
              <h2 className={`text-xl font-bold mb-3 text-sky-600`}>
                {language === 'en' && "Student Success: From Beginner to Professional"}
                {language === 'ar' && "نجاح الطلاب: من مبتدئ إلى محترف"}
                {language === 'he' && "הצלחת סטודנטים: ממתחיל למקצוען"}
              </h2>
              <p className={`mb-4 leading-relaxed ${darkMode ? "text-white" : "text-black"}`}>
                {language === 'en' && "Real stories from students who transformed their careers through online learning platforms, featuring career changes, salary increases, and skill development."}
                {language === 'ar' && "قصص حقيقية من طلاب غيروا مساراتهم المهنية من خلال منصات التعلم الإلكتروني، تتضمن تغييرات في المهنة وزيادات في الراتب وتطوير المهارات."}
                {language === 'he' && "סיפורים אמיתיים של סטודנטים ששינו את הקריירה שלהם דרך פלטפורמות למידה מקוונות, כולל שינויי קריירה, העלאות שכר ופיתוח מיומנויות."}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm ${darkMode ? "text-sky-400" : "text-sky-600"}`}>
                  {language === 'en' && "6 min read"}
                  {language === 'ar' && "6 دقائق قراءة"}
                  {language === 'he' && "6 דקות קריאה"}
                </span>
                <span className={`font-semibold text-sky-600`}>
                  {language === 'en' && "Success Stories"}
                  {language === 'ar' && "قصص النجاح"}
                  {language === 'he' && "סיפורי הצלחה"}
                </span>
              </div>
              <button
                className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 bg-sky-600 hover:bg-sky-700 text-white"
                onClick={() => handleGetStarted("/blog3")}
              >
                {language === 'en' && "Read Article"}
                {language === 'ar' && "اقرأ المقال"}
                {language === 'he' && "קרא מאמר"}
              </button>
            </div>
          </article>
        </div>
      </div>

      {/* Student Success Stories */}
      <section className={`py-16 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-3">{t.storyGalleryTitle}</h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            {t.storyGalleryDesc}
          </p>

          <div className={`rounded-lg overflow-hidden border ${darkMode ? "border-gray-700 bg-black" : "border-gray-200 bg-white"
            }`}>
            <div className={`flex flex-col md:flex-row ${darkMode ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-200"
              } border-b`}>
              {t.stories.map((story, idx) => (
                <button
                  key={idx}
                  className={`flex-1 px-6 py-4 font-medium transition-all duration-300 border-b-2 md:border-b-0 md:border-r last:border-r-0 ${activeStory === idx
                      ? `border-sky-500 ${darkMode ? "bg-black text-sky-400" : "bg-white text-sky-600"}`
                      : `border-transparent ${darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-900"}`
                    }`}
                  onClick={() => setActiveStory(idx)}
                >
                  {story.nav}
                </button>
              ))}
            </div>

            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{t.stories[activeStory].title.split(' - ')[0]}</h3>
                      <p className="text-white text-opacity-90">
                        {language === 'en' && "Graduate Success"}
                        {language === 'ar' && "نجاح الخريج"}
                        {language === 'he' && "בוגר מצליח"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"
                    }`}>
                    {t.stories[activeStory].title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    {t.stories[activeStory].desc}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {t.stories[activeStory].points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`text-sky-500 mr-3 mt-1 ${darkMode ? "text-sky-400" : ""}`}>✓</span>
                        <span className={darkMode ? "text-gray-300" : "text-gray-700"}>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className={`py-16 ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">{t.highlightsTitle}</h2>
          <p className={`text-center text-xl mb-12 max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            {t.highlightsSubtitle}
          </p>

          <div className="space-y-12">
            {t.highlights.map((highlight, idx) => (
              <article
                key={idx}
                className={`flex flex-col lg:flex-row gap-8 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex-1 relative">
                  <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-sky-500 to-sky-600 p-1">
                    <div className={`rounded-lg overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"
                      }`}>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className={`text-lg font-bold ${darkMode ? "text-white" : "text-black"
                            }`}>
                            {highlight.category}
                          </h4>
                          <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                            {language === 'en' && "Popular"}
                            {language === 'ar' && "شائع"}
                            {language === 'he' && "פופולרי"}
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                              {language === 'en' && "Duration"}
                              {language === 'ar' && "المدة"}
                              {language === 'he' && "משך"}
                            </span>
                            <span className={darkMode ? "text-gray-300" : "text-black"}>
                              {highlight.meta.split(' • ')[0]}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                              {language === 'en' && "Projects"}
                              {language === 'ar' && "المشاريع"}
                              {language === 'he' && "פרויקטים"}
                            </span>
                            <span className={darkMode ? "text-gray-300" : "text-black"}>
                              {highlight.meta.split(' • ')[1]}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                              {language === 'en' && "Support"}
                              {language === 'ar' && "الدعم"}
                              {language === 'he' && "תמיכה"}
                            </span>
                            <span className={darkMode ? "text-gray-300" : "text-black"}>
                              {highlight.meta.split(' • ')[2]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-black"
                    }`}>
                    {highlight.title}
                  </h3>
                  <p className={`mb-4 font-medium ${darkMode ? "text-sky-300" : "text-sky-600"
                    }`}>
                    {highlight.meta}
                  </p>
                  <p className={`mb-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    {highlight.desc}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={highlight.link}
                      className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300"
                    >
                      {highlight.linkText}
                    </Link>
                    
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Mythbusters */}
      <section className={`py-16 ${darkMode ? "bg-black" : "bg-gray-50"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">{t.mythbustersTitle}</h2>
          <p className={`text-center text-xl mb-12 ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            {t.mythbustersSubtitle}
          </p>

          <div className="space-y-6">
            {t.myths.map((myth, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${darkMode ? "bg-gray-800" : "bg-white"
                  }`}
              >
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-sky-400" : "text-sky-600"
                  }`}>
                  {myth.title}
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  {myth.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${darkMode ? "bg-black" : "bg-gradient-to-br from-sky-50 to-sky-100"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
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
              onClick={() => handleGetStarted("/contact")}
            >
              {t.ctaBtn1}
            </button>
            <button
              className={`px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 ${darkMode
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white"
                }`}
              onClick={() => handleGetStarted("/services")}
            >
              {t.ctaBtn2}
            </button>
          </div>
          <p className={`mt-6 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
            {language === 'en' && "7-day free trial • No credit card required"}
            {language === 'ar' && "نسخة تجريبية مجانية لمدة 7 أيام • لا حاجة لبطاقة ائتمان"}
            {language === 'he' && "ניסיון חינם ל-7 ימים • אין צורך בכרטיס אשראי"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;