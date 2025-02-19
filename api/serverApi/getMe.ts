'use server';
import { IUser } from '@/app/lib/definitions';
import conf from '@/config';
import { cookies } from 'next/headers';

type ResponseDataType = {
  user: IUser,
}

export const getMe = async () => {
  const cookiesValues = await cookies();
  const token = cookiesValues.get('access_token');
  if (!token?.value) {
    throw new Error('No token provided');
  }

  const res = await fetch(`${conf.url}/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  const data:ResponseDataType = await res.json();
  return data.user;
};
