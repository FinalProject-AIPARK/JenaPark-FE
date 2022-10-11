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
    userInfo: builder.query<ReturnUserInfoType, null>({
      query: () => '/api/v1/members',
    }),
    // 히스토리
    getProjectHistoy: builder.query<ReturnProjectHistoryType, number>({
      query: () => ({
        url: '/api/v1/projects',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5ndUBlbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY1NDAxNjQ5fQ.q1VID7JOvOU1SBmP9JuXLSamBLS2rv4_Ago_k_IKIwY',
        },
      }),
    }),
    createProject: builder.mutation<ReturnCreateProjectType, ''>({
      query: () => ({
        url: '/api/v1/projects',
        method: 'POST',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5ndUBlbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY1NDA5OTE1fQ.2qmU5ZkQdVwDbrPJhN0waGwLaVaCUUPNohqxxJo1vhY',
        },
      }),
    }),
    editProjectTitle: builder.mutation<any, ActionEditProjectTitleType>({
      query: (data) => ({
        url: '/api/v1/projects/title ',
        method: 'POST',
        body: data,
      }),
    }),
    editVideoTitle: builder.mutation<any, ActionEditVideoTitleType>({
      query: (data) => ({
        url: `/api/v1/projects/video/${data.videoId}`,
        method: 'POST',
        body: data.action,
      }),
    }),
    deleteProject: builder.mutation<any, number>({
      query: (projectId) => ({
        url: `/api/v1/projects/${projectId}`,
        method: 'DELETE',
      }),
    }),
    deleteVideo: builder.mutation<any, number>({
      query: (videoId) => ({
        url: `/api/v1/projects/video/${videoId}`,
        method: 'DELETE',
      }),
    }),
    // 개별 프로젝트 데이터
    getProjectData: builder.query<ReturnProjectDataType, string>({
      query: (projectId) => `/api/v1/projects/${projectId}`,
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
    // 아바타 Api
    getAvatarChooseList: builder.query<AvatarList, null>({
      query: (token) => ({
        url: '/api/v1/projects/avatar',
        method: 'GET',
      }),
    }),
    getAvatarChooseListId: builder.query<AvatarListId, AvatarId>({
      query: (avatarId) => ({
        url: `/api/v1/projects/avatar/${avatarId}`,
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
    // 배경 Api
    getBackgroundAvatarList: builder.query<BackgroundAvatar, null>({
      query: () => ({
        url: '/api/v1/projects/background',
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5ndUBlbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY1NDc5MzA0fQ.qNhW-L1QONE4TFQOISQEd3zKptatfev0ZK1-NQ0GiD0'
        }
      })
    }),
    postBackgroundAvatarListChoose: builder.mutation<BackgroundChoose, BackgroundId>({
      query: ({data, projectId, backgroundId}) => ({
        url: `/api/v1/projects/${projectId}/background/${backgroundId}`,
        method: 'POST',
        body: data,
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5ndUBlbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY1NDc5MzA0fQ.qNhW-L1QONE4TFQOISQEd3zKptatfev0ZK1-NQ0GiD0'
        }
      })
    }),
    postUploadBackground: builder.mutation<BackgroundUpload, BackgroundImgUpload>({
      query: (data) => ({
        url: `/api/v1/projects/${data.projectId}/background/upload`,
        method: 'POST',
        body: data.formData,
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW5ndUBlbWFpbC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY1NDc5MzA0fQ.qNhW-L1QONE4TFQOISQEd3zKptatfev0ZK1-NQ0GiD0'
        }
      })
    }),
    // 텍스트 수정
    postUpdataTts: builder.mutation<TextData, TextUpdata>({
      query: (data) => ({
        url: '/api/v1/projects/update-tts',
        method: 'POST',
        body: data
      })
    }),
    
    // projectData: builder.query<ReturnVoiceModelType, ActionVoiceModelType>({
    //   query: (data) => ({
    //     url: '/api/v1/audio/sample',
    //     method: 'GET',
    //     body: data,
    //   }),
    // }),
    allListen: builder.query<ReturnAllListenType, ActionAllListenType>({
      query: (id) => ({
        url: `/api/v1/projects/${id}/audio`,
        method: 'GET',
      }),
    }),
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
  useUserInfoQuery,
  // 히스토리
  useGetProjectHistoyQuery,
  useCreateProjectMutation,
  useEditProjectTitleMutation,
  useEditVideoTitleMutation,
  useDeleteProjectMutation,
  useDeleteVideoMutation,
  // 개별 프로젝트 데이터
  useGetProjectDataQuery,
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
  useAllListenQuery,
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
interface ReturnUserInfoType {
  data: {
    username: string;
    email: string;
    profileImg: string | null;
    createDate: string;
  };
}
// 히스토리
interface ReturnProjectHistoryType {
  data: {
    historyProjects: {
      projectId: number;
      title: string;
      createDate: string;
      modifiedDate: string;
    }[];
    historyVideos: {
      videoId: number;
      title: string;
      thumbnail: null;
      videoFileUrl: string;
      createDate: string;
      avatarUrl: string;
      backgroundUrl: string;
      downloadFileUrl: string;
    }[];
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
interface ActionEditVideoTitleType {
  videoId: number;
  action: {
    title: string;
  };
}
// 개별 프로젝트 데이터
interface ReturnProjectDataType {
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
    audioFileOriginName: string | null;
    audioFileUrl: string | null;
    avatarUrl: string | null;
    checkText: boolean;
    checkAudio: boolean;
    checkAvatar: boolean;
    audioInfos: [];
  };
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
  data: string,
  message: string,
}

interface BackgroundImgUpload {
  formData: FormData,
  projectId: number,
}
interface ReturnAllListenType {
  audioFileUrl: string;
}
interface ActionAllListenType {
  projectId: number;
}
// 텍스트 수정

interface TextData {
  message: string
  data : {
    audioId: number,
    allText: string,
    audioFileUrl: string
  }
}

interface TextUpdata {
  projectID : number,
  audioID: number,
  durationSilence: number,
  pitch : number,
  speed: number,
  volume: number,
  text: string
}

