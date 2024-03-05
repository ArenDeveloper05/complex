import { useSelector } from "react-redux";

import "./AdminAssortment.scss";
import AssortmentTree from "./assortment-tree/AssortmentTree";

const AdminAssortment = () => {
  const data = useSelector((state) => state.navigation.assortment);

  return <div className="assortment">{<AssortmentTree data={data} />}</div>;
};

export default AdminAssortment;
