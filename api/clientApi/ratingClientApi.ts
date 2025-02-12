'use client'

import axiosApi from '../axios';

export const updateRatingApi = async ( data: {value: number, id: string} ) => {
  const response = await axiosApi.patch<{value: number}> (
   `/rating/`,
   data
  );
  console.log(response.data.value);
  return response.data.value;
} 
