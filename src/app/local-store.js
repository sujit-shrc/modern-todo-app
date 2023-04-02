import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

const localStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});


export default localStore;
