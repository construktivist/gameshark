import { useState, useEffect, useContext, FunctionComponent } from "react";
import StoreContext from "./StoreContext";

//Child component of ResultRow.
//This component expands to show all available deals by store.
const Accordion: FunctionComponent<{gameID: string}> = ({ gameID }) => {
  //State
  const [deals, setDeals] = useState([]);
  const [...storeData] = useContext(StoreContext);

  //Effect to fetch game deal data
  useEffect(() => {
    getGameDealsByGameID(gameID);
  }, [gameID]);

  //Fetches game deals by the game ID.
  async function getGameDealsByGameID(gameID) {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
    );
    const json = (await res.json()) as GameDealsByGameIDAPIResponseType;
    console.log(json);
    setDeals(json.deals);
  }

  return (
    <table className="table table-dark w-50">
      <tbody>
        {deals.map((deal) => {
          const dealStoreID = deal.storeID;
          const indexedStoreID = storeData[dealStoreID - 1].storeID;
          //Conditional to check if storeIDs from Deal data and Store data matches.
          //If StoreIDs match then array access is used to get the store name.
          if (dealStoreID === indexedStoreID) {
            const storeName = storeData[dealStoreID - 1].storeName;
            return (
              <tr key={deal.storeID}>
                <td>
                  <a
                    href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {storeName}
                  </a>
                </td>
                <td className="text-right">{deal.price}</td>
              </tr>
            );
            //If StoreIDs do not match then array search is used to get store name.
          } else {
            const store = storeData.find(
              (store) => store.storeID === dealStoreID
            );
            const storeName = store.storeName;
            return (
              <tr key={deal.storeID}>
                <td>{storeName}</td>
                <td className="text-right">{deal.price}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default Accordion;
