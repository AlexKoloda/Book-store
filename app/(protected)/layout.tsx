'use server';
import { getMe } from '@/api/serverApi/getMe';
import { redirect } from 'next/navigation';

const ProtectedLayout = async (props: { children: React.ReactNode }) => {
  try {
    await getMe();
  } catch {
    redirect('/auth/log-in');
  }

  return <>{props.children}</>;
};

export default ProtectedLayout;
