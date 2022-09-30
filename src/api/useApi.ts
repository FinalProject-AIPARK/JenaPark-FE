import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  // 헤더 토큰 연결
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
    uploadVoice: builder.mutation<ReturnUploadVoiceType, ActionUploadVoiceType>({
      query: (data) => ({
        url: `/api/v1/projects/${data.projectID}/audio/upload`,
        method: 'POST',
        body: data.formData,
      }),
    }),
    getVoiceModel: builder.query<ReturnVoiceModelType, ActionVoiceModelType>({
      query: (data) => ({
        url: '/api/v1/audio/sample',
        method: 'POST',
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
interface ActionUploadVoiceType {
  formData: FormData;
  projectID: number;
}
interface ReturnUploadVoiceType {
  state: number;
  result: string;
  message: string;
  data: [];
  error: [];
}
[];

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
