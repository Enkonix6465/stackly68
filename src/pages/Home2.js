import React from "react";
import videohero from "../images/home2-ai.mp4";
import client1 from "../images/team4.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rocket from "../images/rocket.png";
import lock from "../images/padlock.png";
import search from "../images/search.png";
import thunder from "../images/thunder.png";
import backcta from "../images/cta.jpg";
import schedule from "../images/schedule.png";
import robot from "../images/robot.png";
import home2 from "../images/home2lms.mp4"
const webinars = [
    {
        date: "Sep 18, 2025",
        icon: schedule,
        title: "Choosing the Right Course Platform",
        desc: "Learn how to select the best online course platform for your teaching needs and audience."
    },
    {
        date: "Oct 2, 2025",
        icon: robot,
        title: "Course Creation Masterclass",
        desc: "Discover best practices for creating engaging online courses that students love."
    },
    {
        date: "Oct 16, 2025",
        icon: lock,
        title: "Marketing Your Online Courses",
        desc: "Explore strategies to effectively promote and sell your courses to global audiences."
    }
];

const translations = {
  en: {
    heroTitle: "Master New Skills with Top Courses",
    heroDesc: "Access thousands of expert-led courses across all subjects. Learn at your own pace, anytime, anywhere.",
    whyChoose: "Why Learn With Us?",
    provenResults: "Proven Learning Outcomes & Trusted Excellence",
    whyPara1: "Our students achieve remarkable results. With over 75,000 courses completed, we've helped learners worldwide advance their careers and pursue their passions.",
    whyPara2: "From individual learners to corporate teams, we've consistently delivered measurable learning outcomes that drive career growth and skill development. Our commitment to educational excellence is reflected in every course we host.",
    whyPara3: "With cutting-edge learning technology, expert instructors, and student-first approach, we transform complex subjects into accessible knowledge. Our comprehensive platform ensures every learner, regardless of background, can achieve their educational goals.",
    readMore: "Explore Courses",
    impactNumber: "Courses Completed",
    impactDesc: "Delivering quality education across programming, business, design, and personal development to learners worldwide.",
    transformTitle: "Transforming Careers Through Education",
    transformDesc: "Our platform empowers learners to acquire new skills, advance careers, and pursue passions. Trusted by students and professionals for quality content and seamless learning experience.",
    leadEngineer: "Head of Education",
    stats: ["Active Learners", "Expert Instructors", "Course Completion", "Subjects Covered"],
    webinarsTitle: "Upcoming Learning Sessions",
    register: "Join Now",
    registerFor: "Register for ",
    regSuccess: "Registration successful! Welcome to the session.",
    coreBenefits: "Learning Advantages",
    coreDesc: "Unlock your potential with our comprehensive learning platform. Experience engaging content, expert instruction, and flexible scheduling designed for real results.",
    benefits: [
      { icon: thunder, title: "Expert Instructors", desc: "Learn from industry professionals and experienced educators with real-world expertise." },
      { icon: search, title: "Diverse Catalog", desc: "Choose from thousands of courses across technology, business, arts, and personal development." },
      { icon: lock, title: "Lifetime Access", desc: "Once enrolled, access course materials forever and learn at your own pace." },
      { icon: rocket, title: "Career Advancement", desc: "Gain skills that employers value and advance your career with certified learning." }
    ],
    ctaTitle: "Ready to Start Learning?",
    ctaDesc: "Join thousands of students transforming their careers through online education. Begin your learning journey today!",
    ctaBtn: "Browse Courses"
  },
  ar: {
    heroTitle: "إتقن مهارات جديدة بأفضل الدورات",
    heroDesc: "الآلاف من الدورات التعليمية بقيادة خبراء في جميع المجالات. تعلم حسب سرعتك، في أي وقت ومكان.",
    whyChoose: "لماذا تتعلم معنا؟",
    provenResults: "نتائج تعليمية مثبتة وتميز موثوق",
    whyPara1: "يحقق طلابنا نتائج ملحوظة. مع أكثر من 75,000 دورة مكتملة، ساعدنا متعلمين حول العالم لتطوير مساراتهم المهنية ومتابعة شغفهم.",
    whyPara2: "من المتعلمين الأفراد إلى فرق الشركات، قدمنا باستمرار نتائج تعلم قابلة للقياس تدفع النمو الوظيفي وتطوير المهارات. التزامنا بالتميز التعليمي ينعكس في كل دورة نقدمها.",
    whyPara3: "بتقنيات التعلم المتقدمة، instructors experts، ونهج يركز على الطالب، نحول الموضوعات المعقدة إلى معرفة سهلة المنال. منصتنا الشاملة تضمن أن كل متعلم، بغض النظر عن خلفيته، يمكنه تحقيق أهدافه التعليمية.",
    readMore: "استكشف الدورات",
    impactNumber: "دورة مكتملة",
    impactDesc: "تقديم تعليم ذو جودة عبر البرمجة، الأعمال، التصميم، والتطور الشخصي للمتعلمين حول العالم.",
    transformTitle: "تحويل المسارات المهنية عبر التعليم",
    transformDesc: "منصتنا تمكن المتعلمين من اكتساب مهارات جديدة، تطوير المسار الوظيفي، ومتابعة الشغف. موثوق بها من الطلاب والمحترفين لمحتوى ذو جودة وتجربة تعلم سلسة.",
    leadEngineer: "رئيس التعليم",
    stats: ["متعلمون نشطون", "مدربون خبراء", "إكمال الدورة", "مواضيع مغطاة"],
    webinarsTitle: "جلسات التعلم القادمة",
    register: "انضم الآن",
    registerFor: "سجل في ",
    regSuccess: "تم التسجيل بنجاح! مرحبًا بك في الجلسة.",
    coreBenefits: "مزايا التعلم",
    coreDesc: "اكتشف إمكانياتك مع منصة التعلم الشاملة لدينا. جرب محتوى جذاب، تدريب من خبراء، وجدولة مرنة مصممة لتحقيق نتائج حقيقية.",
    benefits: [
      { icon: thunder, title: "مدربون خبراء", desc: "تعلم من محترفين في المجال ومعلمين ذوي خبرة عملية حقيقية." },
      { icon: search, title: "كتالوج متنوع", desc: "اختر من آلاف الدورات في التكنولوجيا، الأعمال، الفنون، والتطور الشخصي." },
      { icon: lock, title: "وصول مدى الحياة", desc: "بمجرد التسجيل، access course materials forever وتعلم حسب سرعتك." },
      { icon: rocket, title: "تطور وظيفي", desc: "اكتسب مهارات يقدرها أصحاب العمل وطور مسارك الوظيفي بتعلم معتمد." }
    ],
    ctaTitle: "مستعد للبدء في التعلم؟",
    ctaDesc: "انضم إلى آلاف الطلاب الذين يحولون مساراتهم المهنية عبر التعليم الإلكتروني. ابدأ رحلة التعلم اليوم!",
    ctaBtn: "تصفح الدورات"
  },
  he: {
    heroTitle: "השתלם במקצועות חדשים עם הקורסים המובילים",
    heroDesc: "גש לאלפי קורסים בהנחיית מומחים בכל התחומים. למד בקצב שלך, בכל זמן ובכל מקום.",
    whyChoose: "למה ללמוד איתנו?",
    provenResults: "תוצאות למידה מוכחות ומצוינות אמינה",
    whyPara1: "התלמידים שלנו משיגים תוצאות יוצאות דופן. עם למעלה מ-75,000 קורסים שהושלמו, עזרנו ללומדים ברחבי העולם לקדם את הקריירה שלהם ולממש את התשוקות שלהם.",
    whyPara2: "מלומדים בודדים ועד צוותים ארגוניים, סיפקנו בעקביות תוצאות למידה מדידות שמניעות צמיחה בקריירה ופיתוח כישורים. המחויבות שלנו למצוינות חינוכית משתקפת בכל קורס שאנו מארחים.",
    whyPara3: "עם טכנולוגיות למידה מתקדמות, מדריכים מומחים וגישה שממוקדת בתלמיד, אנו הופכים נושאים מורכבים לידע נגיש. הפלטפורמה המקיפה שלנו מבטיחה שכל לומד, ללא קebackground, יכול להשיג את מטרותיו החינוכיות.",
    readMore: "חקור קורסים",
    impactNumber: "קורסים שהושלמו",
    impactDesc: "מספקים חינוך איכותי across programming, business, design, and personal development ללומדים ברחבי העולם.",
    transformTitle: "משנים קריירות דרך חינוך",
    transformDesc: "הפלטפורמה שלנו מאפשרת ללומדים לרכוש כישורים חדשים, לקדם קריירה ולרדוף אחר תשוקות. אמון על ידי סטודנטים ואנשי מקצוע עבור תוכן איכותי וחוויית למידה חלקה.",
    leadEngineer: "ראש תחום חינוך",
    stats: ["לומדים פעילים", "מדריכים מומחים", "השלמת קורס", "נושאים נלמדים"],
    webinarsTitle: "סשני למידה קרובים",
    register: "הצטרף עכשיו",
    registerFor: "הירשם ל-",
    regSuccess: "ההרשמה הצליחה! ברוך הבא לסשן.",
    coreBenefits: "יתרונות למידה",
    coreDesc: "פתח את הפוטנציאל שלך עם פלטפורמת הלמידה המקיפה שלנו. חווה תוכן מרתק, הוראה מקצועית ולוח זמנים גמיש שתוכנן לתוצאות אמיתיות.",
    benefits: [
      { icon: thunder, title: "מדריכים מומחים", desc: "למד מאנשי מקצוע בתעשייה ומדריכים מנוסים עם מומחיות מעשית." },
      { icon: search, title: "קטלוג מגוון", desc: "בחר מתוך אלפי קורסים across technology, business, arts, and personal development." },
      { icon: lock, title: "גישה לכל החיים", desc: "With enrollment, access course materials forever ולמד בקצב שלך." },
      { icon: rocket, title: "קידום קריירה", desc: "רכוש כישורים that employers value וקדם את הקריירה שלך עם learning certified." }
    ],
    ctaTitle: "מוכן להתחיל ללמוד?",
    ctaDesc: "הצטרף לאלפי תלמידים שהופכים את הקריירה שלהם through online education. התחל את מסע הלמידה שלך היום!",
    ctaBtn: "עיין בקורסים"
  }
};

