import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { DarkModeProvider } from "./context/Darkmodecontext";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./compentents/Header";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Webdevelopment from "./pages/Webdevelopment";
import Datascience from "./pages/Datascience";
import UIDesign from "./pages/UIDesign";
import Mobiledevelopment   from "./pages/Mobiledevelopment";
import BusinessandMarketing from "./pages/BusinessandMarketing";
import CyberSecurity from "./pages/CyberSecurity";

import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./compentents/Footer";
import ScrollToTop from './compentents/ScrollToTop';


function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark"); // <-- Add this line

  useEffect(() => {
    const updateTheme = () => {
      const theme = localStorage.getItem("theme");
      setIsDark(theme === "dark"); // <-- Update state when theme changes
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    updateTheme(); // Set on mount
    window.addEventListener("themeChange", updateTheme);
    window.addEventListener("storage", updateTheme);
    return () => {
      window.removeEventListener("themeChange", updateTheme);
      window.removeEventListener("storage", updateTheme);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      window.dispatchEvent(new Event("themeChange")); // <-- Make sure to dispatch event
      return newTheme;
    });
  };

  // Check if current path is login or /login
  const isLoginPage = location.pathname === "/" || location.pathname === "/login";

  return (
    <DarkModeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          {!isLoginPage && <Header toggleTheme={toggleTheme} isDark={isDark} />}
          <ScrollToTop />
          <main className="p-0 m-0">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home1" element={<Home1 />} />
              <Route path="/home2" element={<Home2 />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog1" element={<Blog1 />} />
              <Route path="/blog2" element={<Blog2 />} />
              <Route path="/blog3" element={<Blog3 />} />
              <Route path="/webdevelopment" element={<Webdevelopment/>} />
              <Route path="/datascience" element={<Datascience />} />
              <Route path="/uidesign" element={<UIDesign />} />
              <Route path="/mobiledevelopment" element={<Mobiledevelopment />} />
              <Route path="/business-marketing" element={<BusinessandMarketing />} />
              <Route path="/cybersecurity" element={<CyberSecurity />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
            {!isLoginPage && <Footer />}
          </main>
        </div>
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default App;
