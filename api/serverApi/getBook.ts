'use server';

import { IBook } from '@/app/lib/definitions';
import conf from '@/config';

export const getBooks = async () => {

  const res = await fetch(`${conf.url}/book/`, {
    method: 'GET',
  });
  const books = await res.json();
  return books as IBook[];
}