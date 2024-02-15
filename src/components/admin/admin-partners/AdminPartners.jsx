import { useEffect } from "react";
import { getPartners } from "../../../api/api";

import { useDispatch } from "react-redux";
import { changePartnersData } from "../../../redux/slices/adminSlice";
import { notifyError, notifySuccess } from "../../../utils/helpers/toast/toast";
import { ToastContainer } from "react-toastify";

import AdminPartnersForm from "./admin-partners-form/AdminPartnersForm";
import AdminPartnersList from "./admin-partners-list/AdminPartnersList";

const AdminPartners = () => {
  const dispatch = useDispatch();

  const getPartnersData = async () => {
    try {
      const {
        data: { partners },
      } = await getPartners();
      dispatch(changePartnersData(partners));
      notifySuccess("Something went wrong");
    } catch (error) {
      console.log(error.message);
      notifyError("Something went wrong");
    }
  };

  useEffect(() => {
    getPartnersData();
  }, []);

  return (
    <div className="admin-content-partners">
      <AdminPartnersForm getPartnersData={getPartnersData} />

      <AdminPartnersList getPartnersData={getPartnersData} />
      <ToastContainer />
    </div>
  );
};

export default AdminPartners;
