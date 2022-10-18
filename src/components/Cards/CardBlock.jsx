import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Skeleton from '../../pages/Colections/Skeleton';
// import Paginate from '../Paginate/Paginate';

import Cards from './Cards';

export const CardBlock = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const categoryId = useSelector((state) => state.category.categoryId);
  const sortType = useSelector((state) => state.sort.sortId);
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

    axios
      .get(
        `https://6341d46d20f1f9d7997a8302.mockapi.io/items?p=1&l=8&${category}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [category, sortType]);
  //sortType,

  return (
    <>
      <div className="card">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Cards key={obj.id} {...obj} />)}
      </div>
      {/* <Paginate onChangePage={(num) => setPage(num)} /> */}
    </>
  );
};

export default CardBlock;
