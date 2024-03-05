import { notifyError } from "../../../../utils/helpers/toast/toast";

import * as Yup from "yup";
import InputsFormik from "../../../common/inputs-formik/InputsFormik";

import "./AddModal.scss";

const addSchema = Yup.object().shape({
  name: Yup.string().required(),
});

const AddModal = ({ setModalsOpen }) => {
  const addAssortmentFunction = async (values) => {
    try {
      console.log(values, "adding assortment");
    } catch (error) {
      notifyError("Սխալ կատարվեց");
    } finally {
      setModalsOpen((prev) => {
        return {
          ...prev,
          add: false,
        };
      });
    }
  };

  return (
    <div
      className="addModal"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <InputsFormik
        initialValues={{ name: "" }}
        fieldsData={[{ id: 1, name: "name", label: "Անուն", type: "text" }]}
        btnProps={{ txt: "Ավելացնել", type: "submit" }}
        formikFunction={addAssortmentFunction}
        validationSchema={addSchema}
      />
    </div>
  );
};

export default AddModal;
