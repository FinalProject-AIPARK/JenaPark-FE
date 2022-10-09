import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elementData: {
    isVoiceWoking: true,
  },
  projectData: {},
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
      console.log(state.projectData);
    },
  },
});

export const { workingComponent, moveToAvatar, getData } = projectControlSlice.actions;

export const projectControlReducer = projectControlSlice.reducer;
