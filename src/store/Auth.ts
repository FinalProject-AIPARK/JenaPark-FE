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
