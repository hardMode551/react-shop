import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearItem } from '../../Redux/Slices/cartSlice';

import '../Scss/_Basket.scss';

import CartItem from './CartItem';
import EmptyBasket from './EmptyBasket';

export const Basket = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Удалить все товары из корзины?')) {
      dispatch(clearItem());
    }
  };

  if (!totalPrice) {
    return <EmptyBasket />;
  }

  return (
    <section>
      <div className="basket">
        <div className="basket__head">
          <h1>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.2936 11.4909L16.2385 2.40831C15.9632 2.13308 15.5505 1.85785 15.1376 1.85785C14.7248 1.85785 14.3119 1.99546 14.0367 2.40831L7.98165 11.4909H1.37615C0.550459 11.4909 0 12.0413 0 12.867C0 13.0046 0 13.1423 0 13.2799L3.44037 26.078C3.7156 27.179 4.81651 28.1423 6.05505 28.1423H23.945C25.1835 28.1423 26.2844 27.3166 26.5596 26.078L30 13.2799C30 13.1423 30 13.0046 30 12.867C30 12.0413 29.4495 11.4909 28.6239 11.4909H22.2936ZM11.0092 11.4909L15.1376 5.43583L19.2661 11.4909H11.0092ZM15.1376 22.5001C13.6239 22.5001 12.3853 21.2615 12.3853 19.7478C12.3853 18.234 13.6239 16.9955 15.1376 16.9955C16.6514 16.9955 17.8899 18.234 17.8899 19.7478C17.8899 21.2615 16.6514 22.5001 15.1376 22.5001Z"
                fill="#212121"
              />
            </svg>
            Корзина
          </h1>

          <button onClick={onClickClear}>
            <svg
              enable-background="new 0 0 32 32"
              id="Glyph"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z"
                id="XMLID_237_"
              />
              <path
                d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z"
                id="XMLID_243_"
              />
            </svg>
            очистить корзину
          </button>
        </div>

        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        <div className="basket__footer">
          <div>
            <p>Всего товара: {totalCount} шт.</p>
            <Link to="/wooman-collection">
              <button>Вернуться назад</button>
            </Link>
          </div>
          <div>
            <p>Сумма заказа: {totalPrice} ₽</p>
            <button>Оплатить сейчас</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
