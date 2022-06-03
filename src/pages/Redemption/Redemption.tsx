import './Redemption.scss';

import backIcon from 'assets/imgs/back-icon.svg';
import silderImage1 from 'assets/imgs/slider-img-1.svg';
import silderImage2 from 'assets/imgs/slider-img-2.svg';
import silderImage3 from 'assets/imgs/slider-img-3.svg';
import Button from 'components/Button';
import ProgressBar from 'components/ProgressBar';
import Slider from 'components/Slider';
import SliderItem from 'components/SliderItem';
import Text from 'components/Text';
import React from 'react';

const Redemption = () => {
  return (
    <div className="redemption">
      <div className="redemption-header">
        <img className="mb-16" src={backIcon} alt="Back-btn" />
        <Text className="mb-8" textStyle="header-3">
          Silver Tier
        </Text>
        <Text textStyle="paragraph-1">
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          exclusive rewards.
        </Text>
      </div>
      <div className="redemption-card">
        <Text className="mb-8" textStyle="title-3">
          Available Coin balance
        </Text>
        <Text className="mb-20" textStyle="header-1">
          340
        </Text>
        <ProgressBar value="70" />
        <Text className="mt-34" textStyle="paragraph-1">
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold
          Tier.
        </Text>
        <Text
          className="mb-24 mt-16"
          textStyle="paragraph-1"
          textColor="blue-dark"
        >
          View tier benefits
          <i className="fas fa-chevron-right ml-8"></i>
        </Text>
        <Button>My Coupons</Button>
        <Text className="mt-16" textStyle="paragraph-3" textAlign="center">
          Updated : 02/11/2021
        </Text>
      </div>
      <div className="redemption-slider">
        <Slider
          label="Petrol"
          sliderItems={[
            <SliderItem
              key="slider-1"
              img={silderImage1}
              content={
                <>
                  <Text
                    className="mb-8"
                    textStyle="title-2"
                    textColor="blue-dark"
                  >
                    15 Coins
                  </Text>
                  <Text textStyle="paragraph-1">
                    50% discount for every $100 top-up on your Shell Petrol Card
                  </Text>
                </>
              }
            />,
            <SliderItem
              key="slider-2"
              img={silderImage1}
              content={
                <>
                  <Text className="mb-8" textStyle="title-2">
                    <i className="fab fa-bitcoin mr-5"></i>
                    1000 Coins
                  </Text>
                  <Text textStyle="paragraph-1">
                    70% discount top-up on your Shell Petrol Card
                  </Text>
                  <Text textStyle="paragraph-3" textColor="blue-dark">
                    Insufficient coins
                  </Text>
                </>
              }
            />,
          ]}
        />
        <Slider
          label="Rental Rebate"
          sliderItems={[
            <SliderItem
              key="slider-1"
              img={silderImage2}
              content={
                <>
                  <Text
                    className="mb-8"
                    textStyle="title-2"
                    textColor="blue-dark"
                  >
                    20 Coins
                  </Text>
                  <Text textStyle="paragraph-1">Get $20 Rental rebate</Text>
                </>
              }
            />,
            <SliderItem
              key="slider-2"
              img={silderImage2}
              content={
                <>
                  <Text
                    className="mb-8"
                    textStyle="title-2"
                    textColor="blue-dark"
                  >
                    15 Coins
                  </Text>
                  <Text textStyle="paragraph-1">Get $500 Rental rebate</Text>
                </>
              }
            />,
          ]}
        />
        <Slider
          label="Food and Beverage"
          sliderItems={[
            <SliderItem
              key="slider-1"
              img={silderImage3}
              content={
                <>
                  <Text
                    className="mb-8"
                    textStyle="title-2"
                    textColor="blue-dark"
                  >
                    25 Coins
                  </Text>
                  <Text textStyle="paragraph-1">
                    NTUC Fairprice $50 Voucher
                  </Text>
                </>
              }
            />,
            <SliderItem
              key="slider-2"
              img={silderImage3}
              content={
                <>
                  <Text
                    className="mb-8"
                    textStyle="title-2"
                    textColor="blue-dark"
                  >
                    5 Coins
                  </Text>
                  <Text textStyle="paragraph-1">
                    Free Cold Stone Sundae at any flavour!
                  </Text>
                </>
              }
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default Redemption;
