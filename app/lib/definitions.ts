export interface IUser {
  id?: number;
  name: string;
  email: string;
  password?: string;
  avatar: string;
}

export type UserProfileType = {
  id?: number;
  name: string;
  email: string; 
};

export type ChangePasswordType = {
  oldPassword: string;
  newPassword: string;
  passwordReplay: string;
}

export type InputDataType = {
  email: string;
  password: string;
};

export type InputDataRegisterType = {
  email: string;
  password: string;
  passwordReplay: string;
};

export type InputDataAuthorizationType = Omit<
  InputDataRegisterType,
  'passwordReplay'
>;
