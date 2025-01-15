'use client'
import { IUser, UserProfileType } from '@/app/lib/definitions';
import axiosApi from '../axios';

export const updateInformationApi = async ( data: UserProfileType) => {
  const response = await axiosApi.patch<{user: IUser}> (
   `/user/`,
   data
  );
  return response.data.user;
} 