import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getToken = () => {
  const token = cookies.get('accessToken');
  return token;
};

export const removeToken = () => {
  cookies.remove('accessToken');
  cookies.remove('refreshToken');
};

export const tokenData = () => {
  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');
  return { accessToken, refreshToken };
};
