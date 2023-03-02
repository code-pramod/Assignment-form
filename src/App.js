// import logo from './logo.svg';
import './App.css';
import Table from './Component/Table';


function App() {
  return (
    <>
      <div className='row'>
        <div className='col mx-2'>
          <h1> My Timesheet</h1>
        </div>
      </div>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col">
            <input type='date' className='form-control' />
          </div>

          <div className="col">
            <div className='btn-group' role='group'>
              <button className='btn btn-primary'>Day</button>
              <button className='btn btn-secondary'>Week</button>
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
      <br></br><br></br>

      <div>
        <Table />
      </div >

      <button className="btn btn-success mx-1"> Close</button>
    </>
  );
}

export default App;
