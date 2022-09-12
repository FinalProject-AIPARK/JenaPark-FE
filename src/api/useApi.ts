import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ReturnSignupType {}

interface ActionSignupType {
  name: string;
}

export const useApi = createApi({
  reducerPath: 'useApi',
  baseQuery: fetchBaseQuery({}),
  endpoints: builder => ({}),
});
