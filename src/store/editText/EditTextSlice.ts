import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  updataTts: {
    projectId: 0,
    audioId: 0,
    durationSilence: 0,
    pitch: 0,
    speen: 0,
    volume: 0,
    text: ''
  }
}


export const editTextUpdata = createSlice({
  name: 'textUpdata',
  initialState,
  reducers: {
    textDataUpload: (state : any, action) =>{
      state.updataTts[action.payload.updata] = action.payload
      console.log(action.payload)
    }
  }
})

export const {
  textDataUpload,
} = editTextUpdata.actions;


export const textUpdataReducer = editTextUpdata.reducer 