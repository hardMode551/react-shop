import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import Skeleton from '../../pages/Colections/Skeleton';

import Cards from './Cards';

export const CardBlock = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const categoryId = useSelector((state) => state.category.categoryId);
  const sortType = useSelector((state) => state.sort.sortId);
  const searchValue = useSelector((state) => state.search.searchValue);
  const pageCount = useSelector((state) => state.page.pageCount);

  const category = categoryId > 0 ? `category=${categoryId}` : '';

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

    axios
      .get(
        `https://6341d46d20f1f9d7997a8302.mockapi.io/items?limit=4&page=${pageCount}&${category}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [category, sortType, searchValue, pageCount]);

  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const card = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <Cards key={obj.id} {...obj} />);

  return (
    <>
      <div className="card">{isLoading ? skeleton : card}</div>
    </>
  );
};

export default CardBlock;
