import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partnersData: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    barev: (state, { payload }) => {
      return (state = {
        ...state,
        partnersData: payload.payload,
      });
    },
  },
});

export const { barev } = adminSlice.actions;
export default adminSlice.reducer;
