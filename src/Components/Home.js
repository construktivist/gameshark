import { useContext } from "react";
import StoreContext from "./StoreContext";
import StoreDeals from "./StoreDeals"

const Home = () => {

  const storeData = useContext(StoreContext);
  
  return (
    <div>
      <div className="row py-5">
        <h1>TOP DEALS BY STORE</h1>
      </div>
      <div className="row py-5">
        {storeData.length > 0 && storeData.map((store) => {
          return <StoreDeals key={store.storeID} store={store} />
        })}
      </div>
    </div>
  );
};

export default Home;
