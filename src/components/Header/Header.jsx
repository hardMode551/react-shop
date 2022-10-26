import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './HeaderStyles.scss';

import Categories from './Categories';
import MenuBurger from './MenuBurger/MenuBurger';

export const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <>
      <header>
        <nav className="header__container">
          <div className="menu-btn" onClick={() => setMenuActive(!menuActive)}>
            <span></span>
          </div>
          <Link to="/wooman-collection">
            <Categories
              title="Для женщин"
              firstCategories="Футболки, рубашки"
              secondCategories="Брюки, джинсы"
              thirdCategories="Верхняя одежда"
              fourthCategories="Платья"
            />
          </Link>

          <Link to="/man-collection">
            <Categories
              title="Для мужчин"
              firstCategories="Футболки, рубашки"
              secondCategories="Брюки, джинсы"
              thirdCategories="Верхняя одежда"
            />
          </Link>
          <Link to="/childrens-collection">
            <Categories
              title="Для детей"
              firstCategories="Футболки, рубашки"
              secondCategories="Брюки, джинсы"
              thirdCategories="Верхняя одежда"
            />
          </Link>

          <Link to="/" className="header__logo">
            <img src="./images/logo.svg" alt="" />
          </Link>

          <div className="header__links">
            <a className="header__links__payment" href="/">
              Оплата
            </a>
            <a className="header__links__delivery" href="/">
              Доставка
            </a>
            <Link className="header__basket" to="/basket">
              <img src="./images/shopping-basket.svg" alt="basket" />
              <i className="stateBasket">{totalCount}</i>
            </Link>
          </div>
        </nav>
        <MenuBurger active={menuActive} setActive={setMenuActive} />
      </header>
    </>
  );
};

export default Header;
