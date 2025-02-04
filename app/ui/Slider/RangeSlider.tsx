'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import OutsideClickHandler from 'react-outside-click-handler';
import style from './RangeSlider.module.scss';

export default function RangeSlider() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = React.useState<number[]>([5, 95]);
  const params = {
    page: searchParams.get('page'),
    sort: searchParams.get('sort'),
    price: searchParams.get('price'),
    genre: searchParams.get('genre'),
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleOutsideClick = () => {
    const queryParamsToNavigate = queryString.stringify(
      {
        ...params,
        price: value,
      },
      { arrayFormat: 'comma', skipNull: true }
    );

    router.push(`/?${queryParamsToNavigate}#Catalog`);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick} display='flex'>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '16px',
          width: '390px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(240, 244, 239, 1)',
        }}
      >
        <Box
          sx={{
            background: 'rgba(240, 244, 239, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '10px',
          }}
        >
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay='off'
            min={6}
            max={95}
            sx={{
              color: '#b5c18e',
              height: 4,
              '& .MuiSlider-track': {
                backgroundColor: '#b5c18e',
                height: 5,
                padding: '5px',
              },
              '& .MuiSlider-rail': {
                backgroundColor: 'rgba(214, 216, 231, 1)',
                height: 5,
                padding: '5px',
              },
              '& .MuiSlider-thumb': {
                width: 32,
                height: 32,
                border: '2px solid #b5c18e',
                backgroundColor: '#ffffff',
              },
            }}
          />
        </Box>
        <div className={style.slider__container}>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'rgba(52, 73, 102, 1)',
            }}
          >
            ${value[0]},00
          </span>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'rgba(52, 73, 102, 1)',
            }}
          >
            ${value[1]},00
          </span>
        </div>
      </Box>
    </OutsideClickHandler>
  );
}
