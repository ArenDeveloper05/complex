import { configureStore } from "@reduxjs/toolkit";
import topReducer from "./slices/topSlice";
import partnersReducer from "./slices/partnersSlice";
import countReducer from "./slices/countSlice";

const store = configureStore({
  reducer: {
    top: topReducer,
    partners: partnersReducer,
    count: countReducer,
  },
});

export default store;
