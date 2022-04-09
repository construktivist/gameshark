const Results = ({games}) => {
    return (
        <div className="results">
            {!games.length ? 
                <h3>Sorry, we couldn't find anything that matched your search.</h3>
                : 
                games.map((game) => {
                   return <h3 key={game.gameID}>{game.external}</h3>
                })
            }
        </div>       
    )
}

export default Results;