const Home2 = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedWebinar, setSelectedWebinar] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState(false);
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
    useEffect(() => {
        const updateLanguage = () => setLanguage(localStorage.getItem("language") || "en");
        window.addEventListener("storage", updateLanguage);
        const interval = setInterval(updateLanguage, 500);
        return () => {
            window.removeEventListener("storage", updateLanguage);
            clearInterval(interval);
        };
    }, []);

    const handleRegisterClick = (webinar) => {
        setSelectedWebinar(webinar);
        setShowModal(true);
        setFormData({ name: "", email: "" });
        setSubmitted(false);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store registration in localStorage
        const registrations = JSON.parse(localStorage.getItem("webinarRegistrations") || "[]");
        registrations.push({ ...formData, webinar: selectedWebinar.title, date: selectedWebinar.date });
        localStorage.setItem("webinarRegistrations", JSON.stringify(registrations));
        setSubmitted(true);
    };
    const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path);
    }

    return (
        <>
            <section className="relative w-screen h-screen m-0 p-0">
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={home2}
                    autoPlay
                    loop
                    muted
                />
                {/* Overlay and Tagline */}
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center z-10 px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">{translations[language].heroTitle}</h1>
                    <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">{translations[language].heroDesc}</p>
                </div>
            </section>
           
            <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
                <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side: Unified Panel, No Card */}
                    <div className="flex flex-col justify-center h-full">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">{translations[language].whyChoose}</h2>
                        <h3 className="text-2xl font-bold mb-4 text-sky-500 dark:text-sky-400">{translations[language].provenResults}</h3>
                        <p className="text-gray-800 dark:text-gray-200 mb-4">{translations[language].whyPara1}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{translations[language].whyPara2}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{translations[language].whyPara3}</p>
                        <button className="bg-black text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-sky-500 transition w-fit" onClick={()=>handleGetStarted("/services")}>{translations[language].readMore}</button>
                    </div>
                    {/* Right Side: Updated Stats Content */}
                    <div className="flex flex-col gap-6 justify-center h-full">
                        {[{
                            num: 1,
                            heading: translations[language].benefits[0].title,
                            para: translations[language].benefits[0].desc
                        }, {
                            num: 2,
                            heading: translations[language].benefits[1].title,
                            para: translations[language].benefits[1].desc
                        }, {
                            num: 3,
                            heading: translations[language].benefits[2].title,
                            para: translations[language].benefits[2].desc
                        }, {
                            num: 4,
                            heading: translations[language].benefits[3].title,
                            para: translations[language].benefits[3].desc
                        }].map((item, idx) => (
                            <motion.div
                                key={item.num}
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-14 h-14 aspect-square rounded-full bg-black dark:bg-sky-600 flex items-center justify-center text-2xl font-bold text-white border border-sky-400 shadow text-center"
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    {item.num}
                                </motion.div>
                                <div>
                                    <motion.h4
                                        className="font-bold text-lg text-black dark:text-white mb-1"
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.18 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.heading}
                                    </motion.h4>
                                    <motion.p
                                        className="text-gray-700 dark:text-gray-300 text-sm"
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.para}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/*client section*/}
            <section className="w-full py-20 bg-gradient-to-br from-black via-gray-900 to-sky-900 flex flex-col items-center">
                <div className="max-w-7xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    {/* Left: Impact Number */}
                    <div className="flex flex-col items-start justify-center md:col-span-1">
                        <span className="text-6xl font-extrabold text-sky-400 mb-2">75K+</span>
                        <span className="text-2xl font-bold text-sky-200 mb-6">{translations[language].impactNumber}</span>
                        <p className="text-gray-300 text-lg">{translations[language].impactDesc}</p>
                    </div>
                    {/* Center: Description */}
                    <div className="flex flex-col justify-center md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">{translations[language].transformTitle}</h3>
                        <p className="text-gray-300 mb-4">{translations[language].transformDesc}</p>
                        <div className="flex items-center gap-4 mt-6">
                            <img src={client1} alt="Team Member" className="w-16 h-16 rounded-full border-4 border-sky-400" />
                            <div>
                                <span className="font-bold text-white">Dr. Sarah Johnson</span>
                                <div className="text-sky-300 text-sm">{translations[language].leadEngineer}</div>
                            </div>
                        </div>
                    </div>
                    {/* Right: Stats Grid */}
                    <div className="flex flex-col gap-6 md:col-span-1">
                        <div className="grid grid-cols-2 gap-6">
                            {translations[language].stats.map((stat, idx) => (
                              <div key={stat} className="bg-gradient-to-tr from-sky-700 via-sky-500 to-sky-300 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
                                <span className="text-3xl font-extrabold text-white mb-2">{["50K+", "2K+", "85%", "200+"][idx]}</span>
                                <span className="text-lg text-sky-100 font-semibold">{stat}</span>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/*webinar section*/}
            <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
                <div className="max-w-3xl w-full mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-sky-600 dark:text-sky-400">{translations[language].webinarsTitle}</h2>
                    <div className="relative flex flex-col gap-12">
                        <div className="absolute left-7 top-0 h-full w-1 bg-sky-300 dark:bg-sky-600 rounded-full"></div>
                        {webinars.map((webinar, idx) => (
                            <motion.div
                                key={webinar.title}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 + idx * 0.15 }}
                                viewport={{ once: true }}
                                className="relative flex items-center gap-6"
                            >
                                <div className="z-10 w-14 h-14 aspect-square rounded-full bg-sky-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg border-4 border-white dark:border-black">
                                    <img src={webinar.icon} alt={webinar.title} className="w-8 h-8 object-contain" />
                                </div>
                                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-sky-200 dark:border-sky-600 flex-1">
                                    <div className="text-sky-600 dark:text-sky-400 font-bold text-lg mb-2">{webinar.date}</div>
                                    <h3 className="font-bold text-xl mb-2 text-black dark:text-white">{webinar.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{webinar.desc}</p>
                                    <button className="bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-sky-700 transition" onClick={() => handleRegisterClick(webinar)}>{translations[language].register}</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Modal for registration form */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md border-2 border-sky-300 dark:border-sky-600 relative">
                                <button className="absolute top-4 right-4 text-black dark:text-white text-2xl" onClick={() => setShowModal(false)}>&times;</button>
                                <h3 className="text-2xl font-bold mb-4 text-sky-600 dark:text-sky-400">{translations[language].registerFor}{selectedWebinar?.title}</h3>
                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            required
                                            className="p-3 rounded-lg border border-sky-200 dark:border-sky-600 bg-white dark:bg-gray-800 text-black dark:text-white"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your Email"
                                            required
                                            className="p-3 rounded-lg border border-sky-200 dark:border-sky-600 bg-white dark:bg-gray-800 text-black dark:text-white"
                                        />
                                        <button type="submit" className="bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-sky-700 transition">{translations[language].register}</button>
                                    </form>
                                ) : (
                                    <div className="text-green-600 dark:text-green-400 font-bold text-lg text-center py-6">{translations[language].regSuccess}</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
            
            <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
                <div className="max-w-6xl w-full mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-black dark:text-white">{translations[language].coreBenefits}</h2>
                    <p className="text-lg text-center text-gray-700 dark:text-white mb-12 max-w-3xl mx-auto">{translations[language].coreDesc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {translations[language].benefits.map((benefit, idx) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="rounded-2xl p-8 shadow-xl border-2 border-sky-400 bg-sky-500 flex flex-col items-center text-center hover:scale-105 transition-transform"
                            >
                                <div className="w-16 h-16 rounded-full bg-sky-700 flex items-center justify-center text-3xl mb-4 text-white shadow-lg">
                                  <img src={benefit.icon} alt={benefit.title} className="w-8 h-8 object-contain" />
                                </div>
                                <h3 className="font-bold text-xl text-white mb-2">{benefit.title}</h3>
                                <p className="text-white text-sm mb-2">{benefit.desc}</p>
                                <span className="block w-8 h-1 bg-sky-300 rounded-full mt-4 animate-pulse"></span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section
                className="w-full py-20 bg-gradient-to-r from-sky-600 via-sky-400 to-sky-800 flex flex-col items-center relative overflow-hidden"
                style={{
                    backgroundImage: `url(${backcta})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
                <div className="max-w-2xl w-full mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{translations[language].ctaTitle}</h2>
                    <p className="text-lg text-sky-100 mb-8">{translations[language].ctaDesc}</p>
                    <button className="bg-white text-sky-700 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-sky-100 transition-all text-xl" onClick={()=>handleGetStarted("/contact")}>{translations[language].ctaBtn}</button>
                </div>
            </section>
        </>
    );
}
export default Home2;