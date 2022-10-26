import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageCount } from '../../Redux/Slices/filterSlice';
import Pagination from '@mui/material/Pagination';

const Paginate = () => {
  const pageCount = useSelector((state) => state.filter.pageCount);
  const dispatch = useDispatch();

  const pageChange = (event, page) => {
    dispatch(setPageCount(page));
  };

  return (
    <>
      <Pagination count={4} page={pageCount} onChange={pageChange} />
    </>
  );
};

export default Paginate;
