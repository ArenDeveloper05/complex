import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partnersData: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    changePartnersData: (state, { payload }) => {
      return (state = {
        ...state,
        partnersData: payload,
      });
    },
  },
});

export const { changePartnersData } = adminSlice.actions;
export default adminSlice.reducer;
