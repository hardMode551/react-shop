import React from 'react';

import { addItem, minusItem, removeItem } from '../../Redux/Slices/cart/cartSlice';
import { TypeCartItem } from '../../Redux/Slices/cart/types'
import { useAppDispatch } from '../../Redux/Store';

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
}

const CartItem: React.FC<CartItemProps> = ({ id, title, price, count, imageUrl }) => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as TypeCartItem),
    );
  };

  const onClickMinus = () => {
    if (count > 0) {
      dispatch(minusItem(id));
    }
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
        <button className={count === 1 ? 'disabledBtn' : ''} disabled={count === 1} onClick={onClickMinus}>-</button>
        <p>{count}</p>
        <button onClick={onClickPlus}>+</button>
      </div>
      <h2 className="content-totalPrice">{price * count} ₽</h2>
      <button onClick={onClickRemove} className="delete-button">
        X
      </button>
    </div>
  );
};

export default CartItem;
