import { useState, useEffect } from "react";
import Results from "./Results";

const Search = () => {
  const [searchInput, setSearch] = useState("");
  const [games, setGames] = useState([]);

  async function requestGameDeals() {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${searchInput}&limit=60&exact=0`
    );
    const json = await res.json();
    setGames(json);
    console.log(json);
  }

  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestGameDeals();
        }}
      >
        <input
          id="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      <Results games={games}/>
    </div>
  );
};

export default Search;
