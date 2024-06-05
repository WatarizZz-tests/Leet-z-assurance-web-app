import React, { useContext } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import "./languageswitcherstyle.css";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { language, switchLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const changeLanguage = (newLang) => {
    if (newLang !== language) {
      switchLanguage(newLang);
      const newPathname = location.pathname.replace(`/${lang}`, `/${newLang}`);
      navigate(newPathname); 
    }
  };

  return (
    <div className="language-dropdown">
      <button className="dropdown-button">
        {t('langue')}
      </button>
      <div className="dropdown-content">
        <button onClick={() => changeLanguage('fr')} disabled={lang === 'fr'}>Français</button>
        <button onClick={() => changeLanguage('ar')} disabled={lang === 'ar'}>Arabe</button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;