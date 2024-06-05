import React from 'react';
import "./contactslider.css";
import { useTranslation } from 'react-i18next';

const ContactSlider = () => {
  const { t } = useTranslation();

  return (
    <div className='contactus-container'>
      <h1>{t('Nous Contacter')}</h1>
    </div>
  )
}

export default ContactSlider;
