const BaseImage = ({ src }) => {
  console.log(`http://localhost:8000/storage/partners/${src}`);
  return (
    <img src={`http://localhost:8000/storage/partners/${src}`} alt="img" />
  );
};

export default BaseImage;
