import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setToken: (state, userToken) => {
      state.user = userToken.payload.user;
      state.token = userToken.payload.token;
    },
  },
});
