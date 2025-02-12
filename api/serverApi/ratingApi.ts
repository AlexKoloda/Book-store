import conf from '@/config';
import { cookies } from 'next/headers';

export const getCurrentBookRatingApi = async (id: number) => {
  const cookiesValues = await cookies();
  const token = cookiesValues.get('access_token');
  if (!token?.value) {
    return null;
  }
  const response = await fetch(`${conf.url}/rating/rate/?id=${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  const rating = await response.json();
  return rating;
};
