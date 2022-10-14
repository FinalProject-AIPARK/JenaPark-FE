import { configureStore } from '@reduxjs/toolkit';
import { useApi } from '@/api/useApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { avatarReducer } from './avatar/avatarSlice';
import { voiceReducer } from './voice/voiceSlice';
import { textUpdataReducer } from './editText/EditTextSlice';
import { projectControlReducer } from './workingProject/projectControlSlice';

export const store = configureStore({
  reducer: {
    [useApi.reducerPath]: useApi.reducer,
    avatar: avatarReducer,
    voice: voiceReducer,
    projectControl: projectControlReducer,
    textUpdata: textUpdataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(useApi.middleware),
});

setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
