import React from 'react';

import { useSelector } from 'react-redux';
import { selectFilterByName } from '../../Redux/Slices/filter/selectors';
import { fetchClothes } from '../../Redux/Slices/clothes/asyncActions';
import { useAppDispatch } from '../../Redux/Store';
import { selectClothesData } from '../../Redux/Slices/clothes/selectors';

import Skeleton from '../../pages/Colections/Skeleton';
import Cards from './Cards';

export const CardBlock = () => {
  const dispatch = useAppDispatch();

  const cardRef = React.useRef<HTMLDivElement>(null);

  const { items, status } = useSelector(selectClothesData);



  const { categoryId, sort, searchValue, pageCount } = useSelector(selectFilterByName);

  const getClothes = async () => {
    const search = searchValue ? `search=${searchValue}` : '';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    dispatch(
      fetchClothes({
        search,
        category,
        sortBy,
        order,
        pageCount: String(pageCount),
      }),
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
      getClothes();
  }, [categoryId, sort.sortProperty, searchValue, pageCount]);

  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  const card = items.map((obj) => <Cards key={obj.id} {...obj} />);
  

  
  return (
    <>
      {status === 'error' ? (
        <div className="error">
          <h1>Ошибка 😞</h1>
          <p>
            К сожалению не получилось отобразить товар, вернитесь чутка позже и мы всё починим )))
          </p>
        </div>
      ) : (
        <div ref={cardRef} className="card">
          {status === 'loading' ? skeleton : card}
        </div>
      )}
    </>
  );
};

export default CardBlock;
