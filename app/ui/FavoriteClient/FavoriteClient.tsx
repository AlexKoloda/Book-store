'use client'
import React from 'react';
import style from './FavoriteClient.module.scss'
import { IFavoriteItems } from '@/api/serverApi/favoritesApi';
import FavoriteItem from '../FavoriteItem/FavoriteItems';
import { useRouter } from 'next/navigation';


type Props = {
  favoritesItems: IFavoriteItems[];
}

const FavoriteClient:React.FC<Props> = (props) => {
const router = useRouter();
const [items, setItems] = React.useState(props.favoritesItems) 

const handleRemove = async (bookId:number) => {
  try {
    setItems((prev) => prev.filter((item) => item.book.id !== bookId))
  } catch (error) {
    console.log(error)
  }
}

if (items.length === 0) {
  router.push('/');
}

return (
<ul className={style.favorite_client__list}>
        {items.map((item) => {  
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
              onRemove = {handleRemove}
            />
          );
        })}
      </ul>
);
};

export default FavoriteClient;
