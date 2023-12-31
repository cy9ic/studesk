import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { useNavigate } from 'react-router-dom';

const LoginSignup = (props) => {
  const history = useNavigate();
  const [action, setAction] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  const handleSignUp = async () => {
    if (action === 'Login') {
      setAction('Sign Up');
      return;
    }
  
    // Check if the name field is empty
    if (formData.name.trim() === '') {
      setErrorMessage('Name is required');
      return;
    }
    if(formData.email.trim()===''){
      setErrorMessage('Email is required');
      return;
    }
    if(formData.password.trim()===''){
      setErrorMessage('Password is required');
      return;
    }
  
    try {
      const response = await axios.post('https://victorious-hare-beret.cyclic.app/user/create', formData);
      alert('The User is successfully Created!');
      
      console.log(response);
    } catch (error) {
      console.error('There was an error', error);
    }
  };

  const handleSignIn = async () => {
    if (action === 'Sign Up') {
      setAction('Login');
      return;
    }

    try {
       await axios.post('https://victorious-hare-beret.cyclic.app/user/authenticate', {
        email: formData.email,
        password: formData.password,
        role: formData.role,
      }).then(res=>{
        console.log(res);
        props.fun(res.data.user.role);
        window.localStorage.setItem("role" , res.data.user.role);
      });

      console.log('Successfully Authenticated');
      props.getEmail(formData.email);
      window.localStorage.setItem("email",formData.email.toString());
      history('/StudentDashboard');
      
    } catch (error) {
      console.error('Email or password not found', error);
      setErrorMessage('User not found');
      setTimeout(()=>{
        setErrorMessage(null);},5000)
    }
  };

  return (
    <div className="container-login">
      <div className="header">
        <div className="text">{action}</div>
        
      </div>

      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              id="nameInput"
              name="name"
              value={formData.name}
              onChange={handleChange}
              
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            id="nameInput"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            id="nameInput"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {action === 'Sign Up' ? (
          <div className="input roleInput">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      
      {errorMessage && (
      <h3 className="error-message">
        <span role="img" aria-label="Caution">⚠️</span> {errorMessage}
      </h3>
    )}

      <div className="submit-container">
        <button type='button' className={action === 'Login' ? 'submit gray' : 'submit'} onClick={handleSignUp} >
          Sign Up
        </button>
        <button type='button' className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={handleSignIn}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
