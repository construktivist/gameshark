const Results = ({games, searchInputLength}) => {
        //if games.length < 1 and searchInputLength < 1
        // return empty div
        //else 
        if (games.length < 1 && searchInputLength < 1) {
            return (
                <div className="results"></div>
            )
        }
        else {
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
                        {!games.length ? 
                            <h3>Sorry, we couldn&apos;t find anything that matched your search.</h3>
                            : 
                            games.map((game) => {
                                return (
                                    <tr key={game.gameID}>
                                        <td>{game.external}</td>
                                        <td>{game.cheapest}</td>
                                    </tr>
                                )    
                            })
                        }
                        </tbody>
                    </table>
                </div>       
            )
        }
}

export default Results;