import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countData: [
    {
      id: 1,
      title: "clients satisfaction",
      count: 1035,
      aos: "fade-right",
    },
    {
      id: 2,
      title: "great projects",
      count: 958,
      aos: "fade-up",
    },
    {
      id: 3,
      title: "awards won",
      count: 958,
      aos: "fade-up",
    },
    {
      id: 4,
      title: "spend time",
      count: 958,
      aos: "fade-left",
    },
  ],
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {},
});

export default countSlice.reducer;
export const {} = countSlice.actions;
