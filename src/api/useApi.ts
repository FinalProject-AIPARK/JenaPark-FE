import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
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
  useUploadVoiceMutation,
  useGetVoiceModelQuery,
} = useApi;

interface ReturnSignupType {}

interface ActionSignupType {
  name: string;
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
