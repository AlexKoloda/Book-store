export type TUser = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type TUserSignIn = Omit<TUser, 'id, name'>;
 