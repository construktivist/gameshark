import { FunctionComponent } from "react"
import Accordion from "./Accordion";
import { Game } from "../types/GameDealsByKeywordAPIResponseType"

interface IProps {
  id: string,
  data: Game,
  showAccordion: boolean,
  toggleAccordion: (id: string) => void
}

//Mapped child component of Results.
//This component displays each game and the cheapest deal available.
//This component also displays a button that expands it's child component Accordion.
const DealsByGame: FunctionComponent<IProps> = ({ id, data, showAccordion, toggleAccordion }) => {
  const { external, cheapest, gameID } = data;
  return (
    <div className="card col-sm-4 d-flex flex-row">
      <div className="card-body">
        <div className="card-title">{external}</div>
        <div className="card-text">({cheapest} and up)</div>
        <div>
          <button
            className="btn btn-dark"
            onClick={() => {
              toggleAccordion(id);
            }}
          >
            {showAccordion ? "-" : "+"}
          </button>
        </div>
        {showAccordion && <Accordion gameID={gameID} />}
      </div>
    </div>
  );
};

export default DealsByGame;
