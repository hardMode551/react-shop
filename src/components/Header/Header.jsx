import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderStyles.scss';

import Categories from './Categories';
import MenuBurger from './MenuBurger/MenuBurger';

export const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);

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
            <a className="header__basket" href="/">
              <img src="./images/shopping-basket.svg" alt="basket" />
              <div className="stateBasket">0</div>
            </a>
          </div>
        </nav>
        <MenuBurger active={menuActive} setActive={setMenuActive} />
      </header>
    </>
  );
};

export default Header;
