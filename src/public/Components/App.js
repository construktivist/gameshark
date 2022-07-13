import * as ReactDOMClient from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllStores from "./AllStores";
import Search from "./Search";

const App = () => {
  const [storeData, setStoreData] = useState();

  useEffect(() => {
    requestStoreData();
  }, []);

  async function requestStoreData() {
    const res = await fetch(`https://www.cheapshark.com/api/1.0/stores`);
    const json = await res.json();
    console.log(json);
    setStoreData(json);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<AllStores />} />
        </Routes>
      </Router>
    </div>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);
