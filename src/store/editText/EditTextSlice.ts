import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  updataTts: {
    projectID: 0,
    audioId: 0,
    durationSilence: 0,
    pitch: 0,
    speed: 0,
    volume: 0,
    text: ''
  }
}


export const editTextUpdata = createSlice({
  name: 'textUpdata',
  initialState,
  reducers: {
    textDataUpload: (state : any, action) =>{
      state.updataTts[action.payload.kind] = action.payload.id
      console.log(action.payload)
    }
  }
})

export const {
  textDataUpload,
} = editTextUpdata.actions;


export const textUpdataReducer = editTextUpdata.reducer 