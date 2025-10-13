import React, { useRef, useEffect, useState } from "react";
import { useDarkMode } from "../context/Darkmodecontext";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FaStar, FaLinkedin } from 'react-icons/fa';
import home1 from '../images/home1.mp4'
import team from '../images/lms-team.jpg';
import { FaCode, FaPalette, FaChartLine, FaArrowRight } from 'react-icons/fa';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import logo1 from '../images/lmslogo1.jpg';
import logo2 from '../images/lmslogo2.jpg';
import logo3 from '../images/lmslogo3.jpg';
import logo4 from '../images/lmslogo4.jpg';

import logo5 from '../images/lmslogo6.jpg';
// ImageComponent defined within Home2.js
const ImageComponent = ({ imageUrl, courseName }) => {
  return (
    <div className="flex-1 max-w-[25%] h-64 relative overflow-hidden cursor-pointer rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <img
        src={imageUrl}
        alt={courseName}
        className="block w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 ease-in-out flex justify-center items-center hover:opacity-100">
        <div className="text-white text-xl font-bold text-center">{courseName}</div>
      </div>
    </div>
  );
};
const stories = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Frontend Developer at TechCorp",
    image: "/images/sarah-chen.jpg", // Replace with your image path
    story: "The courses gave me the skills to transition from marketing to a full-time developer role in under a year.",
    rating: 5,
    achievement: "Secured a 40% salary increase"
  },
  {
    id: 2,
    name: "David Rodriguez",
    role: "Data Scientist",
    image: "/images/david-rodriguez.jpg",
    story: "The project-based learning approach helped me build a portfolio that impressed my current employer.",
    rating: 5,
    achievement: "Landed a job after 6 months"
  }
];
const partners = [
  { id: 1, logoUrl: logo1, alt: 'Stanford University' },
  { id: 2, logoUrl: logo2, alt: 'MIT' },
  { id: 3, logoUrl: logo3, alt: 'Google' },
  { id: 4, logoUrl: logo4, alt: 'Microsoft' },
  { id: 5, logoUrl: logo5, alt: 'IBM' },

];

