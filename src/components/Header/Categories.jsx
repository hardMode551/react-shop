import React from 'react';
import { Link } from 'react-router-dom';

export const Categories = (props) => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">{props.title}</button>
        {/* <div className="dropdown-content">
          <Link to="/wooman-collection" className="link-collection">
            {props.firstCategories}
          </Link>
          <Link to="/man-collection" className="link-collection">
            {props.secondCategories}
          </Link>
          <Link to="/childrens-collection" className="link-collection">
            {props.thirdCategories}
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Categories;
