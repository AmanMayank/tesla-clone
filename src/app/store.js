import { configureStore, createReducer } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
