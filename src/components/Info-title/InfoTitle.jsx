import React from 'react';
import './_InfoTitle.scss';
export const InfoTitle = (props) => {
  return (
    <>
      <div className="info-title">
        <p>{props.title}</p>
      </div>
    </>
  );
};

export default InfoTitle;
