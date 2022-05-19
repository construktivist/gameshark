import React from "react";
import {useState} from "react";

const Results = ({games, searchInputLength}) => {

        const [plus, togglePlus] = useState("+")    

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
                                        <td><span onClick={e => { togglePlus("-")}}>{plus}</span></td>
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
