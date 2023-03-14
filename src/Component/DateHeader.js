// import './App.css';
import React, { useState, useEffect } from 'react';


export default function DateHeader(props) {
    const [dates, setDates] = useState([]);

    useEffect(() => {

        const d = props.date ? props.date : new Date();
        const startday = d.getDate() - d.getDay();
        setDates([{ date: startday + 1, day: "Monday" }, { date: startday + 2, day: "Tuesday" }, { date: startday + 3, day: "Wednesday" }, { date: startday + 4, day: "Thursday" }, { date: startday + 5, day: "Friday" }, { date: startday + 6, day: "Saturday" }, { date: startday + 7, day: "Sunday" }]);

    }, [props])


    return (
        <>
            {dates.map((value) =>

                <div className='col' align="center" >
                    <p>{value.date}</p>
                    <p>{value.day}</p>
                </div>
            )}
        </>
    )
};
