import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../states/SidebarSlice";
import { apiSlice } from "../states/api/apiSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
