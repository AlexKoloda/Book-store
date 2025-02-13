import conf from '@/config';
import { cookies } from 'next/headers';

export const getBookInCartApi = async () => {
  try {
  const cookiesValues = await cookies();
    const token = cookiesValues.get('access_token');
    if (!token?.value) {
      throw new Error('No token provided');
    }
    const res = await fetch(`${conf.url}/cart/get/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
    const books = await res.json();
    return books;    
  } catch (error) {
    console.log(error)
  }
};