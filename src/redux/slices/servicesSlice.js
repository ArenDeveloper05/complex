import { createSlice } from "@reduxjs/toolkit";
import { CiBellOn, CiAlarmOn, CiShop } from "react-icons/ci";

const initialState = {
  services: [
    {
      id: 1,
      img: "https://landing.zytheme.com/magma/assets/images/services/1.png",
      icon: CiBellOn,
      title: {
        am: "Որոնման համակարգեր",
        ru: "Поисковые системы",
        en: "Search Engines",
      },
      text: {
        am: "Սա պետք է օգտագործվի պատմություն պատմելու և օգտատերերին ձեր ծառայության մասին ավելին իմանալու համար: Ինչպե՞ս կարող ես նրանց օգուտ քաղել։",
        ru: "Это следует использовать, чтобы рассказать историю и позволить пользователям узнать больше о вашем сервисе. Какую пользу вы можете им принести?",
        en: "This should be used to tell a story and let users know more about your service. How can you benefit them?",
      },
    },
    {
      id: 2,
      img: "https://landing.zytheme.com/magma/assets/images/services/2.png",
      icon: CiAlarmOn,
      title: {
        am: "Կախարդական հպում",
        ru: "Волшебное прикосновение",
        en: "Magic Touch",
      },
      text: {
        am: "Սա պետք է օգտագործվի պատմություն պատմելու և օգտատերերին ձեր ծառայության մասին ավելին իմանալու համար: Ինչպե՞ս կարող ես նրանց օգուտ քաղել։",
        ru: "Это следует использовать, чтобы рассказать историю и позволить пользователям узнать больше о вашем сервисе. Какую пользу вы можете им принести?",
        en: "This should be used to tell a story and let users know more about your service. How can you benefit them?",
      },
    },
    {
      id: 3,
      img: "https://landing.zytheme.com/magma/assets/images/services/3.png",
      icon: CiShop,
      title: {
        am: "Հավաքեք գաղափարներ",
        ru: "Собирайте идеи",
        en: "Collect Ideas",
      },
      text: {
        am: "Սա պետք է օգտագործվի պատմություն պատմելու և օգտատերերին ձեր ծառայության մասին ավելին իմանալու համար: Ինչպե՞ս կարող ես նրանց օգուտ քաղել։",
        ru: "Это следует использовать, чтобы рассказать историю и позволить пользователям узнать больше о вашем сервисе. Какую пользу вы можете им принести?",
        en: "This should be used to tell a story and let users know more about your service. How can you benefit them?",
      },
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export const {} = servicesSlice.actions;
export default servicesSlice.reducer;
