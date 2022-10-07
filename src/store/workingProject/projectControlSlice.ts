import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elementData: {
    isVoiceWoking: true,
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
  },
});

export const { workingComponent, moveToAvatar } = projectControlSlice.actions;

export const projectControlReducer = projectControlSlice.reducer;
