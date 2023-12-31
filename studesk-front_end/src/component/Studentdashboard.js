import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bargraph from './bargraph';
import Linegraph from './linegraph';
import Calendar from './Calendar/Calendar'
import Alert from './Alert'
import Announcements from './Announcement/Announcement'
import './student_dashbord.css';

export default function Studentdashboard(props) {
  const email = props.email;
  const [userMarks, setuserMarks] = useState({
    "DSA": 0,
    "FEE": 0,
    "PA": 0,
    "VES": 0,
    "NALR": 0,
    "DBMS": 0
  });

  useEffect(() => {
    axios.post(`https://victorious-hare-beret.cyclic.app/marks/getMarks` , {email:email})
      .then((response) => {
        setuserMarks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setuserMarks({
          "DSA": 0,
          "FEE": 0,
          "PA": 0,
          "VES": 0,
          "NALR": 0,
          "DBMS": 0
        });
      });

  }, [email]);

  return (
    <div className='container-fluid '>

      <div className='row border-top z-0 ' style={{ height: '15rem' ,backgroundColor: "#0d0c22"}}>
        <div className='  col-4  d-flex  align-items-center justify-content-center' style={{ backgroundColor: "#0d0c22" }}>

          <div className='container text-light d-lg-flex ms-lg-5  '>

            <img src={`${props.profile_url}`} width="40" height="40" alt='Profile' className="rounded-circle m-2" />


            <div  >
              <p className='mb-0 mt-1'>Hello {userMarks.name}!</p>
              <p style={{ color: '#ffffffb3' }}>We hope you're having a great day.</p>
            </div>


          </div>

        </div>
        <div className='  col-8   d-flex align-items-center justify-content-end' style={{ backgroundColor: "#0d0c22" }}>
          <div >


            <button className="btn  btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{ backgroundColor: "#2f2e48"}}>
              Course
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href='/'>CSE-3rd year</a></li>
            </ul>


            <button className="btn btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#2f2e48"}}>
              Mentor
            </button>
            <ul className="dropdown-menu">
              Dr.Sunil Kumar Chawla
            </ul>

            <button className="btn btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#2f2e48"}}>
             Group
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href='/'>G-11</a></li>
            </ul>


          </div>
         </div>

      </div>
      <div className='container  position-relative z-1 top' >
        <div className='row '>
          <div className="col-2"></div>
          <div className='col-3 '>
            <div className='container-fluid d-flex justify-content-center align-items-center row cards rounded-3'>
              <div className='col-12 d-flex justify-content-center col-lg-2 '><i className="bi bi-file-earmark-text-fill fs-1 color"> </i></div>
              <div className='col-12 col-lg-10 d-flex  text-center font-size fw-bold ' ><Link to={"/GradeCard"} className='navbar-brand text-wrap m-0'>Grade Info</Link></div>
            </div>
          </div>

          <div className='col-3 '>
            <div className='container-fluid d-flex justify-content-center align-items-center row cards rounded-3'>
              <div className='col-12 d-flex justify-content-center col-lg-2 '><i className="bi bi-person-vcard-fill fs-1 color"></i></div>
              <div className='col-12 col-lg-10 d-flex  text-center font-size fw-bold ' ><Link to={"/gatePass"} className='navbar-brand text-wrap m-0'>Gate Pass</Link></div>
            </div>
          </div>
          <div className='col-3 '>
            <div className='container-fluid d-flex justify-content-center align-items-center row cards rounded-3'>
              <div className='col-12 d-flex justify-content-center col-lg-2 '><i className="bi bi-file-earmark-text-fill fs-1 color"> </i></div>
              <div className='col-12 col-lg-10 d-flex  text-center font-size fw-bold ' ><Link to={"/uploadDocuments"} className='navbar-brand text-wrap m-0'>Upload Documents</Link></div>
            </div>
          </div>
          <div className="col-1 5"></div>
        </div>

      </div>
      <div className=' row  '>
        <div className=' container  mt-2 col-sm-12 col-lg-8 ' >
          <Linegraph width="100%" height="200%" />
          </div>
        <div className='container  mt-2 col-sm-12 col-lg-4'>
          <Bargraph width="100%" height="200%" DSA={userMarks.DSA} FEE={userMarks.FEE} NALR={userMarks.NALR} VES={userMarks.VES} DBMS={userMarks.PA} />
          </div>

      </div>
      <div className=' row border'>
        <div className=' container mt-2 col-sm-12 col-lg-5 ' >
       <Announcements/>
          </div>
        <div className=' container mt-2 col-sm-12 col-lg-3 ' >
       <Alert />
          </div>
        
        <div className=' container  mt-2 col-sm-12 col-lg-4 ' >
       <Calendar/>
          </div>
        
      </div>
     

    </div>



  )

}


