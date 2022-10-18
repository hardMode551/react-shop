import React from 'react';

import './SliderStyles.scss';

export const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="slider__leftBlock">
          <h1>Летняя распродажа</h1>
          <h2>СКИДКИ ДО 70%</h2>
          <a href="/wooman-collection">
            <button>СМОТРЕТЬ МОДЕЛИ</button>
          </a>
        </div>
        <div className="slider__rightBlock">
          <img src="./images/louis-vuitton.png" alt="dress" />
          <h1>9 900 ₽ </h1>
          <h2>1 900 ₽</h2>
        </div>
      </div>
    </>
  );
};

export default Slider;
