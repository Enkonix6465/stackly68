import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import vision from "../images/ai-vision.jpg"; // Replace with your actual image file path
// Replace with your actual video file path
import aboutvideo from "../images/aboutlms.mp4";
import { useNavigate } from "react-router-dom";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Award, 
  BookOpen, 
  Star, 
  Users,
  Quote,
  Play,
  Heart, 
  Target, 
  Rocket, 
  Sparkles, 
  Clock
} from 'lucide-react';
import team1 from "../images/team2.jpg"; // Replace with actual image paths
import team2 from "../images/team3.jpg"; // Replace with actual image paths 
import team3 from "../images/team4.jpg"; // Replace with actual image paths
import expert1 from "../images/expert1.jpg"; // Replace with actual image paths
const translations = {
  en: {
    taglineTitle: "Empowering Learners Worldwide",
    taglineDesc: "We're on a mission to make quality education accessible to everyone, everywhere. Join millions of students transforming their careers through our comprehensive online courses."
  },
  ar: {
    taglineTitle: "تمكين المتعلمين حول العالم",
    taglineDesc: "نحن في مهمة لجعل التعليم الجيد في متناول الجميع، في كل مكان. انضم إلى ملايين الطلاب الذين يحولون مساراتهم المهنية من خلال دوراتنا الإلكترونية الشاملة."
  },
  he: {
    taglineTitle: "העצמת לומדים ברחבי העולם",
    taglineDesc: "אנחנו במשימה להפוך חינוך איכותי לנגיש לכולם, בכל מקום. הצטרף למיליוני סטודנטים המשנים את הקריירה שלהם דרך הקורסים המקוונים המקיפים שלנו."
  }
};

