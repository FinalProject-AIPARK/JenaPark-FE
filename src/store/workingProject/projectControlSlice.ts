import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elementData: {
    isVoiceWoking: true,
  },
  projectData: {
    projectId: 0,
    title: '',
    sex: '',
    lang: '',
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
  },
});

export const { workingComponent, moveToAvatar, getData } = projectControlSlice.actions;

export const projectControlReducer = projectControlSlice.reducer;