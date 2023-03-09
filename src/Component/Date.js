// import './App.css';
import React, { useState } from 'react';

function Date() {

    const [dates, setDates] = useState([]);
    const [days, setDays] = useState(['Mo', 'T', 'W', 'Th', 'F', 'S', 'S']);

    const today = new Date();

    let D = today.getDate();
    let W = today.getDay();

    for (let i = 1; i <= 7; i++) {
        const date = ((D - W) + i);
        dates.push(date);
        // console.log(date);

    }

    return (
        <div>
            <p>{dates} </p>
            <span> {days} </span>
        </div >
    )
};
export default Date;