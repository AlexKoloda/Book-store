'use client'
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// interface Pagination {
//   totalPages: number; // 14
//   currentPage: number; // 1
//   prevPage: number | null; // null
//   hasNextPage: boolean; // true
//   hasPrevPage: boolean; // false
//   itemsPerPage: number; // 12
// }


const PaginationControlled = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={5}>
      <Pagination count={4} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default PaginationControlled;