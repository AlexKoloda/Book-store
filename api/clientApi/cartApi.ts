import axiosApi from '../axios';

export interface ICart {
  book: number,
  id: number | string,
  quantity: number,
  user: number,
}

export const addBookApi = async ( bookId : number) => {
  const response = await axiosApi.post<ICart> (
   `/cart`,
   {id: bookId}
  );

  return response.data.quantity;
} 

export const removeBookFromCartApi = async (params: {id: number}) => {
  return await axiosApi.delete(`/cart`, { params });
};
