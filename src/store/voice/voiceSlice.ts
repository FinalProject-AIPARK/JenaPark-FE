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
    projectID: 0,
    avatarName: '',
    sex: 'female',
    lang: 'kor',
    durationSilence: 0,
    pitch: 0,
    speed: 0,
    text: '',
  },
  voiceOption: {
    speed: 0,
    tone: 0,
    duration: 0.5,
  },
  inputTextSynth: [
    {
      audioId: 0,
      lineNumber: 0,
      splitText: '',
      audioFileUrl: '',
      durationSilence: 0,
      pitch: 0,
      speed: 0,
      volume: 0,
    },
  ],
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
    getProjectId: (state, action) => {
      state.voiceData.projectID = action.payload;
    },
    modelDataAction: (state, action) => {
      state.voiceData.avatarName = action.payload.name;
      state.selectedModel.name = action.payload.name;
      state.voiceData.sex = action.payload.sex;
      state.voiceData.lang = action.payload.lang;
    },
    initVoiceModel: (state, action) => {
      state.voiceData.projectID = action.payload.projectId;
      state.voiceData.sex = action.payload.sex;
      state.voiceData.lang = action.payload.lang;
      state.voiceData.avatarName = action.payload.name;
      state.selectedModel.name = action.payload.name;
      state.selectedModel.audioUrl = action.payload.url;
    },
    initModelColor: (state, action) => {
      state.selectedModel.nameColor = action.payload;
    },
    selectedModel: (state, action) => {
      state.selectedModel.nameColor = action.payload.color;
      state.selectedModel.audioUrl = action.payload.url;
    },
    voiceOptionAction: (state, action) => {
      switch (action.payload.id) {
        case '?????? ??????':
          state.voiceOption.speed = action.payload.value;
          state.voiceData.speed = action.payload.value;
          break;
        case '??? ??????':
          state.voiceOption.tone = action.payload.value;
          state.voiceData.pitch = action.payload.value;
          break;
        case '?????? ??????':
          state.voiceOption.duration = action.payload.value;
          state.voiceData.durationSilence = action.payload.value;
        default:
          return;
      }
    },
    initVoiceOption: (state, action) => {
      state.voiceOption.speed = action.payload.speed;
      state.voiceOption.tone = action.payload.pitch;
      state.voiceOption.duration = action.payload.durationSilence;
    },
    collectOption: (state) => {
      state.voiceData.durationSilence = state.voiceOption.duration;
      state.voiceData.pitch = state.voiceOption.tone;
      state.voiceData.speed = state.voiceOption.speed;
    },
    inputText: (state, action) => {
      state.voiceData.text = action.payload;
    },
    inputSynthAction: (state, action) => {
      state.inputTextSynth = action.payload;
    },
    changeSplitText: (state, action) => {
      state.inputTextSynth[action.payload['index']].splitText = action.payload['event'];
    },
  },
});

export const {
  modelDataAction,
  voiceModelWorking,
  voiceOptionWorking,
  getProjectId,
  initVoiceModel,
  initModelColor,
  selectedModel,
  voiceOptionAction,
  initVoiceOption,
  collectOption,
  inputText,
  inputSynthAction,
  changeSplitText,
} = voiceSlice.actions;

export const voiceReducer = voiceSlice.reducer;
