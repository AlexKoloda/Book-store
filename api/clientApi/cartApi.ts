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

export const removeBookApi = (cartItemId: number) => {
  return axiosApi.patch(`/cart/delete/${cartItemId}`);
};