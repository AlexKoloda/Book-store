import { redirect } from 'next/navigation';
import conf from '@/config';
const url = conf.url;

type TData = {
  email: string;
  password: string;
  passwordReplay?: string;
}


const getUser = async (data: TData) => {
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
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    redirect('/auth/log-in');
  }
}

export default getUser;
