import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partnersData: [{ id: 1, name: "barev", icon: "", website_url: "asd" }],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    changePartnersData: (state, { payload }) => {
      state = {
        ...state,
        partnersData: payload,
      };
    },
  },
});

export const { changePartnersData } = adminSlice.actions;
export default adminSlice.reducer;
