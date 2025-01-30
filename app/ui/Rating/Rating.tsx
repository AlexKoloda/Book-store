'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Box sx={{ mt: 3, display: 'flex', color: 'grey', justifyContent: 'space-around'}}>
      <Typography component='legend' />
      <Rating
        sx={{ mb: 3, gap: 3, zIndex: -1}}
        name='simple-controlled'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          
        }}
      />
      {value}
    </Box>
  );
}
