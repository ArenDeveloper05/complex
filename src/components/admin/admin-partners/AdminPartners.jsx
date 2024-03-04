import { createContext, useEffect } from "react";
import { getPartners } from "../../../api/api";

import { useDispatch, useSelector } from "react-redux";
import { changePartnersData } from "../../../redux/slices/adminSlice";
import { notifyError, notifySuccess } from "../../../utils/helpers/toast/toast";
import { ToastContainer } from "react-toastify";

import AdminPartnersForm from "./admin-partners-form/AdminPartnersForm";
import AdminPartnersList from "./admin-partners-list/AdminPartnersList";

export const AdminPartnersContext = createContext();

const AdminPartners = () => {
  const dispatch = useDispatch();

  const getPartnersData = async () => {
    try {
      const {
        data: { partners },
      } = await getPartners();
      dispatch(changePartnersData(partners));
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
      <AdminPartnersContext.Provider value={{ getPartnersData }}>
        <AdminPartnersForm getPartnersData={getPartnersData} />
        <AdminPartnersList />
      </AdminPartnersContext.Provider>
      <ToastContainer />
    </div>
  );
};

export default AdminPartners;
