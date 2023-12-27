import { createSlice } from "@reduxjs/toolkit";
import sliderBG2 from "../../assets/images/slider/slider2.jpg";
import homeSliderAirConditioner from "../../assets/images/homeSliderAirConditioner.png";
import homeSliderGasBoiler from "../../assets/images/homeSliderGasBoiler.png";
import homeSliderSolarConverter from "../../assets/images/homeSliderSolarConverter.png";

const initialState = {
  sliderData: [
    {
      id: 1,
      img: homeSliderAirConditioner,
      bgImg: sliderBG2,
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
      bgImg: sliderBG2,
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
        title: 2,
        info: 2,
        img: 2,
      },
      link: "",
    },
    {
      id: 3,
      img: homeSliderSolarConverter,
      bgImg: sliderBG2,
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
        title: 3,
        info: 3,
        img: 3,
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
