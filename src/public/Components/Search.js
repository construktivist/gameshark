import { useState } from "react";
import Results from "./Results";

//Child component of App.
//Displays a form so users can search for deals by game title.
const Search = () => {

  //State
  const [searchInput, setSearch] = useState("");
  const [games, setGames] = useState(null);

  //Fetches game deals based on search keyword.
  //This is called on form submit.
  async function requestGameDealsByKeyword() {
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
          requestGameDealsByKeyword();
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
      <Results games={games} />
    </div>
  );
};

export default Search;
