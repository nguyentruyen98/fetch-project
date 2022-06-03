import './SliderItem.scss';

import React from 'react';
interface ISliderItemProps {
  content: React.ReactNode;
  img: string;
}
const SliderItem = ({content, img}: ISliderItemProps) => {
  return (
    <div className="slider-item">
      <img className="slider-item-img" src={img} alt="Slider-item" />
      <div className="slider-item-content">{content}</div>
    </div>
  );
};

export default SliderItem;
