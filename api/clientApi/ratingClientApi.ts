'use client'

import axiosApi from '../axios';

export const updateRatingApi = async ( data: {value: number, id: string} ) => {
  const response = await axiosApi.patch<{value: number}> (
   `/rating`,
   data
  );
  return response.data.value;
} 
