import React, { useState, useEffect } from 'react';
// import Datecontrol from './DatePicker';
import axios from 'axios';


const Table = () => {
    const [timecode, setTimecode] = useState([]);
    const getTimecode = () => {
        axios.get("http://localhost:8000")
            .then((response) => {
                console.log(response.data);
                setTimecode(response.data)
            });
    }
    useEffect(() => {
        getTimecode();

    }, []);

    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col' >
                        <form>
                            <div className='row' >
                                <div className='col-4'>
                                    <p align="left">Pin  Timecode</p>
                                </div>
                                <div>
                                    {/* <Datecontrol /> */}
                                </div>
                                <div className='col' align="center" >
                                    <p >15</p>
                                    <p>Monday</p>
                                </div>
                                <div className='col' align="center">
                                    <p>16</p>
                                    <p>Tueday</p>
                                </div>
                                <div className='col' align="center">
                                    <p>17</p>
                                    <p>Wedday</p>
                                </div>
                                <div className='col' align="center">
                                    <p>18</p>
                                    <p>Thu</p>
                                </div>
                                <div className='col' align="center">
                                    <p>19</p>
                                    <p>Fri</p>
                                </div>
                                <div className='col' align="center">
                                    <p>20</p>
                                    <p>Sat</p>
                                </div>
                                <div className='col'>
                                    <div className='shadow-lg p-2 mb-0'>
                                        <p>21</p>
                                        <p>Sun</p>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            {timecode.timecodes?.map((code) =>

                                <div className='row'>
                                    <div className='col-4' onChange={getTimecode}>
                                        <label> <b>{code.name}</b></label>
                                        <p>{code.project}</p>
                                    </div>
                                    <div className='col'>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <input className='form-control' />
                                    </div>
                                    <div className='col'>
                                        <input className='form-control' />
                                    </div>

                                    <div className='col'>
                                        <div className='shadow-lg p-3 mb-0'>
                                            <input className='form-control' />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <hr />
                            <div className='row'>
                                <div className='col-4'>
                                    <p> <b>Internal (incl.migrated hours from Harvest)</b></p>
                                    <p>Appscore</p>
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <div className='shadow-lg p-3 mb-0'>
                                        <input className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-4'>
                                    <label> <b>Internal (incl.migrated hours from Harvest)</b></label>
                                    <p>Appscore</p>
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <div className='shadow-lg p-3 mb-0'>
                                        <input className='form-control' />
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <label> <b>Internal (incl.migrated hours from Harvest)</b></label>
                                    <p>Appscore</p>
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <input className='form-control' />
                                </div>
                                <div className='col'>
                                    <div className='shadow-lg p-3 mb-0'>
                                        <input className='form-control' />
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <button>+Add time entry</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;