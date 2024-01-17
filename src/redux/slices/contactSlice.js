import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapsData: [
    {
      id: 1,
      title: "Address 1",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1149.0428190369068!2d44.567120000424936!3d40.18195873732741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcae005e23b3%3A0x2d57c7e8a020e1ec!2zNTAgR2Fsc2hveWFuIFN0LCDUtdaA1ofVodW2IDAwNzk!5e0!3m2!1shy!2sam!4v1705407984403!5m2!1shy!2sam",
    },
    {
      id: 2,
      title: "Address 2",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8496117746936!2d44.54348797654462!3d40.16790197074532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc9b1545f85d%3A0x4613b3bd8f45d778!2sToon%20Complex!5e0!3m2!1sru!2sam!4v1702719467255!5m2!1sru!2sam",
    },
    {
      id: 3,
      title: "Address 3",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2761.6259572912663!2d44.5642046956986!3d40.19900674909549!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2sam!4v1705408255911!5m2!1shy!2sam",
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
