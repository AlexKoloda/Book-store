'use client';
import { SetStateAction, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = useState<number | null>(2);
  const handleChange = (_: unknown, newValue: SetStateAction<number | null>) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', color: 'grey', justifyContent: 'space-around', fontSize: "1.5rem" }}>

    {value}
    <Typography component='legend' />

    <Rating
      name="half-rating"
      sx={{ gap: 3, ml: 3, fontSize: "2rem", }}
      value={value}
      onChange={handleChange}
    />
  </Box>
);
}