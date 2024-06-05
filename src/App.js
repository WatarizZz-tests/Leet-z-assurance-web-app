import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import Contact from "../src/pages/contact/Cotact";
import Acceuil from "../src/pages/acceuil/Acceuil";
import Accident from "../src/pages/formulairecrash/Accident";
import Apropos from '../src/pages/apropos/Apropos';
import Demande from './pages/demande/Demande';
import ScrollToTop from './components/scroll/ScrollToTop';
import InactivityTimeout from '../src/components/InactivityTimeout/InactivityTimeout';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import NewPassword from './pages/newpassword/NewPassword';
import './i18n';
import { LanguageProvider, LanguageContext } from './context/LanguageContext';

const LanguageWrapper = ({ children }) => {
  const { lang } = useParams(); // Capture the URL parameter
  const { language, switchLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && lang !== language) {
      console.log(`LanguageWrapper: Switching language to ${lang}`);
      switchLanguage(lang);
    } else if (!lang) {
      console.log('LanguageWrapper: No language in URL, redirecting to /fr');
      navigate("/fr"); // Redirect to French if no language is in URL
    }
  }, [lang, language, switchLanguage, navigate]);

  return children;
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <InactivityTimeout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/fr" />} />
            <Route path="/:lang" element={<LanguageWrapper><Acceuil /></LanguageWrapper>} />
            <Route path="/:lang/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
            <Route path="/:lang/formulaireaccident" element={<LanguageWrapper><Accident /></LanguageWrapper>} />
            <Route path="/:lang/apropos" element={<LanguageWrapper><Apropos /></LanguageWrapper>} />
            <Route path="/:lang/mesdemandes" element={<LanguageWrapper><Demande /></LanguageWrapper>} />
            <Route path="/:lang/forgot-password" element={<LanguageWrapper><ForgotPassword /></LanguageWrapper>} />
            <Route path="/:lang/reset_password/:id/:token" element={<LanguageWrapper><NewPassword /></LanguageWrapper>} />
          </Routes>
        </InactivityTimeout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;