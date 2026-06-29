import { configureStore } from "@reduxjs/toolkit";
import touristReducer from "./slices/touristSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      tourist: touristReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
