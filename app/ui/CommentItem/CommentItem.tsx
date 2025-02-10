import React from 'react';
import Image from 'next/image';
import style from './CommentItem.module.scss'
import placeholder from '@/public/placeholder.png'

type Props = {
  userPhoto?: string;
  userName: string;
  commentDate: string;
  commentText: string;
}

const CommentItem:React.FC<Props> = (props) => {

return (
<div className={style.comment__box}>
        <Image
          src={placeholder}
          alt='User avatar'
          className={style.comment__user_avatar}
        />
        <div className={style.comment__container}>
        <h2 className={style.comment__author}>{props.userName}</h2>
        <p className={style.comment__date}>{props.commentDate}</p>
        <p className={style.comment__text}>{props.commentText}</p>
        </div>
      </div>
);
};

export default CommentItem;
