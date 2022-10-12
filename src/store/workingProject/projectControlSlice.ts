import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elementData: {
    isVoiceWoking: true,
    callProjectData: 0,
  },
  projectData: {
    projectId: 0,
    title: '',
    text: '',
    sex: '',
    lang: '',
    audioModel: '',
    audioModelUrl: '',
    speed: 0,
    pitch: 0,
    volume: 0,
    durationSilence: 0,
    backgroundUrl: '',
    audioUpload: false,
    audioMerge: false,
    audioFileOriginName: '',
    audioFileUrl: '',
    downloadAudioUrl: '',
    avatarUrl: '',
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
    callProjectDataAction: (state) => {
      state.elementData.callProjectData = state.elementData.callProjectData + 1;
      console.log(state.elementData.callProjectData);
    },
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

export const { callProjectDataAction, workingComponent, moveToAvatar, getData } =
  projectControlSlice.actions;

export const projectControlReducer = projectControlSlice.reducer;
