import { IBook, IGenre } from '@/app/lib/definitions';
import conf from '@/config';
import queryString from 'query-string';

type ResponseDataType = {
  books: IBook[];
  genres: IGenre[];
  pagination: {
    hasPrevPage: boolean;
    hasNextPage: boolean;
    totalPage: number;
  };
};

type ResponseDataRecType = {
  books: IBook[];
};

export const getBooksApi = async (params: {
  page?: number;
  genre?: string;
  sort?: string;
  price?: string;
}) => {
  const paramsQueryString = queryString.stringify(params);

  const res = await fetch(`${conf.url}/book?${paramsQueryString}`, {
    method: 'GET',
  });
  const data: ResponseDataType = await res.json();
  return data;
};

export const getCurrentBookApi = async (id: string) => {
  const res = await fetch(`${conf.url}/book/get/?id=${id}`, {
    method: 'GET',
  });
  const book = await res.json();
  return book;
};

export const getRecommendationBooks = async (params: {
  genreId: number;
  bookId: string | number;
}): Promise<IBook[]> => {
  const paramsQueryString = queryString.stringify(params);
  const res = await fetch(`${conf.url}/book/getRec/?${paramsQueryString}`, {
    method: 'GET',
  });
  const data: ResponseDataRecType = await res.json();
  return data.books;
};
