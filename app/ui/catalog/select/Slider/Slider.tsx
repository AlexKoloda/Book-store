'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([10, 40]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ paddingX: 1, paddingY: 3,  }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        sx={{ color: 'green'}}
      />
    </Box>
  );
}

//  width: Fixed (413px)px;
// height: Fixed (151px)px;
// top: 74px;
// padding: 15px 0px 0px 0px;
// gap: 10px;
// border-radius: 16px 0px 0px 0px;
// opacity: 0px;
