import { useContext } from "react";
import StoreContext from "./StoreContext";
import StoreCards from "./StoreCards";

//Child of App.
//Displays each deals for each Store.
const Home = () => {

  const storeData = useContext(StoreContext);

  return (
    <div>
      <div className="row py-5">
        <h1>TOP DEALS BY STORE</h1>
      </div>
      <div className="row py-5">
        {storeData.length > 0 &&
          storeData.map((store) => {
            return (
              <StoreCards
                key={store.storeID}
                storeID={store.storeID}
                storeName={store.storeName}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
