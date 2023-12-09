import { createSlice } from "@reduxjs/toolkit";
import { CiBellOn, CiAlarmOn, CiShop } from "react-icons/ci";

const initialState = {
  services: [
    {
      id: 1,
      img: "https://landing.zytheme.com/magma/assets/images/services/1.png",
      icon: CiBellOn,
      title: "Search Engines",
      text: "This should be used to tell a story and let users know more about your service. How can you benefit them?",
    },
    {
      id: 2,
      img: "https://landing.zytheme.com/magma/assets/images/services/2.png",
      icon: CiAlarmOn,
      title: "Magic Touch",
      text: "This should be used to tell a story and let users know more about your service. How can you benefit them?",
    },
    {
      id: 3,
      img: "https://landing.zytheme.com/magma/assets/images/services/3.png",
      icon: CiShop,
      title: "Collect Ideas",
      text: "This should be used to tell a story and let users know more about your service. How can you benefit them?",
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
