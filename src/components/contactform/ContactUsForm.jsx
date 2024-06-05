import React from 'react';
import './contactusform.css';
import { useTranslation } from 'react-i18next';

const ContactUsForm = () => {
  const { t } = useTranslation();

  return (
    <div className='contactusform__body'>
      <h2>{t('Nous Contacter')}</h2>
     
      <form className='formcss'>
        <div className='nometprenomcontactform'>
          <div className='np-flex'>
            <label>{t('Nom')}</label>
            <input placeholder={t('Nom')}/>
          </div>
          <div className='np-flex'>
            <label>{t('Prenom')}</label>
            <input placeholder={t('Prenom')}/>
          </div>
        </div>
        <div className='mail-container-contactform'>
          <label>{t('Adresse Email')}</label>
          <input placeholder={t('Entrez votre adresse email')}/>
        </div>
        <div className='textarea-container-contactform'>
          <label>{t('Votre message')}</label>
          <textarea cols={80} rows={30} placeholder={t('Votre message')} className='textareasmallscreens'/>
        </div>
        <div className='button-container-contactform'>
          <button className='contact-form-button'>{t('Envoyer')}</button>
        </div>
        
      </form>
    </div>
  )
}

export default ContactUsForm;