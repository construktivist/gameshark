import { useState, useEffect } from "react";

const Accordion = ({ gameID }) => {
  const [deals, setDeals] = useState([]);

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
          return (
            <tr key={deal.storeID}>
              <td>{deal.storeID}</td>
              <td>{deal.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Accordion;
