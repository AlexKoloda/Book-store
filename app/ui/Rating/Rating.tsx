'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Box sx={{ '& > legend': { mt: 3 } }}>
      <Typography component='legend' />
      <Rating
        name='simple-controlled'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
