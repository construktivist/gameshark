import { useState, useEffect } from "react";

const Search = () => {
  const [searchInput, setSearch] = useState("");

  useEffect(() => {
    requestGameDeals();
  }, []);

  async function requestGameDeals() {
    const res = searchInput;
    console.log(res);
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
    </div>
  );
};

export default Search;
