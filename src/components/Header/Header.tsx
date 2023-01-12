import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import Categories from './Categories';
import MenuBurger from './MenuBurger/MenuBurger';
import { selectCart } from '../../Redux/Slices/cart/selectors';
import { useTheme } from '../../hooks/use-theme';
import { selectFilterByName } from '../../Redux/Slices/filter/selectors'


import './HeaderStyles.scss';
import { useAppDispatch } from '../../Redux/Store';
import { setSwitchOn } from '../../Redux/Slices/filter/filterSlice';
import { json } from 'stream/consumers';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const Header: React.FC = () => {
  //switch theme state
  const { switchOn } = useSelector(selectFilterByName);
  const dispatch = useAppDispatch();

  const { theme, setTheme } = useTheme();

  const toggleSwitch = () => {
    switchOn ? setTheme('light') : setTheme('dark');

    dispatch(setSwitchOn((!switchOn)));
  };

  

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
              thirdCategories="Верхняя одежда"
            />
          </Link>
          <Link to="/in-progress">
            <Categories
              title="Для детей"
              firstCategories="Футболки, рубашки"
              secondCategories="Брюки, джинсы"
              thirdCategories="Верхняя одежда"
            />
          </Link>

          <Link to="/" className="header__logo">
            <img src={theme === 'light' ? './images/logo.svg' : './images/footerLogo.svg'} alt="" />
          </Link>

          <div className="header__links">
            <label>Смена темы</label>
            <div className="switch" data-theme={theme} onClick={toggleSwitch}>
              <motion.div className="handle" layout transition={spring}>
                {theme === 'dark' ? (
                  <svg className="feather feather-moon" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                ) : (
                  <svg
                    enableBackground="new 0 0 128 128"
                    height="128px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 128 128"
                    width="128px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M64.079,95.543c-17.39,0-31.537-14.148-31.537-31.538c0-17.389,14.147-31.535,31.537-31.535s31.537,14.146,31.537,31.535   C95.616,81.395,81.469,95.543,64.079,95.543z M64.079,36.47c-15.184,0-27.537,12.353-27.537,27.535   c0,15.184,12.354,27.538,27.537,27.538s27.537-12.354,27.537-27.538C91.616,48.823,79.263,36.47,64.079,36.47z" />
                    </g>
                    <g>
                      <g>
                        <path d="M64.079,114.086c-1.104,0-2-0.896-2-2V101.41c0-1.105,0.896-2,2-2s2,0.895,2,2v10.676    C66.079,113.189,65.184,114.086,64.079,114.086z" />
                        <path d="M64.079,28.603c-1.104,0-2-0.896-2-2V15.926c0-1.104,0.896-2,2-2s2,0.896,2,2v10.677    C66.079,27.708,65.184,28.603,64.079,28.603z" />
                      </g>
                      <g>
                        <path d="M112.159,66.006h-10.676c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h10.676c1.104,0,2,0.896,2,2    C114.159,65.109,113.264,66.006,112.159,66.006z" />
                        <path d="M26.676,66.006H16c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h10.676c1.104,0,2,0.896,2,2    C28.676,65.109,27.78,66.006,26.676,66.006z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M98.075,100.004c-0.512,0-1.023-0.195-1.414-0.586l-7.548-7.549c-0.781-0.781-0.781-2.047,0-2.828s2.047-0.781,2.828,0    l7.548,7.549c0.781,0.781,0.781,2.047,0,2.828C99.099,99.809,98.587,100.004,98.075,100.004z" />
                        <path d="M37.63,39.558c-0.512,0-1.023-0.195-1.414-0.586l-7.548-7.549c-0.781-0.781-0.781-2.048,0-2.828    c0.781-0.781,2.047-0.781,2.828,0l7.548,7.549c0.781,0.781,0.781,2.048,0,2.828C38.653,39.363,38.142,39.558,37.63,39.558z" />
                      </g>
                      <g>
                        <path d="M90.527,39.558c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.781-0.781-2.048,0-2.828l7.55-7.549    c0.781-0.781,2.047-0.781,2.828,0s0.781,2.048,0,2.828l-7.55,7.549C91.551,39.363,91.039,39.558,90.527,39.558z" />
                        <path d="M30.082,100.004c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.781-0.781-2.049,0-2.828l7.549-7.549    c0.781-0.781,2.047-0.781,2.828,0s0.781,2.049,0,2.828l-7.549,7.549C31.105,99.809,30.594,100.004,30.082,100.004z" />
                      </g>
                    </g>
                  </svg>
                )}
              </motion.div>
            </div>

            <Link className="header__basket" to="/basket">
              <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2936 11.4909L16.2385 2.40831C15.9632 2.13308 15.5505 1.85785 15.1376 1.85785C14.7248 1.85785 14.3119 1.99546 14.0367 2.40831L7.98165 11.4909H1.37615C0.550459 11.4909 0 12.0413 0 12.867C0 13.0046 0 13.1423 0 13.2799L3.44037 26.078C3.7156 27.179 4.81651 28.1423 6.05505 28.1423H23.945C25.1835 28.1423 26.2844 27.3166 26.5596 26.078L30 13.2799C30 13.1423 30 13.0046 30 12.867C30 12.0413 29.4495 11.4909 28.6239 11.4909H22.2936ZM11.0092 11.4909L15.1376 5.43583L19.2661 11.4909H11.0092ZM15.1376 22.5001C13.6239 22.5001 12.3853 21.2615 12.3853 19.7478C12.3853 18.234 13.6239 16.9955 15.1376 16.9955C16.6514 16.9955 17.8899 18.234 17.8899 19.7478C17.8899 21.2615 16.6514 22.5001 15.1376 22.5001Z" />
              </svg>
              <b className="stateBasket">{totalCount}</b>
            </Link>
          </div>
        </nav>
        <MenuBurger active={menuActive} setActive={setMenuActive} />
      </header>
    </>
  );
};

export default Header;
