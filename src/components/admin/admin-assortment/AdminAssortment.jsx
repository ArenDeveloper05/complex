import { useSelector } from "react-redux";

import AssortmentTree from "./assortment-tree/AssortmentTree";
import FormikBtn from "../../common/formik-btn/FormikBtn";
import AddModal from "./add-modal/AddModal";
import BaseModal from "../../common/base-modal/BaseModal";

import "./AdminAssortment.scss";
import { useState } from "react";

const AdminAssortment = () => {
  const data = useSelector((state) => state.navigation.assortment);
  const [modalsOpen, setModalsOpen] = useState({
    add: false,
    delete: false,
    edit: {
      text: "",
      bool: false,
    },
  });

  return (
    <div className="assortment">
      <AssortmentTree data={data} />
      {modalsOpen.add && (
        <BaseModal
          onClick={() => {
            setModalsOpen((prev) => {
              return {
                ...prev,
                add: false,
              };
            });
          }}
        >
          <AddModal setModalsOpen={setModalsOpen} />
        </BaseModal>
      )}
      <div
        onClick={() => {
          setModalsOpen((prev) => {
            return {
              ...prev,
              add: true,
            };
          });
        }}
      >
        <FormikBtn txt={"Ավելացնել տեսականի"} />
      </div>
    </div>
  );
};

export default AdminAssortment;
