import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './_Footer.scss';

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

export const Footer: React.FC = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__content">
          <div className="footer__logo">
            <img src="../images/footerLogo.svg" alt="Logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit,
              at eleifend elit ornare ut.
            </p>
          </div>
          <div className="footer__links">
            <h1>ОСНОВНЫЕ ССЫЛКИ</h1>
            <a href="/">О компании</a>
            <a href="/">Каталог</a>
            <a href="/">Доставка</a>
            <a href="/">Оплата</a>
          </div>
          <div className="footer__links">
            <h1>КАТЕГОРИИ</h1>
            <Link to="/in-progress">Мужская одежда</Link>
            <Link to="/wooman-collection">Женская одежда</Link>
            <Link to="/in-progress">Детская одежда</Link>
          </div>
          <div className="footer__links">
            <h1>ПОЛЕЗНЫЕ ССЫЛКИ</h1>
            <a href="https://wpcalc.com/razmer-odezhdy/" target="_blank" rel="noreferrer">
              Таблица размеров
            </a>
            <a href="/">Блог о моде</a>
            <a href="/">Наша миссия</a>
          </div>
          <div className="footer__links">
            <h1>СОЦ СЕТИ</h1>
            <a href="https://vk.com/" target="_blank" rel="noreferrer">
              <img src="../images/VK.svg" alt="VK" />
              VK.com
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img src="../images/Facebook.svg" alt="facebook" />
              Facebook
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src="../images/Insta.svg" alt="instagramm" />
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="copiration">
        <p>Copyright © 2019. Все права защищены</p>
        <p>
          <a href="/">Политика приватности</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
