import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: async (headers, { getState, extra }) => {
      let token = localStorage.getItem('accessToken');
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
    getAvatarChooseList: builder.query<AvatarList, null>({
      query: (token) => ({
        url: '/api/v1/projects/avatar',
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYnNydWFAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NDk0ODc1N30.MyADPEYZKeuc6xhfmoxVYrMss48IAjGAyQlrWu0xfOU'
        }
      })
    }),
    getAvatarChooseListId: builder.query<AvatarListId, AvatarId>({
      query: (id) => ({
        url: `/api/v1/projects/avatar/${id}`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYnNydWFAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NDk0ODc1N30.MyADPEYZKeuc6xhfmoxVYrMss48IAjGAyQlrWu0xfOU'
        }
      })
    }),
    postCreateAvatar: builder.mutation<CreateAvatarRespses, CreateAvatar>({
      query: (data) => ({
        url: '/api/v1/projects/avatar/createAvatar',
        method: 'POST',
        body: data,
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYnNydWFAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NDk0ODc1N30.MyADPEYZKeuc6xhfmoxVYrMss48IAjGAyQlrWu0xfOU'
        }
      })
    })

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
  useGetAvatarChooseListQuery,
  useGetAvatarChooseListIdQuery,
  usePostCreateAvatarMutation,
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

export interface AvatarList {
  id: any;
  data: [
    {
      id: number;
      name: string;
      thumbNail: string;
    },
  ] | undefined;
  avatarId: number
}

interface AvatarId {
  avatarId: number
}

export interface AvatarListId {
  data: {
    accUrl: [
      {
        id : number;
        accessoryUrl: string;
      }
    ],
    clothesUrl: [
      {
        id : number;
        clothesUrl: string;
      }
    ],
    attitudeUrl: [
      {
        id : number;
        hatUrl: string;
      }
    ]
  }[] | undefined,
}

interface CreateAvatar {
  accessoryId: number,
  attitudeId: number,
  avatarId: number,
  clothesId: number,
  projectId: number,
}

interface CreateAvatarRespses {
  data: string;
}