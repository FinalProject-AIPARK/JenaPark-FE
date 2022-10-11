import { createSlice } from '@reduxjs/toolkit';

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
    projectId: 21,
  },
  avatarDataUrl: {
    backgroundUrl: '',
    avatarUrl: '',
  },
};

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    avatarChooseWorking: (state) => {
      state.elementData.isAvatarChoose = true;
      state.elementData.isAvatarOption = false;
    },
    avatarOptionWorking: (state) => {
      state.elementData.isAvatarChoose = false;
      state.elementData.isAvatarOption = true;
    },
    avatarModelKindSelect: (state: any, action) => {
      state.avatarModel[action.payload.kind] = action.payload.id;
    },
    avatarModelKindReset: (state, action) => {
      state.avatarModel.avatarId = action.payload;
      state.avatarModel.accessoryId = 0;
      state.avatarModel.clothesId = 0;
      state.avatarModel.hatId = 0;
    },
    avatarChooseDataUrl: (state, action) => {
      state.avatarDataUrl.avatarUrl = action.payload
    },
    avatarOptionDataUrl: (state, action) => {
      state.avatarDataUrl.backgroundUrl = action.payload
    }
  }
})

export const {
  avatarChooseWorking,
  avatarOptionWorking,
  avatarModelKindSelect,
  avatarModelKindReset,
  avatarChooseDataUrl,
  avatarOptionDataUrl,
} = avatarSlice.actions;

export const avatarReducer = avatarSlice.reducer;
