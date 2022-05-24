import React from "react";
import {useState} from "react";

const Results = ({games}) => {

    const [plus, togglePlus] = useState('+')  
        if (games.length < 1) {
            return null;
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
                        <tr key={game.gameID}>
                            <td>{game.external}</td>
                            <td>{game.cheapest}</td>
                            <td><span onClick={e => {plus === '+'? togglePlus("-") : togglePlus("+")}}>{plus}</span></td>
                        </tr>
                        )    
                    })}
                    </tbody>
                </table>
            </div>       
        )
}

export default Results;
