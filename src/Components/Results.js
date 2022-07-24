import {useState} from "react"
import ResultRow from "./ResultRow";

//Child component of Search.
//This component onditionally renders the results based on the props.
const Results = ({ games }) => {

  //State
  const [showAccordion, setShowAccordion] = useState('false');

  //Accordion handler
  function toggleAccordion() {
  }

  if (games === null) {
    return null;
  } else if (games.length === 0) {
    return <h3 className="py-2">Sorry! No results found.</h3>;
  }
  return (
    <div className="row py-5">
      <div className="row">
        {games.map((game) => {
          return <ResultRow 
            key={game.gameID} 
            data={game} 
            showAccordion={showAccordion} 
            toggleAccordion={toggleAccordion} 
          />;
        })}
      </div>
    </div>
  );
};

export default Results;
