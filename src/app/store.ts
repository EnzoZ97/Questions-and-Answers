import { configureStore } from '@reduxjs/toolkit';
import { listSlice } from '../features/list/listSlice';
import { resultSlice } from '../features/result/resultSlice';

export const store = configureStore({
  reducer: {
    list: listSlice.reducer,
    result: resultSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
