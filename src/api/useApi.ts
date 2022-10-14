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
      query: () => '/api/v1/projects',
    }),
    createProject: builder.mutation<ReturnCreateProjectType, string>({
      query: () => ({
        url: '/api/v1/projects',
        method: 'POST',
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
    getProjectData: builder.query<ReturnProjectDataType, ActionProjectDataType>({
      query: (data) => `/api/v1/projects/${data.projectId}`,
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
    allListen: builder.query<ReturnAllListenType, any>({
      query: (data) => `/api/v1/projects/${data.projectId}/audio`,
    }),
    // 아바타 Api
    getAvatarChooseList: builder.query<AvatarList, null>({
      query: () => '/api/v1/projects/avatar',
    }),
    getAvatarChooseListId: builder.query<AvatarListId, AvatarId>({
      query: (avatarId) => `/api/v1/projects/avatar/${avatarId}`,
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
      query: () => '/api/v1/projects/background',
    }),
    postBackgroundAvatarListChoose: builder.mutation<BackgroundChoose, BackgroundId>({
      query: ({ data, projectId, backgroundId }) => ({
        url: `/api/v1/projects/${projectId}/background/${backgroundId}`,
        method: 'POST',
        body: data,
      }),
    }),
    postUploadBackground: builder.mutation<BackgroundUpload, BackgroundImgUpload>({
      query: (data) => ({
        url: `/api/v1/projects/${data.projectId}/background/upload`,
        method: 'POST',
        body: data.formData,
      }),
    }),
    // 텍스트 수정
    postUpdataTts: builder.mutation<TextData, TextUpdata>({
      query: (data) => ({
        url: '/api/v1/projects/update-tts',
        method: 'POST',
        body: data,
      }),
    }),
    deleteAudio: builder.mutation<any, DeleteId>({
      query: ({ projectID, audioID }) => ({
        url: `/api/v1/projects/${projectID}/audio/${audioID}`,
        method: 'DELETE',
      }),
    }),
    videoSynthesis: builder.query<any, ActionVideoSynthesisType>({
      query: (data) => `/api/v1/projects/${data.projectId}/video`,
    }),
  }),
});

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
  useAllListenQuery,
  // AI 아바타
  useGetBackgroundAvatarListQuery,
  usePostBackgroundAvatarListChooseMutation,
  usePostUploadBackgroundMutation,
  usePostUpdataTtsMutation,
  useDeleteAudioMutation,
  useVideoSynthesisQuery,
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
  message: string;
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
interface ActionProjectDataType {
  count: number;
  projectId: string;
}
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
// AI 아바타
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
  data: {
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
  };
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
  message: string;
  data: {
    backgroundDefaults: [
      {
        bgId: number;
        bgName: string;
        bgUrl: string;
      },
    ];
    backgroundUploads: [
      {
        bgId: number;
        bgName: string;
        bgUrl: string;
      },
    ];
  };
}
interface BackgroundChoose {
  data: string;
  message: string;
}
interface BackgroundId {
  projectId: number;
  backgroundId: number;
  data: any;
}
interface BackgroundUpload {
  data: string;
  message: string;
}
interface BackgroundImgUpload {
  formData: FormData;
  projectId: number;
}
interface ReturnAllListenType {
  data: string;
}

// 텍스트 수정
interface TextData {
  message: string;
  data: {
    audioId: number;
    allText: string;
    audioFileUrl: string;
  };
}
interface TextUpdata {
  projectID: number;
  audioID: number;
  durationSilence: number;
  pitch: number;
  speed: number;
  volume: number;
  text: string;
}
interface DeleteId {
  projectID: number;
  audioID: number;
}
interface ActionVideoSynthesisType {
  count: number;
  projectId: number;
}
