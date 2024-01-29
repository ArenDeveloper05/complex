import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapsData: [
    {
      id: 1,
      title: "Դավիթ Բեկի 99",
      zoom: 16,
      mapCode: [40.168096, 44.545591],
      phone: "33259559",
    },
    {
      id: 2,
      title: "Արշակունյաց 56/1",
      zoom: 16,
      mapCode: [40.145111, 44.496314],
      phone: "33 33 33 33",
    },
    {
      id: 3,
      title: "Առինջ Մոլ` 313 տաղավար",
      zoom: 16,
      mapCode: [40.245219, 44.585137],
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
