import React from 'react';
import './_Cards.scss';

export const Cards = ({ imageUrl, title, price }) => {
  const [state, setState] = React.useState(0);

  const plusState = () => {
    setState(state + 1);
  };

  return (
    <>
      <div className="card--wrapper">
        <div className="card__title">
          <img src={imageUrl} alt="" />
          <h1 className="card__title__name">{title}</h1>
          <h2 className="card__title__price">{price} ₽</h2>
          <div className="card__buttons">
            <button className="card__buyButton">Купить</button>
            <button className="card__basketButton" onClick={plusState}>
              <strong>+</strong>В корзину
              <p>{state}</p>
              {/*<img src="../images/shopping-basket.svg" alt="basket" />*/}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
