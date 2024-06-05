import React from 'react';
import "./declarationslider.css";
import { useTranslation } from 'react-i18next';

const DeclarationSlider = () => {
  const { t } = useTranslation();

  return (
    <div className='slider-declaration'>
      <h1>{t('Déclaration d\'accident')}</h1>
    </div>
  )
}

export default DeclarationSlider;