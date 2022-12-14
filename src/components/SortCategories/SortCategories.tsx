import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../Redux/Slices/filter/filterSlice';
import { selectFilterByName } from '../../Redux/Slices/filter/selectors'

import './_SortCategories.scss';

export const SortCategories: React.FC = () => {
  const closes: string[] = ['Все', 'Платья', 'Футболки', 'Брюки', 'Джинсы', 'Верхняя одежда'];

  const { categoryId } = useSelector(selectFilterByName);
  const dispatch = useDispatch();

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  return (
    <>
      <div className="sort">
        <div className="sort__categories">
          <h2>Категории:</h2>
          <ul>
            {closes.map((categoryName, i) => (
              <li
                key={i}
                onClick={() => onChangeCategory(i)}
                className={categoryId === i ? 'active' : ''}>
                {categoryName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SortCategories;
