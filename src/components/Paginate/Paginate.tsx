import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  setPageCount } from '../../Redux/Slices/filter/filterSlice';
import { selectFilterByName } from '../../Redux/Slices/filter/selectors'

import Pagination from '@mui/material/Pagination';

const Paginate: React.FC = () => {
  const { pageCount } = useSelector(selectFilterByName);
  const dispatch = useDispatch();

  const pageChange = (_: any, page: number) => {
    dispatch(setPageCount(page));
  };

  return (
    <>
      <Pagination count={4} page={pageCount} onChange={pageChange} />
    </>
  );
};

export default Paginate;
