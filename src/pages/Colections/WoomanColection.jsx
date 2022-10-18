import React from 'react';

import CardBlock from '../../components/Cards/CardBlock';
import SortCategories from '../../components/SortCategories/SortCategories';
import SortPopup from '../../components/SortPopup/SortPopup';
// import SortLabel from '../../components/SortLabel/SortLabel';

export const WoomanColection = () => {
  return (
    <>
      <section>
        <SortCategories />
        <SortPopup />
        <CardBlock />
      </section>
    </>
  );
};

export default WoomanColection;
