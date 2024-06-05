import React from 'react';
import "./footer.css";
import logofooter1 from "../../assets/logo-no-background.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer-container'>
        <p>{t("Don't Worry est un service créé pour un projet de fin d'étude.")}</p>
        <p>{t("Le service a pour but de faire office d'intermédiaire entre les clients et les professionnels du domaine de l'assurance automobile.")}</p>
        <img src={logofooter1} alt="logoenbas" />
        <h6>{t("Copyright")}</h6>
    </div>
  )
}

export default Footer;
