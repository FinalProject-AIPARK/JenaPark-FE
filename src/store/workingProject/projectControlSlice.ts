import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elementData: {
    isVoiceWoking: true,
  },
  projectData: {
    checkText: false,
    checkAudio: false,
    checkAvatar: false,
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
