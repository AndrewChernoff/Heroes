import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import heroes from "../reducers";
import filter from "../reducers/filterReducer";

const store = configureStore({
  reducer: { heroes: heroes, filter: filter },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

console.log(store.getState());

export default store;
