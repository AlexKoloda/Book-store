import { TUser, TUserSignIn } from '@/app/lib/definitions';
import axiosApi from './axios'


export const signInApi = (body: TUserSignIn) => {
  return axiosApi.post<{user: TUser, token: string}>(`/auth/sign-in`, body);
  };