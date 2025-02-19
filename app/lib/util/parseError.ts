import { AxiosError } from 'axios';

export const parseError = (error: AxiosError): string => {
  switch (error.status) {
    case 400: {
      return 'Incorrect data';
    }
    case 401: {
      return 'Access denied';
    }
    case 404: {
      return 'Not found';
    }
    default:
      return 'Something went wrong';
  }
};