const Results = ({games, searchInputLength}) => {
        if (games.length < 1 && searchInputLength < 1) {
            return (
                <div className="results"></div>
            )
        }
        else {
            return (
                <div className="results">
                        {!games.length ? 
                            <h3>Sorry, we couldn&apos;t find anything that matched your search.</h3>
                            : 
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
                                        <td><button onClick={e => {console.log(game.gameID)}}>See all deals</button></td>
                                    </tr>
                                    )    
                                })}
                                </tbody>
                            </table>
                        }
                </div>       
            )
        }
}

export default Results;