'use server';
import { IBook } from '@/app/lib/definitions';
import conf from '@/config';

export const getBooksApi = async (data: string) => {
    const res = await fetch(`${conf.url}/book?page=${data}`, {
      method: 'GET',
    })
    const books = await res.json();
    return books as IBook[];    
}
