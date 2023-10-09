import React, { Component } from 'react'
import Hoveranchor from './hoveranchor'

export default class navbar extends Component {



  render() {
    return (
      <div>
        <nav className="navbar navbar-sticky navbar-dark navbar-expand-lg " style={{ backgroundColor: "#0d0c22" }}>



          <div className="container-fluid">
            <a className="navbar-brand" href='/'>
              <img src="https://img.freepik.com/free-vector/international-student-day-banner-design_1308-117914.jpg?w=740&t=st=1696435322~exp=1696435922~hmac=6699271f6535708ed617ccc0977ac5fb56a0d63dd31db43bf1792ac7effe930b" alt="Bootstrap" width="50" height="50" className='rounded-circle' />
              <span className='ms-2'>StuDesk</span>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Hoveranchor text="Dashboard" link="/StudentDashboard" type="active" />
                </li>
                <li className="nav-item">
                  <Hoveranchor text="Profile Management" />
                </li>
                <li className="nav-item">
                  <Hoveranchor text="Admin" type="disabled" />
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
              <ul className="navbar-nav">
                <li className="nav-item dropdown stay-visible">
                  <a className="nav-link dropdown-toggle" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={this.props.profile_url} width="40" height="40" alt='Profile' className="rounded-circle" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href='/'>Dashboard</a></li>
                    <li><a className="dropdown-item" href='/'>Edit Profile</a></li>
                    <li><a className="dropdown-item" href='/'>Log Out</a></li>
                  </ul>
                </li>
              </ul>


            </div>
          </div>
        </nav>

      </div>
    )
  }
}
