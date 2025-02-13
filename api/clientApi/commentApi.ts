'use client'

import { IUser } from '@/app/lib/definitions';

import axiosApi from '../axios';

export const addCommentApi = async ( data: {text: string, bookId: string} ) => {
  const response = await axiosApi.post<{text: string, id: number, dateOfCreate: string, user: IUser}>(
   `/comment/`,
   data
  );
  return response.data;
} 