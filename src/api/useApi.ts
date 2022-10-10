import { getToken } from '@/store/Auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { VITE_BASE_URL } = import.meta.env;

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = getToken();
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
    logOut: builder.mutation<RetrunLogOutType, ActionLogOutType>({
      query: (data) => ({
        url: '/api/v1/members/logout',
        method: 'POST',
        body: data,
      }),
    }),
    reissueToken: builder.mutation<ReturnReissueTokenType, ActionReissueTokenType>({
      query: (data) => ({
        url: '/api/v1/members/reissue',
        method: 'POST',
        body: data,
      }),
    }),
    // 히스토리
    getProjectHistoy: builder.query<ReturnProjectHistoryType, number>({
      query: () => ({
        url: '/api/v1/projects',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYnNydWFAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTEzMjU5Nn0.4JcujUICUQ2K8RvwpbzrIhCoSyhuVx1VxI9LVRTMwV4',
        },
      }),
    }),
    createProject: builder.mutation<ReturnCreateProjectType, ''>({
      query: () => ({
        url: '/api/v1/projects',
        method: 'POST',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYnNydWFAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTEzMjU5Nn0.4JcujUICUQ2K8RvwpbzrIhCoSyhuVx1VxI9LVRTMwV4',
        },
      }),
    }),
    editProjectTitle: builder.mutation<any, ActionEditProjectTitleType>({
      query: (data) => ({
        url: '/api/v1/projects/title ',
        method: 'POST',
        body: data,
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYnNydWFAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTA2NTEwNH0.61-KN6pFMeShiKSGK9Tps8F37NXKpIAlOZtfB-WeBd0',
        },
      }),
    }),
    // AI 음성
    uploadVoice: builder.mutation<ReturnUploadVoiceType, ActionUploadVoiceType>({
      query: (data) => ({
        url: `/api/v1/projects/${data.projectID}/audio/upload`,
        method: 'POST',
        body: data.formData,
      }),
    }),
    getVoiceModel: builder.mutation<ReturnVoiceModelType, ActionVoiceModelType>({
      query: (data) => ({
        url: '/api/v1/audio/sample',
        method: 'POST',
        body: data,
      }),
    }),
    inputTextSyn: builder.mutation<ReturnInpTextSynthesisType, ActionInpTextSynthesisType>({
      query: (data) => ({
        url: '/api/v1/projects/create-tts',
        method: 'POST',
        body: data,
      }),
    }),
    getAvatarChooseList: builder.query<AvatarList, null>({
      query: (token) => ({
        url: '/api/v1/projects/avatar',
        method: 'GET',
      }),
    }),
    getAvatarChooseListId: builder.query<AvatarListId, AvatarId>({
      query: (id) => ({
        url: `/api/v1/projects/avatar/${id}`,
        method: 'GET',
      }),
    }),
    postCreateAvatar: builder.mutation<CreateAvatarRespses, CreateAvatarAction>({
      query: (data) => ({
        url: '/api/v1/projects/avatar/createAvatar',
        method: 'POST',
        body: data,
      }),
    }),
    getBackgroundAvatarList: builder.query<BackgroundAvatar, null>({
      query: () => ({
        url: '/api/v1/projects/background',
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5ndUBlbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY1Mzg4MTMyfQ.ha2f8lcpK5z9hH73MtpeF43I4BUiRsenlskOpn7m_7E'
        }
      })
    }),
    postBackgroundAvatarListChoose: builder.mutation<BackgroundChoose, BackgroundId>({
      query: ({data, projectId, backgroundId}) => ({
        url: `/api/v1/projects/${projectId}/background/${backgroundId}`,
        method: 'POST',
        body: data,
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5ndUBlbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY1Mzg4MTMyfQ.ha2f8lcpK5z9hH73MtpeF43I4BUiRsenlskOpn7m_7E'
        }
      })
    }),
    postUploadBackground: builder.mutation<BackgroundUpload, BackgroundImgUpload>({
      query: (data) => ({
        url: `/api/v1/projects/${data.projectId}/background/upload`,
        method: 'POST',
        body: data.formData,
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

// RESTful API
// METHOD + URL (GET, POST, DELETE)
// Status code for response
// 401 => Unauthorized
// 400 => Bad request (wrong parameter)
// 404 => Not found

// server defines the way to reissue(data in body or data in cookie)

// const baseQueryWithReissue = async (args, api, extraOptions) => {
//   let result = await api.baseQuery(args, api, extraOptions);
//   if (result?.error?.status === 401) {
//     const [cookies] = useCookies();
//     const { data } = await api.endpoints.reissueToken.initiate({
//       refreshToken: cookies.refreshToken,
//     });
//     if (data) {
//       const { accessToken, refreshToken } = data;
//       document.cookie = `accessToken=${accessToken}; path=/;`;
//       document.cookie = `refreshToken=${refreshToken}; path=/;`;
//       result = await api.baseQuery(args, api, extraOptions);
//     }
//   }
//   return result;
// };

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogOutMutation,
  useReissueTokenMutation,
  // 히스토리
  useGetProjectHistoyQuery,
  useCreateProjectMutation,
  useEditProjectTitleMutation,
  // AI 음성
  useUploadVoiceMutation,
  useGetVoiceModelMutation,
  useGetAvatarChooseListQuery,
  useGetAvatarChooseListIdQuery,
  usePostCreateAvatarMutation,
  useInputTextSynMutation,
  useGetBackgroundAvatarListQuery,
  usePostBackgroundAvatarListChooseMutation,
  usePostUploadBackgroundMutation,
} = useApi;

interface ActionSignUpType {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
interface ReturnSignInType {
  data: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpirationTime: number;
    refreshTokenExpirationTime: number;
  };
}
interface ActionSignInType {
  email: string;
  password: string;
}
interface ActionLogOutType {
  accessToken: string;
  refreshToken: string;
}
interface RetrunLogOutType {
  state: number;
  result: string;
  message: string;
  data: [];
  error: [];
}
interface ActionReissueTokenType {
  accessToken: string;
  refreshToken: string;
}
interface ReturnReissueTokenType {
  state: number;
  result: string;
  message: string;
  data: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpirationTime: number;
    refreshTokenExpirationTime: number;
  };
  error: [];
}
// 히스토리
interface ReturnProjectHistoryType {
  data: {
    historyProjects: {
      projectId: number;
      title: string;
      thumbnail: null;
      createDate: string;
      modifiedDate: string;
    }[];
    historyVideos: {};
  };
}
interface ReturnCreateProjectType {
  data: {
    projectId: number;
    title: string;
    sex: string;
    lang: string;
    speed: number;
    pitch: number;
    volume: number;
    durationSilence: number;
    backgroundUrl: string;
    audioUpload: boolean;
    audioMerge: boolean;
    audioFileOriginName: null;
    audioFileUrl: null;
    avatarUrl: null;
    checkText: boolean;
    checkAudio: boolean;
    checkAvatar: boolean;
    audioInfos: [];
  };
}
interface ActionEditProjectTitleType {
  projectID: number;
  title: string;
}
// AI 음성
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
export interface ReturnVoiceModelType {
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
  data:
    | [
        {
          id: number;
          name: string;
          thumbNail: string;
        },
      ]
    | undefined;
  avatarId: number;
}

interface AvatarId {
  avatarId: number;
}

export interface AvatarListId {
  data:
    | {
        accUrl: [
          {
            id: number;
            accessoryUrl: string;
          },
        ];
        clothesUrl: [
          {
            id: number;
            clothesUrl: string;
          },
        ];
        attitudeUrl: [
          {
            id: number;
            hatUrl: string;
          },
        ];
      }[]
    | undefined;
}

export interface CreateAvatarAction {
  accessoryId: number;
  hatId: number;
  avatarId: number;
  clothesId: number;
  projectId: number;
}

interface CreateAvatarRespses {
  data: string;
  message: string;
}
interface ReturnInpTextSynthesisType {
  audioInfoDtos: [
    {
      audioId: string;
      lineNumber: number;
      splitText: string;
      audioFileUrl: string;
      durationSilence: number;
      pitch: number;
      speed: number;
    },
  ];
}
interface ActionInpTextSynthesisType {
  projectID: number;
  avatarName: string;
  sex: string;
  lang: string;
  durationSilence: number;
  pitch: number;
  speed: number;
  text: string;
}

interface BackgroundAvatar {
  message: string
  data: {
    backgroundDefaults: [
      {
        bgId: number,
        bgName: string,
        bgUrl: string
      }
    ]
    backgroundUploads: [
      {
        bgId: number,
        bgName: string,
        bgUrl: string
    }
    ]
  }
}

interface BackgroundChoose {
  data : string,
  message: string,
}

interface BackgroundId {
  projectId: number;
  backgroundId: number;
  data: any;
}

interface BackgroundUpload {
  data: {},
  message: string,
}

interface BackgroundImgUpload {
  data: {}
  formData: FormData,
  projectId: number,
}

