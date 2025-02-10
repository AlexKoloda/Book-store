'use client';
import React from 'react';
import style from './Comments.module.scss';

import Comment from '@/app/ui/CommentItem/CommentItem';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import TextInput from '../Input/TextInput';
import Button from '../Button/Button';

const Comments: React.FC = () => {
  const { user } = useUserContext();
  // TODO Реализовать запрос на бек с комментариями по конкретной книге
  const comments = [
    {
      id: 1,
      commentAuthor: 'Lorem Ipsum',
      commentDate: 'Left a comment 0 day ago',
      commentText:
        'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
    {
      id: 2,
      commentAuthor: 'Lorem Ipsum',
      commentDate: 'Left a comment 1 day ago',
      commentText: '  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    },
  ];

  return (
    <section className={style.comments__section}>
      <h1 className={style.comments__title}>Comments</h1>
      <ul className={style.comments__list}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              userName={comment.commentAuthor}
              commentText={comment.commentText}
              commentDate={comment.commentDate}
            />
          );
        })}
      </ul>
      {user ? (
        <div className={style.comments__container}>
          <form className={style.comments__form}>
            <p className={style.comments__placeholder}>Share a comment</p>
            <TextInput type='text' className={style.comments__input}/>
            <Button
              text='Post a comment'
              className={style.comments__button}
              type='submit'
            />
          </form>
        </div>
      ) : null}
    </section>
  );
};

export default Comments;
