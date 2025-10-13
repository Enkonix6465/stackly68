import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Custom hook to use the Language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Supported languages
export const SUPPORTED_LANGUAGES = {
  en: 'English',
  ar: 'العربية',
  he: 'עברית',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
  ja: '日本語',
  ko: '한국어'
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && SUPPORTED_LANGUAGES[savedLanguage]) {
      return savedLanguage;
    }
    
    // Try to detect browser language
    const browserLanguage = navigator.language.split('-')[0];
    if (SUPPORTED_LANGUAGES[browserLanguage]) {
      return browserLanguage;
    }
    
    // Default to English
    return 'en';
  });

  // Change language function
  const changeLanguage = (newLanguage) => {
    if (SUPPORTED_LANGUAGES[newLanguage]) {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
      
      // Update document direction for RTL languages
      if (newLanguage === 'ar' || newLanguage === 'he') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = newLanguage;
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = newLanguage;
      }
    }
  };

  // Apply language settings on mount and language change
  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  // Listen for storage changes (for cross-tab synchronization)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'language' && e.newValue) {
        setLanguage(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const value = {
    language,
    changeLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isRTL: language === 'ar' || language === 'he',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;