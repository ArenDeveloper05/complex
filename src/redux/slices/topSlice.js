import { createSlice } from "@reduxjs/toolkit";

import product1 from "../../assets/images/homeTopProduct1.png";
import product2 from "../../assets/images/homeTopProduct2.png";
import product4 from "../../assets/images/homeTopProduct4.png";

const initialState = {
  top: [
    {
      id: 1,
      img: product1,
      title: {
        am: "Կոնդենսացիոն գազի կաթսա Immergas VICTRIX TERA 24",
        en: "Condensing gas boiler Immergas VICTRIX TERA 24",
        ru: "Конденсационный газовый котел Immergas VICTRIX TERA 24",
      },
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi asperiores totam voluptates temporibus in veniam, facere dolorem obcaecati eos nisi aut, nihil illo maiores nostrum nemo perferendis officiis ipsum!",
    },
    {
      id: 2,
      img: product2,
      title: {
        am: "Էլ կոնվեկցիոն տաքացուցիչ Ballu Enzo BEC/EZMR-1500",
        en: "Convection heater Ballu Enzo BEC/EZMR-1500",
        ru: "Конвекционный обогреватель Ballu Enzo BEC/EZMR-1500",
      },
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi asperiores totam voluptates temporibus in veniam, facere dolorem obcaecati eos nisi aut, nihil illo maiores nostrum nemo perferendis officiis ipsum!",
    },
    {
      id: 3,
      img: product4,
      title: {
        am: "Գազի կաթսա Beretta CIAO S 24 CSI",
        en: "Gas boiler Beretta CIAO S 24 CSI",
        ru: "Газовый котел Beretta CIAO S 24 CSI",
      },
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi asperiores totam voluptates temporibus in veniam, facere dolorem obcaecati eos nisi aut, nihil illo maiores nostrum nemo perferendis officiis ipsum!",
    },
  ],
};

const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {},
});

export const {} = topSlice.actions;
export default topSlice.reducer;
