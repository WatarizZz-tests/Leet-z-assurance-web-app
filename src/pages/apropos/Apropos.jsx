import React from 'react';
import "./apropos.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useTranslation } from 'react-i18next';

const Apropos = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Header/>
            <div className='apropos-container-content'>
                <div className='apropos-container-box'>
                    <div className='apropos-container-part-1'>
                        <h1>{t('A propos')}</h1>
                        <p>{t("Bienvenue sur Don't Worry !")}</p>
                        <p>{t('Ce projet')}</p>
                    </div>
                    <div className='apropos-container-part-2'>
                        <h1>{t('Notre équipe')}</h1>
                        <p>{t("En tant qu'étudiants")}</p>
                    </div>
                    <div className='apropos-container-part-3'>
                        <h1>{t('Notre vision')}</h1>
                        <p>{t('Notre vision texte')}</p>
                        <br/>
                        <p>{t('Merci de nous accompagner')}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
      );
    }
    
    export default Apropos;
