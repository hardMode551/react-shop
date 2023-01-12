import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

import { useAppDispatch } from '../Redux/Store';
import { addItem } from '../Redux/Slices/cart/cartSlice';

import './Scss/_FullClothes.scss';
import { useSelector } from 'react-redux';
import { selectCartItemById } from '../Redux/Slices/cart/selectors';
import { selectFilterByName } from '../Redux/Slices/filter/selectors';

interface typeClothes {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  count: 0;
}

const FullClothes: React.FC = () => {

const { switchOn } = useSelector(selectFilterByName);


  const { index } = useParams();
  const [clothes, setClothes] = React.useState<typeClothes>();
  const [fakeCounter, setFakeCounter] = React.useState(0);

  // const cartItem = useSelector(selectCartItemById(clothes.id));
  // const addedCount = cartItem ? cartItem.count : 0;

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    async function fetchClothes() {
      try {
        const { data } = await axios.get(
          `https://6341d46d20f1f9d7997a8302.mockapi.io/items/` + index,
        );
        setClothes(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClothes();
  }, []);

  if (!clothes) {
    window.scrollTo(0, 0);
    return (
      <section>
        <ContentLoader
          speed={2}
          width={1003}
          height={450}
          viewBox="0 0 1003 450"
          backgroundColor={switchOn ? "#212121" : '#f3f3f3'}
          foregroundColor={switchOn ? "#272727" : "#ecebeb"}>
          <rect x="0" y="0" rx="6" ry="6" width="300" height="450" />
          <rect x="350" y="20" rx="6" ry="6" width="500" height="37" />
          <rect x="350" y="89" rx="6" ry="6" width="250" height="18" />
          <rect x="350" y="155" rx="12" ry="12" width="150" height="45" />
          <rect x="580" y="155" rx="12" ry="12" width="150" height="45" />
        </ContentLoader>
      </section>
    );
  }

  const onClickAdd = () => {
    setFakeCounter(fakeCounter + 1);
    dispatch(addItem(clothes));
  };

  return (
    <section>
      <div className="clothes">
        <img className="clothes-image" src={clothes.imageUrl} alt="img" />

        <div className="clothes__description">
          <h1>{clothes.title}</h1>
          <h4>Стоимость: {clothes.price} ₽</h4>
          <p>{clothes.description}</p>

          <div className="clothes__description__buttons">
            <Link to="/wooman-collection">
              <button className='back-button'><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M31,16A15,15,0,1,1,16,1,15,15,0,0,1,31,16ZM3,16A13,13,0,1,0,16,3,13,13,0,0,0,3,16Z"/><path d="M19.87,10.41,14.29,16l5.58,5.59a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L12.1,16.64a.91.91,0,0,1,0-1.28L18.46,9a1,1,0,0,1,1.41,0h0A1,1,0,0,1,19.87,10.41Z"/></g></svg>Назад к товарам
              
              </button>
            </Link>
          <button className="card__basketButton" onClick={onClickAdd}>
              В корзину
              {fakeCounter > 0 && <p>{fakeCounter}</p>}
              {/* {addedCount > 0 && <p>{addedCount}</p>} */}
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullClothes;
