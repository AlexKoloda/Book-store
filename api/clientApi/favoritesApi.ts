import axiosApi from '../axios';

export const addBookInFavoritesApi = async (bookId: number) => {
  return await axiosApi.post(`/favorites`, { id: bookId });
};

export const removeBookFromFavorites = async (params: {id: number}) => {
  return await axiosApi.delete(`/favorites`, { params });
};
