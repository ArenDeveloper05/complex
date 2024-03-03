import { Button } from "@mui/material";
import "./FormikBtn.scss";
import { AiOutlinePlus } from "react-icons/ai";

const FormikBtn = ({ txt, type }) => {
  return (
    <Button className="formik-btn" type={type}>
      <p className="formik-btn-text">{txt}</p>
      <span className="formik-btn-icon">
        <AiOutlinePlus className="svg" />
      </span>
    </Button>
  );
};

export default FormikBtn;
