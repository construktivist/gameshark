import { useState } from "react";
import Accordion from "./Accordion";

//Mapped child component of Results.
//This component displays each game and the cheapest deal available.
//This component also displays a button that expands it's child component Accordion.
const ResultRow = ({ data }) => {
  //State
  const [plus, togglePlus] = useState("+");
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <div>{data.external}</div>
      <div>{data.cheapest}</div>
      <div>
        <button
          onClick={() => {
            togglePlus((plus) => (plus === "+" ? "-" : "+"));
            toggleShow((show) => (show = !show));
          }}
        >
          {plus}
        </button>
      </div>
      {show === true && <Accordion gameID={data.gameID} />}
    </div>
  );
};

export default ResultRow;
