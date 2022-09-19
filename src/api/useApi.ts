import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    uploadVoice: builder.mutation<any, any>({
      query: (data) => ({
        url: '/api/v1/projects/audio/upload',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useUploadVoiceMutation } = useApi;

interface ReturnSignupType {}

interface ActionSignupType {
  name: string;
}
