'use client';
import { IUser } from '@/app/lib/definitions';
import { setCookie } from 'cookies-next/client';
import axiosApi from '../axios';

export const signInApi = async (data: { email: string; password: string }) => {
  const response = await axiosApi.post<{ user: IUser; token: string }>(
    `/auth/sign-in`,
    data
  );
  setCookie('access_token', response.data.token, { maxAge: 60 * 60 * 8 });
  return response.data.user;
};

export const signUpAp = async ( data: {email: string, password: string}) => {
  const response = await axiosApi.post<{user: IUser; token: string}>(
    `/auth/sign-up`,
    data
  );
  return response.data.user;
}