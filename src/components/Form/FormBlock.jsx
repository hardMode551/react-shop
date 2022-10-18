import React from 'react';
import './_FormBlock.scss';

export const FormBlock = () => {
  return (
    <>
      <div className="formBlock">
        <h1>ПОЛУЧАЙТЕ СКИДКИ И ПОДАРКИ:</h1>
        <input type="text" placeholder="Ваш Email:" />
        <button>ПОДПИСАТЬСЯ</button>
      </div>
    </>
  );
};

export default FormBlock;
