import ResultRow from "./ResultRow";

const Results = ({games}) => {

    if (games.length < 1) {
        return <p className="no-results">Sorry, no results were found.</p>
    }  
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
                        <ResultRow key={game.gameID} data={game} />
                    )    
                })}
                </tbody>
            </table>
        </div>       
    )
}

export default Results;
