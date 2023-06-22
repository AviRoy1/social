import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useReducer";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});
