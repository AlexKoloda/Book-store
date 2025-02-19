import { IBook } from '@/app/lib/definitions';
import axiosApi from '../axios';

export interface ICart {
  id: number;
  quantity: number;
  book: IBook;
}

export const addBookApi = async (bookId: number) => {
  const response = await axiosApi.post<ICart[]>(`/cart`, { id: bookId });
  return response.data;
};

export const removeOneBook = async (bookId: number) => {
  const response = await axiosApi.patch<ICart[]>(`/cart`, { id: bookId });
  return response.data;
};

export const removeBookFromCartApi = async (params: { id: number }) => {
  const response = await axiosApi.delete<ICart[]>(`/cart`, { params });
  return response.data;
};
