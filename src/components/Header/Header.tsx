import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './HeaderStyles.scss';

import Categories from './Categories';
import MenuBurger from './MenuBurger/MenuBurger';
import { selectCart } from '../../Redux/Slices/cart/selectors';



export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const { items } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('card', json);
    }
    isMounted.current = true;
  }, [items]);

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
              firstCategories="Платья"
              secondCategories="Футболки, рубашки"
              thirdCategories="Брюки, джинсы"
              fourthCategories="Верхняя одежда"
            />
          </Link>

          <Link to="/in-progress">
            <Categories
              title="Для мужчин"
              firstCategories="Футболки, рубашки"
              secondCategories="Брюки, джинсы"
              thirdCategories="Верхняя одежда"       />
          </Link>
          <Link to="/in-progress">
            <Categories
              title="Для детей"
              firstCategories="Футболки, рубашки"
              secondCategories="Брюки, джинсы"
              thirdCategories="Верхняя одежда"          />
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
              <span className="stateBasket">{totalCount}</span>
            </Link>
          </div>
        </nav>
        <MenuBurger active={menuActive} setActive={setMenuActive} />
      </header>
    </>
  );
};

export default Header;
