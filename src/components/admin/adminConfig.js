import AdminAssortment from "./admin-assortment/AdminAssortment";
import AdminPartners from "./admin-partners/AdminPartners";

export const adminConfig = [
  {
    id: 1,
    title: "Գործընկերներ",
    component: <AdminPartners />,
  },
  {
    id: 2,
    title: "Տեսականի",
    component: <AdminAssortment />,
  },
];
