import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./heroslider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
// import required modules
import { EffectFade, Pagination } from "swiper/modules";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        effect={"fade"}
       
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider__item slider__item-01 mt0">
            <div className="Container">
              <div className="slider__content ">
                <h4 className="text-light mb-3">Une premiére en Algerie</h4>
                <h1 className="text-light mb-4">Un service a ne pas rater</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item slider__item-02 mt0">
            <div className="Container">
              <div className="slider__content ">
                <h4 className="text-light mb-3">Gratuit</h4>
                <h1 className="text-light mb-4">A essayer en quelques cliques seulement</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item slider__item-03 mt0">
            <div className="Container">
              <div className="slider__content ">
                <h4 className="text-light mb-3">profitez en !</h4>
                <h1 className="text-light mb-4">Crééz votre  compte dés maintenant</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item slider__item-04 mt0">
            <div className="Container">
              <div className="slider__content ">
                <h4 className="text-light mb-3">fini la paperasse</h4>
                <h1 className="text-light mb-4">dites adieu aux pertes de temps !</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="hero__slider">
    

     

    
      <div className="slider__item slider__item-04 mt0">
        <div className="Container">
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Reservaaaaaaaaaaa</Link>
            </button>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default HeroSlider;
