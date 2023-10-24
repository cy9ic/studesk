import Navbar from './component/navbar'
import './App.css';
import noUser from './component/assets/noUser.png'
import {  useState } from 'react';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";
import StudentDashboard from './component/Studentdashboard';
import FileUploader from './component/FileUploaders/FileUpload';
import LoginSignup from './component/loginSignup/LoginSignup';
import GatePass from './component/Gatepass/GatePass';

import GradeCard from './component/GradeCard';
import TimeTable from './component/TimeTable';


function App() {
  const[email,setEmail]=useState();
  const getEmail = (data) => {
    setEmail(data);
  };

  return (
 <>

        <Router>
         

          <Routes>
            <Route path='/' element={
              <LoginSignup getEmail={getEmail}></LoginSignup>
            }></Route>
            <Route path='/StudentDashboard'  element={<>
            <Navbar profile_url={noUser}/>
            <StudentDashboard name="Harkaran" email={`${email}`} profile_url={noUser}/>
            </>}/>
            <Route path='/uploadDocuments'  element={<>
              <Navbar profile_url={noUser}/>
              <FileUploader/>
            </>}></Route>

            <Route path='/gatePass'  element={
            <>
              <Navbar profile_url={noUser}/>
            <GatePass/>
            </>
            }></Route>
            <Route path='/GradeCard'  element={<>
              <Navbar profile_url={noUser}/>
              <GradeCard/>
            </>}></Route>
            <Route path='/timeTable' element={<TimeTable/>}></Route>
          </Routes>

          
        </Router>
        </>

  
  );
}

export default App;