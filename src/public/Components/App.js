import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllStores from "./AllStores";
import Search from "./Search";

const App = () => {
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
