import { ICart } from '@/api/clientApi/cartApi';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  cart:  ICart[],
}

export interface IBook {
  id: number;
  photo: string;
  title: string;
  description: string;
  dataIssue: Date;
  price: number;
  numberBooksStock: number;
  isNew: boolean;
  isBestseller: boolean;
  author: {
    id: number,
    name: string,
  },
  bookGenres?: [{
    genre: IGenre,
  }],
  rating: [{
    id: number,
    value: number,
  }],
  comments?: IComment[],
}

export interface IComment {
  id: number,
  text: string,
  dateOfCreate: string,
  user: {
    id: number,
    name: string,
    email: string,
    avatar: string,
  }
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

export interface IBookFavorite {
  id: number;
  photo: string;
  title: string;
  description: string;
  dataIssue: Date;
  price: number;
  numberBooksStock: number;
  isNew: boolean;
  isBestseller: boolean;
  author: {
    id: number,
    name: string,
  },
  bookGenres: [{
    genre: IGenre,
  }],
}

