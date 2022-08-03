import { useContext } from "react";
import StoreContext from "./StoreContext";
import StoreCards from "./StoreCards";

//Child of App.
//Displays each deals for each Store.
const DealsByStore = () => {
  const storeData = useContext(StoreContext);

  function setFeaturedStores() {
    const featuredStoresArr = [
      "Steam",
      "Humble Store",
      "GreenManGaming",
      "GameBillet",
      "Fanatical",
      "Gamesplanet",
      "GOG",
      "WinGamesStore",
      "GamersGate",
    ];
    const featuredStoreHash = {};
    featuredStoresArr.forEach((store) => {
      featuredStoreHash[store] = true;
    });
    return featuredStoreHash;
  }

  const featuredStores = setFeaturedStores();

  return (
    <div>
      <div className="row py-5">
        <h1>TOP DEALS BY STORE</h1>
      </div>
      <div className="row py-5">
        {storeData.length > 0 &&
          storeData.map((store) => {
            if (featuredStores[store.storeName]) {
              return (
                <StoreCards
                  key={store.storeID}
                  storeID={store.storeID}
                  storeName={store.storeName}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default DealsByStore;
