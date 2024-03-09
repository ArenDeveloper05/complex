import { useSelector } from "react-redux";
import { useState } from "react";

import AssortmentTree from "./assortment-tree/AssortmentTree";
import FormikBtn from "../../common/formik-btn/FormikBtn";
import AddModal from "./add-modal/AddModal";
import BaseModal from "../../common/base-modal/BaseModal";

import "./AdminAssortment.scss";

const AdminAssortment = () => {
  const data = useSelector((state) => state.navigation.assortment);
  const [modalsOpen, setModalsOpen] = useState({
    add: {
      text: "",
      bool: false,
      id: null,
    },
    delete: {
      text: "",
      bool: false,
      id: null,
    },
    edit: {
      text: "",
      bool: false,
      id: null,
    },
  });

  return (
    <div className="assortment">
      <AssortmentTree data={data} setModalsOpen={setModalsOpen} />
      {modalsOpen.add.bool && (
        <BaseModal
          onClick={() => {
            setModalsOpen((prev) => {
              return {
                ...prev,
                add: {
                  ...prev.add,
                  bool: false,
                },
              };
            });
          }}
        >
          <AddModal
            setModalsOpen={setModalsOpen}
            stateKey={"add"}
            text={modalsOpen.add.text}
            id={modalsOpen.add.id}
          />
        </BaseModal>
      )}
      {modalsOpen.edit.bool && (
        <BaseModal
          onClick={() => {
            setModalsOpen((prev) => {
              return {
                ...prev,
                edit: {
                  ...prev.edit,
                  bool: false,
                },
              };
            });
          }}
        >
          <AddModal
            setModalsOpen={setModalsOpen}
            stateKey={"edit"}
            text={modalsOpen.edit.text}
            id={modalsOpen.edit.id}
          />
        </BaseModal>
      )}
      <div
        onClick={() => {
          setModalsOpen((prev) => {
            return {
              ...prev,
              add: {
                ...prev.add,
                bool: true,
              },
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
