import React,{useState} from 'react';
import Faculty_Announcements from './Faculty_Announcements';
import MarksManagement from './MarksManagement';
import StudentList from './StudentList';
import { useNavigate } from 'react-router-dom';


const FacultyDashboard = (props) => {
    const email=props.email;
    const history = useNavigate();
  return (
    <div className='container-fluid'>
        <div className='row border-top z-0 ' style={{ height: '15rem' ,backgroundColor: "#0d0c22"}}>
        <div className='  col-4  d-flex  align-items-center justify-content-center' style={{ backgroundColor: "#0d0c22" }}>

          <div className='container text-light d-lg-flex ms-lg-5  '>

            <img src={`${props.profile_url}`} width="40" height="40" alt='Profile' className="rounded-circle m-2" />


            <div  >
              <p className='mb-0 mt-1'>Hello Faculty!</p>
              <p style={{ color: '#ffffffb3' }}>We hope you're having a great day.</p>
            </div>
          </div>

        </div>
        <div className='  col-8   d-flex align-items-center justify-content-end' style={{ backgroundColor: "#0d0c22" }}>
          <div >


            <button onSubmit={()=>{}} className="btn  btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{ backgroundColor: "#2f2e48"}}>
              Subject
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">CSE-3rd year</a></li>
            </ul>


            <button className="btn btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#2f2e48"}}>
              Name
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Dr. Sunil</a></li>
            </ul>

            <button className="btn btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#2f2e48"}}>
             Group
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">G-11</a></li>
            </ul>


          </div>
         </div>

      </div>
    <div className=' row'>
    <div className=' container mt-2 col-sm-12 col-lg-6 ' >
       <Faculty_Announcements/>
          </div>
        <div className=' container mt-2 col-sm-12 col-lg-6 ' >
        <MarksManagement/>
          </div>
        
      </div>
      <div className="row">
        <div className="container mt-2 col-sm-12 col-lg-6">
          <StudentList/>
        </div>
        <div className="container mt-2 col-sm-12 col-lg-6">
          <h1>testing</h1>
        </div>
      </div>


    </div>
  )
}

export default FacultyDashboard