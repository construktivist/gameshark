import { useState, useEffect } from "react";

const Search = () => {
  const [searchInput, setSearch] = useState("");

  useEffect(() => {
    requestGameDeals();
  }, []);

  // async function requestPets() {
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await res.json();
  //   console.log(json);
  //   setPets(json.pets);
  // }

  async function requestGameDeals() {
    const res = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${searchInput}&limit=60&exact=0`
    );
    const json = await res.json();
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
    </div>
  );
};

export default Search;
