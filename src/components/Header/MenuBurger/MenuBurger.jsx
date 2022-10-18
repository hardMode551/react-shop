import React from 'react';

import './_MenuBurger.scss';

const MenuBurger = ({ active, setActive }) => {
  return (
    <>
      <div className={active ? 'menu active' : 'menu'}>
        <div className="blur" onClick={() => setActive(false)} />
        <div className="menu__content">
          <h1>Категории</h1>
        </div>
      </div>
    </>
  );
};

export default MenuBurger;
