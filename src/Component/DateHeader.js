// import './App.css';
import React, { useState, useEffect } from 'react';


export default function DateHeader(props) {
    const [dates, setDates] = useState([]);

    useEffect(() => {

        const d = props.date ? props.date : new Date();
        const startday = d.getDate() - d.getDay();

        if (props.view === "Day") {
            // const newDate = new Date();
            console.log(d);
            // setDates({ date: d, day: newDate.getDay() });
            // setDates([{ date: newDate, day: newDate.getDay }]);
            if (d.getDay() == 1) {
                setDates([{ date: d.getDate(), day: "Monday" }]);
            } else if (d.getDay() == 2) {
                setDates([{ date: d.getDate(), day: "Tuesday" }]);
            } else if (d.getDay() == 3) {
                setDates([{ date: d.getDate(), day: "Wednesday" }]);
            } else if (d.getDay() == 4) {
                setDates([{ date: d.getDate(), day: "Thursday" }]);
            } else if (d.getDay() == 5) {
                setDates([{ date: d.getDate(), day: "Friday" }]);
            } else if (d.getDay() == 6) {
                setDates([{ date: d.getDate(), day: "Saturday" }]);
            } else if (d.getDay() == 0) {
                setDates([{ date: d.getDate(), day: "Sunday" }]);
            }
        }



        else {
            if (d.getDay() == 0)
                setDates([{ date: startday - 6, day: "Monday" }, { date: startday - 5, day: "Tuesday" }, { date: startday - 4, day: "Wednesday" }, { date: startday - 3, day: "Thursday" }, { date: startday - 2, day: "Friday" }, { date: startday - 1, day: "Saturday" }, { date: startday + 0, day: "Sunday" }]);
            else
                setDates([{ date: startday + 1, day: "Monday" }, { date: startday + 2, day: "Tuesday" }, { date: startday + 3, day: "Wednesday" }, { date: startday + 4, day: "Thursday" }, { date: startday + 5, day: "Friday" }, { date: startday + 6, day: "Saturday" }, { date: startday + 7, day: "Sunday" }]);
        }
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
