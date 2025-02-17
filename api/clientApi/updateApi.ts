'use client'
import { IUser, UserProfileType } from '@/app/lib/definitions';
import axiosApi from '../axios';

export const updateInformationApi = async ( data: UserProfileType) => {
  const response = await axiosApi.patch<{user: IUser}> (
   `/user`,
   data
  );
  return response.data.user;
} 

export const updatePasswordApi = async ( data: {oldPassword: string, newPassword: string}) => {
  const response = await axiosApi.patch(
    `user/password`,
    data
  );
  return response.status;
}

export const updateUserPhoto = async ( data: {type: string, avatar: string, } ) => { 
  const response = await axiosApi.patch(
    `/user/photo`,
    data
  );
  return response.data;
}