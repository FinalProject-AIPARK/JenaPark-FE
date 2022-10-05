import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elementData: {
    isAvatarChoose: true,
    isAvatarOption: false,
  },
  avatarModel: {
    accessoryId: 0,
    avatarId: 0,
    clothesId: 0,
    hatId: 0,
    projectId: 2
  }
}

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    avatarChooseWorking: (state) => {
      state.elementData.isAvatarChoose = true
      state.elementData.isAvatarOption = false
    },
    avatarOptionWorking: (state) => {
      state.elementData.isAvatarChoose = false
      state.elementData.isAvatarOption = true
    },
    avatarModelKindSelect: (state, action) => {
      state.avatarModel[action.payload.kind] = action.payload.id;
    },
    avatarModelKindReset: (state, action) => {
      state.avatarModel.avatarId = action.payload;
      state.avatarModel.accessoryId = 0;
      state.avatarModel.clothesId = 0;
      state.avatarModel.hatId = 0;
      // state.avatarModel.projectId = 0;
    }
  }
})

export const {
  avatarChooseWorking,
  avatarOptionWorking,
  avatarModelKindSelect,
  avatarModelKindReset
} = avatarSlice.actions;

export const avatarReducer = avatarSlice.reducer;