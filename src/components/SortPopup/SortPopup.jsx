import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../Redux/Slices/filterSlice';

import './_SortPopup.scss';

export const sortCategories = [
  { name: 'Популярности (по убыванию)', sortProperty: 'rating' },
  { name: 'Популярности (по возрастанию)', sortProperty: '-rating' },
  { name: 'Цене (по убыванию)', sortProperty: 'price' },
  { name: 'Цене (по возрастанию)', sortProperty: '-price' },
  { name: 'Алфавиту (по убыванию)', sortProperty: 'title' },
  { name: 'Алфавиту (по возрастанию)', sortProperty: '-title' },
];

export const SortPopup = () => {
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
  const sortRef = React.useRef();

  const [isVisible, setIsVisible] = React.useState(false);

  //Change state sort item
  const changeSortItem = (obj) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const clickOutsideSort = (event) => {
      let path = event.composedPath().includes(sortRef.current);
      if (!path) setIsVisible(false);
    };

    document.body.addEventListener('click', clickOutsideSort);

    return () => document.body.removeEventListener('click', clickOutsideSort);
  }, []);

  return (
    <div className="sort">
      <div ref={sortRef} className="sort__popup">
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
