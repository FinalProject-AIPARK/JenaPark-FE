import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    baseUrl: 'https://api.fafago.link',
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
