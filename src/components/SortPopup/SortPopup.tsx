import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../Redux/Slices/filter/filterSlice';
import { SortPropertyEnum } from '../../Redux/Slices/filter/types';
import { selectFilterByName } from '../../Redux/Slices/filter/selectors';

import './_SortPopup.scss';

export type sortCategoriesItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

//Путь к инпуту
type PopupClick = MouseEvent & {
  path: Node[];
};

export const sortCategories: sortCategoriesItem[] = [
  { name: 'Популярности (по убыванию)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'Популярности (по возрастанию)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'Цене (по убыванию)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'Цене (по возрастанию)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'Алфавиту (по убыванию)', sortProperty: SortPropertyEnum.TITLE_ASC },
  { name: 'Алфавиту (по возрастанию)', sortProperty: SortPropertyEnum.TITLE_DESC },
];

export const SortPopup: React.FC = () => {
  const { sort } = useSelector(selectFilterByName);
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = React.useState(false);

  //Change state sort item
  const changeSortItem = (obj: sortCategoriesItem) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const clickOutsideSort = (event: MouseEvent) => {
      // let path = event.composedPath().includes(sortRef.current);
      // if (!path) setIsVisible(false);
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setIsVisible(false);
      }
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
