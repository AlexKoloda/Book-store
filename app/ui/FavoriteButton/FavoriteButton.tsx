'use client';
import React from 'react';
import style from './FavoriteButton.module.scss';
import {
  addBookInFavoritesApi,
  removeBookFromFavorites,
} from '@/api/clientApi/favoritesApi';

import Image from 'next/image';
import FavoriteIconActive from '@/public/icons/FavoriteFilled.png';
import FavoriteIconDisable from '@/public/icons/FavoriteEmpty.png';
import { toast } from 'react-toastify';
import { useUserContext } from '@/app/lib/contexts/UserContext';

type Props = {
  bookId: number;
  isAdded?: boolean;
  style?: string;
  onRemove?: (arg0: number) => void;
};

const FavoriteButton: React.FC<Props> = (props) => {
  const {user} = useUserContext();
  const [isAdded, setIsAdded] = React.useState(props.isAdded);

  const handleClick = () => {
    if (!isAdded) {
      setIsAdded(true);
      addBookInFavoritesApi(props.bookId);
      toast.success('Book added in favorites')
    } else {
    setIsAdded(false);
    removeBookFromFavorites({ id: props.bookId });
    toast.warning('Book remove fom favorites')
    if (props.onRemove) {
      props.onRemove(props.bookId);
    }
  }
  };

  if (!user) {
    return null;
  }


  return isAdded ? (
    <div className={style.favorite__wrapper} onClick={handleClick}>
      <Image
        src={FavoriteIconActive}
        alt='Favorite icon'
        className={style.favorite__icon}
      />
    </div>
  ) : (
    <div className={style.favorite__wrapper} onClick={handleClick}>
      <Image
        src={FavoriteIconDisable}
        alt='Favorite icon'
        className={style.favorite__icon}
      />
    </div>
  );
};

export default FavoriteButton;