export default function AboutUs() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const navigate = useNavigate();

  useEffect(() => {
    const updateLanguage = () => setLanguage(localStorage.getItem("language") || "en");
    window.addEventListener("storage", updateLanguage);
    const interval = setInterval(updateLanguage, 500);
    return () => {
      window.removeEventListener("storage", updateLanguage);
      clearInterval(interval);
    };
  }, []);

  const handleGetStarted = (path) => {
    navigate(path);
  }

  const courses = [
    {
      id: 1,
      title: "Advanced Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB",
      image: "🖥️",
      level: "Advanced",
      duration: "42 hours",
      students: 1240,
      rating: 4.9,
      category: "development"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning basics",
      image: "📊",
      level: "Intermediate",
      duration: "36 hours",
      students: 890,
      rating: 4.8,
      category: "data"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Create stunning user interfaces and exceptional user experiences",
      image: "🎨",
      level: "Beginner",
      duration: "28 hours",
      students: 1560,
      rating: 4.7,
      category: "design"
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps with React Native",
      image: "📱",
      level: "Intermediate",
      duration: "38 hours",
      students: 720,
      rating: 4.9,
      category: "development"
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'data', label: 'Data Science' },
    { id: 'business', label: 'Business' }
  ];

  const filteredCourses = activeFilter === 'all'
    ? courses
    : courses.filter(course => course.category === activeFilter);


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const storyElements = [
    {
      icon: Heart,
      title: "Our Passion",
      description: "It all started with a simple belief: education should be accessible, engaging, and transformative. We saw the gap between traditional learning and modern needs.",
      color: "from-sky-500 to-sky-600",
      delay: 0.1
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To break down barriers in education by creating courses that don't just teach, but inspire. To build a community where everyone can learn without limits.",
      color: "from-sky-400 to-sky-500",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Our Community",
      description: "What started as a small team of educators has grown into a global family of millions. Every student's success story fuels our journey forward.",
      color: "from-sky-600 to-sky-700",
      delay: 0.3
    },
    {
      icon: Rocket,
      title: "Our Growth",
      description: "From our first course to thousands of success stories, we've continuously evolved to meet the changing needs of learners in a digital world.",
      color: "from-sky-500 to-sky-600",
      delay: 0.4
    }
  ];

  const stats = [
    { number: "2015", label: "Year We Started", suffix: "" },
    { number: "500K", label: "Students Empowered", suffix: "+" },
    { number: "50", label: "Countries Reached", suffix: "+" },
    { number: "98", label: "Satisfaction Rate", suffix: "%" }
  ];
  
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Chief Learning Officer",
      image: team1,
      bio: "Former Google Senior Engineer with 10+ years in web development education. Passionate about making coding accessible to everyone.",
      expertise: ["React", "JavaScript", "Node.js"],
      courses: 15,
      students: 50000,
      rating: 4.9,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "#"
      },
      color: "from-sky-500 to-sky-600"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Lead Data Science Instructor",
      image: team2,
      bio: "Ex-Netflix Data Scientist specializing in machine learning and AI. Believes in project-based learning for real-world skills.",
      expertise: ["Python", "Machine Learning", "TensorFlow"],
      courses: 12,
      students: 35000,
      rating: 4.8,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "#"
      },
      color: "from-sky-400 to-sky-500"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "UX/UI Design Director",
      image: team3,
      bio: "Former Apple Design Lead with a passion for creating beautiful, user-centered interfaces. Mentor at Design Buddies.",
      expertise: ["Figma", "UI/UX", "Design Systems"],
      courses: 8,
      students: 28000,
      rating: 4.9,
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
        email: "#"
      },
      color: "from-sky-600 to-sky-700"
    },
    
    
  ];

  const achievements = [
    { icon: Users, value: "50+", label: "Expert Instructors" },
    { icon: BookOpen, value: "500+", label: "Courses Created" },
    { icon: Award, value: "1M+", label: "Students Taught" },
    { icon: Star, value: "4.9/5", label: "Average Rating" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      {/* 1. Background Video + Tagline */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={aboutvideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg text-center"
          >
            {translations[language].taglineTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-center"
          >
            {translations[language].taglineDesc}
          </motion.p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Explore Our <span className="text-sky-600">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover courses across various categories taught by industry experts and university partners
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Course Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                {/* Course Image */}
                <div className="h-48 bg-gradient-to-r from-sky-500 to-sky-600 flex items-center justify-center text-6xl">
                  {course.image}
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-gray-700 font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-sky-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <BookOpen size={16} />
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section ref={ref} className="py-20 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 mb-6"
            >
              <Sparkles className="text-sky-500" size={20} />
              <span className="text-gray-700 font-semibold">Our Journey</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Story Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-600">Your Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every great learning journey has a beginning. Ours started with a simple question:
              <span className="font-semibold text-gray-800"> How can we make world-class education accessible to everyone?</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content - Main Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <BookOpen className="text-sky-600" size={28} />
                  How It All Began
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  In 2015, a group of passionate educators and tech enthusiasts came together with a shared vision.
                  We were frustrated by the limitations of traditional education systems and inspired by the potential of technology to transform learning.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our first course was built in a small apartment with big dreams. Today, we're proud to have helped hundreds of thousands
                  of learners worldwide achieve their goals and transform their careers.
                </p>
              </div>

              {/* Floating Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 shadow-lg"
                  >
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                      <span className="text-sky-600">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Story Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {storyElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: element.delay }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${element.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <element.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                        {element.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {element.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          
          
        </div>
      </section>
      <section ref={ref} className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6"
          >
            <Users className="text-sky-400" size={20} />
            <span className="text-white font-semibold">Meet Our Team</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">Industry Experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our instructors are passionate professionals who bring real-world experience and cutting-edge knowledge to every course
          </p>
        </motion.div>

        {/* Stats */}
        
        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              {/* Member Header */}
              <div className={`bg-gradient-to-r ${member.color} p-6 relative overflow-hidden`}>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl p-1 backdrop-blur-sm">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-white/90">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Member Content */}
              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-white text-xs border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">{member.courses}</div>
                    <div className="text-gray-400 text-xs">Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">
                      {(member.students / 1000).toFixed(0)}K+
                    </div>
                    <div className="text-gray-400 text-xs">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-sm flex items-center justify-center gap-1">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      {member.rating}
                    </div>
                    <div className="text-gray-400 text-xs">Rating</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={member.social.twitter}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition-colors"
                  >
                    <Twitter size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={member.social.github}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={member.social.email}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition-colors"
                  >
                    <Mail size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-8"
          >
            <Rocket size={20} className="text-white" />
            <span className="text-white font-semibold">Ready to Start?</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Learning Community Today
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the next step in your learning journey. Whether you're looking to advance your career, 
            learn new skills, or explore your passions, we're here to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleGetStarted("/services")}
              className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <BookOpen size={20} />
              Browse Courses
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleGetStarted("/contact")}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-sky-600 transition-all inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Us
            </motion.button>
          </div>

          
        </motion.div>
      </div>
    </section>

    </div>
  );
}
