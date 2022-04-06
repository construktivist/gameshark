import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);
