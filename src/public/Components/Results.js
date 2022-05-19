const Results = ({ games }) => {
  return (
    <div className="results">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Deal</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => {
              return (
                <tr key={game.gameID}>
                  <td>{game.external}</td>
                  <td>{game.cheapest}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        console.log(game.gameID);
                      }}
                    >
                      See more prices
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
};

export default Results;
