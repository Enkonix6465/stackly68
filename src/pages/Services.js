import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import video from "../images/serviceslms.mp4"
import img1 from "../images/lmss1.jpg";
import img2 from "../images/lmss2.jpg"; 
import img3 from "../images/lmss3.jpg";
import img4 from "../images/lmss4.jpg";
import img5 from "../images/lmss5.jpg";
import img6 from "../images/lmss6.jpg";
const translations = {
  en: {
    heroTitle: "Learn Without Limits - Start Your Journey Today",
    heroDesc: "Transform your career with world-class courses, expert instructors, and flexible learning paths designed for real-world success.",
    getStarted: "Get Started",
    learnMore: "Explore Courses",
    ourServices: "Our Learning Categories",
    servicesIntro: "Comprehensive course catalog across in-demand fields",
    webdevTitle: "Web Development",
    webdevDesc: "Master modern web technologies from HTML/CSS to advanced frameworks.",
    dataScienceTitle: "Data Science",
    dataScienceDesc: "Learn data analysis, machine learning, and AI with hands-on projects.",
    designTitle: "UI/UX Design",
    designDesc: "Create stunning user experiences and interfaces with industry tools.",
    mobileTitle: "Mobile Development",
    mobileDesc: "Build cross-platform mobile apps with React Native and Flutter.",
    businessTitle: "Business & Marketing",
    businessDesc: "Develop business acumen and digital marketing strategies.",
    cybersecurityTitle: "Cyber Security",
    cybersecurityDesc: "Protect systems and networks with security best practices.",
    explore: "Explore",
    getResults: "Start Learning",
    seeExamples: "View Projects",
    portfolioHeading: "Student Success Stories",
    portfolioIntro: "See how our students have transformed their careers through our courses.",
    caseStudyTag: "Career Transformation",
    caseStudyTitle: "From Beginner to Tech Lead in 12 Months",
    caseStudyChallenge: "*Challenge:* A marketing professional wanted to transition into tech but lacked coding experience and industry connections.",
    caseStudySolution: "*Our Solution:* Through our Full-Stack Development program, they gained practical skills, built a portfolio, and landed a junior developer role that grew into a leadership position.",
    viewCaseStudy: "View Success Story",
    whyChooseHeading: "Why Learn With Us",
    whyChooseIntro: "We combine expert instruction with practical projects to ensure you gain job-ready skills.",
    expertInstructors: "Expert Instructors",
    expertInstructorsDesc: "Learn from industry professionals with real-world experience.",
    projectBased: "Project-Based Learning",
    projectBasedDesc: "Build portfolio-worthy projects that demonstrate your skills.",
    flexibleLearning: "Flexible Learning",
    flexibleLearningDesc: "Study at your own pace with lifetime access to course materials.",
    careerSupport: "Career Support",
    careerSupportDesc: "Get help with job preparation, interviews, and career advancement.",
    community: "Vibrant Community",
    communityDesc: "Join thousands of learners in our active student community.",
    certificate: "Industry Recognition",
    certificateDesc: "Earn certificates that demonstrate your expertise to employers.",
    packagesHeading: "Learning Plans",
    packagesIntro: "Choose the plan that fits your learning style and career goals.",
    starter: "Self-Paced Learning",
    starterDesc: "Perfect for independent learners who want to study at their own pace.",
    starterFeatures: [
      "Lifetime Course Access",
      "Video Lectures & Exercises",
      "Community Access",
      "Certificate of Completion"
    ],
    growth: "Mentor-Led Program",
    growthDesc: "Ideal for those who want guidance and personalized feedback.",
    growthFeatures: [
      "Everything in Self-Paced",
      "Weekly Mentor Sessions",
      "Project Reviews",
      "Career Coaching",
      "Priority Support",
      "Job Preparation Resources"
    ],
    enterprise: "Career Track",
    enterpriseDesc: "Complete career transformation with intensive support.",
    enterpriseFeatures: [
      "Everything in Mentor-Led",
      "1:1 Career Mentoring",
      "Guaranteed Internship",
      "Job Placement Assistance",
      "Resume & LinkedIn Optimization",
      "Interview Preparation"
    ],
    mostPopular: "Most Popular",
    faqHeading: "Learning FAQs",
    faqIntro: "Get answers to common questions about our courses and learning experience.",
    faqs: [
      {
        question: "How long do I have access to the courses?",
        answer: "You get lifetime access to all course materials, including future updates. Learn at your own pace and revisit content whenever you need."
      },
      {
        question: "Do you offer career support or job placement?",
        answer: "Yes! Our Career Track includes job placement assistance, and all plans include career resources. Many students land jobs before even completing their programs."
      },
      {
        question: "What if I have no prior experience?",
        answer: "Most of our courses are designed for complete beginners. We start with fundamentals and gradually build up to advanced concepts with plenty of practice along the way."
      }
    ],
    ctaHeading: "Ready to Start Your Learning Journey?",
    ctaParagraph: "Join thousands of students who have transformed their careers with our courses. Your future starts now!",
    ctaBtn: "Explore All Courses",
    
    // Online Course Provider Section
    onlineProviderHeading: "Leading Online Course Provider",
    onlineProviderIntro: "We're transforming education with innovative online learning solutions that deliver real results.",
    studentsEnrolled: "Students Enrolled",
    coursesAvailable: "Courses Available",
    instructors: "Expert Instructors",
    successRate: "Success Rate",
    onlineProviderFeatures: [
      {
        title: "Interactive Learning",
        description: "Engage with hands-on projects and real-world scenarios",
        icon: "💻"
      },
      {
        title: "24/7 Access",
        description: "Learn anytime, anywhere with lifetime course access",
        icon: "⏰"
      },
      {
        title: "Expert Support",
        description: "Get help from industry professionals and mentors",
        icon: "🎓"
      }
    ]
  },
  ar: {
    heroTitle: "تعلم بلا حدود - ابدأ رحلتك اليوم",
    heroDesc: "حول مسارك المهني من خلال دورات عالمية المستوى، مدربين خبراء، ومسارات تعلم مرنة مصممة للنجاح في العالم الحقيقي.",
    getStarted: "ابدأ الآن",
    learnMore: "استكشف الدورات",
    ourServices: "فئات التعلم لدينا",
    servicesIntro: "كتالوج دورات شامل عبر المجالات المطلوبة",
    webdevTitle: "تطوير الويب",
    webdevDesc: "أتقن تقنيات الويب الحديثة من HTML/CSS إلى الأطر المتقدمة.",
    dataScienceTitle: "علم البيانات",
    dataScienceDesc: "تعلم تحليل البيانات، التعلم الآلي، والذكاء الاصطناعي من خلال مشاريع عملية.",
    designTitle: "تصميم واجهات المستخدم",
    designDesc: "أنشئ تجارب مستخدم وواجهات مذهلة باستخدام أدوات الصناعة.",
    mobileTitle: "تطوير التطبيقات",
    mobileDesc: "ابنِ تطبيقات جوال متعددة المنصات باستخدام React Native و Flutter.",
    businessTitle: "الأعمال والتسويق",
    businessDesc: "طور الفطنة التجارية واستراتيجيات التسويق الرقمي.",
    cybersecurityTitle: "الأمن السيبراني",
    cybersecurityDesc: "احمِ الأنظمة والشبكات باستخدام أفضل ممارسات الأمان.",
    explore: "استكشف",
    getResults: "ابدأ التعلم",
    seeExamples: "عرض المشاريع",
    portfolioHeading: "قصص نجاح الطلاب",
    portfolioIntro: "شاهد كيف غير طلابنا مساراتهم المهنية من خلال دوراتنا.",
    caseStudyTag: "تحول مهني",
    caseStudyTitle: "من مبتدئ إلى قائد تقني في 12 شهراً",
    caseStudyChallenge: "*التحدي:* محترف في التسويق أراد الانتقال إلى المجال التقني لكنه يفتقر لخبرة البرمجة وعلاقات الصناعة.",
    caseStudySolution: "*الحل:* من خلال برنامجنا للتطوير الشامل، اكتسب مهارات عملية، بنى portfolio، وحصل على وظيفة مطور مبتدئ تطورت إلى منصب قيادي.",
    viewCaseStudy: "عرض قصة النجاح",
    whyChooseHeading: "لماذا تتعلم معنا",
    whyChooseIntro: "نجمع بين التعليم الخبير والمشاريع العملية لضمان اكتسابك مهارات جاهزة للوظائف.",
    expertInstructors: "مدربون خبراء",
    expertInstructorsDesc: "تعلم من محترفين في الصناعة بخبرة عملية حقيقية.",
    projectBased: "تعلم قائم على المشاريع",
    projectBasedDesc: "ابنِ مشاريع تستحق الـ portfolio تظهر مهاراتك.",
    flexibleLearning: "تعلم مرن",
    flexibleLearningDesc: "ادرس حسب سرعتك مع وصول مدى الحياة لمواد الدورة.",
    careerSupport: "دعم مهني",
    careerSupportDesc: "احصل على مساعدة في التحضير للوظائف، المقابلات، والتطور المهني.",
    community: "مجتمع نابض",
    communityDesc: "انضم إلى آلاف المتعلمين في مجتمعنا الطلابي النشط.",
    certificate: "اعتراف صناعي",
    certificateDesc: "احصل على شهادات تظهر خبرتك لأصحاب العمل.",
    packagesHeading: "خطط التعلم",
    packagesIntro: "اختر الخطة التي تناسب أسلوب تعلمك وأهدافك المهنية.",
    starter: "التعلم الذاتي",
    starterDesc: "مثالي للمتعلمين المستقلين الذين يريدون الدراسة حسب سرعتهم.",
    starterFeatures: [
      "وصول مدى الحياة للدورات",
      "محاضرات فيديو وتمارين",
      "وصول للمجتمع",
      "شهادة إتمام"
    ],
    growth: "برنامج بإرشاد mentor",
    growthDesc: "مثالي لمن يريد التوجيه وتغذية راجعة مخصصة.",
    growthFeatures: [
      "كل شيء في التعلم الذاتي",
      "جلسات أسبوعية مع mentor",
      "مراجعات المشاريع",
      "تدريب مهني",
      "دعم مسبق",
      "موارد التحضير للوظائف"
    ],
    enterprise: "المسار المهني",
    enterpriseDesc: "تحول مهني كامل بدعم مكثف.",
    enterpriseFeatures: [
      "كل شيء في برنامج mentor",
      "إرشاد مهني 1:1",
      "تدريب مضمون",
      "مساعدة في التوظيف",
      "تحسين السيرة الذاتية وLinkedIn",
      "تحضير للمقابلات"
    ],
    mostPopular: "الأكثر شعبية",
    faqHeading: "أسئلة شائعة عن التعلم",
    faqIntro: "احصل على إجابات للأسئلة الشائعة حول دوراتنا وتجربة التعلم.",
    faqs: [
      {
        question: "كم من الوقت لدي للوصول للدورات؟",
        answer: "تحصل على وصول مدى الحياة لجميع مواد الدورة، including future updates. تعلم حسب سرعتك وراجع المحتوى متى ما احتجت."
      },
      {
        question: "هل تقدمون دعمًا مهنيًا أو مساعدة في التوظيف؟",
        answer: "نعم! مسارنا المهني يتضمن مساعدة في التوظيف، وجميع الخطط تتضمن موارد مهنية. العديد من الطلاب يحصلون على وظائف حتى قبل إكمال برامجهم."
      },
      {
        question: "ماذا لو لم يكن لدي خبرة سابقة؟",
        answer: "معظم دوراتنا مصممة للمبتدئين تمامًا. نبدأ بالأساسيات ونتدرج إلى المفاهيم المتقدمة مع الكثير من الممارسة على الطريق."
      }
    ],
    ctaHeading: "جاهز لبدء رحلة التعلم؟",
    ctaParagraph: "انضم إلى آلاف الطلاب الذين غيروا مساراتهم المهنية بدوراتنا. مستقبلك يبدأ الآن!",
    ctaBtn: "استكشف جميع الدورات"
  },
  he: {
    heroTitle: "למדו ללא גבולות - התחילו את המסע שלכם היום",
    heroDesc: "שנו את הקריירה שלכם עם קורסים ברמה עולמית, מדריכים מומחים, ודרכי למידה גמישות שמותאמות להצלחה בעולם האמיתי.",
    getStarted: "התחילו עכשיו",
    learnMore: "גלו קורסים",
    ourServices: "קטגוריות הלמידה שלנו",
    servicesIntro: "קטלוג קורסים מקיף בתחומים המבוקשים",
    webdevTitle: "פיתוח אתרים",
    webdevDesc: "שלטו בטכנולוגיות ווב מודרניות מ-HTML/CSS למסגרות מתקדמות.",
    dataScienceTitle: "מדעי נתונים",
    dataScienceDesc: "למדו ניתוח נתונים, למידת מכונה ובינה מלאכותית עם פרויקטים מעשיים.",
    designTitle: "עיצוב UI/UX",
    designDesc: "צרו חוויות משתמש וממשקים מרהיבים עם כלים מהתעשייה.",
    mobileTitle: "פיתוח אפליקציות",
    mobileDesc: "בנו אפליקציות מובייל רב-פלטפורמיות עם React Native ו-Flutter.",
    businessTitle: "עסקים ושיווק",
    businessDesc: "פיתחו תובנה עסקית ואסטרטגיות שיווק דיגיטלי.",
    cybersecurityTitle: "אבטחת סייבר",
    cybersecurityDesc: "הגנו על מערכות ורשתות עם שיטות עבודה מומלצות באבטחה.",
    explore: "גלו",
    getResults: "התחילו ללמוד",
    seeExamples: "צפו בפרויקטים",
    portfolioHeading: "סיפורי הצלחה של סטודנטים",
    portfolioIntro: "ראו איך הסטודנטים שלנו שינו את הקריירה שלהם דרך הקורסים שלנו.",
    caseStudyTag: "שינוי קריירה",
    caseStudyTitle: "מתחיל למנהיג טכנולוגי תוך 12 חודשים",
    caseStudyChallenge: "*האתגר:* מומחה שיווק רצה לעבור לתחום הטכנולוגיה אבל חסר ניסיון בתכנות וקשרים בתעשייה.",
    caseStudySolution: "*הפתרון:* דרך תוכנית הפיתוח המלאה שלנו, הם רכשו מיומנויות מעשיות, בנו portfolio ומצאו עבודה כמפתח מתחיל שהתפתחה לתפקיד ניהולי.",
    viewCaseStudy: "צפו בסיפור ההצלחה",
    whyChooseHeading: "למה ללמוד איתנו",
    whyChooseIntro: "אנחנו משלבים הדרכה מקצועית עם פרויקטים מעשיים כדי להבטיח שתקבלו כישורים מוכנים לעבודה.",
    expertInstructors: "מדריכים מומחים",
    expertInstructorsDesc: "למדו ממומחים בתעשייה עם ניסיון מעשי.",
    projectBased: "למידה מבוססת פרויקטים",
    projectBasedDesc: "בנו פרויקטים ראויים ל-portfolio שמדגימים את הכישורים שלכם.",
    flexibleLearning: "למידה גמישה",
    flexibleLearningDesc: "למדו בקצב שלכם עם גישה לכל החיים לחומרי הקורס.",
    careerSupport: "תמיכה קריירתית",
    careerSupportDesc: "קבלו עזרה בהכנה לראיונות, ראיונות וקידום קריירה.",
    community: "קהילה תוססת",
    communityDesc: "הצטרפו לאלפי לומדים בקהילת הסטודנטים הפעילה שלנו.",
    certificate: "הכרה תעשייתית",
    certificateDesc: "הרוויחו תעודות שמדגימות את המומחיות שלכם למעסיקים.",
    packagesHeading: "תוכניות למידה",
    packagesIntro: "בחרו את התוכנית שמתאימה לסגנון הלמידה שלכם וליעדים הקריירתיים.",
    starter: "למידה עצמית",
    starterDesc: "מושלם ללומדים עצמאיים שרוצים ללמוד בקצב שלהם.",
    starterFeatures: [
      "גישה לכל החיים לקורסים",
      "הרצאות וידאו ותרגילים",
      "גישה לקהילה",
      "תעודת השלמה"
    ],
    growth: "תוכנית עם חונך",
    growthDesc: "אידיאלי למי שרוצה הדרכה ומשוב מותאם אישית.",
    growthFeatures: [
      "כל מה שיש בלמידה עצמית",
      "מפגשים שבועיים עם חונך",
      "ביקורות פרויקטים",
      "אימון קריירה",
      "תמיכה מועדפת",
      "משאבי הכנה לעבודה"
    ],
    enterprise: "מסלול קריירה",
    enterpriseDesc: "שינוי קריירה מלא עם תמיכה אינטנסיבית.",
    enterpriseFeatures: [
      "כל מה שיש בתוכנית חונך",
      "חונכות קריירה 1:1",
      "התמחות מובטחת",
      "סיוע בהשמה",
      "אופטימיזציה לקורות חיים ול-LinkedIn",
      "הכנה לראיונות"
    ],
    mostPopular: "הכי פופולרי",
    faqHeading: "שאלות נפוצות על למידה",
    faqIntro: "קבלו תשובות לשאלות נפוצות על הקורסים שלנו וחוויית הלמידה.",
    faqs: [
      {
        question: "כמה זמן יש לי גישה לקורסים?",
        answer: "יש לך גישה לכל החיים לכל חומרי הקורס, כולל עדכונים עתידיים. למדו בקצב שלכם וחזרו לתוכן מתי שאתם צריכים."
      },
      {
        question: "האם אתם מציעים תמיכה קריירתית או השמה?",
        answer: "כן! מסלול הקריירה שלנו כולל סיוע בהשמה, וכל התוכניות כוללות משאבים קריירתיים. סטודנטים רבים מוצאים עבודה עוד לפני שהם מסיימים את התוכניות שלהם."
      },
      {
        question: "מה אם אין לי ניסיון קודם?",
        answer: "רוב הקורסים שלנו מיועדים למתחילים מוחלטים. אנחנו מתחילים ביסודות ובונים בהדרגה לקראת מושגים מתקדמים עם הרבה תרגול בדרך."
      }
    ],
    ctaHeading: "מוכן להתחיל את מסע הלמידה?",
    ctaParagraph: "הצטרפו לאלפי סטודנטים ששינו את הקריירה שלהם עם הקורסים שלנו. העתיד שלכם מתחיל עכשיו!",
    ctaBtn: "גלו את כל הקורסים",
    
    // Online Course Provider Section
    onlineProviderHeading: "ספק קורסים מקוונים מוביל",
    onlineProviderIntro: "אנחנו משנים את החינוך עם פתרונות למידה מקוונים חדשניים שמספקים תוצאות אמיתיות.",
    studentsEnrolled: "סטודנטים רשומים",
    coursesAvailable: "קורסים זמינים",
    instructors: "מדריכים מומחים",
    successRate: "אחוז הצלחה",
    onlineProviderFeatures: [
      {
        title: "למידה אינטראקטיבית",
        description: "התעסקו עם פרויקטים מעשיים ותרחישים מהעולם האמיתי",
        icon: "💻"
      },
      {
        title: "גישה 24/7",
        description: "למדו בכל זמן ובכל מקום עם גישה לכל החיים לקורסים",
        icon: "⏰"
      },
      {
        title: "תמיכת מומחים",
        description: "קבלו עזרה ממקצוענים ומנטורים מהתעשייה",
        icon: "🎓"
      }
    ]
  },
  ar: {
    heroTitle: "تعلم بلا حدود - ابدأ رحلتك اليوم",
    heroDesc: "حول مسارك المهني من خلال دورات عالمية المستوى، مدربين خبراء، ومسارات تعلم مرنة مصممة للنجاح في العالم الحقيقي.",
    getStarted: "ابدأ الآن",
    learnMore: "استكشف الدورات",
    ourServices: "فئات التعلم لدينا",
    servicesIntro: "كتالوج دورات شامل عبر المجالات المطلوبة",
    webdevTitle: "تطوير الويب",
    webdevDesc: "أتقن تقنيات الويب الحديثة من HTML/CSS إلى الأطر المتقدمة.",
    dataScienceTitle: "علم البيانات",
    dataScienceDesc: "تعلم تحليل البيانات، التعلم الآلي، والذكاء الاصطناعي من خلال مشاريع عملية.",
    designTitle: "تصميم واجهات المستخدم",
    designDesc: "أنشئ تجارب مستخدم وواجهات مذهلة باستخدام أدوات الصناعة.",
    mobileTitle: "تطوير التطبيقات",
    mobileDesc: "ابنِ تطبيقات جوال متعددة المنصات باستخدام React Native و Flutter.",
    businessTitle: "الأعمال والتسويق",
    businessDesc: "طور الفطنة التجارية واستراتيجيات التسويق الرقمي.",
    cybersecurityTitle: "الأمن السيبراني",
    cybersecurityDesc: "احمِ الأنظمة والشبكات باستخدام أفضل ممارسات الأمان.",
    explore: "استكشف",
    getResults: "ابدأ التعلم",
    seeExamples: "عرض المشاريع",
    portfolioHeading: "قصص نجاح الطلاب",
    portfolioIntro: "شاهد كيف غير طلابنا مساراتهم المهنية من خلال دوراتنا.",
    caseStudyTag: "تحول مهني",
    caseStudyTitle: "من مبتدئ إلى قائد تقني في 12 شهراً",
    caseStudyChallenge: "*التحدي:* محترف في التسويق أراد الانتقال إلى المجال التقني لكنه يفتقر لخبرة البرمجة وعلاقات الصناعة.",
    caseStudySolution: "*الحل:* من خلال برنامجنا للتطوير الشامل، اكتسب مهارات عملية، بنى portfolio، وحصل على وظيفة مطور مبتدئ تطورت إلى منصب قيادي.",
    viewCaseStudy: "عرض قصة النجاح",
    whyChooseHeading: "لماذا تتعلم معنا",
    whyChooseIntro: "نجمع بين التعليم الخبير والمشاريع العملية لضمان اكتسابك مهارات جاهزة للوظائف.",
    expertInstructors: "مدربون خبراء",
    expertInstructorsDesc: "تعلم من محترفين في الصناعة بخبرة عملية حقيقية.",
    projectBased: "تعلم قائم على المشاريع",
    projectBasedDesc: "ابنِ مشاريع تستحق الـ portfolio تظهر مهاراتك.",
    flexibleLearning: "تعلم مرن",
    flexibleLearningDesc: "ادرس حسب سرعتك مع وصول مدى الحياة لمواد الدورة.",
    careerSupport: "دعم مهني",
    careerSupportDesc: "احصل على مساعدة في التحضير للوظائف، المقابلات، والتطور المهني.",
    community: "مجتمع نابض",
    communityDesc: "انضم إلى آلاف المتعلمين في مجتمعنا الطلابي النشط.",
    certificate: "اعتراف صناعي",
    certificateDesc: "احصل على شهادات تظهر خبرتك لأصحاب العمل.",
    packagesHeading: "خطط التعلم",
    packagesIntro: "اختر الخطة التي تناسب أسلوب تعلمك وأهدافك المهنية.",
    starter: "التعلم الذاتي",
    starterDesc: "مثالي للمتعلمين المستقلين الذين يريدون الدراسة في وتيرتهم الخاصة.",
    starterFeatures: [
      "الوصول مدى الحياة للدورات",
      "محاضرات فيديو وتمارين",
      "الوصول للمجتمع",
      "شهادة إتمام"
    ],
    growth: "برنامج مع موجه",
    growthDesc: "مثالي لأولئك الذين يريدون التوجيه والملاحظات الشخصية.",
    growthFeatures: [
      "كل ما هو موجود في التعلم الذاتي",
      "جلسات أسبوعية مع موجه",
      "مراجعات المشاريع",
      "التدريب المهني",
      "الدعم المتميز",
      "موارد التحضير للوظائف"
    ],
    enterprise: "مسار مهني",
    enterpriseDesc: "تحول مهني كامل مع دعم مكثف.",
    enterpriseFeatures: [
      "كل ما هو موجود في برنامج الموجه",
      "توجيه مهني شخصي 1:1",
      "تدريب مضمون",
      "مساعدة في التوظيف",
      "تحسين السيرة الذاتية و LinkedIn",
      "التحضير للمقابلات"
    ],
    mostPopular: "الأكثر شعبية",
    faqHeading: "أسئلة شائعة حول التعلم",
    faqIntro: "احصل على إجابات للأسئلة الشائعة حول دوراتنا وتجربة التعلم.",
    faqs: [
      {
        question: "كم من الوقت لدي للوصول إلى الدورات؟",
        answer: "لديك وصول مدى الحياة لجميع مواد الدورة، بما في ذلك التحديثات المستقبلية. تعلم بوتيرتك الخاصة وراجع المحتوى متى احتجت."
      },
      {
        question: "هل تقدمون دعماً مهنياً أو توظيفاً؟",
        answer: "نعم! يشمل المسار المهني لدينا مساعدة في التوظيف، وجميع الخطط تشمل موارد مهنية. العديد من الطلاب يجدون وظائف حتى قبل إنهاء برامجهم."
      },
      {
        question: "ماذا لو لم يكن لدي خبرة سابقة؟",
        answer: "معظم دوراتنا مصممة للمبتدئين تماماً. نبدأ بالأساسيات ونبني تدريجياً نحو المفاهيم المتقدمة مع الكثير من الممارسة في الطريق."
      }
    ],
    ctaHeading: "مستعد لبدء رحلة التعلم الخاصة بك؟",
    ctaParagraph: "انضم إلى آلاف الطلاب الذين غيروا مساراتهم المهنية من خلال دوراتنا. مستقبلك يبدأ الآن!",
    ctaBtn: "استكشف جميع الدورات",
    
    // Online Course Provider Section
    onlineProviderHeading: "مقدم الدورات الرقمية الرائد",
    onlineProviderIntro: "نحن نقوم بتحويل التعليم من خلال حلول التعلم الرقمي المبتكرة التي تحقق نتائج حقيقية.",
    studentsEnrolled: "طالب مسجل",
    coursesAvailable: "دورة متاحة",
    instructors: "مدرب خبير",
    successRate: "معدل النجاح",
    onlineProviderFeatures: [
      {
        title: "التعلم التفاعلي",
        description: "تفاعل مع المشاريع العملية والسيناريوهات الواقعية",
        icon: "💻"
      },
      {
        title: "الوصول على مدار الساعة",
        description: "تعلم في أي وقت وأي مكان مع الوصول مدى الحياة للدورات",
        icon: "⏰"
      },
      {
        title: "دعم الخبراء",
        description: "احصل على المساعدة من المحترفين والموجهين في الصناعة",
        icon: "🎓"
      }
    ]
  }
};

