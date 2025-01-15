

import { redirect } from 'next/navigation';
import conf from '@/config';
import { TInputsLog, TUser } from '@/app/lib/definitions';

const url = conf.url;

type TData = {
  user : TUser;
  token: string;
}


export const authorization = async(data: TInputsLog) => {
  try {
    const res = await fetch(`${url}/auth/sign-in`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const userData: TData = await res.json();
    localStorage.setItem('token', userData.token);
    return userData.user;
  } catch (error) {
    console.log(error);
    redirect('/auth/log-in');
  }
};

 export const getMe = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(`${url}/user`, {
      method: 'GET',     
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await res.json()
    return user;
  } catch (error) {
    console.log(error);
    redirect('/auth/log-in');
  }
}


