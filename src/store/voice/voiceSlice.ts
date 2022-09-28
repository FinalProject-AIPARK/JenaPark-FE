import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  voiceData: {
    projectID: 0,
    avatarName: '',
    sex: 'female',
    lang: 'kor',
    durationSilence: 0,
    pitch: 0,
    speed: 0,
    volume: 0,
    text: '',
  },
};

export const voiceSlice = createSlice({
  name: 'voice',
  initialState,
  reducers: {
    modelDataAction: (state, action) => {
      state.voiceData.avatarName = action.payload.name;
      state.voiceData.sex = action.payload.sex;
      state.voiceData.lang = action.payload.lang;
    },
  },
});

export const { modelDataAction } = voiceSlice.actions;

export const voiceReducer = voiceSlice.reducer;
