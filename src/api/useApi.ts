import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<null, ActionSignUpType>({
      query: (data) => ({
        url: '/api/v1/members/signup',
        method: 'POST',
        body: data,
      }),
    }),
    signIn: builder.mutation<ReturnSignInType, ActionSignInType>({
      query: (data) => ({
        url: '/api/v1/members/login',
        method: 'POST',
        body: data,
      }),
    }),
    logOut: builder.mutation<null, ActionLogOutType>({
      query: (data) => ({
        url: '/api/v1/members/logout',
        method: 'POST',
        body: data,
      }),
    }),
    uploadVoice: builder.mutation<any, any>({
      query: (data) => ({
        url: '/api/v1/projects/audio/upload',
        method: 'GET',
        body: data,
      }),
    }),
    getVoiceModel: builder.query<ReturnVoiceModelType, ActionVoiceModelType>({
      query: (data) => ({
        url: '/api/v1/audio/sample',
        method: 'GET',
        body: data,
      }),
    }),

    // projectData: builder.query<ReturnVoiceModelType, ActionVoiceModelType>({
    //   query: (data) => ({
    //     url: '/api/v1/audio/sample',
    //     method: 'GET',
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogOutMutation,
  useUploadVoiceMutation,
  useGetVoiceModelQuery,
} = useApi;

interface ActionSignUpType {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
interface ReturnSignInType {
  [x: string]: any;
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpirationTime: number;
  refreshTokenExpirationTime: number;
}
interface ActionSignInType {
  email: string;
  password: string;
}
interface ActionLogOutType {
  accessToken: string;
  refreshToken: string;
}
interface ReturnVoiceModelType {
  data: [
    {
      name: string;
      sex: string;
      audioFileUrl: string;
      lang: string;
    },
  ];
}
interface ActionVoiceModelType {
  lang: string;
  sex: string;
}
