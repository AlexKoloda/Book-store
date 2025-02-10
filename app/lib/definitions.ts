export interface IUser {
  id?: number;
  name: string;
  email: string;
  password?: string;
  avatar: string;
}

export interface IBook {
  id: number | string;
  photo: string;
  title: string;
  description: string;
  price: string;
  isNew: boolean;
  isBestseller: boolean;
  dataIssue: Date;
  numberBooksStock: number;
  author: {
    id: number,
    name: string,
  },
  bookGenres: [{
    genre: IGenre,
  }];
}

export interface IGenre {
  id: number,
  name: string,
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
};

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
