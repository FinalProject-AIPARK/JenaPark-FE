import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elementData: {
    isVoiceWoking: true,
    isInputTextSynthLoading: false,
  },
  projectData: {
    projectId: 0,
    title: '',
    text: '',
    sex: '',
    lang: '',
    audioModel: null,
    audioModelUrl: null,
    speed: 0,
    pitch: 0,
    volume: 0,
    durationSilence: 0,
    backgroundUrl: '',
    audioUpload: false,
    audioMerge: false,
    audioFileOriginName: null,
    audioFileUrl: null,
    downloadAudioUrl: null,
    avatarUrl: null,
    checkText: false,
    checkAudio: false,
    checkAvatar: false,
    audioInfos: [],
  },
};

export const projectControlSlice = createSlice({
  name: 'projectControl',
  initialState,
  reducers: {
    workingComponent: (state) => {
      state.elementData.isVoiceWoking = !state.elementData.isVoiceWoking;
    },
    moveToAvatar: (state) => {
      state.elementData.isVoiceWoking = false;
    },
    getData: (state, action) => {
      state.projectData = action.payload;
    },
    InputTextSynthLoadingAction: (state, action) => {
      state.elementData.isInputTextSynthLoading = action.payload;
    },
  },
});

export const { workingComponent, moveToAvatar, getData, InputTextSynthLoadingAction } =
  projectControlSlice.actions;

export const projectControlReducer = projectControlSlice.reducer;
