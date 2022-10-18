import React from 'react';
import './_Product.scss';

export const Product = () => {
  return (
    <>
      <div className="product">
        <div className="product__card">
          <div className="product__card__title">
            <h1>
              <strong>МУЖСКАЯ</strong> КОЛЛЕКЦИЯ
            </h1>
            <h2>Обувь, полуверы, костюмы</h2>
            <a href="/man-collection">
              <button>&#8594;</button>
            </a>
          </div>
          <img src="./images/Man.svg" alt="Man" />
        </div>
        <div className="product__card">
          <div className="product__card__title">
            <h1>
              <strong>ЖЕНСКАЯ</strong> КОЛЛЕКЦИЯ
            </h1>
            <h2>Обувь, платья, костюмы</h2>
            <a href="/wooman-collection">
              <button>&#8594;</button>
            </a>
          </div>
          <img src="./images/Wooman.svg" alt="Wooman" />
        </div>
      </div>
    </>
  );
};

export default Product;
