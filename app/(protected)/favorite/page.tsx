import React from 'react';
import style from './page.module.scss';
import Image from 'next/image';
import AstroBoy from '@/public/icons/AstroBoy.jpeg'
import { getBookFavoritesApi } from '@/api/serverApi/favoritesApi';

import FavoriteItem from '@/app/ui/FavoriteItem/FavoriteItems';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Room: Favorites',
  description: 'Favorites, built Fusion Interns',
}

const Favorite = async () => {  
  const favoriteItems = await getBookFavoritesApi();

  return favoriteItems.length ? (
    <section className={style.favorite__section}>
      <ul className={style.favorite__list}>
        {favoriteItems.map((item) => {  
          return (
            <FavoriteItem
              key={item.id}
              bookId={item.book.id}
              bookCover={item.book.photo}
              bookTitle={item.book.title}
              bookAuthor={item.book.author.name}
              bookGenre={item.book.bookGenres[0].genre.name}
              bookPrice={item.book.price}
              bookDescription={item.book.description}
              bookLeft={item.book.numberBooksStock}
            />
          );
        })}
      </ul>
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
};

export default Favorite;
