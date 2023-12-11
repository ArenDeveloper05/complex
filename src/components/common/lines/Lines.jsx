import "./Lines.scss";

const Lines = ({ bcg }) => {
  const lineClassName =
    bcg && bcg.includes("green") ? "lines-green-line" : "lines-orange-line";

  return (
    <div className="lines">
      <div className={`lines-shortLine ${lineClassName}`}></div>

      <div className={`lines-longLine ${lineClassName}`}></div>

      <div className={`lines-shortLine ${lineClassName}`}></div>
    </div>
  );
};

export default Lines;
