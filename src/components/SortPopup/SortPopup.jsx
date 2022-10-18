import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../Redux/Slices/sortSlice';

import './_SortPopup.scss';

export const SortPopup = () => {
  const sortCategories = [
    { name: 'Популярности (по убыванию)', sortProperty: 'rating' },
    { name: 'Популярности (по возрастанию)', sortProperty: '-rating' },
    { name: 'Цене (по убыванию)', sortProperty: 'price' },
    { name: 'Цене (по возрастанию)', sortProperty: '-price' },
    { name: 'Алфавиту (по убыванию)', sortProperty: 'title' },
    { name: 'Алфавиту (по возрастанию)', sortProperty: '-title' },
  ];

  const sort = useSelector((state) => state.sort.sortId);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = React.useState(false);

  //Change state sort item
  const changeSortItem = (i) => {
    dispatch(setSort(i));
    setIsVisible(false);
  };

  return (
    <div className="sort">
      <div className="sort__popup">
        <div className="sort__content">
          <div className="sort__label">
            <b>Сортировка по: </b>
            <button onClick={() => setIsVisible(!isVisible)}>{sort.name}</button>
          </div>
        </div>
        {isVisible && (
          <ul>
            {sortCategories.map((obj, i) => (
              <li
                key={i}
                onClick={() => changeSortItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortPopup;
