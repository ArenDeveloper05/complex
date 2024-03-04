import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPartners } from "../../api/api";

const initialState = {
  partnersList: [],
  partnersListLoading: false,
  partnersListError: false,
};

export const getPartnersThunk = createAsyncThunk(
  "partners/getPartnersThunk",
  async () => {
    const response = await getPartners();
    return response.data.partners;
  }
);

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPartnersThunk.fulfilled, (state, { payload }) => {
        state.partnersList = payload;
        state.partnersListLoading = false;
        state.partnersListError = false;
      })
      .addCase(getPartnersThunk.pending, (state, action) => {
        state.partnersListLoading = true;
        state.partnersListError = false;
      })
      .addCase(getPartnersThunk.rejected, (state, action) => {
        state.partnersListLoading = false;
        state.partnersListError = true;
      });
  },
});

export const {} = partnersSlice.actions;
export default partnersSlice.reducer;
