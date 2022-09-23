import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig } from 'axios';

interface ReturnSignupType {}

interface ActionSignupType {
  email: string;
  password: string;
  username: string;
}

interface ReturnLoginType {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpirationTime: number;
  refreshTokenExpirationTime: number;
}

interface ActionLoginType {
  email: string;
  password: string;
}

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://43.200.66.173:8080/',
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<ReturnLoginType, ActionLoginType>({
      query: (data) => ({
        url: '/api/v1/members/login',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: builder.mutation<ReturnSignupType, ActionSignupType>({
      query: (data) => ({
        url: '/api/v1/members/signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignInMutation } = useApi;
export const { useSignUpMutation } = useApi;

// Log In
export interface Credentials {
  email: string;
  password: string;
}

export const onLogIn = async (data: Credentials) => {
  // const requestConfig: AxiosRequestConfig = {
  //   method: 'post',
  //   url: 'http://43.200.66.173:8080/api/v1/members/login',
  //   data,
  // };
  // try {
  //   // const { data: response } = await axios.request(requestConfig);
  //   const response = await axios.post(
  //     'http://43.200.66.173:8080/api/v1/members/login',
  //     {
  //       data,
  //     },
  //   );
  //   console.log(response.data);
  //   return response.data;
  // } catch (e) {
  //   console.error(e);
  //   // return { error: e.message };
  // }
  axios
    .post('http://43.200.66.173:8080/api/v1/members/login')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
