import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'


const  LoginSignup = () => {
  const [action,setAction]=useState("Sign Up")
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    role:""

  })
  function handleChange(event){
    const {name,value,type}=event.target
    setFormData(prevFormData=>({
      ...prevFormData,
      [name]:value
    }))
  }

  function handleSubmit(event){
    event.prevDefault()
    console.log(formData)
  }
  console.log(formData)
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      
      <div className='inputs'>
        {action==="Login"?
        <div></div>
        :
        <div className='input'>
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'
          id="nameInput"
          name="name"
          value={formData.name}
          onChange={handleChange}
          />
        </div>
        }
        
        <div className='input'>
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id"
          id="nameInput"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </div>        
        <div className='input'>
          <img src={password_icon} alt="" />
          <input type="password"  placeholder="Password"
          id="nameInput"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />

        </div>
        {action==="Sign Up"?
          <div className="input roleInput" >
          <label htmlFor="role">Role:</label>
          <select id="role" 
          name="role"
          value={formData.role}
          onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        :
        <div></div>
        }

      </div>
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      
    </div>
  )
}

export default LoginSignup
