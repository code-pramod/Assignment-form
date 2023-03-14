import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DateHeader from './DateHeader';


const Table = (props) => {

    const [timecode, setTimecode] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000")
            .then((response) => {
                console.log(response.data);
                setTimecode(response.data)
            });
    }, [])


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
                                <DateHeader {...props} />
                            </div>
                            <hr />


                            {timecode.timecodes?.map((code) =>

                                <div className='row'>
                                    <div className='col-4'>
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

                                        <input className='form-control' />

                                    </div>
                                </div>
                            )}
                            <hr />
                            <button>+Add time entry</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;