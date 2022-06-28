import ResultRow from "./ResultRow";

const Results = ({ games }) => {
  if (games.length < 1) {
    return <p className="no-results">Sorry, no results were found.</p>;
  }
  return (
    <div className="results">
      <div>
        <h3>Name</h3><h3>Price</h3>
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
