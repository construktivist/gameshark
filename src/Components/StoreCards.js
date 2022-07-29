import { useState, useEffect } from "react";

const StoreDeals = ({ storeID, storeName }) => {
  const [storeDeals, setStoreDeals] = useState(null);

  useEffect(() => {
    requestGameDealsByStore();
  }, []);

  async function requestGameDealsByStore() {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageSize=${7}`
    );
    const json = await res.json();
    console.log(json);
    setStoreDeals(json);
  }

  return (
    <div className="card">
      <h3>{storeName}</h3>
      <div>
        {/* {storeDeals.map(deal => {

                })} */}
      </div>
    </div>
  );
};

export default StoreDeals;
