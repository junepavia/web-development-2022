import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import studentSlice from "../features/student/studentSlice";

export const store = configureStore({
  reducer: {
    student: studentSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
