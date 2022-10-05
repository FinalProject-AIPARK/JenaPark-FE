import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export type Token = {
  accessToken: string;
  refreshToken: string;
};

export const setToken = (token: Token) => {
  cookies.set('accessToken', token.accessToken);
  cookies.set('refreshToken', token.refreshToken);
};

export const getToken = (): Token => {
  return {
    accessToken: cookies.get('accessToken'),
    refreshToken: cookies.get('refreshToken'),
  };
};

export const removeToken = () => {
  cookies.remove('accessToken');
  cookies.remove('refreshToken');
};
