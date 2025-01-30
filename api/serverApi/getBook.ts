'use server';
//import { IBook, IGenre } from '@/app/lib/definitions';
import conf from '@/config';
// TODO Переписать на query string 
export const getBooksApi = async (params: {page?: number, genre?: string, sort?: string, price?: string,}) => {

    const res = await fetch(`${conf.url}/book?page=${params.page}&sort=${params.sort}&genre=${params.genre}`, {
      method: 'GET',
    })
    const books = await res.json();
    return books; 
}


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