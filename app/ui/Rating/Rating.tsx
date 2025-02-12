'use client';
import { SetStateAction, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { updateRatingApi } from '@/api/clientApi/ratingClientApi';
import style from './Rating.module.scss';

type BasicRatingType = {
  id: number;
  rating: number;
};

const BasicRating: React.FC<BasicRatingType> = (props) => {
  const [value, setValue] = useState<number | null>(props.rating);

  const handleChange = async (_: unknown, newValue: SetStateAction<number | null>) => {
    updateRatingApi({ value: Number(newValue), id: String(props.id) });  
    setValue(newValue);
  };

  return props.rating? (
    <Box
      sx={{
        display: 'flex',
        color: 'grey',
        justifyContent: 'space-around',
        fontSize: '1.5rem',
      }}
    >
      <p className={style.average_rating__count}>{value}.0</p>
      <Typography component='legend' />
      <Rating
        name='half-rating'
        sx={{ gap: 3, ml: 3, fontSize: '2rem' }}
        value={value}
        onChange={handleChange}
      />
    </Box>
  ) : (
    <Box
      sx={{
        display: 'flex',
        color: 'grey',
        justifyContent: 'space-around',
        fontSize: '1.5rem',
        alignItems: 'center',
      }}
    >
      <Typography component='legend'></Typography>
      <Rating
        name='disabled'
        value={value}
        disabled
        sx={{ gap: 3, fontSize: '2rem' }}
      />
    </Box>
  );
};

export default BasicRating;
