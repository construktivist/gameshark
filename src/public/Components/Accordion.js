import {useState, useEffect } from 'react';


const Accordion = ({gameID}) => {

    const [deals, setDeals] = useState(null);

    async function getGameDealsByGameID(gameID) {
        const res = await fetch (
            `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
        )
        const json = await res.json();
        console.log(json);
        setDeals(json);
    }

    return (
        <div>{deals}</div>
    )
}

export default Accordion
