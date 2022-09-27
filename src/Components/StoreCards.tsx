import { useState, useEffect, FunctionComponent } from "react";
import { GameDealsByStoreAPIResponse, GameDeal } from "../types/GameDealsByStoreAPIResponse";
import TopStoreDeals from "./TopStoreDeals";

const StoreCards: FunctionComponent<{storeID: string, storeName: string}> = ({ storeID, storeName }) => {
  const [deals, setDeals] = useState([] as GameDeal[]);

  useEffect(() => {
    void requestGameDealsByStore(storeID);
  }, [storeID]);

  async function requestGameDealsByStore(storeID: string): Promise<void> {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageSize=${7}`
    );
    const json = (await res.json()) as GameDealsByStoreAPIResponse["data"];
    console.log(json);
    setDeals(json);
  }

  return (
    <div className="card">
      <h3>{storeName}</h3>
      <div>
        <table>
          <tbody>
            {deals.map((game) => {
              return <TopStoreDeals 
                key={game.gameID} 
                title={game.title}
                normalPrice={game.normalPrice}
                dealID={game.dealID}
                salePrice={game.salePrice}
                />;
            })}
          </tbody>
        </table>
      </div>
      <a href={`/browse?storeID=${storeID}`}>View All {storeName} Deals</a>
    </div>
  );
};

export default StoreCards;
