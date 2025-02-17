import { IBook } from '@/app/lib/definitions';
import conf from '@/config';
import { cookies } from 'next/headers';


interface IFavoriteItems {
  id: number,
  dateAdded: string,
  book: IBook,
}

export const getBookFavoritesApi = async () => {
  try {
  const cookiesValues = await cookies();
    const token = cookiesValues.get('access_token');
    if (!token?.value) {
      return [];
    }
    const res = await fetch(`${conf.url}/favorites/get`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
    const books: IFavoriteItems[] = await res.json();
    if( !books) {
      return [];
    }
    return books;    
  } catch (error) {
    console.log(error)
    return [];
  }
};