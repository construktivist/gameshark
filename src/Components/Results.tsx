import { useState, FunctionComponent } from "react";
import DealsByGame from "./DealsByGame";
import { Game } from "../types/GameDealsByKeywordAPIResponseType"

//Child component of Search.
//This component onditionally renders the results based on the props.
const Results: FunctionComponent<{games: Game[]}> = ({ games }) => {
  //State
  const [accordion, setAccordion] = useState(null as null | string);

  //Accordion handler
  function toggleAccordion(id: string) {
    if (accordion === id) {
      setAccordion(null);
    } else {
      setAccordion(id);
    }
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
          return (
            <DealsByGame
              key={game.gameID}
              id={game.gameID}
              data={game}
              showAccordion={accordion === game.gameID}
              toggleAccordion={toggleAccordion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;
