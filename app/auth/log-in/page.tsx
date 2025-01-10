'use client';
import Button from '@/app/ui/button/button';
import style from './page.module.scss';
import Input from '@/app/ui/input/input';
import Image from 'next/image';
import LogInImage from '@/public/log-in-img/log_in-image.png';
import { ChangeEvent, FormEvent, useState } from 'react';
import { redirect } from 'next/navigation';
import conf from '@/config';

const url = conf.url;

const LoginPage: React.FC = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${url}/auth/sign-in`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const user = await res.json();
      debugger;
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
      redirect('/auth/log-in');
    }
  };

  return (
    <section className={style.log_in__section}>
      <div>
        <h1 className={style.log_in__title}> Log in </h1>
        <form 
          action='/'
          onSubmit={handleSubmit}
          className={style.log_in__form}>
          <Input
            name='email'
            onChange={handleChange}
            type='email'
            placeholder='Email'
            inputClass={style.log_in__input}
            />
          <p className={style.log_in__description}>Enter your email</p>
          <Input
            name='password'
            onChange={handleChange}
            type='password'
            placeholder='Password'
            inputClass={style.log_in__input}
            />
          <p className={style.log_in__description}>Enter your password</p>
        </form>
          <Button
            type='submit'
            text='Log In'
            className={style.log_in__button}
            />
            </div>
      <Image src={LogInImage} alt='Man read' />
    </section>
  );
};

export default LoginPage;
