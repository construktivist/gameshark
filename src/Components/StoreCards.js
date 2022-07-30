import { useState, useEffect } from "react";
import TopStoreDeals from "./TopStoreDeals";

const StoreCards = ({ storeID, storeName }) => {
  const [deals, setDeals] = useState(null);

  useEffect(() => {
    requestGameDealsByStore();
  }, []);

  async function requestGameDealsByStore() {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageSize=${7}`
    );
    const json = await res.json();
    console.log(json);
    setDeals(json);
  }

  return (
    <div className="card">
      <h3>{storeName}</h3>
      <div>
        <table>
          <tbody>
            {/* {deals.map(game => {
              <TopStoreDeals game={game} />
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreCards;
