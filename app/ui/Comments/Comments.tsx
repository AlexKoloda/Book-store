'use client';
import React from 'react';
import style from './Comments.module.scss';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import { IComment } from '@/app/lib/definitions';

import Comment from '@/app/ui/CommentItem/CommentItem';
import Button from '../Button/Button';
import Form from 'next/form';
import Input from '../Input/TextInput';
import { addCommentApi } from '@/api/clientApi/commentApi';
import { parseError } from '@/app/lib/util/parseError';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type CommentsPropsType = {
  comments: IComment[];
  bookId: string;
};

const Comments: React.FC<CommentsPropsType> = (props) => {
  const { user } = useUserContext();
  const [commentText, setCommentText] = React.useState(' ');
  const [comments, setComments] = React.useState(props.comments);

  const handleChangeForm = (newValue: string) => {
    setCommentText(newValue);
  };

  const handleSubmitForm = async() => {
    try {      
     const newComment = await addCommentApi({ text: commentText, bookId: props.bookId });
     setComments([...comments, newComment]);
     setCommentText('');
    }catch (error) {
          if (error instanceof AxiosError) {
            toast.error(parseError(error));
          }
        }
      };

  return (
    <section className={style.comments__section}>
      <h1 id='Comments' className={style.comments__title}>
        Comments
      </h1>
      <ul className={style.comments__list}>
        {props.comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              userPhoto={comment.user.avatar}
              userName={comment.user.name}
              commentText={comment.text}
              commentDate={comment.dateOfCreate}
            />
          );
        })}
      </ul>
      {user ? (
        <div className={style.comments__container}>
          <Form
            action=''
            scroll={false}
            replace={true}
            onSubmit={handleSubmitForm}
            className={style.comments__form}
          >
            <Input
              type='textarea'
              name='comment'
              className={style.comments__input}
              onChange={(e) => handleChangeForm(e.target.value)}
            />
            <p className={style.comments__placeholder}>Share a comment</p>
            <Button
              text='Post a comment'
              className={style.comments__button}
              type='submit'
            />
          </Form>
        </div>
      ) : null}
    </section>
  );
};

export default Comments;
