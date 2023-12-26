import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countData: [
    {
      id: 1,
      title: {
        am: "հաճախորդների գոհունակությունը",
        en: "clients satisfaction",
        ru: "удовлетворенность клиентов",
      },
      count: 1035,
      aos: "fade-right",
    },
    {
      id: 2,
      title: {
        am: "մեծ նախագծեր",
        en: "great projects",
        ru: "отличные проекты",
      },
      count: 958,
      aos: "fade-up",
    },
    {
      id: 3,
      title: {
        am: "շահած մրցանակներ",
        en: "awards won",
        ru: "выигранные награды",
      },
      count: 958,
      aos: "fade-up",
    },
    {
      id: 4,
      title: {
        am: "ժամանակ անցկացնել",
        en: "spend time",
        ru: "проводить время",
      },
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
