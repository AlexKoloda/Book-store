import axiosApi from '../axios';

export interface ICart {
  book: number,
  id: number | string,
  quantity: number,
  user: number,
}

export const addBookApi = async ( bookId : number) => {
  const response = await axiosApi.post<ICart> (
   `/cart/`,
   {id: bookId}
  );

  return response.data.quantity;
} 

export const deleteBookApi = async ( bookId : number) => {
  const response = await axiosApi.patch<ICart> (
   `/cart/`,
   {id: bookId}
  );
  return response.data.quantity;
} 