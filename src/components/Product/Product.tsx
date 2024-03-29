import React from 'react';
import { Link } from 'react-router-dom';
import './_Product.scss';

export const Product: React.FC = () => {
  return (
    <>
      <div className="product">
        <div className="product__card">
          <div className="product__card__title">
            <h1>
              <strong>МУЖСКАЯ</strong> КОЛЛЕКЦИЯ
            </h1>
            <h2>Обувь, полуверы, костюмы</h2>
            <Link to="/in-progress">
              <button>&#8594;</button>
            </Link>
          </div>
          <img src="./images/man.png" alt="Man" />
        </div>
        <div className="product__card">
          <div className="product__card__title">
            <h1>
              <strong>ЖЕНСКАЯ</strong> КОЛЛЕКЦИЯ
            </h1>
            <h2>Обувь, платья, костюмы</h2>
            <Link to="/wooman-collection">
              <button>&#8594;</button>
            </Link>
          </div>
          <img src="./images/wooman.png" alt="Wooman" />
        </div>
      </div>
    </>
  );
};

export default Product;
