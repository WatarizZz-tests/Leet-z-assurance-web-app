import React, { createContext, useState, useEffect } from 'react';
import i18n from '../i18n';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      console.log(`LanguageProvider: Loaded saved language ${savedLanguage}`);
    }
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Save the language preference
    console.log(`LanguageProvider: switchLanguage called with ${lang}`);
  };

  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
      i18n.changeLanguage('ar');
    } else {
      document.documentElement.lang = 'fr';
      document.documentElement.dir = 'ltr';
      i18n.changeLanguage('fr');
    }
    console.log(`LanguageProvider: Language set to ${language}`);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};