function Home1() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => {
    navigate(path);
  };

  const videoRef = useRef(null);
  const partnersRef = useRef(null);
  const [isPartnersVisible, setIsPartnersVisible] = useState(false);

  useEffect(() => {
    const node = partnersRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPartnersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const { darkMode } = useDarkMode();

  // Data for the course categories
  const courseCategoriesData = [
    { id: 1, url: img1, nameKey: 'courseProgramming' },
    { id: 2, url: img2, nameKey: 'courseDataScience' },
    { id: 3, url: img3, nameKey: 'courseBusiness' },
    { id: 4, url: img4, nameKey: 'courseDesign' },
  ];

  const { language } = useLanguage();
  const translations = {
    en: {
      heroTitle: "Master New Skills with Expert-Led Courses",
      heroDescription: "Access thousands of courses across programming, data science, business, and design. Learn at your own pace, anytime, anywhere.",
      whoWeAreTitle: "Who We Are",
      whoWeAreDescription: "We are a team of educators and industry experts dedicated to providing high-quality online education. With over a decade of experience, we specialize in technology, business, data science, and creative skills. Our mission is to make education accessible and effective, helping learners worldwide achieve their career goals through practical, project-based learning.",
      whoWeAreList: [
        "Proven track record of student success and career advancement",
        "Customized learning paths for every skill level",
        "Expertise in latest technologies and industry trends",
        "Dedicated mentorship and community support"
      ],
      whyChooseUs: "WHY CHOOSE US",
      whyChooseUsTitle: "Advance Your Career with Our Courses",
      whyChooseUsDescription: "Our curriculum is designed with input from industry leaders to ensure it meets current market demands. You'll gain hands-on experience, learn from expert instructors, and earn valuable certifications that employers recognize. With flexible scheduling and lifetime access to course materials, you can learn at your own pace while building a portfolio of real-world projects.",
      getStarted: "Explore Courses",
      growthFocused: "Expert Instructors",
      growthFocusedDesc: "Learn from industry professionals and experienced educators with real-world expertise.",
      creativeSolutions: "Diverse Catalog",
      creativeSolutionsDesc: "Choose from thousands of courses across technology, business, arts, and personal development.",
      trustedExpertise: "Career Advancement",
      trustedExpertiseDesc: "Gain skills that employers value and advance your career with certified learning programs.",
      gallerySubtitle: "Course Categories",
      galleryTitle: "Explore Our Learning Paths",
      courseProgramming: "Programming & Development",
      courseDataScience: "Data Science & AI",
      courseBusiness: "Business & Management",
      courseDesign: "Design & Creativity",
      trustedByTitle: "TRUSTED BY LEADING INSTITUTIONS",
      readyToTransform: "Ready to transform your career through education? Join thousands of students who have advanced their skills and achieved their professional goals with our courses.",
      freeConsultation: "START LEARNING NOW",
    },
    ar: {
      heroTitle: "أتقن مهارات جديدة مع دورات بقيادة خبراء",
      heroDescription: "الآلاف من الدورات في البرمجة، علم البيانات، الأعمال، والتصميم. تعلم حسب سرعتك، في أي وقت ومكان.",
      whoWeAreTitle: "من نحن",
      whoWeAreDescription: "نحن فريق من المعلمين وخبراء الصناعة المكرسين لتقديم تعليم إلكتروني عالي الجودة. مع أكثر من عقد من الخبرة، نحن متخصصون في التكنولوجيا، الأعمال، علم البيانات، والمهارات الإبداعية. مهمتنا هي جعل التعليم في متناول الجميع وفعالاً، ومساعدة المتعلمين حول العالم لتحقيق أهدافهم المهنية من خلال التعلم العملي القائم على المشاريع.",
      whoWeAreList: [
        "سجل مثبت في نجاح الطلاب والتقدم الوظيفي",
        "مسارات تعلم مخصصة لكل مستوى مهارة",
        "خبرة في أحدث التقنيات واتجاهات الصناعة",
        "توجيه مخصص ودعم مجتمعي"
      ],
      whyChooseUs: "لماذا تختارنا",
      whyChooseUsTitle: "طور مسارك الوظيفي مع دوراتنا",
      whyChooseUsDescription: "تم تصميم منهجنا بالتشاور مع قادة الصناعة لضمان تلبية متطلبات السوق الحالية. ستكتسب خبرة عملية، تتعلم من مدربين خبراء، وتحصل على شهادات معترف بها من قبل أصحاب العمل. مع جدولة مرنة ووصول مدى الحياة لمواد الدورة، يمكنك التعلم حسب سرعتك أثناء بناء محفظة من المشاريع العملية.",
      getStarted: "استكشف الدورات",
      growthFocused: "مدربون خبراء",
      growthFocusedDesc: "تعلم من محترفين في المجال ومعلمين ذوي خبرة عملية حقيقية.",
      creativeSolutions: "كتالوج متنوع",
      creativeSolutionsDesc: "اختر من آلاف الدورات في التكنولوجيا، الأعمال، الفنون، والتطور الشخصي.",
      trustedExpertise: "تطور وظيفي",
      trustedExpertiseDesc: "اكتسب مهارات يقدرها أصحاب العمل وطور مسارك الوظيفي ببرامج تعلم معتمدة.",
      gallerySubtitle: "فئات الدورات",
      galleryTitle: "استكشف مسارات التعلم لدينا",
      courseProgramming: "البرمجة والتطوير",
      courseDataScience: "علم البيانات والذكاء الاصطناعي",
      courseBusiness: "الأعمال والإدارة",
      courseDesign: "التصميم والإبداع",
      trustedByTitle: "موثوق به من قبل مؤسسات رائدة",
      readyToTransform: "هل أنت مستعد لتحويل مسارك الوظيفي من خلال التعليم؟ انضم إلى آلاف الطلاب الذين طوروا مهاراتهم وحققوا أهدافهم المهنية مع دوراتنا.",
      freeConsultation: "ابدأ التعلم الآن",
    },
    he: {
      heroTitle: "השתלם במקצועות חדשים עם קורסים בהנחיית מומחים",
      heroDescription: "גש לאלפי קורסים בתכנות, מדעי נתונים, עסקים ועיצוב. למד בקצב שלך, בכל זמן ובכל מקום.",
      whoWeAreTitle: "מי אנחנו",
      whoWeAreDescription: "אנחנו צוות של מחנכים ומומחים מתעשייה שמחויבים לספק חינוך מקוון באיכות גבוהה. עם ניסיון של מעל עשור, אנחנו מתמחים בטכנולוגיה, עסקים, מדעי נתונים וכישורים יצירתיים. המשימה שלנו היא להפוך חינוך לנגיש ויעיל, לעזור ללומדים ברחבי העולם להשיג את מטרות הקריירה שלהם through practical, project-based learning.",
      whoWeAreList: [
        "הוכחה להצלחת סטודנטים וקידום קריירה",
        "מסלולי למידה מותאמים אישית לכל רמת מיומנות",
        "מומחיות בטכנולוגיות ועדכוני תעשייה אחרונים",
        "הנחיה ייעודית ותמיכה קהילתית"
      ],
      whyChooseUs: "למה לבחור בנו",
      whyChooseUsTitle: "קדם את הקריירה שלך עם הקורסים שלנו",
      whyChooseUsDescription: "התכנית הלימודית שלנו תוכננה עם קלט ממנהיגי תעשייה כדי להבטיח שהיא עומדת בדרישות השוק הנוכחיות. תרכוש ניסיון מעשי, תלמד ממדריכים מומחים, ותרוויח הסמכות valuable that employers recognize. With flexible scheduling and lifetime access to course materials, you can learn at your own pace while building a portfolio of real-world projects.",
      getStarted: "חקור קורסים",
      growthFocused: "מדריכים מומחים",
      growthFocusedDesc: "למד מאנשי מקצוע בתעשייה ומדריכים מנוסים עם מומחיות מעשית.",
      creativeSolutions: "קטלוג מגוון",
      creativeSolutionsDesc: "בחר מתוך אלפי קורסים across technology, business, arts, and personal development.",
      trustedExpertise: "קידום קריירה",
      trustedExpertiseDesc: "רכוש כישורים that employers value וקדם את הקריירה שלך עם learning certified.",
      gallerySubtitle: "קטגוריות קורסים",
      galleryTitle: "גלה את מסלולי הלמידה שלנו",
      courseProgramming: "תכנות ופיתוח",
      courseDataScience: "מדעי נתונים ו-AI",
      courseBusiness: "עסקים וניהול",
      courseDesign: "עיצוב ויצירתיות",
      trustedByTitle: "מובילי התעשייה סומכים עלינו",
      readyToTransform: "מוכן לשדרג את הקריירה שלך through education? הצטרף לאלפי תלמידים שקידמו את הכישורים שלהם והשיגו את מטרותיהם המקצועיות עם הקורסים שלנו.",
      freeConsultation: "התחל ללמוד עכשיו",
    }
  };

  const t = translations[language] || translations["en"];
  const paths = [
    {
      id: 1,
      title: "Full-Stack Developer",
      icon: <FaCode className="text-sky-500" />,
      description: "Go from zero to hireable in modern web development",
      duration: "8 months",
      level: "Beginner to Advanced",
      steps: [
        "HTML, CSS & JavaScript Fundamentals",
        "Frontend with React & Tailwind",
        "Backend with Node.js & Databases",
        "Portfolio Development & Interview Prep"
      ],
      color: "sky"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      icon: <FaPalette className="text-sky-500" />,
      description: "Master design thinking and create stunning interfaces",
      duration: "6 months",
      level: "Beginner to Portfolio-Ready",
      steps: [
        "Design Principles & Figma Basics",
        "User Research & Wireframing",
        "Prototyping & Interaction Design",
        "Build a Professional Design Portfolio"
      ],
      color: "sky"
    }
  ];

  const colorClasses = {
    sky: 'bg-sky-50 border-sky-200 hover:border-sky-400',
  };
  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ease-in-out ${darkMode ? "dark bg-transparent text-white" : "bg-gray-100 text-gray-900"
      }`}>

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={home1}
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="absolute inset-0 bg-black/55 z-1"></div>
        <div className="relative z-2 text-white text-center w-full max-w-4xl mx-auto px-5 py-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in-down">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-500">
            {t.heroDescription}
          </p>
          <div className="animate-fade-in-scale delay-1000">
            <button
              className="px-8 py-4 border-0 rounded-full text-lg font-bold bg-gradient-to-r from-sky-500 to-sky-600 text-white cursor-pointer transition-all duration-300 hover:from-sky-600 hover:to-sky-700 hover:scale-105"
              onClick={() => handleGetStarted("/courses")}
            >
              {t.gallerySubtitle}
            </button>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className={`py-10 px-5 bg-white dark:bg-black`}>
        <div className="flex flex-col md:flex-row justify-center items-stretch max-w-6xl mx-auto gap-10">
          <div className="flex-1 flex flex-col justify-center pr-0 md:pr-5 mt-0">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">{t.whoWeAreTitle}</h2>
            <p className="text-justify text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {t.whoWeAreDescription}
            </p>
            <ul className="mt-5 mb-0 pl-0 list-none">
              {t.whoWeAreList.map((item, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-200 mb-4 flex items-start text-lg">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-center h-[75vh]">
            <img
              src={team}
              alt="Education Team"
              className="w-full h-full object-cover rounded-lg shadow-lg dark:shadow-gray-800"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-skyblue-400 dark:bg-black px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">From Our Learning Community</h2>
          <p className="text-lg text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto">
            See how our students have transformed their careers and achieved their goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((student) => (
              <div key={student.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16  dark:text-white rounded-full object-cover border-2 border-sky-200"
                  />
                  <div className="ml-4 text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{student.name}</h3>
                    <p className="text-gray-600 dark:text-white text-sm">{student.role}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(student.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <FaLinkedin className="ml-auto text-blue-600 text-xl" />
                </div>

                <p className="text-gray-700 mb-4 text-left italic dark:text-white">"{student.story}"</p>

                <div className="bg-sky-50 inline-flex items-center px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-sky-700">
                    🎯 {student.achievement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className={`py-10 px-5 text-center dark:bg-black`}>
        <div className="mb-10">
          <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest">{t.gallerySubtitle}</p>
          <h2 className="text-4xl font-bold dark:text-white mt-1">{t.galleryTitle}</h2>
        </div>
        <div className="flex justify-center gap-5 flex-wrap max-w-6xl mx-auto">
          {courseCategoriesData.map((category) => (
            <ImageComponent
              key={category.id}
              imageUrl={category.url}
              courseName={t[category.nameKey]}
            />
          ))}
        </div>
      </section>


      <section className="py-16 bg-white px-4 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Structured Learning Paths</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
              Follow expert-curated roadmaps to build in-demand skills and launch your new career.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {paths.map((path) => (
              <div
                key={path.id}
                className={`border-2 rounded-2xl p-8 transition-all duration-300 dark:bg-gray-800  hover:shadow-lg ${colorClasses[path.color]}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">
                      {path.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{path.title}</h3>
                      <p className="text-gray-600 dark:text-white">{path.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium border">
                    ⏱️ {path.duration}
                  </span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium border">
                    📊 {path.level}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 dark:text-white">Your Learning Journey:</h4>
                  <div className="space-y-2">
                    {path.steps.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 bg-white border rounded-full flex items-center justify-center mr-3 text-sm font-bold ">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 dark:text-white">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="group w-full bg-gray-900 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-800 transition-colors">
                  Start This Path
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section
        ref={partnersRef}
        className={`py-10 px-5 text-center transition-colors duration-500 dark:bg-black `}
      >
        <div className="mb-5">
          <h2 className="text-3xl font-semibold dark:text-white mb-1">{t.trustedByTitle}</h2>
          <div className="relative w-15 h-px bg-gray-500 dark:bg-gray-600 mx-auto mb-10">
            <span className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-sky-500 rounded-full"></span>
          </div>
        </div>
        <div className={`flex flex-wrap justify-center items-center gap-10 max-w-6xl mx-auto ${isPartnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          } transition-all duration-800 ease-out`}>
          {partners.map(partner => (
            <div
              key={partner.id}
              className="flex justify-center items-center flex-1 basis-40 max-w-44 opacity-0 translate-y-5 transition-transform duration-800 ease-out"
              style={isPartnersVisible ? { opacity: 1, transform: 'translateY(0)' } : {}}
            >
              <img
                src={partner.logoUrl}
                alt={partner.alt}
                className="w-full h-auto max-w-36 grayscale opacity-80 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Get Started Section */}
      <div className="py-24 px-5 bg-black text-white text-center relative">
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col gap-8">
          <p className="text-xl leading-loose text-center">{t.readyToTransform}</p>
          <button
            className="bg-gradient-to-r from-sky-500 to-sky-600 text-white border-0 rounded px-10 py-4 text-lg font-bold cursor-pointer transition-all duration-300 hover:from-sky-600 hover:to-sky-700 hover:-translate-y-1 hover:shadow-xl self-center"
            onClick={() => handleGetStarted("/signup")}
          >
            {t.freeConsultation}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home1;