import { createSlice } from "@reduxjs/toolkit";
import sliderBG from "../../assets/images/slider/design.png";
import homeSliderAirConditioner from "../../assets/images/homeSliderAirConditioner.png";
import homeSliderGasBoiler from "../../assets/images/homeSliderGasBoiler.png";
import homeSliderSolarConverter from "../../assets/images/homeSliderSolarConverter.png";

const initialState = {
  sliderData: [
    {
      id: 1,
      img: homeSliderAirConditioner,
      bgImg: sliderBG,
      title: {
        am: "SMART WIFI DRY+",
        ru: "",
        en: "",
      },
      info: {
        am: "WI-FI Управление климатом\n из любой точки мира",
        ru: "",
        en: "",
      },
      animation_mode: {
        title: 1,
        info: 1,
        img: 1,
      },
      link: "",
    },
    {
      id: 2,
      img: homeSliderGasBoiler,
      bgImg: sliderBG,
      title: {
        am: "SMART WIFI DRY+",
        ru: "",
        en: "",
      },
      info: {
        am: "WI-FI Управление климатом\n из любой точки мира",
        ru: "",
        en: "",
      },
      animation_mode: {
        title: 1,
        info: 1,
        img: 1,
      },
      link: "",
    },
    {
      id: 3,
      img: homeSliderSolarConverter,
      bgImg: sliderBG,
      title: {
        am: "SMART WIFI DRY+",
        ru: "",
        en: "",
      },
      info: {
        am: "WI-FI Управление климатом\n из любой точки мира",
        ru: "",
        en: "",
      },
      animation_mode: {
        title: 1,
        info: 1,
        img: 1,
      },
      link: "",
    },
  ],
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
});

export default sliderSlice.reducer;
export const {} = sliderSlice.actions;
