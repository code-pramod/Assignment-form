// import logo from './logo.svg';

import Table from './Component/Table';
import { useState } from 'react';


function App() {
  const d = new Date();
  // const startday = d.getDate() - d.getDay();
  // const [dates, setDates] = useState([{ date: startday + 1, day: "Monday" }, { date: startday + 2, day: "Tuesday" }, { date: startday + 3, day: "Wednesday" }, { date: startday + 4, day: "Thursday" }, { date: startday + 5, day: "Friday" }, { date: startday + 6, day: "Saturday" }, { date: startday + 7, day: "Sunday" }]);
  const [selectedDate, setSelectedDate] = useState(d);
  const [dateview, setDateview] = useState("week");

  const [isDayButtonClicked, setIsDayButtonClicked] = useState(false);





  const setDate = (event) => {
    setSelectedDate(new Date(event.target.value))
    // console.log(new Date(event.target.value));
    // console.log(selectedDate);
  }

  const handleWeek = () => {
    setDateview("week");
    setIsDayButtonClicked(false);
    console.log(setDateview("Week") ? "b" : "B");


  }

  function handleDay() {
    setDateview("Day");
    setIsDayButtonClicked(true);
    console.log(setDateview("Day") ? "a" : "A");
  }


  return (
    <>
      <div className='row'>
        <div className='col mx-2'>
          <h1> My Timesheet</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <input type='date' className='form-control' onChange={setDate} />
          </div>

          <div className="col">
            <div className='btn-group' role='group'>
              <button className={'btn ' + (isDayButtonClicked ? 'btn-primary' : 'btn-secondary')} onClick={handleDay}>Day</button>
              <button className={'btn ' + (isDayButtonClicked ? 'btn-secondary' : 'btn-primary')} onClick={handleWeek}>Week</button>
            </div>
          </div>


          <div className="col-3">
            <input type="checkbox" /> Show all assign timecodes
          </div>
          <div className="col-2">
            <input placeholder='filter timecodes...' className='form-control' />
          </div>
          <div className="col mr-0">
            <button className='btn btn-secondary'>Hide / Show / Gr..</button>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br>


      <div>
        <Table date={selectedDate} view={dateview} />
      </div>
      <button className="btn btn-success mx-1"> Close</button>

    </>

  );
}

{/* <style>
  .selected {
    background - color: yellow
  }
</style> */}

export default App;