const Services = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const { language } = useLanguage();
  const t = translations[language] || translations["en"];

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

  const handleFaqToggle = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-black text-white" : "bg-white text-black"
    }`}>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t.heroDesc}
            </p>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-sky-600">
            {t.ourServices}
          </h2>
          <p className={`text-xl text-center mb-12 max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {t.servicesIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <img src={img1} alt={t.webdevTitle} className="w-full h-65 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-sky-600">{t.webdevTitle}</h3>
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.webdevDesc}</p>
                <button
                  onClick={() => handleGetStarted("/webdevelopment")}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {t.explore}
                </button>
              </div>
            </div>

            {/* Data Science */}
            <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <img src={img2} alt={t.dataScienceTitle} className="w-full h-65 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-sky-600">{t.dataScienceTitle}</h3>
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.dataScienceDesc}</p>
                <button
                  onClick={() => handleGetStarted("/datascience")}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {t.getResults}
                </button>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <img src={img3} alt={t.designTitle} className="w-full h-65 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-sky-600">{t.designTitle}</h3>
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.designDesc}</p>
                <button
                  onClick={() => handleGetStarted("/uidesign")}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {t.seeExamples}
                </button>
              </div>
            </div>

            {/* Mobile Development */}
            <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <img src={img4} alt={t.mobileTitle} className="w-full h-65 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-sky-600">{t.mobileTitle}</h3>
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.mobileDesc}</p>
                <button
                  onClick={() => handleGetStarted("/mobiledevelopment")}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {t.explore}
                </button>
              </div>
            </div>

            {/* Business & Marketing */}
            <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <img src={img5} alt={t.businessTitle} className="w-full h-65 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-sky-600">{t.businessTitle}</h3>
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.businessDesc}</p>
                <button
                  onClick={() => handleGetStarted("/business-marketing")}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {t.getResults}
                </button>
              </div>
            </div>

            {/* Cyber Security */}
            <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}>
              <img src={img6} alt={t.cybersecurityTitle} className="w-full h-65 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-sky-600">{t.cybersecurityTitle}</h3>
                <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.cybersecurityDesc}</p>
                <button
                  onClick={() => handleGetStarted("/cybersecurity")}
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {t.seeExamples}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Course Provider Section */}
      <section className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-600">
              {t.onlineProviderHeading}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              {t.onlineProviderIntro}
            </p>
          </div>

          {/* Interactive Learning Journey */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Real-time Learning */}
              <div className={`p-6 rounded-2xl ${darkMode ? "bg-black" : "bg-white"} border border-sky-400`}>
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm font-semibold text-sky-600">Live Now</span>
                </div>
                <div className="text-2xl font-bold text-sky-600 mb-1">247</div>
                <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Students Learning Right Now</div>
              </div>

              {/* Career Transformations */}
              <div className={`p-6 rounded-2xl ${darkMode ? "bg-black" : "bg-white"} border border-sky-400`}>
                <div className="flex items-center mb-3">
                  <div className="text-sky-500 mr-2">🚀</div>
                  <span className="text-sm font-semibold text-sky-600">Career Boost</span>
                </div>
                <div className="text-2xl font-bold text-sky-600 mb-1">3.2x</div>
                <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Average Salary Increase</div>
              </div>

              {/* Global Reach */}
              <div className={`p-6 rounded-2xl ${darkMode ? "bg-black" : "bg-white"} border border-sky-400`}>
                <div className="flex items-center mb-3">
                  <div className="text-sky-500 mr-2">🌍</div>
                  <span className="text-sm font-semibold text-sky-600">Global Impact</span>
                </div>
                <div className="text-2xl font-bold text-sky-600 mb-1">120+</div>
                <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Countries Represented</div>
              </div>

              {/* Innovation Index */}
              <div className={`p-6 rounded-2xl ${darkMode ? "bg-black" : "bg-white"} border border-sky-400`}>
                <div className="flex items-center mb-3">
                  <div className="text-sky-500 mr-2">⚡</div>
                  <span className="text-sm font-semibold text-sky-600">Fresh Content</span>
                </div>
                <div className="text-2xl font-bold text-sky-600 mb-1">Weekly</div>
                <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>New Courses & Updates</div>
              </div>
            </div>

            {/* Learning Progress Visualization */}
            <div className={`mt-8 p-6 rounded-2xl ${darkMode ? "bg-black" : "bg-white"} shadow-lg border border-sky-400`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-sky-600">Community Learning Progress Today</h3>
                <div className={`text-sm text-sky-500 ${darkMode ? "text-sky-400" : ""}`}>Updated every hour</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Coding Challenges Completed</span>
                  <div className="flex items-center">
                    <div className={`w-32 h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full mr-3`}>
                      <div className="w-3/4 h-full bg-sky-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">1,247</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Projects Submitted</span>
                  <div className="flex items-center">
                    <div className={`w-32 h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full mr-3`}>
                      <div className="w-2/3 h-full bg-sky-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">892</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Certificates Earned</span>
                  <div className="flex items-center">
                    <div className={`w-32 h-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full mr-3`}>
                      <div className="w-1/2 h-full bg-sky-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">156</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.onlineProviderFeatures.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? "bg-black" : "bg-white"
                } shadow-lg border border-sky-400`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-sky-600">
                  {feature.title}
                </h3>
                <p className={darkMode ? "text-white" : "text-black"}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-sky-600">
            {t.whyChooseHeading}
          </h2>
          <p className={`text-xl text-center mb-12 max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {t.whyChooseIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "👨‍🏫", title: t.expertInstructors, desc: t.expertInstructorsDesc, color: "sky" },
              { icon: "💼", title: t.projectBased, desc: t.projectBasedDesc, color: "sky" },
              { icon: "⏰", title: t.flexibleLearning, desc: t.flexibleLearningDesc, color: "sky" },
              { icon: "🎯", title: t.careerSupport, desc: t.careerSupportDesc, color: "sky" },
              { icon: "👥", title: t.community, desc: t.communityDesc, color: "sky" },
              { icon: "📜", title: t.certificate, desc: t.certificateDesc, color: "sky" }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                  darkMode ? "bg-black" : "bg-white"
                } shadow-lg border border-sky-400`}
              >
                <div className={`text-4xl mb-4`}>{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-3 text-sky-600`}>
                  {feature.title}
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Plans Section */}
      <section className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-sky-600">
            {t.packagesHeading}
          </h2>
          <p className={`text-xl text-center mb-12 max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {t.packagesIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Self-Paced Learning */}
            <div className={`rounded-2xl p-8 text-center relative transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-black" : "bg-white"
            } shadow-lg border border-sky-400`}>
              <h3 className="text-2xl font-bold mb-4 text-sky-600">{t.starter}</h3>
              <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.starterDesc}</p>
              <ul className="mb-8 space-y-3 text-left">
                {t.starterFeatures.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <span className="text-sky-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleGetStarted("/contact")}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {t.getStarted}
              </button>
            </div>

            {/* Mentor-Led Program */}
            <div className={`rounded-2xl p-8 text-center relative transform scale-105 border-2 border-sky-500 transition-all duration-300 hover:scale-110 ${
              darkMode ? "bg-black" : "bg-white"
            } shadow-xl`}>
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                {t.mostPopular}
              </span>
              <h3 className="text-2xl font-bold mb-4 text-sky-600">{t.growth}</h3>
              <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.growthDesc}</p>
              <ul className="mb-8 space-y-3 text-left">
                {t.growthFeatures.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <span className="text-sky-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleGetStarted("/services")}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {t.learnMore}
              </button>
            </div>

            {/* Career Track */}
            <div className={`rounded-2xl p-8 text-center relative transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-black" : "bg-white"
            } shadow-lg border border-sky-400`}>
              <h3 className="text-2xl font-bold mb-4 text-sky-600">{t.enterprise}</h3>
              <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{t.enterpriseDesc}</p>
              <ul className="mb-8 space-y-3 text-left">
                {t.enterpriseFeatures.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <span className="text-sky-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleGetStarted("/services")}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {t.learnMore}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-sky-600">
            {t.faqHeading}
          </h2>
          <p className={`text-xl text-center mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {t.faqIntro}
          </p>
          <div className="space-y-4">
            {t.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`rounded-lg overflow-hidden ${
                  darkMode ? "bg-black" : "bg-white"
                } shadow-md border border-sky-400`}
              >
                <button
                  className={`w-full p-6 text-left flex justify-between items-center transition-colors ${
                    darkMode ? "hover:bg-black" : "hover:bg-white"
                  }`}
                  onClick={() => handleFaqToggle(idx)}
                >
                  <h4 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{faq.question}</h4>
                  <span className={`transform transition-transform duration-300 text-sky-500 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFaq === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className={`p-6 border-t ${darkMode ? "border-sky-500" : "border-sky-400"}`}>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? "bg-black" : "bg-sky-600"}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t.ctaHeading}
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${darkMode ? "text-white" : "text-white"}`}>
            {t.ctaParagraph}
          </p>
          <button
            onClick={() => handleGetStarted("/courses")}
            className={`${darkMode ? "bg-white text-black hover:bg-sky-100" : "bg-white text-sky-600 hover:bg-sky-50"} px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105`}
          >
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;