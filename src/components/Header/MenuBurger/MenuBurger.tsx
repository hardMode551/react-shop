import React from 'react';
import { Link } from 'react-router-dom';

import './_MenuBurger.scss';

type MenuBurgerProps = {
  active: boolean;
  setActive: (isActive: boolean) => void;
}

const MenuBurger: React.FC<MenuBurgerProps> = ({ active, setActive }) => {
  return (
    <>
      <div className={active ? 'menu active' : 'menu'}>
        <div className="blur" onClick={() => setActive(false)} />
        <div className="menu__content">
          <h1>Категории</h1>
          <Link to="/wooman-collection">
            <button className="dropbtn">Для женщин</button>
          </Link>
          <Link to="/in-progress">
            <button className="dropbtn">Для мужчин</button>
          </Link>
          <Link to="/in-progress">
            <button className="dropbtn">Для детей</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuBurger;
