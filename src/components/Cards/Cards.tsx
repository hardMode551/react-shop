import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FullClothes from '../../pages/FullClothes';

import { addItem } from '../../Redux/Slices/cart/cartSlice';
import { selectCartItemById } from '../../Redux/Slices/cart/selectors';
import { TypeCartItem } from '../../Redux/Slices/cart/types';

import './_Cards.scss';

export type CardsProps = {
  value: string;
  id: string;
  imageUrl: string;
  title: string;
  price: number;
}

export const Cards: React.FC<CardsProps> = ({ id, imageUrl, title, price }) => {
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: TypeCartItem = {
      id,
      title,
      price,
      imageUrl,
      count: 0
    };
    dispatch(addItem(item));
  };


  return (
    <>
      <div className="card--wrapper">
        <div className="card__title">
          <Link key={id} to={`/clothes/${id}`}>
            <img src={imageUrl} alt="clothes" />
          </Link>
          <h1 className="card__title__name">{title}</h1>
          <h2 className="card__title__price">{price} ₽</h2>
          <div className="card__buttons">
            <button className="card__buyButton">Купить</button>
            <button className="card__basketButton" onClick={onClickAdd}>
              В корзину
              {addedCount > 0 && <p>{addedCount}</p>}
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
