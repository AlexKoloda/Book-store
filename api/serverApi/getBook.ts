import conf from '@/config';
import queryString from 'query-string';

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
  const books = await res.json();
  return books;
};

export const getCurrentBookApi = async (id: string) => {
  const res = await fetch(`${conf.url}/book/get/?id=${id}`, {
    method: 'GET',
  });
  const book = await res.json();
  return book;
};

export const getRecommendationBooks = async (params: {genreId: number, bookId: string | number}) => {
  const paramsQueryString = queryString.stringify(params);
  const res = await fetch(`${conf.url}/book/getRec/?${paramsQueryString}`, {
    method: 'GET',
});
  const recBooks = await res.json();
  return recBooks;
};





// const foo = (name: string, age: number, company: string,  time: number, address?: string,) => {
//   console.log(name, age, company, address)
// }

// const foo2 = (data: {
//   address?: string,
//   name: string,
//   age: number,
//   company: string,
//   time: number,
// }) => {

// }

// foo('alex', 22, 'TCL', 55, 'NY')

// foo2({
//   address: 'NY',
//   age: 33,
//   company: "ЕДС",
//   name: 'Alex',
//   time: 134
// })
