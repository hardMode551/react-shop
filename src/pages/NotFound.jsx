import React from 'react';
import { Link } from 'react-router-dom';
import './Scss/_NotFound.scss';

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <p>Такой страницы не существует ¯\_(ツ)_/¯</p>
      <Link to="/">
        <button>На главную</button>
      </Link>
    </div>
  );
};

export default NotFound;
