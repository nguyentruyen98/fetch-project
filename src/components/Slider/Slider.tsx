import './Slider.scss';
import 'swiper/css';

import Text from 'components/Text';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
interface ISliderProps {
  label: string;
  sliderItems: React.ReactNode[];
}
const Slider = ({label, sliderItems}: ISliderProps) => {
  return (
    <div className="slider">
      <Text className="ml-24 mb-26" textStyle="title-1" textColor="grey-1">
        {label}
      </Text>
      <Swiper className="swiper-hehe" slidesPerView={'auto'} spaceBetween={0}>
        {sliderItems.map((item, index) => (
          <SwiperSlide className="slider-items" key={index}>
            {item}{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
