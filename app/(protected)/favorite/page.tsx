import React from 'react';
import style from './page.module.scss';
import { getBookFavoritesApi } from '@/api/serverApi/favoritesApi';
import { Metadata } from 'next';

import Image from 'next/image';
import AstroBoy from '@/public/icons/AstroBoy.jpeg'
import FavoriteClient from '@/app/ui/FavoriteClient/FavoriteClient';
import { parseError } from '@/app/lib/util/parseError';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Book Room: Favorites',
  description: 'Favorites, built Fusion Interns',
}

const Favorite = async () => {
  try {
    const favoriteItems = await getBookFavoritesApi();
    
  return favoriteItems.length ? (
    <section className={style.favorite__section}>
      <FavoriteClient
      favoritesItems={favoriteItems}
      />
    </section>
  ): (
    <h1 className={style.favorite__title}> ...Nothing alike yet, but our scouts are in another galaxy! 
  <Image 
  src = {AstroBoy}
  alt='Astro boy'  
  width={80}
  height={80}
  />
  </h1>
  );
} catch (error) {
      if (error instanceof AxiosError) {
        toast.error(parseError(error));
      }
    }
  };

export default Favorite;
