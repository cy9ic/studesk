import React, { Component } from 'react'
import './student_dashbord.css';
import Bargraph from './bargraph';
import Linegraph from './linegraph'

export default class student_dashboard extends Component {
  render() {
    return (
      <div className='container-fluid '>

        <div className='row border-top z-0 ' style={{ height: '15rem' }}>
          <div className='  col-4  d-flex  align-items-center justify-content-center' style={{ backgroundColor: "#0d0c22" }}>

            <div className='container text-light d-lg-flex ms-lg-5  '>

              <img src={`${this.props.profile_url}`} width="40" height="40" alt='Profile' className="rounded-circle m-2" />


              <div  >
                <p className='mb-0 mt-1'>Hello {this.props.name}!</p>
                <p style={{ color: '#ffffffb3' }}>We hope you're having a great day.</p>
              </div>


            </div>

          </div>
          <div className='  col-8   d-flex align-items-center justify-content-end' style={{ backgroundColor: "#0d0c22" }}>
            <div >


              <button className="btn  btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                All classes
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href='/'>Action</a></li>
                <li><a className="dropdown-item" href='/'>Another action</a></li>
                <li><a className="dropdown-item" href='/'>Something else here</a></li>
              </ul>


              <button className="btn btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Last 30 days
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href='/'>Action</a></li>
                <li><a className="dropdown-item" href='/'>Another action</a></li>
                <li><a className="dropdown-item" href='/'>Something else here</a></li>
              </ul>

              <button className="btn btn-secondary dropdown-toggle me-1 me-lg-5 custom-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href='/'>Action</a></li>
                <li><a className="dropdown-item" href='/'>Another action</a></li>
                <li><a className="dropdown-item" href='/'>Something else here</a></li>
              </ul>


            </div>
          </div>

        </div>
        <div className='container  position-relative z-1 top' >
          <div className='row '>
            <div className='col-3   '>
              <div className='container cards rounded-3'>hlo</div>
            </div>
            <div className='col-3 '>
              <div className='container p-0 cards rounded-3'>
                <div className='  border-bottom border-danger text-center bg-dark'>FEE</div>
              </div>
            </div>
            <div className='col-3 '>
              <div className='container cards rounded-3'>hlo</div>
            </div>
            <div className='col-3 '>
              <div className='container cards rounded-3'>hlo</div>
            </div>

          </div>

        </div>
        <div className=' row border border-primary '>
          <div className=' container border border-danger  col-sm-12 col-lg-8 ' ><Linegraph width="100%" height="100%"/></div>
          <div className='container border border-danger col-sm-12 col-lg-4'><Bargraph width="100%" height="200%" /></div>

        </div>

      </div>



    )
  }
}
