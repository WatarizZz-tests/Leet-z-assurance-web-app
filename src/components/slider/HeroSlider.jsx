import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./heroslider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Pagination } from "swiper/modules";
import { useTranslation } from 'react-i18next';

const HeroSlider = () => {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider__item slider__item-01 mt0">
            <div className="Container">
              <div className="slider__content">
                <h4 className="text-light mb-3">{t('Une premiére en Algerie')}</h4>
                <h1 className="text-light mb-4">{t('Un service a ne pas rater')}</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item slider__item-02 mt0">
            <div className="Container">
              <div className="slider__content">
                <h4 className="text-light mb-3">{t('Gratuit')}</h4>
                <h1 className="text-light mb-4">{t('try few clicks')}</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item slider__item-03 mt0">
            <div className="Container">
              <div className="slider__content">
                <h4 className="text-light mb-3">{t('profitez en !')}</h4>
                <h1 className="text-light mb-4">{t('Crééz votre compte dés maintenant')}</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item slider__item-04 mt0">
            <div className="Container">
              <div className="slider__content">
                <h4 className="text-light mb-3">{t('fini la paperasse')}</h4>
                <h1 className="text-light mb-4">{t('dites adieu aux pertes de temps !')}</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;