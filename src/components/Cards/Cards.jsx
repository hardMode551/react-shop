import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Redux/Slices/cartSlice';
import './_Cards.scss';

export const Cards = ({ id, imageUrl, title, price }) => {
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const dispatch = useDispatch();

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
    };
    dispatch(addItem(item));
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
            <button className="card__basketButton" onClick={onClickAdd}>
              <strong>+</strong>В корзину
              {addedCount > 0 && <p>{addedCount}</p>}
              {/* <img src="../images/shopping-basket.svg" alt="basket" /> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
