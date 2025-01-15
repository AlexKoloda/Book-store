"use server"
import { getMe } from '@/api/serverApi/getMe';
import { UserContextProvider } from './UserContext';

const ContextDataServerInitialization = async ({children}: {children: React.ReactNode}) => {
  const user = await getMe().catch(() => null);

  return (
    <UserContextProvider user={user}>
      {children}
    </UserContextProvider>
  )
}


export default ContextDataServerInitialization;