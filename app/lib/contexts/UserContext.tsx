'use client';
import { createContext, PropsWithChildren, useContext } from 'react';
import { IUser } from '../definitions';
import React from 'react';

export const UserContext = createContext<{
  user: IUser | null;
  setUserData(user: IUser | null): void;
}>({
  user: null,
  setUserData() {},
});

export const UserContextProvider: React.FC<
  PropsWithChildren<{ user: null | IUser }>
> = (props) => {
  const [user, setUser] = React.useState<null | IUser>(props.user);

  const setUserData = React.useCallback((userData: IUser | null) => {
    setUser(userData);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
