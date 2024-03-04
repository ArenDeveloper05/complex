import noImage from "../../../assets/images/no-image.jpg";

import "./BaseImage.scss";

const BaseImage = ({ src, normal }) => {
  return (
    <div className="base-img">
      {src ? (
        <img
          src={normal ? src : `http://localhost:8000/storage/partners/${src}`}
          alt="img"
        />
      ) : (
        <img src={noImage} alt="no-img" />
      )}
    </div>
  );
};

export default BaseImage;
