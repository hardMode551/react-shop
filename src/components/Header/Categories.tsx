import React from 'react';
import { Link } from 'react-router-dom';

type CategoriesProps ={
  title: string;
  firstCategories: string;
  secondCategories: string;
  thirdCategories: string;
  fourthCategories?: string;
}

export const Categories: React.FC<CategoriesProps> = ({title, firstCategories, secondCategories, thirdCategories, fourthCategories}) => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content">
          <Link to="/in-progress" className="link-collection">
            {firstCategories}
          </Link>
          <Link to="/in-progress" className="link-collection">
            {secondCategories}
          </Link>
          <Link to="/in-progress" className="link-collection">
            {thirdCategories}
          </Link>
          <Link to="/in-progress" className="link-collection">
            {fourthCategories}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
