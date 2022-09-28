import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  elementData: {
    isVoiceModel: true,
    isVoiceOption: false,
  },
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
    voiceModelWorking: (state) => {
      state.elementData.isVoiceModel = true;
      state.elementData.isVoiceOption = false;
    },
    voiceOptionWorking: (state) => {
      state.elementData.isVoiceModel = false;
      state.elementData.isVoiceOption = true;
    },
    modelDataAction: (state, action) => {
      state.voiceData.avatarName = action.payload.name;
      state.voiceData.sex = action.payload.sex;
      state.voiceData.lang = action.payload.lang;
    },
  },
});

export const { modelDataAction, voiceModelWorking, voiceOptionWorking } = voiceSlice.actions;

export const voiceReducer = voiceSlice.reducer;
