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
    <div className="card col-sm-4 d-flex flex-row">
      <div className="card-body">
        <div className="card-title">{data.external}</div>
        <div className="card-text">({data.cheapest} and up)</div>
        <div>
          <button
            className="btn btn-dark"
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
    </div>
  );
};

export default ResultRow;
