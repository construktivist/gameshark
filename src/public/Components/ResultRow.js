import { useState } from "react";

const ResultRow = ({ data }) => {
  const [plus, togglePlus] = useState("+");
  const [show, toggleShow] = useState(false);
  
  return (
    <div>
      <div>
        {data.external}
      </div>
      <div>
        {data.cheapest}
      </div>
      <div>
        <button onClick={() => {
          togglePlus((plus) => (plus === "+" ? "-" : "+"));
          toggleShow((show) => show = !show)
        }}>
          {plus}
        </button>
      </div>
      {show === true &&
        <div>More deals</div>
      }
    </div>



  );
};

export default ResultRow;
