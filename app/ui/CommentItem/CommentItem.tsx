'use client';
import React from 'react';
import Image, { ImageLoader } from 'next/image';
import style from './CommentItem.module.scss';
import conf from '@/config';
import { pluralize } from '@/app/lib/util/pluralize';
import { toWords } from 'number-to-words';

type Props = {
  userPhoto: string;
  userName: string;
  commentDate: string;
  commentText: string;
};

const CommentItem: React.FC<Props> = (props) => {

  const commentDate = new Date(props.commentDate).getDate();
  const nowDate = new Date().getDate();
  const commentDateRelativeNumber = nowDate - commentDate;
  let commentDayRelativeWord = toWords(commentDateRelativeNumber);

  if (commentDateRelativeNumber === 0) {
    commentDayRelativeWord = 'now';
  }

  const imageLoader: ImageLoader = ({ src }) => {
    return `${conf.url}/${src}`;
  };

  return (
    <div className={style.comment__box}>
      <Image
        className={style.comment__user_avatar}
        loader={imageLoader}
        src={props.userPhoto}
        alt='User Avatar'
        width={30}
        height={30}
      />
      <div className={style.comment__container}>
        <h2 className={style.comment__author}>{props.userName}</h2>
        <p className={style.comment__date}>
          Left a comment {commentDayRelativeWord}{' '}
          {commentDateRelativeNumber? pluralize(commentDateRelativeNumber, ['day ago', 'days ago']): ''}
        </p>
        <p className={style.comment__text}>{props.commentText}</p>
      </div>
    </div>
  );
};

export default CommentItem;
