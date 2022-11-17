import React, { useRef } from 'react';
import './_FormBlock.scss';

export const FormBlock: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="formBlock">
        <h1>ПОЛУЧАЙТЕ СКИДКИ И ПОДАРКИ:</h1>
        <input ref={inputRef} type="text" placeholder="Ваш Email:" />
        <button>ПОДПИСАТЬСЯ</button>
      </div>
    </>
  );
};

export default FormBlock;
