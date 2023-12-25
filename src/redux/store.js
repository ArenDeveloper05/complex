import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import partnersReducer from "./slices/partnersSlice";
import countReducer from "./slices/countSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    partners: partnersReducer,
    count: countReducer,
  },
});

export default store;
