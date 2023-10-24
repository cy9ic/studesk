import React, { useEffect } from 'react'
import './submission.css'
export default function GatepassS(props) {
    
  return (
    <>
    <h1 className='sh1'>Submitted Gatepass</h1>
    <div className='s-container'>
<div className='profile-p'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="u-icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</div>



<h5 className='s-title'>{props.data.studentName}</h5>

    <div className='id-phone'>
        <span>Student ID : <br/> {props.data.studentID}</span>
        <span className='phone-c'>Phone Number : <br/> {props.data.contactNumber}</span>
    </div>
    <div  className='date-c'>
        <span>Date :</span>
        <br/>
        <span>{props.data.fromDate} </span>
        <br/>
        <span >To</span>
        <br/>
        <span>{props.data.toDate}</span>
    </div>

    <div className='reason-container'>
        <span className='r-title'>Reason: </span>
        <p className='reason'>
            {props.data.purpose}
        </p>
    </div>
    </div>

    </>
  )
}
