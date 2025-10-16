import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    title: "Student Success: From Beginner to Professional",
    subtitle: "Real Stories of Career Transformation Through Online Learning",
    publishDate: "October 15, 2025",
    readTime: "6 min read",
    author: "Student Success Team",
    
    // Section 1: Real Student Transformation Stories
    section1Title: "Real Student Transformation Stories: Breaking Barriers and Building Careers",
    section1Content: [
      {
        heading: "Sarah Chen: Marketing Manager to Senior Software Developer",
        text: "Sarah started with zero coding experience while working as a marketing manager. Through our Full Stack Development program, she dedicated 20-25 hours per week to learning. Within 8 months, she built a portfolio of 12 projects, mastered React and Node.js, and landed her first developer role at a tech startup. Today, she leads a development team and has increased her salary by 180%.",
        achievement: "180% salary increase in 18 months",
        skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"]
      },
      {
        heading: "Marcus Rodriguez: Warehouse Worker to Data Scientist",
        text: "Marcus worked night shifts at a warehouse while studying data science during the day. Despite having only a high school education, he completed our Data Science Specialization in 14 months. His determination paid off when he secured a data scientist position at a Fortune 500 company, where he now develops machine learning models that save the company millions annually.",
        achievement: "From high school diploma to Fortune 500 data scientist",
        skills: ["Python", "Machine Learning", "SQL", "Tableau", "Statistics"]
      },
      {
        heading: "Priya Patel: Stay-at-Home Mom to UX Designer",
        text: "After a 6-year career break to raise her children, Priya returned to the workforce through our UX/UI Design program. She balanced learning with parenting, often studying during naptime and after bedtime. Her dedication resulted in a comprehensive design portfolio that impressed employers. She now works remotely as a senior UX designer for a global design agency.",
        achievement: "Successfully re-entered workforce after 6-year break",
        skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"]
      },
      {
        heading: "Ahmed Hassan: Restaurant Server to Cloud Architect",
        text: "Ahmed immigrated to the country with limited English and worked multiple service jobs to support his family. Through our Cloud Computing certification program, he developed both technical skills and professional English. His persistence led to cloud certifications from AWS and Azure, and he now works as a cloud architect earning six figures while supporting his extended family.",
        achievement: "From minimum wage to six-figure cloud architect",
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps"]
      }
    ],

    // Section 2: The Learning Journey and Success Factors
    section2Title: "The Learning Journey: Key Success Factors and Strategies for Professional Growth",
    section2Content: [
      {
        heading: "Structured Learning Path and Goal Setting",
        text: "Successful students follow structured learning paths with clear milestones. They set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) and break down their ultimate career objective into smaller, manageable steps. This approach helps maintain motivation and provides a clear roadmap for skill development, making the learning journey less overwhelming and more achievable."
      },
      {
        heading: "Consistent Practice and Project-Based Learning",
        text: "The most successful students dedicate consistent time to practice, even if it's just 30 minutes daily. They focus on building real projects that demonstrate their skills to potential employers. This hands-on approach not only reinforces theoretical knowledge but also creates a portfolio that showcases practical abilities and problem-solving skills."
      },
      {
        heading: "Community Engagement and Networking",
        text: "Students who actively participate in learning communities, join study groups, and attend virtual meetups are more likely to succeed. These connections provide accountability, motivation, and often lead to job opportunities. Many of our successful graduates found their first roles through networking with fellow students, instructors, or industry professionals they met during their learning journey."
      },
      {
        heading: "Mentorship and Continuous Learning Mindset",
        text: "Successful professionals understand that learning doesn't stop after completing a course. They seek mentorship from industry experts, stay updated with latest trends, and continuously upskill. They view challenges as learning opportunities and maintain a growth mindset that helps them adapt to the rapidly evolving tech landscape."
      }
    ],

    conclusion: "These success stories demonstrate that with dedication, structured learning, and the right support system, anyone can transform their career regardless of their starting point. The key is to start with clear goals, maintain consistency, engage with the community, and never stop learning. Your professional transformation journey begins with a single step - the decision to invest in yourself and your future.",
    
    backToBlog: "← Back to Blog",
    shareArticle: "Share Article",
    relatedArticles: "Related Articles",
    
    successMetrics: {
      title: "Student Success Metrics",
      stats: [
        { number: "92%", label: "Career Change Success Rate" },
        { number: "156%", label: "Average Salary Increase" },
        { number: "4.2", label: "Months to First Job" },
        { number: "10,000+", label: "Success Stories" }
      ]
    },

    learningPath: {
      title: "Typical Learning Journey Timeline",
      phases: [
        { phase: "Foundation", duration: "0-2 months", description: "Basic concepts and fundamentals" },
        { phase: "Skill Building", duration: "2-6 months", description: "Hands-on projects and practice" },
        { phase: "Portfolio Development", duration: "6-8 months", description: "Real-world project creation" },
        { phase: "Job Search", duration: "8-10 months", description: "Interview prep and networking" }
      ]
    }
  },
  ar: {
    title: "نجاح الطلاب: من مبتدئ إلى محترف",
    subtitle: "قصص حقيقية للتحول المهني من خلال التعلم الإلكتروني",
    publishDate: "15 أكتوبر 2025",
    readTime: "6 دقائق قراءة",
    author: "فريق نجاح الطلاب",
    
    section1Title: "قصص تحول الطلاب الحقيقية: كسر الحواجز وبناء المهن",
    section1Content: [
      {
        heading: "سارة تشين: من مديرة تسويق إلى مطورة برمجيات أولى",
        text: "بدأت سارة بدون خبرة في البرمجة بينما كانت تعمل كمديرة تسويق. من خلال برنامج التطوير الشامل، خصصت 20-25 ساعة أسبوعياً للتعلم. خلال 8 أشهر، بنت محفظة من 12 مشروع، أتقنت React و Node.js، وحصلت على أول وظيفة مطورة في شركة تقنية ناشئة.",
        achievement: "زيادة في الراتب بنسبة 180% خلال 18 شهر",
        skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"]
      },
      {
        heading: "ماركوس رودريغيز: من عامل مستودع إلى عالم بيانات",
        text: "عمل ماركوس في نوبات ليلية في مستودع بينما كان يدرس علم البيانات أثناء النهار. رغم حصوله على شهادة الثانوية فقط، أكمل تخصص علم البيانات خلال 14 شهر. إصراره أثمر عندما حصل على منصب عالم بيانات في شركة Fortune 500.",
        achievement: "من شهادة الثانوية إلى عالم بيانات في Fortune 500",
        skills: ["Python", "Machine Learning", "SQL", "Tableau", "Statistics"]
      },
      {
        heading: "بريا باتيل: من أم ماكثة في البيت إلى مصممة UX",
        text: "بعد انقطاع مهني لمدة 6 سنوات لتربية أطفالها، عادت بريا إلى سوق العمل من خلال برنامج تصميم UX/UI. وازنت بين التعلم والأمومة، غالباً ما كانت تدرس أثناء قيلولة الأطفال وبعد وقت النوم. تفانيها أسفر عن محفظة تصميم شاملة أبهرت أصحاب العمل.",
        achievement: "عادت بنجاح لسوق العمل بعد انقطاع 6 سنوات",
        skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"]
      },
      {
        heading: "أحمد حسن: من نادل مطعم إلى مهندس سحابة",
        text: "هاجر أحمد إلى البلد بإنجليزية محدودة وعمل في وظائف خدمات متعددة لإعالة عائلته. من خلال برنامج شهادة الحوسبة السحابية، طور مهارات تقنية وإنجليزية مهنية. إصراره أدى إلى شهادات سحابية من AWS و Azure، والآن يعمل كمهندس سحابة بستة أرقام.",
        achievement: "من الحد الأدنى للأجور إلى مهندس سحابة بستة أرقام",
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps"]
      }
    ],

    section2Title: "رحلة التعلم: عوامل النجاح الرئيسية واستراتيجيات النمو المهني",
    section2Content: [
      {
        heading: "مسار تعلم منظم ووضع الأهداف",
        text: "الطلاب الناجحون يتبعون مسارات تعلم منظمة بمعالم واضحة. يضعون أهداف SMART (محددة، قابلة للقياس، قابلة للتحقيق، ذات صلة، محددة زمنياً) ويقسمون هدفهم المهني النهائي إلى خطوات أصغر وقابلة للإدارة."
      },
      {
        heading: "الممارسة المستمرة والتعلم القائم على المشاريع",
        text: "أنجح الطلاب يخصصون وقتاً ثابتاً للممارسة، حتى لو كان 30 دقيقة يومياً فقط. يركزون على بناء مشاريع حقيقية تثبت مهاراتهم لأصحاب العمل المحتملين. هذا النهج العملي لا يعزز المعرفة النظرية فحسب، بل ينشئ أيضاً محفظة تعرض القدرات العملية."
      },
      {
        heading: "مشاركة المجتمع والتواصل",
        text: "الطلاب الذين يشاركون بنشاط في مجتمعات التعلم وينضمون إلى مجموعات الدراسة ويحضرون لقاءات افتراضية هم أكثر عرضة للنجاح. هذه الاتصالات توفر المساءلة والتحفيز وغالباً ما تؤدي إلى فرص عمل."
      },
      {
        heading: "الإرشاد وعقلية التعلم المستمر",
        text: "المهنيون الناجحون يفهمون أن التعلم لا يتوقف بعد إكمال دورة. يسعون للإرشاد من خبراء الصناعة، ويبقون محدثين بأحدث الاتجاهات، ويطورون مهاراتهم باستمرار. ينظرون إلى التحديات كفرص تعلم ويحتفظون بعقلية نمو."
      }
    ],

    conclusion: "تُظهر قصص النجاح هذه أنه بالتفاني والتعلم المنظم ونظام الدعم المناسب، يمكن لأي شخص تحويل مسيرته المهنية بغض النظر عن نقطة البداية. المفتاح هو البدء بأهداف واضحة والحفاظ على الثبات والمشاركة مع المجتمع وعدم التوقف عن التعلم أبداً.",
    
    backToBlog: "← العودة للمدونة",
    shareArticle: "شارك المقال",
    relatedArticles: "مقالات ذات صلة",
    
    successMetrics: {
      title: "مقاييس نجاح الطلاب",
      stats: [
        { number: "92%", label: "معدل نجاح تغيير المهنة" },
        { number: "156%", label: "متوسط زيادة الراتب" },
        { number: "4.2", label: "أشهر للوظيفة الأولى" },
        { number: "10,000+", label: "قصة نجاح" }
      ]
    },

    learningPath: {
      title: "جدول رحلة التعلم النموذجية",
      phases: [
        { phase: "الأساسيات", duration: "0-2 أشهر", description: "المفاهيم والأساسيات الأساسية" },
        { phase: "بناء المهارات", duration: "2-6 أشهر", description: "مشاريع عملية وممارسة" },
        { phase: "تطوير المحفظة", duration: "6-8 أشهر", description: "إنشاء مشاريع من العالم الحقيقي" },
        { phase: "البحث عن وظيفة", duration: "8-10 أشهر", description: "التحضير للمقابلات والتواصل" }
      ]
    }
  },
  he: {
    title: "הצלחת סטודנטים: ממתחיל למקצוען",
    subtitle: "סיפורים אמיתיים של שינוי קריירה דרך למידה מקוונת",
    publishDate: "15 באוקטובר 2025",
    readTime: "6 דקות קריאה",
    author: "צוות הצלחת סטודנטים",
    
    section1Title: "סיפורי שינוי אמיתיים של סטודנטים: שבירת מחסומים ובניית קריירות",
    section1Content: [
      {
        heading: "שרה צ'ן: ממנהלת שיווק למפתחת תוכנה בכירה",
        text: "שרה התחילה ללא ניסיון בתכנות בזמן שעבדה כמנהלת שיווק. דרך תוכנית הפיתוח המלא שלנו, היא הקדישה 20-25 שעות שבועיות ללמידה. תוך 8 חודשים, היא בנתה תיק של 12 פרויקטים, שלטה ב-React ו-Node.js, וקיבלה את תפקיד המפתחת הראשון שלה בסטארטאפ טכנולוגי.",
        achievement: "העלאת שכר של 180% תוך 18 חודשים",
        skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"]
      },
      {
        heading: "מרקוס רודריגס: מעובד מחסן לדטה סיינטיסט",
        text: "מרקוס עבד במשמרות לילה במחסן בזמן שלמד מדעי נתונים ביום. למרות שהיה לו רק תעודת בגרות, הוא השלים את ההתמחות במדעי הנתונים שלנו תוך 14 חודשים. הנחישות שלו השתלמה כשהוא השיג תפקיד דטא סיינטיסט בחברת Fortune 500."
      },
      {
        heading: "פריה פטל: מאמא בבית למעצבת UX",
        text: "לאחר הפסקה קריירה של 6 שנים לגידול ילדיה, פריה חזרה לכוח העבודה דרך תוכנית עיצוב UX/UI שלנו. היא איזנה בין למידה והורות, לעתים קרובות למדה בזמן תנומת הילדים ואחרי שעת השינה. המסירות שלה הביאה לתיק עיצוב מקיף שהרשים מעסיקים."
      },
      {
        heading: "אחמד חסן: ממלצר למהנדס ענן",
        text: "אחמד היגר לארץ עם אנגלית מוגבלת ועבד בעבודות שירות מרובות כדי לפרנס את משפחתו. דרך תוכנית הסמכת המחשוב בענן שלנו, הוא פיתח גם כישורים טכניים וגם אנגלית מקצועית. ההתמדה שלו הביאה להסמכות ענן מ-AWS ו-Azure, וכעת הוא עובד כמהנדס ענן עם שכר שש ספרות."
      }
    ],

    section2Title: "מסע הלמידה: גורמי הצלחה מרכזיים ואסטרטגיות לצמיחה מקצועית",
    section2Content: [
      {
        heading: "מסלול למידה מובנה והגדרת יעדים",
        text: "סטודנטים מצליחים עוקבים אחר מסלולי למידה מובנים עם אבני דרך ברורות. הם קובעים יעדים SMART (ספציפיים, מדידים, ניתנים להשגה, רלוונטיים, מוגבלים בזמן) ומפרקים את המטרה הקריירית הסופית שלהם לשלבים קטנים וניתנים לניהול."
      },
      {
        heading: "תרגול עקבי ולמידה מבוססת פרויקטים",
        text: "הסטודנטים המצליחים ביותר מקדישים זמן עקבי לתרגול, גם אם זה רק 30 דקות ביום. הם מתמקדים בבניית פרויקטים אמיתיים שמדגימים את הכישורים שלהם למעסיקים פוטנציאליים. הגישה המעשית הזו לא רק מחזקת ידע תיאורטי אלא גם יוצרת תיק שמציג יכולות מעשיות."
      },
      {
        heading: "מעורבות קהילתית ויצירת קשרים",
        text: "סטודנטים שמשתתפים באופן פעיל בקהילות למידה, מצטרפים לקבוצות לימוד ומשתתפים במפגשים וירטואליים הם בעלי סיכוי גבוה יותר להצליח. הקשרים האלה מספקים אחריותיות, מוטיבציה ולעתים קרובות מובילים להזדמנויות עבודה."
      },
      {
        heading: "חונכות ומחשבת למידה מתמשכת",
        text: "מקצוענים מצליחים מבינים שהלמידה לא נפסקת אחרי השלמת קורס. הם מחפשים חונכות ממומחי תעשייה, נשארים מעודכנים עם המגמות האחרונות, ומשפרים כישורים באופן מתמיד. הם רואים באתגרים הזדמנויות למידה ושומרים על מחשבת צמיחה."
      }
    ],

    conclusion: "סיפורי ההצלחה האלה מדגימים שעם מסירות, למידה מובנית ומערכת תמיכה נכונה, כל אחד יכול לשנות את הקריירה שלו ללא תלות בנקודת ההתחלה. המפתח הוא להתחיל עם יעדים ברורים, לשמור על עקביות, להיות מעורב בקהילה ולעולם לא להפסיק ללמוד.",
    
    backToBlog: "← חזרה לבלוג",
    shareArticle: "שתף מאמר",
    relatedArticles: "מאמרים קשורים",
    
    successMetrics: {
      title: "מדדי הצלחת סטודנטים",
      stats: [
        { number: "92%", label: "שיעור הצלחה בשינוי קריירה" },
        { number: "156%", label: "העלאת שכר ממוצעת" },
        { number: "4.2", label: "חודשים לעבודה ראשונה" },
        { number: "10,000+", label: "סיפורי הצלחה" }
      ]
    },

    learningPath: {
      title: "ציר זמן טיפוסי למסע למידה",
      phases: [
        { phase: "יסודות", duration: "0-2 חודשים", description: "מושגים ויסודות בסיסיים" },
        { phase: "בניית מיומנויות", duration: "2-6 חודשים", description: "פרויקטים מעשיים ותרגול" },
        { phase: "פיתוח תיק עבודות", duration: "6-8 חודשים", description: "יצירת פרויקטים מהעולם האמיתי" },
        { phase: "חיפוש עבודה", duration: "8-10 חודשים", description: "הכנה לראיונות ויצירת קשרים" }
      ]
    }
  }
};

