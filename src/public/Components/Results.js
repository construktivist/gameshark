import ResultRow from "./ResultRow";

const Results = ({ games }) => {
  if (games === null) {
    return null;
  } else if (games.length === 0) {
    return <h3>Sorry! No results found.</h3>;
  }
  return (
    <div className="results">
      <div>
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      <div>
        {games.map((game) => {
          return <ResultRow key={game.gameID} data={game} />;
        })}
      </div>
    </div>
  );
};

export default Results;
