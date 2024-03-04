import "./SelectImage.scss";
import selectFileImage from "../../../assets/images/select-image.png";

const SelectImage = ({ children, text }) => {
  return (
    <label className="selectFile">
      <div className="selectFile-img">
        <img src={selectFileImage} alt="selectFileImg" />
      </div>
      <p>{text && text}</p>
      {children}
    </label>
  );
};

export default SelectImage;
