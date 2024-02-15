import { useEffect } from "react";
import { getPartners } from "../../../api/api";

import { useDispatch } from "react-redux";
import { barev } from "../../../redux/slices/adminSlice";

import AdminPartnersForm from "./admin-partners-form/AdminPartnersForm";
import AdminPartnersList from "./admin-partners-list/AdminPartnersList";

const AdminPartners = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPartnersData();
  }, []);

  const getPartnersData = async () => {
    try {
      const {
        data: { partners },
      } = await getPartners();
      dispatch(
        barev({
          type: "changeState",
          payload: partners,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin-content-partners">
      <AdminPartnersForm getPartnersData={getPartnersData} />

      <AdminPartnersList getPartnersData={getPartnersData} />
    </div>
  );
};

export default AdminPartners;
