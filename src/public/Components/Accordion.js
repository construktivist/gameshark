import { useState, useEffect, useContext } from "react";
import StoreContext from "./StoreContext";

const Accordion = ({ gameID }) => {
  const [deals, setDeals] = useState([]);
  const [...storeData] = useContext(StoreContext);

  useEffect(() => {
    getGameDealsByGameID(gameID);
  }, [gameID]);

  async function getGameDealsByGameID(gameID) {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
    );
    const json = await res.json();
    console.log(json);
    setDeals(json.deals);
  }

  return (
    <table>
      <tbody>
        {deals.map((deal) => {
          const index = deal.storeID - 1;
          return (
            <tr key={deal.storeID}>
              <td>{storeData[index].storeName}</td>
              <td>{deal.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Accordion;
