import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, useAppSelector } from '../store';

export interface User {
  email: string;
  password: string;
}

const initialState: User = {
  email: '',
  password: '',
};

// 회원가입
export const addUserAsync = createAsyncThunk('ADD_USER', async (user: User) => {
  const response = await axios.post(
    `${process.env.JENNAPARK_SERVER_URL}/api/v1/members/signup`,
    user,
  );
  return response.data;
});

// 로그인
export const setUserAsync = createAsyncThunk(
  'SET_USER',
  async (user: User): Promise<User> => {
    const response = await axios.get(
      `${process.env.JENNAPARK_SERVER_URL}/api/v1/members/login`,
    );
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});
export const getUserInfo = (state: RootState) => state.user;

export default userSlice.reducer;
