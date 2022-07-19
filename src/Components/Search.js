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
    console.log(json);
    setGames(json);
  }

  return (
    <div className="row py-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestGameDealsByKeyword();
        }}
      >
        <div className="col-sm-10 d-inline-block">
          <label htmlFor="searchInput" className="visually-hidden">Search field</label>
          <input
            className="form-control"
            id="searchInput"
            title="Search field"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div className="col-sm-2 d-inline-block">
          <button type="button" className="w-100 btn btn-dark">Submit</button>
        </div>
      </form>
      <Results games={games} />
    </div>
  );
};

export default Search;
