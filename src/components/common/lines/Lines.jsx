import "./Lines.scss";

const Lines = ({ bcg }) => {
  return (
    <div className="lines">
      <div className="lines-shortLine" style={{ backgroundColor: bcg }}></div>
      <div className="lines-longLine" style={{ backgroundColor: bcg }}></div>
      <div className="lines-shortLine" style={{ backgroundColor: bcg }}></div>
    </div>
  );
};

export default Lines;
