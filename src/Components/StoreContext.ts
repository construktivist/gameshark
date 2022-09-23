import { createContext } from "react";
import StoreAPIResponseType from "../types/StoreAPIResponseType";

const StoreContext = createContext<[StoreAPIResponseType["data"], (storeData: StoreAPIResponseType["data"]) => void]>(
    [[], () => {}]);

export default StoreContext;
