import {useState} from 'react';

const ResultRow = ({data}) => {

    const [plus, togglePlus] = useState('+');
    return (
        <tr>
            <td>{data.external}</td>
            <td>{data.cheapest}</td>
            <td><button onClick={() => togglePlus(plus => plus === '+' ?  '-' :  '+')}>{plus}</button></td>
        </tr>
    )
}

export default ResultRow;