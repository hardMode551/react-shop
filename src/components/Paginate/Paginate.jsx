import React from 'react';
import Pagination from '@mui/material/Pagination';

const Paginate = ({ onChangePage }) => {
  return (
    <>
      <Pagination count={2} onChange={(_, num) => onChangePage(num)} />
    </>
  );
};

export default Paginate;
