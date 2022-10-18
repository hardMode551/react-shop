import React from 'react';

import Slider from '../components/Slider/Slider';
import InformationBlock from '../components/InformationBlock/InformationBlock';
import Product from '../components/Product/Product';
import FormBlock from '../components/Form/FormBlock';
import InfoTitle from '../components/Info-title/InfoTitle';
import CardBlock from '../components/Cards/CardBlock';

export const Home = () => {
  return (
    <>
      <section>
        <Slider />
      </section>
      <InformationBlock />
      <Product />
      <section>
        <InfoTitle title="СКИДКИ ДО 90%" />
        <CardBlock />
      </section>
      <FormBlock />
      <section>
        <InfoTitle title="Зимняя распродажа!!!" />

        <CardBlock />
      </section>
    </>
  );
};

export default Home;
