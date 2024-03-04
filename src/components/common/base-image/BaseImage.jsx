import "./BaseImage.scss";

const BaseImage = ({ src }) => {
  console.log(`http://localhost:8000/storage/partners/${src}`);
  return (
    <div className="base-img">
      <img src={`http://localhost:8000/storage/partners/${src}`} alt="img" />
    </div>
  );
};

export default BaseImage;
