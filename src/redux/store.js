import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import partnersReducer from "./slices/partnersSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    partners: partnersReducer,
  },
});

export default store;
