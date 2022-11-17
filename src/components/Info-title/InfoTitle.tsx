import React from 'react';
import './_InfoTitle.scss';

type InfoTitleProps ={
  title: string;
}

export const InfoTitle: React.FC<InfoTitleProps> = ({title}) => {
  return (
    <>
      <div className="info-title">
        <p>{title}</p>
      </div>
    </>
  );
};

export default InfoTitle;
