import { configureStore } from "@reduxjs/toolkit";
import topReducer from "./slices/topSlice";
import partnersReducer from "./slices/partnersSlice";
import countReducer from "./slices/countSlice";
import sliderReducer from "./slices/sliderSlice";
import contactReducer from "./slices/contactSlice";
import adminReducer from "./slices/adminSlice";
import navigationReducer from "./slices/navigationSlice";

const store = configureStore({
  reducer: {
    top: topReducer,
    partners: partnersReducer,
    count: countReducer,
    slider: sliderReducer,
    contact: contactReducer,
    admin: adminReducer,
    navigation: navigationReducer,
  },
});

export default store;
