import Navbar from './component/navbar'
import './App.css';
import noUser from './component/assets/noUser.png'
import {  useEffect, useState } from 'react';
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
import FacultyDashboard from './FacultyDashboard';

import GradeCard from './component/GradeCard';
// import TimeTable from './component/TimeTable';
import Gatepass from './component/gatepass_submitted/Submit_gatepass';
import FacultyGatePass from './component/faculty_gate_pass/facultygp.js';
import Documentation from './component/Documentation/documentation';

function App() {
  const[email,setEmail]=useState();
  
  const getEmail = (data) => {
    setEmail(data);
  };
const [GatePassSubmit , setSubmit] = useState(false);
const [role , setRole] = useState("");
useEffect(()=>{
  setEmail(window.localStorage.getItem("email"));
  setRole(window.localStorage.getItem("role"));
},)

const gatePassSubmit = ()=>{
  setSubmit(true);
}
const [gatePassData , setData ] = useState([]);
const submittedData = (data)=>{
    setData(data);
}
  return (
 <>

        <Router>
          
          <Routes>
            <Route path='/' element={
              <LoginSignup fun={setRole} getEmail={getEmail}></LoginSignup>
            }></Route>
            <Route path='/StudentDashboard'  element={<>
            <Navbar profile_url={noUser}/>
            {role=="student"?<StudentDashboard name="Harkaran" email={`${email}`} profile_url={noUser}/>:<FacultyDashboard profile_url={noUser}/>}
            </>}/>
            <Route path='/uploadDocuments'  element={<>
              <Navbar profile_url={noUser}/>
              <FileUploader/>
            </>}></Route>

            <Route path='/gatePass'  element={
            <>
              <Navbar profile_url={noUser}/>
              {role=="faculty"?<FacultyGatePass email={email}></FacultyGatePass>:GatePassSubmit ? <Gatepass  data={gatePassData}  /> : <GatePass func={gatePassSubmit} email={email}  data={submittedData} />}               
            </>
            }></Route>
            
            <Route path='/GradeCard'  element={<>
              <Navbar profile_url={noUser}/>
              <GradeCard/>
            </>}></Route>

            {/* <Route path='/timeTable' element={<TimeTable/>}></Route> */}

            <Route path='/req' element={<>
              <Navbar profile_url={noUser}/>
              <FacultyGatePass/>
              </>}></Route>

            <Route path='/Documentation' element={
              <>
              <Navbar profile_url={noUser}/>
              <Documentation/>
              </>
            }></Route>
          </Routes>
        </Router>
        </>

  
  );
}

export default App;