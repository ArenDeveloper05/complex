import { notifyError } from "../../../../utils/helpers/toast/toast";

import * as Yup from "yup";
import InputsFormik from "../../../common/inputs-formik/InputsFormik";

import "./AddModal.scss";
import { addAssortment } from "../../../../api/api";

const addSchema = Yup.object().shape({
  name: Yup.string().required(),
});

const AddModal = ({ setModalsOpen, stateKey, text, id }) => {
  const addAssortmentFunction = async (values) => {
    console.log(id);
    console.log(text);

    try {
      console.log(values, "adding assortment");
      await addAssortment({
        parent_id: 0,
        title: values.name,
        clickable: false,
      });
    } catch (error) {
      notifyError("Սխալ կատարվեց");
    } finally {
      setModalsOpen((prev) => {
        return {
          ...prev,
          [stateKey]: false,
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
        initialValues={{ name: stateKey === "edit" ? text : "" }}
        fieldsData={[{ id: 1, name: "name", label: "Անուն", type: "text" }]}
        btnProps={{ txt: "Ավելացնել", type: "submit" }}
        formikFunction={addAssortmentFunction}
        validationSchema={addSchema}
      />
    </div>
  );
};

export default AddModal;
