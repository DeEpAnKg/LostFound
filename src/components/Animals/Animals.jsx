import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Animals.css";
import { sliderSettings } from "../../utils/common";
const Animals = () => {
  return (
    <div id="animals" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Lost Pet's</span>
          <span className="primaryText">Latest Lost's</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>🦴</span>
                  <span>{card.pet_price}</span>
                </span>
                <span className="primaryText">{card.pet_name}</span>
                <span className="secondaryText">{card.pet_location}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Animals;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
