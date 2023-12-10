import { createSlice } from "@reduxjs/toolkit";

import immergas from "../../assets/images/partners/immergas.png";
import aluTech from "../../assets/images/partners/aluTech.png";
import ballu from "../../assets/images/partners/ballu.png";
import baretta from "../../assets/images/partners/baretta.png";
import best from "../../assets/images/partners/best.png";
import deluxe from "../../assets/images/partners/deluxe.jpg";
import duyar from "../../assets/images/partners/duyar.png";
import egger from "../../assets/images/partners/egger.png";
import ferroli from "../../assets/images/partners/ferroli.png";
import fico from "../../assets/images/partners/fico.png";
import firat from "../../assets/images/partners/firat.png";
import geberit from "../../assets/images/partners/geberit.jpg";
import grohe from "../../assets/images/partners/grohe.jpg";
import italo from "../../assets/images/partners/italo.png";
import platform from "../../assets/images/partners/platform.png";
import rainbird from "../../assets/images/partners/rainbird.png";
import reze from "../../assets/images/partners/reze.png";
import riello from "../../assets/images/partners/riello.png";
import senkron from "../../assets/images/partners/senkron.png";
import sira from "../../assets/images/partners/sira.png";
import solnce from "../../assets/images/partners/solnce.jpg";
import vorne from "../../assets/images/partners/vorne.png";
import warma from "../../assets/images/partners/warma.png";
import wilo from "../../assets/images/partners/wilo.png";
import winhouse from "../../assets/images/partners/winhouse.png";
import yilmaz from "../../assets/images/partners/yilmaz.png";

const initialState = {
  partnersList: [
    {
      id: 1,
      img: immergas,
    },
    {
      id: 2,
      img: aluTech,
    },
    {
      id: 3,
      img: ballu,
    },
    {
      id: 4,
      img: baretta,
    },
    {
      id: 5,
      img: best,
    },
    {
      id: 6,
      img: deluxe,
    },
    {
      id: 7,
      img: duyar,
    },
    {
      id: 8,
      img: egger,
    },
    {
      id: 9,
      img: ferroli,
    },
    {
      id: 10,
      img: fico,
    },
    {
      id: 11,
      img: firat,
    },
    {
      id: 12,
      img: geberit,
    },
    {
      id: 13,
      img: grohe,
    },
    {
      id: 14,
      img: italo,
    },
    {
      id: 15,
      img: platform,
    },
    {
      id: 16,
      img: rainbird,
    },
    {
      id: 17,
      img: reze,
    },
    {
      id: 18,
      img: riello,
    },
    {
      id: 19,
      img: senkron,
    },
    {
      id: 20,
      img: sira,
    },
    {
      id: 21,
      img: solnce,
    },
    {
      id: 22,
      img: vorne,
    },
    {
      id: 23,
      img: warma,
    },
    {
      id: 24,
      img: wilo,
    },
    {
      id: 25,
      img: winhouse,
    },
    {
      id: 26,
      img: yilmaz,
    },
  ],
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
});

export const {} = partnersSlice.actions;
export default partnersSlice.reducer;
