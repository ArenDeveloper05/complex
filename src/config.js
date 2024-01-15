// footer icons
import {
  FaSquareFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa6";
import { PiTelegramLogoDuotone } from "react-icons/pi";

import { ROUTER } from "./router/router";

export const navConfig = [
  {
    id: 1,
    title: {
      am: "Մեր մասին",
      ru: "О нас",
      en: "About us",
    },
    link: "/",
  },
  {
    id: 2,
    title: {
      am: "Տեսականի ",
      ru: "Продукция",
      en: "Products",
    },
    link: "/",
  },
  {
    id: 3,
    title: {
      am: "Ծառայություններ",
      ru: "Услуги",
      en: "Services",
    },
    link: "/",
  },

  {
    id: 6,
    title: {
      am: "Նորություններ",
      ru: "Новости",
      en: "News",
    },
    link: "/",
  },
  {
    id: 7,
    title: {
      am: "Կապ",
      ru: "Связь",
      en: "Contact",
    },
    link: ROUTER.CONTACT_PAGE_ROUTE,
  },
];

export const langsConfig = [
  {
    id: 1,
    title: "Eng",
    type: "en",
    icon: "https://cdn-icons-png.flaticon.com/512/9906/9906534.png",
  },
  {
    id: 2,
    title: "Рус",
    type: "ru",
    icon: "https://cdn-icons-png.flaticon.com/512/5315/5315463.png",
  },
  {
    id: 3,
    title: "Հայ",
    type: "am",
    icon: "https://cdn.countryflags.com/thumbs/armenia/flag-round-250.png",
  },
];

export const footerNetworksConfig = [
  {
    id: 1,
    icon: FaSquareFacebook,
    link: "/",
  },
  {
    id: 2,
    icon: FaTwitter,
    link: "/",
  },
  {
    id: 3,
    icon: FaInstagram,
    link: "/",
  },
  {
    id: 4,
    icon: FaPinterestP,
    link: "/",
  },
  {
    id: 5,
    icon: PiTelegramLogoDuotone,
    link: "/",
  },
];

export const footerExploreConfig = [
  {
    id: 1,
    title: {
      am: "Մեր մասին",
      ru: "О нас",
      en: "About Us",
    },
    link: "/",
  },
  {
    id: 2,
    title: {
      am: "Ծանոթացեք մեր թիմին",
      ru: "Познакомьтесь с нашей командой",
      en: "Meet Our Team",
    },
    link: "/",
  },
  {
    id: 3,
    title: {
      am: "Մեր պորտֆոլիոն",
      ru: "Наше портфолио",
      en: "Our Portfolio",
    },
    link: "/",
  },
  {
    id: 4,
    title: {
      am: "Վերջին նորություններ",
      ru: "Последние новости",
      en: "Latest News",
    },
    link: "/",
  },
  {
    id: 5,
    title: {
      am: "Կապ մեզ հետ",
      ru: "Связаться с нами",
      en: "Contact Us",
    },
    link: "/",
  },
  {
    id: 6,
    title: {
      am: "Աջակցություն",
      ru: "Поддерживать",
      en: "Support",
    },
    link: "/",
  },
  {
    id: 7,
    title: {
      am: "Գաղտնիության քաղաքականություն",
      ru: "Политика Конфиденциальности",
      en: "Privacy Policy",
    },
    link: "/",
  },
  {
    id: 8,
    title: {
      am: "Օգտվելու կանոններ",
      ru: "Правила использования",
      en: "Terms Of Use",
    },
    link: "/",
  },
  {
    id: 9,
    title: {
      am: "Օգնություն",
      ru: "Помощь",
      en: "Help",
    },
    link: "/",
  },
];

export const animationModesConfig = {
  title: {
    1: "title-animated-1",
    2: "title-animated-2",
    3: "title-animated-3",
  },
  info: {
    1: "info-animated-1",
    2: "info-animated-2",
    3: "info-animated-3",
  },
  img: {
    1: "img-animated-1",
    2: "img-animated-2",
    3: "img-animated-3",
  },
};
