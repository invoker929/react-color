const Square = ({ color, hex, isDarkText }) => {
  return (
    <div
      className="square"
      style={{
        backgroundColor: color,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      {color || "Empty Value"} <br />
      {hex || null}
    </div>
  );
};

export default Square;
