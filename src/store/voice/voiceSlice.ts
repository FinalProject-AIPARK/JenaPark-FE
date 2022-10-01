import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elementData: {
    isVoiceModel: true,
    isVoiceOption: false,
  },
  selectedModel: {
    nameColor: '',
    name: '',
    audioUrl: '',
  },
  voiceData: {
    projectID: 23,
    avatarName: '',
    sex: 'female',
    lang: 'kor',
    durationSilence: 0,
    pitch: 0,
    speed: 0,
    text: '우영우김밥 맛있어. 강프로 코카인.',
  },
  voiceOption: {
    speed: 0,
    tone: 0,
    duration: 0.5,
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
      state.selectedModel.name = action.payload.name;
      state.voiceData.sex = action.payload.sex;
      state.voiceData.lang = action.payload.lang;
    },
    selectedModel: (state, action) => {
      // 컬러와 url
      state.selectedModel.nameColor = action.payload.color;
      state.selectedModel.audioUrl = action.payload.url;
    },
    voiceOptionAction: (state, action) => {
      switch (action.payload.id) {
        case '음성 속도':
          state.voiceOption.speed = action.payload.value;
          break;
        case '톤 조절':
          state.voiceOption.tone = action.payload.value;
          break;
        case '호흡 조절':
          state.voiceOption.duration = action.payload.value;
        default:
          return;
      }
    },
    collectOption: (state) => {
      state.voiceData.durationSilence = state.voiceOption.duration;
      state.voiceData.pitch = state.voiceOption.tone;
      state.voiceData.speed = state.voiceOption.speed;
    },
  },
});

export const {
  modelDataAction,
  voiceModelWorking,
  voiceOptionWorking,
  selectedModel,
  voiceOptionAction,
  collectOption,
} = voiceSlice.actions;

export const voiceReducer = voiceSlice.reducer;
