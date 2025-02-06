'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from './RangeSlider.module.scss';
import { useDebouncedValue } from '@/app/lib/hooks/useDebouncedValue';

type Props = {
  initialValueRange?: [number, number];
  valueRange?: [number, number];
  onDebouncedChange(value: number[]): void;
}

export default function RangeSlider({initialValueRange, onDebouncedChange}: Props) {

  const [value, setValue] = React.useState<number[]>(initialValueRange ?? [5, 95]);
  const debouncedValue = useDebouncedValue(value, 400);

  React.useEffect(() => {
    onDebouncedChange(debouncedValue)
  }, [debouncedValue]);
  
  const handleChange = ( _: Event, newValue: number | number[]) => {
    if( Array.isArray(newValue)) {
      setValue(newValue);
    }
  }

  return (
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
  );
}
