import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../Redux/Slices/cartSlice';

const CartItem = ({ id, title, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      }),
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить этот товар из корзины?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="basket__content">
      <div className="content__title">
        <img src={imageUrl} alt="img" />
        <h2>{title}</h2>
      </div>
      <div className="content__counter">
        <button onClick={onClickMinus}>-</button>
        <p>{count}</p>
        <button onClick={onClickPlus}>+</button>
      </div>
      <h2>{price * count} ₽</h2>
      <button onClick={onClickRemove} className="delete-button">
        X
      </button>
    </div>
  );
};

export default CartItem;
