import React from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/Slices/filterSlice';
import { sortCategories } from '../SortPopup/SortPopup';

import Skeleton from '../../pages/Colections/Skeleton';

import Cards from './Cards';

export const CardBlock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const cardRef = React.useRef();

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sort = useSelector((state) => state.filter.sort);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const pageCount = useSelector((state) => state.filter.pageCount);

  // const { categoryId, sort, searchValue, pageCount } = useSelector((state) => state.filter);

  const fetchCards = () => {
    setIsLoading(true);
    const search = searchValue ? `search=${searchValue}` : '';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    axios
      .get(
        `https://6341d46d20f1f9d7997a8302.mockapi.io/items?&page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  //Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        pageCount,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, pageCount]);

  // Если был первый рендер, то проверяем URl и сохраняем в redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortCategories.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilter({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  // Если был первый рендер, то запрашиваем карточки товара
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchCards();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, pageCount]);

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
      <div ref={cardRef} className="card">
        {isLoading ? skeleton : card}
      </div>
    </>
  );
};

export default CardBlock;
