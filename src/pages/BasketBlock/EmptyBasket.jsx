import React from 'react';
import { Link } from 'react-router-dom';

const EmptyBasket = () => {
  return (
    <div className="empty-basket">
      <p>Ваша корзина пуста 😞 , добавьте товар</p>
      <Link to="/wooman-collection">
        <button>На страницу товаров</button>
      </Link>
    </div>
  );
};

export default EmptyBasket;
