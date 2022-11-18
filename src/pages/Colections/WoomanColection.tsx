import React from 'react';

import CardBlock from '../../components/Cards/CardBlock';
import SortCategories from '../../components/SortCategories/SortCategories';
import SortPopup from '../../components/SortPopup/SortPopup';
import Search from '../../components/Search/Search';
// import Paginate from '../../components/Paginate/Paginate';

export const WoomanColection: React.FC = () => {
  return (
    <>
      <section>
        <SortCategories />
        <Search />
        <SortPopup />
        <CardBlock />
        {/* <Paginate /> */}
      </section>
    </>
  );
};

export default WoomanColection;
