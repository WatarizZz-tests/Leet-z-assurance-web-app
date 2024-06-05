import React from 'react';
import './acceuil.css';
import Header from '../../components/header/Header';
import HeroSlider from '../../components/slider/HeroSlider';
import { MdCarCrash } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Footer from '../../components/footer/Footer';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Acceuil = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div>
      <Header />
      <HeroSlider />
      <div className='red-container-acceuil'>
        <h1>{t('Un service de qualité')}</h1>
        <h3>{t('Un staff professionnel')}</h3>
        <h3>{t('attentifs et responsables')}</h3>
      </div>
      <div className='grey-container-acceuil'>
        <h1>{t('gratuit toujours !')}</h1>
        <p>{t('flamber')}</p>
        <p>{t('suivre l\'inflation')}</p>
        <p>{t('attentes et besoins.')}</p>
      </div>
      <div className='white-container-acceuil'>
        <h1>{t('simple et rapide')}</h1>
        <div className='vignette'><MdCarCrash /></div>
        <p>{t('vous avez un accident.')}</p>
        <div className='vignette'><MdOutlineSmartphone /></div>
        <p>{t('voiture en photos.')}</p>
        <div className='vignette'><FaLaptop /></div>
        <p>{t('notre formulaire.')}</p>
        <div className='vignette'><IoDocumentText /></div>
        <p>{t('vos documents.')}</p>
      </div>
      <div className='red-container-acceuil2'>
        <h1>{t('N\'attendez Plus')}</h1>
        <Link to={`/${lang}/formulaireaccident`}>
          <button className='red-container-button'>{t('faites votre déclaration')}</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Acceuil;
