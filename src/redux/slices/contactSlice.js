import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapsData: [
    {
      id: 1,
      title: "Address 1",
      zoom: 8,
      mapCode: [40.179826, 44.513358],
      phone: "33 33 33 33",
    },
    {
      id: 2,
      title: "Address 2",
      zoom: 8,
      mapCode: [55.730357, 37.619115],
      phone: "33 33 33 33",
    },
    {
      id: 3,
      title: "Address 3",
      zoom: 8,
      mapCode: [38.853314, -77.052702],
      phone: "33 33 33 33",
    },
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
export const {} = contactSlice.actions;
