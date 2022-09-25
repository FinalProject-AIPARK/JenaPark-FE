import { logOut, setCredentials } from '@/store/authSlice';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }: any) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
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

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   const baseQuery2 =  fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_BASE_URL,
//     credentials: 'include',
//     })
//   let result = await baseQuery2(args, api, extraOptions);
//   if (result?.error?.originalStatus === 401) {
//     console.log('리프레쉬 토큰으로 재인증 시도');
//     // 리프레쉬 토큰을 보내서 새로운 액세스 토큰 가져오기
//     const refreshResult = await baseQuery('/api/v1/members/reissue', api, extraOptions);
//     console.log(refreshResult);
//     if (refreshResult) {
//       const user = api.getState().auth.user;
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       // retry the original query with the new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // if the refresh token is invalid, log the user out
//       api.dispatch(logOut());
//     }
//   }
//   return result;
// };

// export const apiSlice = createApi({
//   baseQuery: baseQueryWithReauth,
//   endpoints: (builder) => ({}),
// });

export const {
  useSignInMutation,
  useSignUpMutation,
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