const Blog3 = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];
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

  const handleBackToBlog = () => {
    navigate("/blog");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Header */}
      <div className={`${darkMode ? "bg-black" : "bg-white"} border-b ${darkMode ? "border-sky-400" : "border-sky-400"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={handleBackToBlog}
            className="flex items-center text-sky-600 hover:text-sky-700 mb-6 transition-colors"
          >
            {t.backToBlog}
          </button>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-600">
            {t.title}
          </h1>
          
          <p className={`text-xl mb-6 ${darkMode ? "text-white" : "text-black"}`}>
            {t.subtitle}
          </p>
          
          <div className={`flex flex-wrap items-center gap-4 text-sm ${darkMode ? "text-white" : "text-black"}`}>
            <span>📅 {t.publishDate}</span>
            <span>⏱️ {t.readTime}</span>
            <span>👤 {t.author}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Success Metrics */}
        <section className={`mb-16 p-8 rounded-2xl ${darkMode ? "bg-black border border-sky-400" : "bg-sky-50 border border-sky-400"}`}>
          <h2 className="text-2xl font-bold mb-8 text-center text-sky-600">
            {t.successMetrics.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.successMetrics.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 1: Real Student Transformation Stories */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-sky-600">
            {t.section1Title}
          </h2>
          
          <div className="space-y-8">
            {t.section1Content.map((story, index) => (
              <div key={index} className={`p-6 rounded-2xl ${darkMode ? "bg-black border border-sky-400" : "bg-white border border-sky-400"} shadow-lg`}>
                <h3 className="text-xl font-bold mb-4 text-sky-600">
                  {story.heading}
                </h3>
                <p className={`leading-relaxed text-lg mb-4 ${darkMode ? "text-white" : "text-black"}`}>
                  {story.text}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    🎯 {story.achievement}
                  </div>
                </div>
                {story.skills && (
                  <div className="flex flex-wrap gap-2">
                    {story.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? "bg-sky-400 text-black" : "bg-sky-100 text-sky-800"}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path Timeline */}
        <section className={`mb-16 p-8 rounded-2xl ${darkMode ? "bg-black border border-sky-400" : "bg-white border border-sky-400"} shadow-lg`}>
          <h2 className="text-2xl font-bold mb-8 text-center text-sky-600">
            {t.learningPath.title}
          </h2>
          <div className="space-y-6">
            {t.learningPath.phases.map((phase, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-bold text-sky-600">{phase.phase}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? "bg-sky-400 text-black" : "bg-sky-100 text-sky-800"}`}>
                      {phase.duration}
                    </span>
                  </div>
                  <p className={`${darkMode ? "text-white" : "text-black"}`}>
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: The Learning Journey and Success Factors */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-sky-600">
            {t.section2Title}
          </h2>
          
          <div className="space-y-8">
            {t.section2Content.map((factor, index) => (
              <div key={index} className={`p-6 rounded-2xl ${darkMode ? "bg-black border border-sky-400" : "bg-white border border-sky-400"} shadow-lg`}>
                <h3 className="text-xl font-bold mb-4 text-sky-600">
                  {factor.heading}
                </h3>
                <p className={`leading-relaxed text-lg ${darkMode ? "text-white" : "text-black"}`}>
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Tips */}
        <section className={`mb-16 p-8 rounded-2xl ${darkMode ? "bg-black border border-sky-400" : "bg-sky-50 border border-sky-400"}`}>
          <h2 className="text-2xl font-bold mb-8 text-center text-sky-600">
            {language === 'en' && "Keys to Success"}
            {language === 'ar' && "مفاتيح النجاح"}
            {language === 'he' && "מפתחות להצלחה"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-sky-600 mb-2">
                  {language === 'en' && "Set Clear Goals"}
                  {language === 'ar' && "وضع أهداف واضحة"}
                  {language === 'he' && "הגדרת יעדים ברורים"}
                </h3>
                <p className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>
                  {language === 'en' && "Define specific career objectives and create a roadmap"}
                  {language === 'ar' && "حدد أهداف مهنية محددة وأنشئ خارطة طريق"}
                  {language === 'he' && "הגדר יעדים קריירתיים ספציפיים וצור מפת דרכים"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-sky-600 mb-2">
                  {language === 'en' && "Practice Consistently"}
                  {language === 'ar' && "مارس باستمرار"}
                  {language === 'he' && "תרגל באופן עקבי"}
                </h3>
                <p className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>
                  {language === 'en' && "Dedicate regular time to hands-on practice"}
                  {language === 'ar' && "خصص وقتاً منتظماً للممارسة العملية"}
                  {language === 'he' && "הקדש זמן קבוע לתרגול מעשי"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-sky-600 mb-2">
                  {language === 'en' && "Build Projects"}
                  {language === 'ar' && "ابن مشاريع"}
                  {language === 'he' && "בנה פרויקטים"}
                </h3>
                <p className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>
                  {language === 'en' && "Create real-world projects for your portfolio"}
                  {language === 'ar' && "أنشئ مشاريع من العالم الحقيقي لمحفظتك"}
                  {language === 'he' && "צור פרויקטים מהעולם האמיתי לתיק העבודות שלך"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-sky-600 mb-2">
                  {language === 'en' && "Network Actively"}
                  {language === 'ar' && "تواصل بنشاط"}
                  {language === 'he' && "צור קשרים באופן פעיל"}
                </h3>
                <p className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>
                  {language === 'en' && "Engage with communities and build professional relationships"}
                  {language === 'ar' && "تفاعل مع المجتمعات وابن علاقات مهنية"}
                  {language === 'he' && "הפעל מעורבות בקהילות ובנה קשרים מקצועיים"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className={`p-8 rounded-2xl ${darkMode ? "bg-black border border-sky-400" : "bg-sky-50 border border-sky-400"} mb-12`}>
          <h2 className="text-2xl font-bold mb-6 text-sky-600">
            {language === 'en' && "Your Success Journey Starts Now"}
            {language === 'ar' && "رحلة نجاحك تبدأ الآن"}
            {language === 'he' && "מסע ההצלחה שלך מתחיל עכשיו"}
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? "text-white" : "text-black"}`}>
            {t.conclusion}
          </p>
        </section>

        {/* Share Section */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBackToBlog}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {t.backToBlog}
          </button>
          
          <div className="flex items-center gap-4">
            <span className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}>
              {t.shareArticle}:
            </span>
            <div className="flex gap-2">
              <button className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors">
                📱
              </button>
              <button className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors">
                📧
              </button>
              <button className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-lg transition-colors">
                🔗
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
