import React from 'react';

import CardBlock from '../../components/Cards/CardBlock';
import SortCategories from '../../components/SortCategories/SortCategories';
import SortPopup from '../../components/SortPopup/SortPopup';
import Search from '../../components/Search/Search';

export const WoomanColection = () => {
  return (
    <>
      <section>
        <SortCategories />
        <Search />
        <SortPopup />
        <CardBlock />
      </section>
    </>
  );
};

export default WoomanColection;
