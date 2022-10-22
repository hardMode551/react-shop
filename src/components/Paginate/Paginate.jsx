import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageCount } from '../../Redux/Slices/pageSlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginate = () => {
  const pageCount = useSelector((state) => state.page.pageCount);
  const dispatch = useDispatch();

  // const [pageCount, setPageCount] = React.useState(1);

  const pageChange = (event, value) => {
    dispatch(setPageCount(value));
  };

  return (
    <>
      <Stack spacing={2}>
        <Pagination count={4} page={pageCount} onChange={pageChange} />
      </Stack>
    </>
  );
};

export default Paginate;
